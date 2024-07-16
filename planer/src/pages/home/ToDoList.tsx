import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

interface ListItemState {
  id: number;
  name: string;
  compleateBy: Date | string | null;
  checked: boolean;
}

const initialItems: ListItemState[] = [];

export default function ToDoList() {
  const [items, setItems] = useState<ListItemState[]>(initialItems);

  useEffect(() => {
    const fetchItems = async () => {
      const hashedKey = localStorage.getItem('hashedKey');
      if (!hashedKey) {
        console.error('No hashed key found in local storage');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/api/tasks/userKey/${hashedKey}/subCategoryId/1`);
        const fetchedItems = response.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          compleateBy: item.finishBy ? new Date(item.finishBy) : null,
          checked: item.finished
        }));
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

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
          userKey: localStorage.getItem('hashedKey'),  // Ensure the userKey is included
          categoryId: 1,  // Adjust these as per your data structure
          subCategoryId: 1  // Adjust these as per your data structure
        });
        console.log("Item updated successfully");
      } catch (error) {
        console.error('Error updating item:', error);
      }
    }

    if (event.target.checked) {
      console.log("okay");
    } else {
      console.log("nou");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <List>
        {items.map(item => (
          <ListItem key={item.id} secondaryAction={
            <>
              <Checkbox
                checked={item.checked}
                onChange={handleCheckboxChange(item.id)}
              />
              <IconButton edge="end" aria-label="delete">
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
