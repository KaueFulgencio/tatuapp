import React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import Navigator from '../components/navbar/navigator';
import SignIn from '../pages/SignIn'

const Snack = createNavigationContainerRef();

function AuthRoutes(){
  return(
    <Navigator></Navigator>
  )
}


export default AuthRoutes;