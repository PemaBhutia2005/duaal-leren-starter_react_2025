import React, { FC } from 'react';
import { trashNotification } from '~/shared/services/trash/trash.service.types';

export const Notification: FC<trashNotification> = ({
	weather,
	date,
	trashToCollect,
}) => {
	return (
		<div>
			{(() => {
				let showAlert = false;

				for (let [day, dayData] of Object.entries(weather)) {
					const condition = (
						dayData as { condition: { text: string } }
					).condition.text.toLowerCase();

					if (
						condition.includes('rain') &&
						date === { date } &&
						trashToCollect.name === 'paper'
					) {
						showAlert = true;
						break;
					}
				}

				if (showAlert) {
					return (
						<div className="alert">
							<p>
								It might rain tomorrow, so don't put your paper
								outside!
							</p>
						</div>
					);
				} else {
					return null;
				}
			})()}
		</div>
	);
};
