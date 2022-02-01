import React, { useState } from 'react';
import { Box, Center, useBreakpointValue } from '@chakra-ui/react';
import FactText from '../components/FactText';
import AuthView from '../components/AuthView';
import { ReactComponent as LogoSVG } from '../assets/resources/tempLogo.svg';
import { colors } from '../themeData';
import CText from '../components/CText';

function AuthScreen() {
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const [isSignIn, setIsSignIn] = useState(true);

    return (
      <Box alignContent={'center'}>
        { !isMobile && <FactText style={styles.leftFact} title={'Did you know?'} string={'93% of recruiters use LinkedIn to research and recruit candidates*'}/> }
        { !isMobile && <CText style={styles.leftSource}>*According to statistics provided by LinkedIn </CText>}
        <Box alignItems='center'>
          <Center>
            <LogoSVG style={{ marginBottom: 12 }}/>
          </Center>
          <AuthView isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>  
        </Box>
        { !isMobile && <FactText style={styles.rightFact} title={'Did you also know?'} string={'Using our advanced algorithms and revolutionary blockchain implementation you can expand your network like crazy**'}/> }
        { !isMobile && <CText style={styles.rightSource}>**According to our completely biased opinion </CText>}
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