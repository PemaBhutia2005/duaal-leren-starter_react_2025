import { FC } from 'react';
import {
	trashItem,
	trashSchedule,
	trashLang,
} from '~/shared/services/trash/trash.service.types';

import i18n from '~/i18n/i18n.config';

type ScheduleProps = {
	trashToCollect: trashItem;
	date: string;
	col: string;
};

export const Schedule: FC<ScheduleProps> = ({ trashToCollect, date, col }) => {
	const currentLang = i18n.language as trashLang;

	return (
		<>
			<h2>{col}</h2>
			<p>{date}</p>
			<p>{trashToCollect?.[currentLang]}</p>
		</>
	);
};
