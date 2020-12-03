import { render } from '@testing-library/react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from './Auth';

export const Protected = ({component: Component ,...rest}) =>{

    return (
    <Route 
        {...rest}
        render = { props => {
            if (Auth.isAuthenticated()){
                return <Component {...props} />;


            
        }
         else {
                return (
                   <Redirect 
                   to   ={{   
                  pathname: "/",
                 state: {
                     from : props.location
                   }

                   }}
                   />
                 
                  )
         }
        }}
  />  
 );
}


    
