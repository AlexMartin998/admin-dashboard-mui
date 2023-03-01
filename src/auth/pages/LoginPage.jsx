import { useTheme } from '@emotion/react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useAuthStore, useForm } from '../../hooks';
import { CustomAlerts, Loader } from '../../shared';

export default function LoginPage() {
  const { isLoadingLogin, startLogin, setErrorMessage } = useAuthStore();
  const [formLoginValues, handleLoginInputChange, , setFormValues] = useForm({
    email: 'swelbeck12@ycombinator.com',
    password: 'RSjzmAjnq',
  });
  const { email, password } = formLoginValues;
  const theme = useTheme();

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(formLoginValues).some(value => !value))
      return setErrorMessage(['All fields are required']);

    setFormValues({ email: '', password: '' });
    startLogin({ email, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      {isLoadingLogin && <Loader />}

      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleLoginInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleLoginInputChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
            }}
            id="login-btn"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 8, mb: 4 }}
      >
        Copyright © EcomVision {new Date().getFullYear()}
      </Typography>

      <CustomAlerts />
    </Container>
  );
}
