import { Button } from '@chakra-ui/react';

import React from 'react';
import { colors } from '../themeData';
import CText from './CText';

function CButton({ label, ...rest }) {
    return (
        <Button {...rest} ><CText style={{ color: colors.blue.main }}>{label}</CText></Button>
    );
}

export default CButton;