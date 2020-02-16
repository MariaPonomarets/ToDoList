import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppRoutes from './app-routes';

import Task from '../screens/task';
import Home from '../screens/home';
import EditTask from '../screens/editTask';
import Notifications from '../screens/notifications';

const Stack = createStackNavigator();

export default (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={AppRoutes.HOME} component={Home} />
    <Stack.Screen name={AppRoutes.TASK} component={Task} />
    <Stack.Screen name={AppRoutes.EDIT_TASK} component={EditTask} />
    <Stack.Screen name={AppRoutes.NOTIFICATIONS} component={Notifications} />
  </Stack.Navigator>
);
