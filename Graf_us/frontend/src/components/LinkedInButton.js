import { Button } from '@chakra-ui/react';
import React from 'react';
import CText from './CText';
// import { ReactComponent as LinkedInSVG } from '../assets/resources/linkedin.svg';
import { colors, textStyles } from '../themeData';


function LinkedInButton({ onClick, label, ...rest }) {
    return (
        <Button {...rest}
                // leftIcon={<LinkedInSVG />}
                bg={colors.blue.main} onClick={onClick}>
            <CText style={{ color: colors.white }}>{label}</CText>
        </Button> 
    );
}

export default LinkedInButton;