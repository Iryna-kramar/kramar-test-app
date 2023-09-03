"use client";  
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
  TextField,
  Button,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import supabase from '../../../supabase';

type FormData = {
  email: string;
  password: string;
  profileType: 'Author' | 'Commentator';
};

export default function SignUp() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
      if (error) {
        console.error(error);
      } else {
        console.log('User signed up successfully:', user);
        router.push('/general-feed');
      }
    } catch (error) {
      console.error('Error signing up:');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Sign Up</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email', { required: true })} // Initialize with validation
          label="Email"
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          {...register('password', { required: true })} // Initialize with validation
          label="Password"
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Profile Type</InputLabel>
          <Select {...register('profileType', { required: true })}> 
            <MenuItem value="Author">Author</MenuItem>
            <MenuItem value="Commentator">Commentator</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Container>
  );
}