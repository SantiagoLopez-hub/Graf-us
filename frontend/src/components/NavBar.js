import { Box, Center, HStack } from '@chakra-ui/react';
import React from 'react';

import { colors } from '../themeData';
import { ReactComponent as LogoSVG } from '../assets/resources/tempLogo.svg';
import NavBarText from './NavBarText';
import useWindowDimensions from '../hooks/useWindowDimensions';
import AccountInsight from './AccountInsight';

function NavBar(props) {
    const { height, width } = useWindowDimensions();

    return (
        <Box w={"100%"} h={75} bg={colors.white}  boxShadow='sm' flexDirection={'row'} display={'flex'} paddingX={100} pos={'absolute'} top={0}>
            <HStack w={'100%'} justify={'space-between'}>
                <LogoSVG />
                <HStack spacing={width*0.05} >
                    <NavBarText string={"Home"} isActive={true}/>
                    <NavBarText string={"Connect"} isActive={false}/>
                    <NavBarText string={"Jobs"} isActive={false}/>
                    <NavBarText string={"About Us"} isActive={false}/>
                    <NavBarText string={"Contact"} isActive={false}/>
                </HStack>
                <AccountInsight />
            </HStack>
        </Box>
    );
}

export default NavBar;