import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Auth from '../screens/auth';

import AppRoutes from './app-routes';
import AppNavigator from './AppNavigator';
import {isTokenExpired} from '../services/rest';
import {getToken} from '../state/reducers/authReducer';
import {ReduxState} from '../state/reducers';

const Stack = createStackNavigator();

const MainNavigator = (props: any): React.ReactElement => {
  const tokenData = useSelector((state: ReduxState) => getToken(state));
  const isLogged = tokenData && isTokenExpired();

  return (
    <Stack.Navigator {...props} headerMode="none">
      {isLogged ? (
        <Stack.Screen name={AppRoutes.HOME} component={AppNavigator} />
      ) : (
        <Stack.Screen name={AppRoutes.AUTH} component={Auth} />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
