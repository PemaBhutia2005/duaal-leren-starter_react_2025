import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from '~/app/components';

import './styles/main.scss';
import './modules/i18n/i18n.config';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Root />
	</StrictMode>,
);
