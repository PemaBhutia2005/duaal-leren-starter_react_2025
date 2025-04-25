import { App } from '~/app';
import '~/i18n/i18n.config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { router } from '~/routes/router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 60,
			gcTime: 1000 * 60 * 60,
			refetchInterval: 1000 * 60 * 60,
		},
	},
});

export const Root = () => {
	return (
		// Provide the client to your App
		<QueryClientProvider client={queryClient}>
			{/* <App /> */}
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};
// provider daarin doe je <app> component
