import React from 'react';
import { View, Text, } from 'react-native';
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

	return (
		<View style={{ width: '100%', flexDirection: 'row', paddingVertical: 35, alignItems: 'center', }}>
			<View style={{ flex: 1, alignItems: 'center' }}>
				<MaterialCommunityIcon name={iconName} size={22} color={color} />
			</View>
			<View style={{ flex: 3, justifyContent: 'center' }}>
				<Text style={{ color, textDecorationLine, fontSize: 16, fontWeight: 'bold', }}>{props.taskName}</Text>
			</View>
		</View>
	)
}
