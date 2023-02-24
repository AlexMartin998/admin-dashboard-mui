import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { useUiStore } from '../hooks';
import { themeSettings } from './theme';

export const AppTheme = ({ children }) => {
  const { mode } = useUiStore();

  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
