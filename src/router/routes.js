import React, { Component } from 'react';
import Home from '../views/HomePage/index';

const routes = [
    {   
        name: 'HOME',
        path: '/',
        exact : true,
        main : () => <Home />
    },
    // {   
    //     name: 'ABOUT',
    //     path: '/about',
    //     exact : true,
    //     main : () => <About />
    // },
    // {
    //     name: 'CONTACT',
    //     path: '/contact',
    //     exact : true,
    //     main : () => <Contact />
    // },
    // {   
    //     name: 'LOGIN',
    //     path: '/login',
    //     exact: true,
    //     main: ({location , match}) => <Login location={location} match={match} />
    // },
    // {
    //     path: '/admin/:name',
    //     exact: false ,
    //     main: ({ match, location }) => <Admin match={match} location={location} />
    // }
]

export default routes 
