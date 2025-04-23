import { App } from '~/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 60,
			gcTime: 1000 * 60 * 60,
		},
	},
});

export const Root = () => {
	return (
		// Provide the client to your App
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	);
};
// provider daarin doe je <app> component
