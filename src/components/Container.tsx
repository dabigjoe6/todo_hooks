import React, { createContext, useState } from 'react';
import createGUID from '../utilities/createGUID';
import { addListener } from 'cluster';
import { any } from 'prop-types';

export const ContainerContext = createContext(undefined);

interface Props {
	children: any
}

export default function Container(props: Props) {

	const [lists, setLists] = useState([
		{
			id: createGUID(),
			title: 'Trip to Paris',
			todos: [
				{ id: createGUID(), task: 'Book flights', done: true },
				{ id: createGUID(), task: 'Passport check', done: true },
				{ id: createGUID(), task: 'Packing luggage', done: false },
				{ id: createGUID(), task: 'Hotel Reservation', done: false }
			]
		},
		{
			id: createGUID(),
			title: 'My Tasks',
			todos: [
				{ id: createGUID(), task: 'Buy milk', done: false },
				{ id: createGUID(), task: 'Plan weekend', done: false },
				{ id: createGUID(), task: 'Publish Friday', done: true },
				{ id: createGUID(), task: 'Run 3 miles', done: false }
			]
		}
	])

	function addList(list: any) {
		let newLists = lists;
		newLists.push(list);
		setLists(newLists);
	}

	return (
		//@ts-ignore
		<ContainerContext.Provider value={{
			data: lists,
			addList
		}}>
			{props.children}
		</ContainerContext.Provider>
	)
}

