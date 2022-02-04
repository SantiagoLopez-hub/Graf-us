import './App.css';
import { colors } from './themeData';
import AuthScreen from './pages/AuthScreen';
import { Box } from '@chakra-ui/react';



function App() {
  return (
    <Box style={styles.container}>
      <AuthScreen />
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex', 
    justifyContent:'center', 
    alignItems:'center', 
    width: '100%',
    height: '100vh',
    backgroundColor: colors.backgroundColor,
  },
}

export default App;
