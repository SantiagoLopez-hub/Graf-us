import { Box } from '@chakra-ui/react';
import React from 'react';

function LinkedInLogin(props) {
	const code = new URL(window.location.href).searchParams.get("code");
	const clientId = '78y1jk156vmhwy';
	const clientSecret = 'nW2yhW8hBztmtwFk';

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


	let headers = new Headers();
	headers.append('Content-Type', 'x-www-form-urlencoded');
	headers.append('Accept', 'application/json');
	headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
	headers.append('Access-Control-Allow-Credentials', 'true');

	fetch('https://www.linkedin.com/oauth/v2/accessToken' +
		'?client_id=' + clientId +
		'&client_secret=' + clientSecret +
		'&grant_type=' + 'authorization_code' +
		'&redirect_uri=' + window.location.origin + '/auth/linkedin/callback' +
		'&code=' + code, {
			method: 'POST',
			headers : headers,
			mode: 'no-cors'
		}).then(data => console.log(data));

    return (
        <Box flex={1}>
            Code:
	        <br />
	        { code }
	        <br />
        </Box>
    );
}

export default LinkedInLogin;