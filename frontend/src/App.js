import './App.css';
import { colors } from './themeData';
import AuthScreen from './pages/AuthScreen';



function App() {
  return (
    <div style={styles.container}>
      <AuthScreen />
    </div>
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
