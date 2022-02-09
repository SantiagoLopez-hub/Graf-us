import React from 'react';
import { colors } from './themeData';
import AuthScreen from './pages/AuthScreen';
import { Box } from '@chakra-ui/react';
import GrafScreen from './pages/GrafScreen';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import JobScreen from "./pages/JobScreen";
import ConnectScreen from "./pages/ConnectScreen";
import ContactScreen from "./pages/ContactScreen";
import AboutUsScreen from "./pages/AboutUsScreen";
// import '../App.css';

function App() {
  return (
    <Box style={styles.container}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthScreen />} />
          <Route path='/graf' element={<GrafScreen />} />
          <Route path='/jobs' element={<JobScreen />} />
          <Route path='/connect' element={<ConnectScreen />} />
          <Route path='/contact-us' element={<ContactScreen />} />
          <Route path='/about-us' element={<AboutUsScreen />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent:'center',
    width: '100%',
    height: '100vh',
    backgroundColor: colors.backgroundColor,
  },
}

export default App;
