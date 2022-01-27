import React from 'react';
import FactText from '../components/FactText';
import AuthView from '../components/AuthView';
import { ReactComponent as LogoSVG } from '../assets/tempLogo.svg';
import { colors } from '../themeData';
import CText from '../components/CText';
import { Box, Center } from '@chakra-ui/react';


function AuthScreen() {
    return (
      <Box>
        <FactText style={styles.leftFact} title={'Did you know?'} string={'93% of recruiters use LinkedIn to research and recruit candidates*'}/>
        <CText style={styles.leftSource}>*According to statistics provided by linked on</CText>
        <Box alignItems='center'>
          <Center>
            <LogoSVG style={{ marginBottom: 12 }}/>
          </Center>
          <AuthView />  
        </Box>
        <FactText style={styles.rightFact} title={'Did you also know?'} string={'Using our advanced algorithms and revolutionary blockchain implementation you can expand your network like crazy**'}/>
        <CText style={styles.rightSource}>**According to our completely biased opinion</CText>
      </Box>
    );
  }

  const styles = {
    leftFact: {
      position: 'absolute', 
      top: 130, 
      left: 90,
    },
    rightFact: {
      position: 'absolute', 
      bottom: 130, 
      right: 90,
      textAlign: 'right',
    },
    rightSource: {
      fontSize: 14, 
      fontWeight: 300, 
      color: colors.mediumGrey, 
      position: 'absolute', 
      bottom: 80, 
      right: 90,
    },
    leftSource: {
      fontSize: 14, 
      fontWeight: 300, 
      color: colors.mediumGrey, 
      position: 'absolute', 
      bottom: 80, 
      left: 90,
    },
    logo: {
      marginLeft: 150,
      marginBottom: 15,
    }
  }

export default AuthScreen;