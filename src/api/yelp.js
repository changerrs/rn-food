import axios from 'axios';

export default axios.create({
    //base url is the root url request
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer X9e7I878G_vxz-oknbHVxdpg5NXwV0Ieg2ay9Fe-b981ynicXntJUDntWOVJITqwV7wjG6_L6BeuKFPeT65CpOwY7oedPC9j1pKlru0v4J-Rdi5GunHCYyzHC4mhW3Yx',
    },
});
