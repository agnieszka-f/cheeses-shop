/* eslint-disable linebreak-style */
import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#ffd54f', important: '#ff6f00' },
    secondary: {main: '#f96a53'},
  },
  typography: {
    fontFamily: [
      'IBM Plex Sans Condensed',
      'sans-serif',
    ].join(','),
  },
});