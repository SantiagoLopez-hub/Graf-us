import { Box } from '@chakra-ui/react';
import React from 'react';

import { textStyles, colors } from '../themeData';
import CText from './CText';

function StatText({ subtitle, value }) {
    return (
        <Box textAlign={'center'}>
            <CText textStyle={textStyles.headline1}>{value}</CText>
            <CText textStyle={textStyles.body2} style={{ color: colors.mediumGrey }}>{subtitle}</CText>
        </Box>
    );
}

export default StatText;