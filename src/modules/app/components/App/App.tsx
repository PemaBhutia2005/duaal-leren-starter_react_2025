import styles from './app.module.scss';
import { clsx } from 'clsx';
import { trashService } from '~/shared/services';
import { weatherService } from '~/shared/services';

import Header from './Header';
import { Schedule } from './Schedule';
import { Notification } from './Notification';

export const App = () => {
	let forecast = {};
	let DATA = {};
	// YOUR TRASH
	const trashItems = trashService.getTrashItems();
	// get name of the first trash item
	const trashToCollect = trashItems[0];
	// get weather data
	weatherService.getWeather().then((data) => {
		DATA = data;
		console.log(DATA);
		//pull out the forecast data
		forecast = data.forecast;

		//loop through and give the key to date and the value to the dayData
	});
	// set date of the next collection
	const date = '2025-04-22';

	return (
		<div className={clsx(styles['p-home'])}>
			<div className={styles['p-home__container']}>
				<Header />
				<Schedule trashToCollect={trashToCollect} date={date} />
				<Notification
					weather={forecast}
					date={date}
					trashToCollect={trashToCollect}
				/>
			</div>
		</div>
	);
};
