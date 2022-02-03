import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import D3Test from '../components/D3Test';

import FilterBox from '../components/FilterBox';
import NavBar from '../components/NavBar';
import ProfileDetailTile from '../components/ProfileDetailTile';
import StatsBox from '../components/StatsBox';

function GrafScreen(props) {
    return (
        <Box flex={1}>
            <NavBar /> 
            <HStack paddingX={4} paddingY={3} >
                <FilterBox />
                <StatsBox />
                <ProfileDetailTile />
            </HStack>
            {/* <D3Test /> */}
        </Box>     
    );
}

export default GrafScreen;