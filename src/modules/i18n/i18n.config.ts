import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import schedule_nl from '../../assets/i18n/nl/schedule.json';

const resources = {
	en: {
		translation: {
			hey: 'hallo',
			collection: 'Next collection',
			weatherMessage: 'Weather forecast',
			issue1: "It might rain on {{date}}, please don't put your trash out",
			issue2: 'It is {{condition}} on {{date}}',
		},
	},
	fr: {
		translation: {
			hey: 'bonjour',
			collection: 'Prochaine collecte',
			weatherMessage: 'Prévisions météorologiques',
			issue1: 'Il pourrait pleuvoir le {{date}}, veuillez ne pas sortir vos déchets',
			issue2: 'Il fait {{condition}} le {{date}}',
		},
	},
};

const lng = 'fr';

i18n.use(initReactI18next).init({
	resources,
	lng,
	debug: true,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
