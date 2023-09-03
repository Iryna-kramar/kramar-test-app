"use client";  

import { useParams } from 'next/navigation'
import { useQuery } from 'react-query';
import { Container, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import supabase from '../../../supabase';

export default function AuthorFeed() {
  const { authorId } = useParams(); 

  const { data: posts, isLoading } = useQuery(['authorPosts', authorId], async () => {
    const { data, error } = await supabase.from('posts').select('*').eq('authorId', authorId);
    if (error) {
      throw error;
    }
    return data;
  });

  return (
    <Container>
      <Typography variant="h4">Author Feed</Typography>
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