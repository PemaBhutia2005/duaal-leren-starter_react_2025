import { createBrowserRouter } from 'react-router';

import { Home } from '~/pages/Home';

import { App } from '../app/components/App/App';
import { markers } from '~/i18n/markers';
import { t } from 'i18next';
import { Buttons } from '~/app/components/Buttons';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/home',
				element: (
					<>
						<Home
							col={markers.collection}
							wea={markers.weatherMessage}
							iss={markers.issue1}
							iss2={markers.issue2}
						/>
					</>
				),
			},
		],
	},
]);
