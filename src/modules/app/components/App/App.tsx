import styles from './app.module.scss';
import { clsx } from 'clsx';
import Header from './Header';
import { Schedule } from './Schedule';
import { Notification } from './Notification';
import { Loading } from './Loading';
import { useGetTrash } from '~/shared/hooks/use-get-trash';
import { useGetWeather } from '~/shared/hooks/use-get-weather';

export const App = () => {
	// set date of the next collection
	const date = '2025-04-22';
	let forecast: any = null;
	let trashToCollect: any = null;

	const { trashData, trashLoading } = useGetTrash();
	const { weatherData, weatherLoading } = useGetWeather();

	if (weatherLoading || trashLoading) {
		return (
			<div className={clsx(styles['p-home'])}>
				<div className={styles['p-home__container']}>
					<Header />
					<Loading />
				</div>
			</div>
		);
	}

	if (!weatherLoading && !trashLoading) {
		forecast = weatherData?.forecast;
		trashToCollect = trashData?.[0];

		return (
			<div className={clsx(styles['p-home'])}>
				<div className={styles['p-home__container']}>
					<Header />
					<Schedule trashToCollect={trashToCollect} date={date} />
					<Notification
						weather={forecast}
						datum={date}
						trashToCollect={trashToCollect}
					/>
				</div>
			</div>
		);
	}
};
