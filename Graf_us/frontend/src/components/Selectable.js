import { Select } from '@chakra-ui/react';
import React from 'react';
import { colors, textStyles } from '../themeData';
import CText from './CText';

function Selectable({ placeHolder }) {

    return (
        <Select style={styles.container} placeholder={placeHolder} size='lg' >
            <option value={'1'}>value 1</option>
            <option value={'2'}>value 2</option>
            <option value={'3'}>value 3</option>
        </Select>
    );
}

const styles = {
    container: {
        backgroundColor: colors.pink,
    }
}

export default Selectable;