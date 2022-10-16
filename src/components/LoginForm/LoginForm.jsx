import { Button, TextField, Box, Container, Typography } from '@mui/material';

import { useState } from 'react';

export function LoginForm({ onData }) {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { email, password } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onData({ ...state });
    setState({ ...initialState });
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h3">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            variant="standard"
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: '#ffffff', background: '#ffa200' }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}