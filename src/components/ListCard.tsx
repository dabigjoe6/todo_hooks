import React from 'react';
import { View, Text, ToolbarAndroidBase } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface Props {
	title: string,
	todos: [],
	onPress: any,
}

export default function ListCard(props: Props) {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={{ paddingVertical: 30, height: 250, width: 150, backgroundColor: '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6), alignItems: 'center', paddingLeft: 5, borderRadius: 8 }}>
				<Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>{props.title}</Text>
				<View style={{ borderBottomWidth: 1, borderBottomColor: '#E7E7E7', width: '80%', alignSelf: 'flex-end', marginVertical: 20 }} />
				<View style={{}}>
					{props.todos.map((item: any) => {
						const iconName = item.done ? "checkbox-marked-outline" : "checkbox-blank-outline";
						const textDecorationLine = item.done ? "line-through" : "none"
						return (
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Icon name={iconName} size={15} color="#E7E7E7" />
								<Text style={{ textDecorationLine, marginVertical: 5, color: 'white', marginLeft: 7 }}>{item.task}</Text>
							</View>
						)
					})}
				</View>
			</View>
		</TouchableWithoutFeedback>

	)
}