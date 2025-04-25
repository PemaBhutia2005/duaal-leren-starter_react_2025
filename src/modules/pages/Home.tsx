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
import { useTranslation, Trans } from 'react-i18next';
import { useState } from 'react';
import { markers } from '~/i18n/markers';

type HomeProps = {
	col: string;
	wea: string;
	iss: string;
	iss2: string;
};

export const Home = ({ col, wea, iss, iss2 }: HomeProps) => {
	// set date of the next collection
	const [date, setDate] = useState('2025-04-21');
	function changeDate() {
		const forecastDates = Object.keys(weatherData?.forecast);
		const currentIndex = forecastDates.indexOf(date);
		const nextIndex = (currentIndex + 1) % forecastDates.length;
		setDate(forecastDates[nextIndex]);
	}

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
					<Header />
					<Schedule
						trashToCollect={trashToCollect}
						date={date}
						col={col}
					/>
					<button
						className={clsx(styles['dateButton'])}
						onClick={() => changeDate()}
					>
						<Trans>{markers.changeDate}</Trans>
					</button>
					<Notification
						weather={forecast}
						datum={date}
						trashToCollect={trashToCollect}
						wea={wea}
						iss={iss}
						iss2={iss2}
					/>
					<div className={clsx(styles['langButtonContainer'])}>
						<button
							className={clsx(styles['langButton'])}
							onClick={() => setLanguage('fr')}
						>
							<Trans>{markers.lan1}</Trans>
						</button>
						<button
							className={clsx(styles['langButton'])}
							onClick={() => setLanguage('en')}
						>
							<Trans>{markers.lan2}</Trans>
						</button>
					</div>
				</div>
			</div>
		);
	}
};
