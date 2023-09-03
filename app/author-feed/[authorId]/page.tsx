"use client";  

import { useParams } from 'next/navigation'
import { useQuery } from 'react-query';
import { Container, Typography, CircularProgress, List } from '@mui/material';
import supabase from '../../../supabase';
import FeedItem from '../../../components/FeedItem';

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
          <FeedItem key={post.id} content={post.content} type="Author" />
        ))}
      </List>
    )}
  </Container>
  );
}