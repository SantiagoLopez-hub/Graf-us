import React from 'react';
import { colors } from '../themeData';

function FactText(props) {
    return (
        <div style={{...props.style, ...{whiteSpace: "pre-line"} }}> 
            <div style={styles.title}>{props.title}</div>
            <div style={styles.string}>{props.string}</div>
        </div>
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