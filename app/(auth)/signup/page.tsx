"use client";  

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import supabase from '../../../supabase'; 
import { Container, Typography, Paper, TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default function SignUp() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const { email, password } = data;

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError('email', { message: error.message });
      } else {
        console.log('User registered:', user);
        // Redirect or display a success message
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }

    setIsLoading(false);
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            {...register('email', { required: true })}
            error={!!errors.email}
            helperText={errors?.email?.message?.toString()} 
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            {...register('password', { required: true })}
            error={!!errors.password}
            helperText={errors?.password?.message?.toString()} 
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            className={classes.button}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
}