import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import 'styles/globals.css';
import { ReactElement } from 'react';
import Navbar from 'components/layouts/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BaseContext } from 'context/BaseContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BaseContext>
          <Component {...pageProps} />
        </BaseContext>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
