import React from 'react';
import { Box, Button, Link } from '@chakra-ui/react';
import { useLinkedIn } from 'react-linkedin-login-oauth2';

import { colors, shadows, textStyles } from '../themeData';
import CText from './CText';
import LinkedInButton from './LinkedInButton';


function AuthView(props) {
	let [token] = '';
	const { linkedInLogin } = useLinkedIn({
		clientId: '78y1jk156vmhwy',
		redirectUri: window.location.origin + '/auth/linkedin/callback',
		onSuccess: (code) => {
			//  create user in database
			fetch(window.location.origin + '/api/saveUser', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(code),
			})
				.then(response => response.json())
				.then(data => {
					token = data
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		},
		onError: (error) => {
			console.log(error);
		},
	});

	console.log(props.isSignIn);

	return (
		<Box>
			<Box style={{...styles.container, ...props.style}}>
				<Box>
					<CText textStyle={textStyles.headline3} style={{ paddingBottom: 15 }}>Hey there!</CText>
					<CText textStyle={textStyles.body1} style={{ color: colors.darkGrey, width: 230, marginBottom: 'auto', lineHeight: 1.40 }}>{props.isSignIn ? 'Sign ' : 'Login ' }in with you LinkedIn so we can get started to help you expand your network 🌎</CText>
				</Box>
				<LinkedInButton onClick={linkedInLogin} label={`${props.isSignIn ? 'Sign in ' : 'Log in '} in with LinkedIn`}/>
			</Box>
			<Box style={styles.loginText}>
				<CText textStyle={textStyles.subtitle2} style={{ color: colors.grey, paddingRight: 6 }}>{props.isSignIn ? 'Already have an account?' : 'Not signed up yet?'}</CText>
				<Link color={colors.blue} href='#' onClick={() => props.setIsSignIn(!props.isSignIn)}>
					<CText textStyle={textStyles.subtitle2} style={{ color: colors.blue.main }}>{props.isSignIn ? 'Login ' : 'Sign up ' }instead </CText>
				</Link>
			</Box>
		</Box>
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
		backgroundColor: colors.white,
		borderRadius: 20,
		boxShadow: shadows.xl.main
	},
	loginText: {
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'center',
		paddingTop: 10,
	},
	logo: {
		marginLeft: 150,
		marginBottom: 15,
	}
}

export default AuthView;