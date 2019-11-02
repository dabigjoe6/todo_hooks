import React, { useRef, useState } from 'react';
import { View, Text, StatusBar, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListCard } from '../components';
import Carousel from 'react-native-snap-carousel';

import data from '../data';

const windowWidth = Dimensions.get('window').width;

interface Props {
	navigation: any
}

export default function ListsScreen(props: Props) {

	const _carousel = useRef(null);

	const [entries, setEntries] = useState(data);

	function navigateToTasksScreen() {
		props.navigation.navigate('Tasks');
	}

	function _renderItem({ item }: { item: any }) {
		return (
			<ListCard
				onPress={() => props.navigation.navigate('Tasks', {
					item
				})}
				title={item.title}
				todos={item.todos}
			/>
		);
	}

	return (
		<>
			<StatusBar backgroundColor="white" />
			<View style={{ alignItems: 'center', height: '100%', justifyContent: 'center', paddingTop: 100 }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<View style={{ borderBottomWidth: 2, borderBottomColor: '#EDECEF', width: 80 }} />
					<Text style={{ fontSize: 28, fontWeight: 'bold' }}>Tasks<Text style={{ fontWeight: 'normal', color: '#BFBFC1' }}> Lists</Text></Text>
					<View style={{ borderBottomWidth: 2, borderBottomColor: '#EDECEF', width: 80 }} />
				</View>

				<TouchableWithoutFeedback onPress={navigateToTasksScreen}>
					<View style={{ alignItems: 'center', marginVertical: 70 }}>
						<View style={{ borderWidth: 1, borderColor: '#EDECEF', borderRadius: 4, alignItems: 'center', justifyContent: 'center', width: 50, height: 50, marginBottom: 15 }}>
							<Icon name="add" size={30} color="#5E5D60" />
						</View>
						<Text style={{ color: '#C2C2C5' }}>Add List</Text>
					</View>
				</TouchableWithoutFeedback>

				<Carousel
					ref={_carousel}
					data={entries}
					renderItem={_renderItem}
					sliderWidth={windowWidth}
					itemWidth={150}
				/>
				{/* <View style={{ paddingLeft: 20 }}>
					<ListCard />
				</View> */}
			</View>
		</>
	)
}