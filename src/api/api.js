axios.get('http://localhost:3000/api/someEndpoint')
    .then((response) => {
        // Handle successful response
        console.log(response.data);
    })
    .catch((error) => {
        // Handle network errors or other Axios-related errors
        if (error.response) {
            // The request was made, but the server responded with a non-2xx status code
            console.log('Error response data:', error.response.data);
            console.log('Status code:', error.response.status);
        } else if (error.request) {
            // The request was made, but no response was received
            console.log('No response received');
        } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error message:', error.message);
        }
        console.log('Error config:', error.config);
    });
