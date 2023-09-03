"use client";  

import { useQuery } from 'react-query';
import { Container, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import supabase from '../../supabase';

export default function GeneralFeed() {
  const { data: posts, isLoading } = useQuery('generalPosts', async () => {
    const { data, error } = await supabase.from('posts').select('*');
    if (error) {
      throw error;
    }
    return data;
  });

  return (
    <Container>
      <Typography variant="h4">General Feed</Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <List>
          {posts?.map((post) => (
            <ListItem key={post.id}>
              <ListItemText primary={post.content} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}