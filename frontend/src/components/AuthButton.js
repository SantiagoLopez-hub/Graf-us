import React from 'react';
import { textStyles, colors } from '../themeData';
import { ReactComponent as LinkedInSVG } from '../assets/linkedin.svg';


function AuthButton(props) {
    return (
        <div style={{...styles.container, ...props.style}}>
            <div style={styles.svgBox}>
                <LinkedInSVG />
            </div>
            <div style={{...textStyles.subtitle1, ...styles.label }}>Sign in with {props.platform}</div>
        </div>
    );
}

const styles = {
    container: {
        cursor: 'pointer',
        alignItems: 'center',
        display: 'flex',
        height: 50, 
        width: '100%',
        borderRadius: 10,
        backgroundColor: colors.blue.main,
        flexDirection: 'row',
    },
    svgBox: {
        borderRight: 'solid',
        borderWidth: 2,
        borderColor: colors.white,
        paddingLeft: 20,
        paddingRight: 20,
    },
    label: {
        color: colors.white,
        paddingLeft: 15,

    }
}
export default AuthButton;