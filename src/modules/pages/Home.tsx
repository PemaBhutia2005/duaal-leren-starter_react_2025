//styling
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
import { trashItem } from '~/shared/services/trash/trash.service.types';

//packages
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

type HomeProps = {
	col: string;
	wea: string;
	iss: string;
	iss2: string;
};

export const Home = ({ col, wea, iss, iss2 }: HomeProps) => {
	// set date of the next collection
	const [date, setDate] = useState('2025-04-21');
	let forecast: Forecast | undefined;
	let trashToCollect: trashItem | undefined;

	const { trashData, trashLoading } = useGetTrash();
	const { weatherData, weatherLoading } = useGetWeather();

	const { i18n, t } = useTranslation();

	function setLanguage(language: string) {
		i18n.changeLanguage(language);
	}

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
					<h1
						id="home"
						className={clsx(styles['p-home__container__title'])}
					>
						Home
					</h1>
					<Header />
					<Schedule
						trashToCollect={trashToCollect}
						date={date}
						col={col}
					/>
					<Notification
						weather={forecast}
						datum={date}
						trashToCollect={trashToCollect}
						wea={wea}
						iss={iss}
						iss2={iss2}
					/>
					<button onClick={() => setLanguage('en')}>Engels</button>
					<button onClick={() => setLanguage('fr')}>Frans</button>
				</div>
			</div>
		);
	}
};
