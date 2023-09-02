"use client";  

import { useQuery } from 'react-query';
import supabase from '../../supabase';

const fetchAuthorPosts = async (authorId: any) => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('author_id', authorId)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('Error fetching author posts');
  }

  return data;
};

function AuthorFeed() {
  // Fetch the user's profile data to determine the author_id
  const authorId = ;

  const { data: authorPosts, error } = useQuery(['author-posts', authorId], () => fetchAuthorPosts(authorId));

  // component code
}

export default AuthorFeed;