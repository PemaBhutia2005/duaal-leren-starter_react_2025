import { FC } from 'react';
import { trashNotification } from '~/shared/services/trash/trash.service.types';

export const Notification: FC<trashNotification> = ({
	weather,
	datum,
	trashToCollect,
}) => {
	let issue = '';

	for (let [date, dayData] of Object.entries(weather)) {
		if (date === datum) {
			const condition = dayData.condition.text.toLowerCase();

			if (
				condition.includes('rain') &&
				trashToCollect.name === 'Papier'
			) {
				issue = `It will rain on ${datum}. Please don't take your trash out!`;
			} else {
				issue = `It will be ${condition} on ${datum}. Please take your trash out!`;
			}
		}
	}
	return (
		<>
			<h2>Weerbericht:</h2>
			<p>{issue}</p>
		</>
	);
};
