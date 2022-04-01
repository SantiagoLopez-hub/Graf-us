import { Box, HStack } from '@chakra-ui/react';
import React, {useEffect} from 'react';
import D3Test from '../components/D3Test';
import Cookies from 'universal-cookie';

import FilterBox from '../components/FilterBox';
import NavBar from '../components/NavBar';
import ProfileDetailTile from '../components/ProfileDetailTile';
import StatsBox from '../components/StatsBox';

function GrafScreen(props) {
    const user = new Cookies();
    console.log(user.get('email'));

    useEffect(() => {
        fetch(`/api/get-user?email=${user.get('email')}`)
            .then(response => response.json())
            .catch(error => console.log('Error: ' + error))
            .then(res => console.log(res));
    }, []);

    return (
        <Box flex={1}>
            <NavBar /> 
            <HStack paddingX={4} paddingY={3} >
                <FilterBox />
                <StatsBox />
                <ProfileDetailTile />
            </HStack>
             <D3Test />
        </Box>
    );
}

export default GrafScreen;