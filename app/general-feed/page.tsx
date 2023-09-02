"use client";  

import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import supabase from '../../supabase'; 
import { useRouter } from 'next/router';

const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
  
    if (error) {
      throw new Error('Error fetching posts');
    }
  
    return data;
  };

function GeneralFeed() {
    const router = useRouter();

    const { data: posts, error } = useQuery('posts', fetchPosts);

  useEffect(() => {

  }, [error]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        General Feed
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <List>
          {posts &&
            posts.map((post) => (
              <ListItem key={post.id}>
                <ListItemText primary={post.title} secondary={post.content} />
              </ListItem>
            ))}
        </List>
      </Paper>
    </Container>
  );
}

export default GeneralFeed;