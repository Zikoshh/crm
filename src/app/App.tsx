import { Box, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import './fonts/Inter/inter.css';
import Header from '../widgets/Header';
import Sidebar from '../widgets/Sidebar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <Box>
          <Sidebar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
