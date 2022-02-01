import React from 'react';
import { Box, Center } from '@chakra-ui/react';

import { colors, textStyles } from '../themeData';
import CText from './CText';

function NavBarText(props) {
    return (
        <Box>
            <CText textStyle={textStyles.headline4} style={{color: props.isActive ? colors.darkGrey : colors.lightGrey, fontWeight: 400}}>{props.string}</CText>
            <Center>
                <Box bg={props.isActive ? colors.blue.main : 'transparent' } w={2} h={2} borderRadius={10}/>
            </Center>
        </Box>
    );
}

export default NavBarText;