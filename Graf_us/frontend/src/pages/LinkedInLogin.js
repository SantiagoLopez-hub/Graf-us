import { Box } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';

function LinkedInLogin(props) {
	const code = new URL(window.location.href).searchParams.get("code");
	const clientId = '78y1jk156vmhwy';
	const clientSecret = 'nW2yhW8hBztmtwFk';
	const redirectURI = window.location.origin + '/auth/linkedin/callback';

	// Get LinkedIn Access token
	useEffect(() => {
		fetch('https://api.allorigins.win/get?url=' +
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
		}).then(response => {
			if (response.ok)
				return response.json();
			throw new Error('Network response error');
		}).then(token => {
			/* Get user's name */
			fetch('https://api.allorigins.win/get?url=' +
				encodeURIComponent('https://api.linkedin.com/v2/me' +
				'?projection=(id,firstName,lastName,profilePicture' +
				'(displayImage~:playableStreams))' +
				'&oauth2_access_token=' +
				JSON.parse(token.contents)['access_token']))
				.then(response => response.json())
				.catch()
				.then(name => {
					// Name
					const firstName = JSON.parse(name.contents)['firstName']['localized']['en_US'];
					console.log(firstName);

					// Surname
					const lastName = JSON.parse(name.contents)['lastName']['localized']['en_US'];
					console.log(lastName);


					/* Get user's email address */
					fetch('https://api.allorigins.win/get?url=' +
						encodeURIComponent('https://api.linkedin.com/v2/emailAddress?' +
							'q=members&projection=(elements*(handle~))' +
							'&oauth2_access_token=' +
							JSON.parse(token.contents)['access_token']))
						.then(response => response.json())
						.catch(error => console.log('Error: ' + error))
						.then(email => {
								// Print email address to the console
								const emailAddress = JSON.parse(email.contents)['elements'][0]['handle~']['emailAddress'];
								console.log(emailAddress);


								// Save user to database
								fetch('/api/save-user', {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json'
									},
									body: JSON.stringify({
										email: emailAddress,
										first_name: firstName,
										last_name: lastName
									})
								})
									.then(response => response.json())
									.then(data => {
										console.log(data);
									})
									.catch((error) => {
										console.error('Error:', error);
									});
							}
						);
				});
		});
	},[]);

    return (
        <Box flex={1}>
            Testing site
        </Box>
    );
}

export default LinkedInLogin;