import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableWithoutFeedback } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Circle } from 'react-native-progress';
import { TaskItem } from '../components';

interface Props {
	navigation: any
}

export default function TasksScreen(props: Props) {

	const [todo, setTodo]: any = useState({
		title: '',
		todos: [
			{ task: '', done: false }
		]
	});

	const [noOfCompletedTasks, setNoOfCompletedTasks]: any = useState(0);
	const [noOfTasks, setNoOfTasks]: any = useState(0);

	useEffect(() => {
		let item = props.navigation.getParam('item');

		if (item) {
			setTodo(item)

			setNoOfTasks(todo.todos.length);
			setNoOfCompletedTasks(todo.todos.filter((item: any) => item.done === true).length);
		}

	});

	return (
		<>
			<StatusBar backgroundColor="white" />
			<View style={{ alignItems: 'center', height: '100%', paddingTop: 50 }}>
				<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end', paddingRight: 30, marginBottom: 50 }}>
					<TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
						<View>
							<EntypoIcon name="cross" size={40} />
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={{ width: '100%', flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
					<View style={{ flex: 1, alignItems: 'center' }}>
						<Circle size={18} progress={0.5} />
					</View>
					<View style={{ flex: 3, borderBottomWidth: 2, borderBottomColor: '#F0F0F0', paddingBottom: 15, }}>
						<Text style={{ fontSize: 28, fontWeight: 'bold' }}>{todo.title}</Text>
						<Text style={{ color: '#BFBFC1' }}>{`${noOfCompletedTasks} of ${noOfTasks}`}</Text>
					</View>
				</View>

				{todo.todos.map((item: any) => {
					return (
						<TaskItem taskName={item.task} done={item.done} />
					)
				})}

				<View style={{ position: 'absolute', width: '100%', bottom: 10, paddingBottom: 20, paddingRight: 25 }}>
					<TouchableWithoutFeedback>
						<View style={{ backgroundColor: 'red', borderWidth: 1, borderColor: '#EDECEF', borderRadius: 4, alignItems: 'center', justifyContent: 'center', width: 50, height: 50, alignSelf: 'flex-end' }}>
							<MaterialIcon name="add" size={30} color="#F4F4F4" />
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		</>
	)
}