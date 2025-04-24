import { Home } from '~/pages/Home';
import { Trans, useTranslation } from 'react-i18next';
import { markers } from '~/i18n/markers';
import i18n from '~/i18n/i18n.config';

export const App = () => {
	const { i18n, t } = useTranslation();

	function setLanguage(language: string) {
		i18n.changeLanguage(language);
	}

	return (
		<div>
			<Home
				col={t(markers.collection)}
				wea={t(markers.weatherMessage)}
				iss={markers.issue1}
				iss2={markers.issue2}
			/>
			<button onClick={() => setLanguage('en')}>Engels</button>
			<button onClick={() => setLanguage('fr')}>Frans</button>
		</div>
	);
};
