import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Checkbox, IconButton, FormControlLabel, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

interface ListItemState {
  id: number;
  name: string;
  compleateBy: Date | null;
  checked: boolean;
  userKey: string;
  categoryId: number;
  subCategoryId: number;
}

const StyledCheckbox = styled(Checkbox)(({}) => ({
    color: '#1D1A1B',
    '&.Mui-checked': {
      color: '#1D1A1B',
    },
    }));
    
const initialItems: ListItemState[] = [];

export default function AssighmentList() {
  const [items, setItems] = useState<ListItemState[]>(initialItems);
  const [hideFinished, setHideFinished] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const hashedKey = localStorage.getItem('hashedKey');
      if (!hashedKey) {
        console.error('No hashed key found in local storage');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/api/tasks/userKey/${hashedKey}/subCategoryId/2`);
        const fetchedItems = response.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          compleateBy: item.finishBy ? new Date(item.finishBy) : null,
          checked: item.finished,
          userKey: item.userKey,
          categoryId: item.categoryId,
          subCategoryId: item.subCategoryId,
        }));
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  let navigate = useNavigate();

  const handleCheckboxChange = (id: number) => async (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, checked: event.target.checked } : item
    );
    setItems(updatedItems);

    const itemToUpdate = updatedItems.find(item => item.id === id);
    if (itemToUpdate) {
      try {
        await axios.put(`http://localhost:8080/api/tasks/${id}`, {
          ...itemToUpdate,
          finishBy: itemToUpdate.compleateBy ? new Date(itemToUpdate.compleateBy).toISOString() : null,
          finished: event.target.checked,
          userKey: localStorage.getItem('hashedKey'),
          categoryId: itemToUpdate.categoryId,
          subCategoryId: itemToUpdate.subCategoryId,
        });
        console.log("Item updated successfully");
      } catch (error) {
        console.error('Error updating item:', error);
      }
    }
  };

  const deletetask = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${id}`);
      setItems(items.filter(item => item.id !== id));
      console.log("Item deleted successfully");
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleHideFinishedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHideFinished(event.target.checked);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752, background: '#4D4344' }}>
      <FormControlLabel
        control={
          <StyledCheckbox
            checked={hideFinished}
            onChange={handleHideFinishedChange}
            name="hideFinished"
            color="primary"
          />
        }
        label="Hide Finished Assighnements"
      />
      <IconButton edge="end" aria-label="delete" onClick={() => navigate('/newObject/NewAssighnement')}>
        <AddIcon />
      </IconButton>
      <List>
        {items
          .filter(item => !hideFinished || !item.checked)
          .map(item => (
            <ListItem key={item.id} sx={{ background: '#40393A', marginBottom: '5px' }} secondaryAction={
              <>
                <Checkbox
                  checked={item.checked}
                  onChange={handleCheckboxChange(item.id)}
                />
                <IconButton edge="end" aria-label="delete" onClick={() => deletetask(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }>
              <ListItemText
                primary={item.name}
                secondary={item.compleateBy ? new Date(item.compleateBy).toDateString() : 'No date'}
              />
            </ListItem>
          ))}
      </List>
    </Box>
  );
}
