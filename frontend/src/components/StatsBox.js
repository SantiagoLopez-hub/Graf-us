import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../themeData';
import CText from './CText';
import StatText from './StatText';

function StatsBox(props) {
    return (
        <Box w='100%' h={85} bg={colors.white} borderRadius={10} boxShadow={'sm'} padding={2}>
            <HStack justify={'space-around'}>
                <StatText subtitle='Total Connections' value='16'/>
                <StatText subtitle='CEO Connections' value='1'/>
                <StatText subtitle='Total Circles' value='3'/>
                <StatText subtitle='Profile Quality' value='75%'/>
                <StatText subtitle='Lorem Ipsum' value='23'/>
                <StatText subtitle='Lorem Ipsum' value='233'/>
                <Button borderColor={colors.blue.main} variant={'outline'}><CText style={{ color: colors.blue.main }}>Change Circle</CText></Button>
            </HStack>
        </Box>
    );
}

export default StatsBox;