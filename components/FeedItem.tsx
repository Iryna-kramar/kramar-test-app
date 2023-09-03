"use client";

import { ListItem, ListItemText } from '@mui/material';

interface FeedItemProps {
  content: string;
  type: 'Author' | 'Commentator';
}

const FeedItem: React.FC<FeedItemProps> = ({ content, type }) => {
  const listItemStyle: React.CSSProperties = {
    borderRadius: '16px', 
    marginBottom: '16px', 
    backgroundColor: type === 'Author' ? 'lightgreen' : 'lightblue', 
  };

  return (
    <ListItem style={listItemStyle}>
      <ListItemText primary={content} />
    </ListItem>
  );
};

export default FeedItem;