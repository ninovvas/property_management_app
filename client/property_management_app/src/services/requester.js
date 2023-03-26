const request = async (method, token, url, data) => {
    // try {
    //     const user = localStorage.getItem('auth');
    //     const auth = JSON.parse(user || '{}');

    //     let headers = {}

    //     if (auth.accessToken) {
    //         headers['X-Authorization'] = auth.accessToken;
    //     }

    //     let buildRequest;

    //     if (method === 'GET') {
    //         buildRequest = fetch(url, { headers });
    //     } else {
    //         console.log("POST")
    //         console.log(url);
    //         console.log(data);
    //         console.log(headers);
    //         console.log(method);

    //         buildRequest = fetch(url, {
    //             method,
    //             headers: {
    //                 ...headers,
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         });
    //     }
    //     const response = await buildRequest;

    //     //console.log(response);

    //     const result = await response.json();

    //     return result;
    // } catch (error) {
    //     console.log(error);
    // }

    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
               
                
            };
            options.credentials = 'include';
            options.body = JSON.stringify(data);
        }
    }

    if (token) {
         options.headers = {
             ...options.headers,
             'X-Authorization': token,

           
         };
        

    }

   

    console.log(url);
    console.log(options);
    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;


};

// export const get = request.bind({}, 'GET');
// export const post = request.bind({}, 'POST');
// export const patch = request.bind({}, 'PATCH');
// export const put = request.bind({}, 'PUT');
// export const del = request.bind({}, 'DELETE');

export const requestFactory = (token) => {
    console.log('token: ' +  token);
    return {
        get: request.bind(null, 'GET', token),
        post: request.bind(null, 'POST', token),
        put: request.bind(null, 'PUT', token),
        patch: request.bind(null, 'PATCH', token),
        delete: request.bind(null, 'DELETE', token),
    }
};


// const request = async (method, url) => {
//     const response = await fetch(url, {
//         method,
//     });

//     try {
//         const result = await response.json();
//     }
    
//      catch (error) {
        
//      }
//     return result;
// }

// //partion application
// export const get = request.bind(null,'GET');
// export const post = request.bind(null,'POST');
// export const put = request.bind(null,'PUT');
// export const patch = request.bind(null,'PATCH');
// export const del = request.bind(null,'DELETE');

// //request.get()