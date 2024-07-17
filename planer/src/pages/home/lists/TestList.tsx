import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, IconButton, FormControlLabel, Checkbox, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

interface ListItemState {
  id: number;
  name: string;
  date: Date | null;
  subject: String;
  userKey: string;
  categoryId: number;
  
}

const StyledCheckbox = styled(Checkbox)(({}) => ({
  color: '#1D1A1B',
  '&.Mui-checked': {
    color: '#1D1A1B',
  },
  }));
const initialItems: ListItemState[] = [];

export default function TestList() {
  const [items, setItems] = useState<ListItemState[]>(initialItems);
  const [hidePastEvents, setHidePastEvents] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const hashedKey = localStorage.getItem('hashedKey');
      if (!hashedKey) {
        console.error('No hashed key found in local storage');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/api/tests/userKey/${hashedKey}`);
        const fetchedItems = response.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          subject: item.subject,
          date: item.date ? new Date(item.date) : null,
          userKey: item.userKey,
          categoryId: item.categoryId,
        }));
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  let navigate = useNavigate();

  const deleteEvent = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/tests/${id}`);
      setItems(items.filter(item => item.id !== id));
      console.log("Item deleted successfully");
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleHidePastEventsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHidePastEvents(event.target.checked);
  };

  const isPastEvent = (date: Date | null) => {
    if (!date) return false;
    return new Date() > date;
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752, background: '#4D4344' }}>
      <FormControlLabel
        control={
          <StyledCheckbox
            checked={hidePastEvents}
            onChange={handleHidePastEventsChange}
            name="hidePastEvents"
            color="primary"
          />
        }
        label="Hide Past Tests"
      />
      <IconButton edge="end" aria-label="add" onClick={() => navigate('/newObject/NewTest')}>
        <AddIcon />
      </IconButton>
      <List>
        {items
          .filter(item => !hidePastEvents || !isPastEvent(item.date))
          .map(item => (
            <ListItem key={item.id} sx={{ background: '#40393A', marginBottom: '5px' }} secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteEvent(item.id)}>
                <DeleteIcon />
              </IconButton>
            }>
            <ListItemText
                primary={item.name}
                secondary={item.date ? item.date.toDateString() + ' - ' + item.subject : item.subject}
              />
            </ListItem>
          ))}
      </List>
    </Box>
  );
}
