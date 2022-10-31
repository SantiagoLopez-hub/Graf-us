import { Box, HStack } from '@chakra-ui/react';
import React from 'react';

import { colors } from '../themeData';
import { ReactComponent as LogoSVG } from '../assets/resources/tempLogo.svg';
import NavBarText from './NavBarText';
import useWindowDimensions from '../hooks/useWindowDimensions';
import AccountInsight from './AccountInsight';

function NavBar(props) {
    const { width } = useWindowDimensions();

    return (
        <Box w="100%" h={75} bg={colors.white}  boxShadow='sm' flexDirection={'row'} display={'flex'} paddingX={100} >
            <HStack w={'100%'} justify={'space-between'}>
                <LogoSVG cursor={'pointer'}/>
                <HStack spacing={width*0.05} >
                    <NavBarText string={"Home"} url={"graf"} isActive={true}/>
                    <NavBarText string={"Connect"} url={"connect"} isActive={false}/>
                    <NavBarText string={"Jobs"} url={"jobs"} isActive={false}/>
                    <NavBarText string={"About Us"} url={"about-us"} isActive={false}/>
                    <NavBarText string={"Contact"} url={"contact-us"} isActive={false}/>
                </HStack>
                <AccountInsight />
            </HStack>
        </Box>
    );
}

export default NavBar;