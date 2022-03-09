import { Button } from '@chakra-ui/react';

import React from 'react';
import { colors } from '../themeData';
import CText from './CText';

function CButton({ label, onClick, textColor, ...rest }) {
    return (
        <Button textColor={textColor} {...rest} onClick={onClick} ><CText style={{ color: textColor ? textColor : colors.blue.main }}>{label}</CText></Button>
    );
}

export default CButton;