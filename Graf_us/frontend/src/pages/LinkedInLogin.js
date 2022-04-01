import { Box } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';

function LinkedInLogin(props) {
	const code = new URL(window.location.href).searchParams.get("code");
	const clientId = '78y1jk156vmhwy';
	const clientSecret = 'nW2yhW8hBztmtwFk';
	const redirectURI = window.location.origin + '/auth/linkedin/callback';

	/*fetch('/api/save-user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: "asdfl35@gail.com",
			password: "code",
			first_name: "code",
			last_name: "code",
			code: code
		}),
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
		})
		.catch((error) => {
			console.error('Error:', error);
		});*/

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
				.then(data => {
					// Name
					console.log(JSON.parse(data.contents)['firstName']['localized']['en_US']);

					// Surname
					console.log(JSON.parse(data.contents)['lastName']['localized']['en_US']);
				});


			/* Get user's email address */

			/*fetch('https://api.allorigins.win/get?url=' +
				encodeURIComponent('https://api.linkedin.com/v2/emailAddress?' +
					'q=members&projection=(elements*(handle~))' +
					'&oauth2_access_token=' +
					JSON.parse(token.contents)['access_token']))
				.then(response => response.json())
				.catch(error => console.log('Error: ' + error))
				.then(data =>
					// Print email address to the console
					console.log(JSON.parse(data.contents)['elements'][0]['handle~']['emailAddress'])
				);

			 */
		});
	},[]);

    return (
        <Box flex={1}>
            Testing site
        </Box>
    );
}

export default LinkedInLogin;