import React from 'react';
import { Table } from 'react-x-component';
const { Head, Body, Th, Tr, Td } = Table;

export default (props) => {
	const { headConf, bodyConf, id } = props;
	return (
		<Table>
			<Head>
				{headConf.map((item, index) => {
					return <Th key={`${id}_head_${index}`}>{item}</Th>
				})}
			</Head>
			<Body>
				{
					bodyConf.map((trItem, trIndex) => {
						const keysList = Object.keys(trItem);
						return (
							<Tr key={`${id}_tr_${trIndex}`}>
								{keysList.map((tdKey, tdIndex) => <Td key={`${id}_td_${trIndex}_${tdIndex}`}>{trItem[tdKey]}</Td>)}
							</Tr>
						)
					})
				}
			</Body>
		</Table>
	)
}
