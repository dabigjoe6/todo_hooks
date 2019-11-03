import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container } from './src/components';
import { ListsScreen, TasksScreen } from './src/screens';

const RootNavigator = createStackNavigator({
	Lists: ListsScreen,
	Tasks: TasksScreen
},
	{
		headerMode: 'none',
	})


const Root = createAppContainer(RootNavigator);

export default function App() {
	return (
		<Container>
			<Root />
		</Container>
	)
}