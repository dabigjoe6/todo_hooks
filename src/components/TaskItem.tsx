import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
	taskName: string,
	done: boolean
}
export default function TaskItem(props: Props) {
	const backgroundColor = props.done ? '#F2F1F6' : 'white';
	const iconName = props.done ? 'checkbox-marked-outline' : 'checkbox-blank-outline';
	const textDecorationLine = props.done ? 'line-through' : 'none';
	const color = props.done ? 'red' : 'black';

	const [taskName, setTaskName] = useState('');

	useEffect(() => {
		setTaskName(props.taskName)
	}, [])
	function renderTaskName() {

		let autoFocus;
		if (props.taskName) {
			autoFocus = false;
		} else {
			autoFocus = true;
		}

		return (
			<TextInput
				editable={!props.done}
				autoFocus={autoFocus}
				defaultValue="List Title"
				disableFullscreenUI
				enablesReturnKeyAutomatically
				onBlur={() => {
					//save the text into data
				}}
				onChangeText={(input) => setTaskName(input)}
				onSubmitEditing={() => {
					//do something
				}}
				placeholder={"Task name"}
				selectTextOnFocus
				underlineColorAndroid="transparent"
				value={taskName}
				style={{ color, textDecorationLine, fontSize: 16, fontWeight: 'bold' }}
			/>
		)
	}

	return (
		<View style={{ width: '100%', flexDirection: 'row', paddingVertical: 15, alignItems: 'center' }}>
			<View style={{ flex: 1, alignItems: 'center' }}>
				<MaterialCommunityIcon name={iconName} size={22} color={color} />
			</View>
			<View style={{ flex: 3, justifyContent: 'center' }}>
				{renderTaskName()}
			</View>
		</View>
	)
}
