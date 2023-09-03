
"use client";  

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { TextField, Button, Container, Typography } from '@mui/material';
import supabase from '../../../supabase'; 

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();


  const onSubmit = async (data: FormData) => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) {
        console.error(error);
       } else {
        console.log('User logged in successfully:', user);
        router.push('/general-feed'); 
      }
    } catch (error) {
      console.error('Error logging in:');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('email')} label="Email" fullWidth margin="normal" />
        <TextField type="password" {...register('password')} label="Password" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
}