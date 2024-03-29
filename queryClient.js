import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

export const QueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
