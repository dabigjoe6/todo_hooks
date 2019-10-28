import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { ListsScreen, TasksScreen } from './src/screens';

const RootNavigator = createStackNavigator({
	Lists: ListsScreen,
	Tasks: TasksScreen
},
	{
		headerMode: 'none',
	})


export default createAppContainer(RootNavigator);