import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import Router from './routes/Router.tsx';
import { saveFcmTokenIntoLocalStorage } from './utils/storageUtils.ts';
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
    useEffect(() => {
        saveFcmTokenIntoLocalStorage();
        console.log('Current environment:', import.meta.env.VITE_ENVIRONMENT);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <Router />
        </QueryClientProvider>
    );
}

export default App;
