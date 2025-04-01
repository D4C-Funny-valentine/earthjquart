import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5C9EAD', // Soft blue for calmness
      light: '#BEE3E7',
      dark: '#3A6C75',
    },
    secondary: {
      main: '#A3D9B1', // Gentle green for safety
      light: '#DFF3E3',
      dark: '#6BA07B',
    },
    background: {
      default: '#F4F7F6', // Soft off-white background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3A3A3A', // Neutral dark for readability
      secondary: '#6B6B6B',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 600, color: '#3A3A3A' },
    h2: { fontSize: '2rem', fontWeight: 500, color: '#3A3A3A' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 500 },
  },
});

export default theme;