import { Box } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../themeData';
import CText from './CText';

function FactText(props) {
    return (
        <Box style={{...props.style, ...{whiteSpace: "pre-line"} }}> 
            <CText style={styles.title}>{props.title}</CText>
            <CText style={styles.string}>{props.string}</CText>
        </Box>
    );
}

const styles = {
    title: {
        width: 370,
        fontWeight: 700,
        fontSize: 50,
        color: colors.black,
        paddingBottom: 50,

    },
    string: {
        width: 400,
        fontWeight: 400,
        fontSize: 20,
        color: colors.darkGrey
    }
}
 
export default FactText;