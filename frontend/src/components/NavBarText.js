import React from 'react';
import { Box, Center, Link } from '@chakra-ui/react';

import { colors, textStyles } from '../themeData';
import CText from './CText';

function NavBarText(props) {
    return (
        <Box cursor={'pointer'}>
            <Link to={props.url}>
                <CText textStyle={textStyles.headline4} style={{color: props.isActive ? colors.darkGrey : colors.lightGrey, fontWeight: 400}}>{props.string}</CText>
            </Link>
            <Center>
                <Box bg={props.isActive ? colors.blue.main : 'transparent' } w={2} h={2} borderRadius={10}/>
            </Center>
        </Box>
    );
}

export default NavBarText;