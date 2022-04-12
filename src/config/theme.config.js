import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
      primary: {
        main: '#313131'
      },
      secondary: {
        main: '#8ec5fc',
      }
  },
});

export default theme;