import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

interface ListItemState {
  id: number;
  name: string;
  completeBy: Date; 
  checked: boolean;
}

export default function ToDoList() {
  const initialItems: ListItemState[] = [
    { id: 0, name: "eat chicken nuggets", completeBy: new Date('2024-11-11'), checked: false },
    { id: 1, name: "buy a kitten", completeBy: new Date('2024-11-11'), checked: false },
    { id: 2, name: "take a plane to the usa", completeBy: new Date('2001-09-11'), checked: false },
  ];

  const [items, setItems] = useState<ListItemState[]>(initialItems);

  const handleCheckboxChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, checked: event.target.checked } : item
    );
    setItems(updatedItems);

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
          <ListItem
            key={item.id}
            secondaryAction={
              <>
                <Checkbox
                  checked={item.checked}
                  onChange={handleCheckboxChange(item.id)}
                />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={item.completeBy.toDateString()}
            />  
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

