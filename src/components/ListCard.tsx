import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListCard() {
	return (
		<View style={{ paddingVertical: 30, height: 250, width: 150, backgroundColor: '#3A2C85', alignItems: 'center', paddingLeft: 5, borderRadius: 8 }}>
			<Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>Trip to Paris</Text>
			<View style={{ borderBottomWidth: 1, borderBottomColor: '#E7E7E7', width: '80%', alignSelf: 'flex-end', marginVertical: 20 }} />
			<View style={{}}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon name="checkbox-marked-outline" size={15} color="#E7E7E7" />
					<Text style={{ marginVertical: 5, color: 'white', marginLeft: 7, textDecorationLine: 'line-through' }}>Book flight</Text>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon name="checkbox-marked-outline" size={15} color="#E7E7E7" />
					<Text style={{ marginVertical: 5, color: 'white', marginLeft: 7, textDecorationLine: 'line-through' }}>Passport check</Text>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon name="checkbox-blank-outline" size={15} color="#E7E7E7" />
					<Text style={{ marginVertical: 5, color: 'white', marginLeft: 7 }}>Packing lugg..</Text>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon name="checkbox-blank-outline" size={15} color="#E7E7E7" />
					<Text style={{ marginVertical: 5, color: 'white', marginLeft: 7 }}>Hotel Reserv...</Text>
				</View>
			</View>
		</View>
	)
}