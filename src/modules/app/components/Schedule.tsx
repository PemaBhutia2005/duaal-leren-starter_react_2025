import { FC } from 'react';
import {
	trashItem,
	trashLang,
} from '~/shared/services/trash/trash.service.types';

import i18n from '~/i18n/i18n.config';
import { t } from 'i18next';

import styles from './App/app.module.scss';

type ScheduleProps = {
	trashToCollect: trashItem;
	date: string;
	col: string;
};

export const Schedule: FC<ScheduleProps> = ({ trashToCollect, date, col }) => {
	const trueCol: string = t(col);
	const currentLang = i18n.language as trashLang;

	return (
		<>
			<h2 className={styles['p-home__h2']}>{trueCol}</h2>
			<p>{date}</p>
			<p>{trashToCollect[currentLang]}</p>
		</>
	);
};
