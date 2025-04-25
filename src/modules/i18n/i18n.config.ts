import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			hey: 'hallo',
			collection: 'Next collection',
			weatherMessage: 'Weather forecast',
			issue1: "It might rain on {{date}}, please don't put your trash out",
			issue2: 'It is {{condition}} on {{date}}',
			lan1: 'French',
			lan2: 'English',
			changeDate: 'Change date',
		},
	},
	fr: {
		translation: {
			hey: 'bonjour',
			collection: 'Prochaine collecte',
			weatherMessage: 'Prévisions météorologiques',
			issue1: 'Il pourrait pleuvoir le {{date}}, veuillez ne pas sortir vos déchets',
			issue2: 'Il fait {{condition}} le {{date}}',
			lan1: 'Français',
			lan2: 'Anglais',
			changeDate: 'Changer de date',
		},
	},
};

const lng = 'en';

i18n.use(initReactI18next).init({
	resources,
	lng,
	debug: true,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
