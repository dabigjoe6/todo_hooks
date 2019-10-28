import React from 'react';
import { View, Text, StatusBar, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Circle } from 'react-native-progress';


export default function TasksScreen() {
	return (
		<>
			<StatusBar backgroundColor="white" />
			<View style={{ alignItems: 'center', height: '100%', paddingTop: 100 }}>
				<View style={{ width: '100%', flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
					<View style={{ flex: 1, alignItems: 'center' }}>
						{/* PROGRESS BAR CIRCLE */}
						<Circle size={18} progress={0.5} />
					</View>
					<View style={{ flex: 3, borderBottomWidth: 2, borderBottomColor: '#F0F0F0', paddingBottom: 15, }}>
						<Text style={{ fontSize: 28, fontWeight: 'bold' }}>My Tasks</Text>
						<Text style={{ color: '#BFBFC1' }}>2 of 7 tasks</Text>
					</View>
				</View>

				<View style={{ width: '100%', flexDirection: 'row', marginVertical: 15 }}>
					<View style={{ flex: 1, alignItems: 'center' }}>
						<MaterialCommunityIcon name="checkbox-blank-outline" size={15} color="#E7E7E7" />
					</View>
					<View style={{ flex: 3 }}>
						<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Buy Milk</Text>
						<Text style={{ color: '#BFBFC1' }}>Mon, Apr 30</Text>
					</View>
				</View>
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