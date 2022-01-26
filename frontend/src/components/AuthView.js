import React from 'react';
import { colors, shadows, textStyles } from '../themeData';
import AuthButton from './AuthButton.js';


function AuthView(props) {
    return (
        <div>
            <div style={{...styles.container, ...props.style}}>
                <div>
                    <div style={{...textStyles.headline3, ...{ paddingBottom: 15 } }}>Hey there!</div>
                    <div style={{...textStyles.body1, ...{ color: colors.darkGrey, width: 230, marginBottom: 'auto', lineHeight: 1.40} }}>Sign in with you LinkedIn so we can get started to help you expand your network 🌎</div>
                </div>
                <AuthButton platform={'LinkedIn'} style={styles.button}/>
            </div>
            <div style={styles.loginText}>
                <div style={{...textStyles.subtitle2, ...{ color: colors.grey } }}>Already Signed up?</div>
                <div style={{...textStyles.subtitle2, ...{ color: colors.blue.main, paddingLeft: 4, cursor: 'pointer' } }}>Login instead</div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 25,
        paddingBottom: 25,
        width: 285,
        height: 180, 
        backgroundColor: colors.white,
        borderRadius: 20, 
        boxShadow: shadows.xl.main
    },
    loginText: {
        flexDirection: 'row', 
        display: 'flex', 
        justifyContent: 'center', 
        paddingTop: 14,
    },
    logo: {
        marginLeft: 150,
        marginBottom: 15,
    }
}

export default AuthView;