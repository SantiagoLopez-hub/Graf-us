import { Box, HStack } from '@chakra-ui/react';
import React, {useEffect} from 'react';
import D3Test from '../components/D3Test';
import Cookies from 'universal-cookie';

import FilterBox from '../components/FilterBox';
import NavBar from '../components/NavBar';
import ProfileDetailTile from '../components/ProfileDetailTile';
import StatsBox from '../components/StatsBox';

function GrafScreen(props) {
    const cookies = new Cookies();


    useEffect(() => {
        fetch(`/api/get-user?email=${cookies.get('email')}`)
            .then(response => response.json())
            .catch(error => console.log('Error: ' + error))
            .then(res => {

                // Create expiring date to be 7 days from the moment
                //the user accesses last the site
                let expiringDate = new Date(Date.now() + 604800);

                // Refresh cookies (keep session active)
                cookies.set('user', {
                    email: res.email,
                    firstName: res.firstName,
                    lastName: res.lastName

                }, { path: '/', expires: expiringDate });
            });
    }, []);

    return (
        <Box flex={1}>
            <NavBar />
            <HStack paddingX={4} paddingY={3} >
                <FilterBox />
                <StatsBox />
                <ProfileDetailTile
                    firstName={cookies.get('user').firstName}
                    lastName={cookies.get('user').lastName}
                    email={cookies.get('user').email}
                />
            </HStack>
             <D3Test />
        </Box>
    );
}

export default GrafScreen;