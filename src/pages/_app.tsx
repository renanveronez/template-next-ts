import { AppProps } from 'next/app';
import GlobalStyles from '@/styles/global';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
