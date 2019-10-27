import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListCard } from '../components';

export default function ListsScreen() {

	return (
		<>
			<StatusBar backgroundColor="white" />
			<View style={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<View style={{ borderBottomWidth: 2, borderBottomColor: '#EDECEF', width: 80 }} />
					<Text style={{ fontSize: 28, fontWeight: 'bold' }}>Tasks<Text style={{ fontWeight: 'normal', color: '#BFBFC1' }}> List</Text></Text>
					<View style={{ borderBottomWidth: 2, borderBottomColor: '#EDECEF', width: 80 }} />
				</View>

				<View style={{ alignItems: 'center', marginVertical: 70 }}>
					<View style={{ borderWidth: 1, borderColor: '#EDECEF', borderRadius: 4, alignItems: 'center', justifyContent: 'center', width: 50, height: 50, marginBottom: 15 }}>
						<Icon name="add" size={30} color="#5E5D60" />
					</View>
					<Text style={{ color: '#C2C2C5' }}>Add List</Text>
				</View>
				<View style={{ paddingLeft: 20 }}>
					<ListCard />
				</View>
			</View>


		</>
	)
}