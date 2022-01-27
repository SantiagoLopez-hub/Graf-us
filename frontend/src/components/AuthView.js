import { Box, Button, Link } from '@chakra-ui/react';
import React from 'react';
import { colors, shadows, textStyles } from '../themeData';
import { ReactComponent as LinkedInSVG } from '../assets/resources/linkedin.svg';
import CText from './CText';


function AuthView(props) {
    return (
        <Box>
            <Box style={{...styles.container, ...props.style}}>
                <Box>
                    <CText textStyle={textStyles.headline3} style={{ paddingBottom: 15 }}>Hey there!</CText>
                    <CText textStyle={textStyles.body1} style={{ color: colors.darkGrey, width: 230, marginBottom: 'auto', lineHeight: 1.40 }}>Sign in with you LinkedIn so we can get started to help you expand your network 🌎</CText>
                </Box>
                <Button leftIcon={<LinkedInSVG />} bg={colors.blue.main} style={{ marginTop: 18 }}>
                    <CText textStyle={textStyles.subtitle1} style={{ color: colors.white }}>Sign in with Linkedin</CText>
                </Button>
            </Box>
            <Box style={styles.loginText }>
                <CText textStyle={textStyles.subtitle2} style={{ color: colors.grey, paddingRight: 8 }}>Already Signed up? </CText>
                <Link color={colors.blue} href='#'>
                    <CText textStyle={textStyles.subtitle2} style={{ color: colors.blue.main }}>Login instead </CText>
                </Link>
            </Box>
        </Box>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 25,
        paddingBottom: 25,
        width: 285,
        backgroundColor: colors.white,
        borderRadius: 20, 
        boxShadow: shadows.xl.main
    },
    loginText: {
        flexDirection: 'row', 
        display: 'flex', 
        justifyContent: 'center', 
        paddingTop: 10,
    },
    logo: {
        marginLeft: 150,
        marginBottom: 15,
    }
}

export default AuthView;