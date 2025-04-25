import { Trans, useTranslation } from 'react-i18next';
import { markers } from '~/i18n/markers';
import i18n from '~/i18n/i18n.config';

export const Buttons = () => {
	const { i18n, t } = useTranslation();

	function setLanguage(language: string) {
		i18n.changeLanguage(language);
	}
	return (
		<>
			<button onClick={() => setLanguage('en')}>Engels</button>
			<button onClick={() => setLanguage('fr')}>Frans</button>
		</>
	);
};
