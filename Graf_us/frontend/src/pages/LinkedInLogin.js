import { Box } from '@chakra-ui/react';
import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';


const code = new URL(window.location.href).searchParams.get("code");
const clientId = '78y1jk156vmhwy';
const clientSecret = 'nW2yhW8hBztmtwFk';
const redirectURI = window.location.origin + '/auth/linkedin/callback';

function getAccessToken() {
	return fetch('https://api.allorigins.win/get?url=' +
		encodeURIComponent('https://www.linkedin.com/oauth/v2/accessToken' +
			'?grant_type=authorization_code' +
			`&client_id=${clientId}` +
			`&client_secret=${clientSecret}` +
			`&redirect_uri=${redirectURI}` +
			`&code=${code}`), {
		method: 'POST',
		headers: {
			'Content-Type': 'x-www-form-urlencoded'
		}
	});
}

function getUserName(token) {
	return fetch('https://api.allorigins.win/get?url=' +
		encodeURIComponent('https://api.linkedin.com/v2/me' +
			'?projection=(id,firstName,lastName,profilePicture' +
			'(displayImage~:playableStreams))' +
			'&oauth2_access_token=' +
			JSON.parse(token.contents)['access_token']))
}

function getUserEmail(token) {
	return fetch('https://api.allorigins.win/get?url=' +
		encodeURIComponent('https://api.linkedin.com/v2/emailAddress?' +
			'q=members&projection=(elements*(handle~))' +
			'&oauth2_access_token=' +
			JSON.parse(token.contents)['access_token']));
}

function saveUser(firstName, lastName, email) {
	return fetch('/api/save-user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: email,
			first_name: firstName,
			last_name: lastName
		})
	});
}

function LinkedInLogin(props) {
	// Get LinkedIn Access token
	useEffect(() => {
		getAccessToken()
			.then(response => {
			if (response.ok) return response.json();
		}).then(token => {

			/* Get user's name */
			getUserName(token)
				.then(response => response.json())
				.catch(error => console.log('Error: ' + error))
				.then(name => {
					// Name
					const firstName = JSON.parse(name.contents)['firstName']['localized']['en_US'];

					// Surname
					const lastName = JSON.parse(name.contents)['lastName']['localized']['en_US'];


					/* Get user's email address */
					getUserEmail(token)
						.then(response => response.json())
						.catch(error => console.log('Error: ' + error))
						.then(email => {

							// Email address
							const emailAddress = JSON.parse(email.contents)
								['elements'][0]['handle~']['emailAddress'];

							// Save email in cookies
							const user = new Cookies();
							user.set('email', emailAddress, { path: '/' });


							/* Save user to database */
							saveUser(firstName, lastName, emailAddress)
								.then(response => response.json())
								.catch(error => console.log('Error: ' + error))
								.then(() => {
									window.location.replace("/graf");
								});
							}
						);
				});
		});
	},[]);

    return (
        <Box flex={1}>
	        Logging in... Please wait...
        </Box>
    );
}

export default LinkedInLogin;