import { t } from 'i18next';
import i18n from '~/i18n/i18n.config';
import {
	trashNotification,
	trashLang,
} from '~/shared/services/trash/trash.service.types';

import styles from './App/app.module.scss';

type NotificationProps = trashNotification & {
	wea: string;
	iss: string;
	iss2: string;
};

export const Notification = ({
	weather,
	datum,
	trashToCollect,
	wea,
	iss,
	iss2,
}: NotificationProps) => {
	const currentLang = i18n.language as trashLang;
	const trueWea: string = t(wea);
	let issue = '';

	for (let [date, dayData] of Object.entries(weather)) {
		if (date === datum) {
			const condition = dayData.condition[currentLang].toLowerCase();

			if (
				condition.includes('rain') &&
				(trashToCollect[currentLang] === 'Papier' ||
					trashToCollect[currentLang] === 'Paper')
			) {
				issue = t(iss, { date: datum });
			} else {
				issue = t(iss2, {
					condition: condition,
					date: datum,
				});
			}
		}
	}

	return (
		<>
			<h2 className={styles['p-home__h2']}>{trueWea}</h2>
			<p>{issue}</p>
		</>
	);
};
