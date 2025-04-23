import styles from '../app/components/App/app.module.scss';
import { clsx } from 'clsx';

//components
import Header from '~/app/components/App/Header';
import { Schedule } from '~/app/components/Schedule';
import { Notification } from '~/app/components/Notification';
import { Loading } from '~/app/components/Loading';

//hooks
import { useGetTrash } from '~/shared/hooks/use-get-trash';
import { useGetWeather } from '~/shared/hooks/use-get-weather';

//services
import { Forecast } from '~/shared/services/weather/weather.service.types';

export const Home = () => {
	// set date of the next collection
	const date = '2025-04-22';
	let forecast: Forecast | undefined;
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
