import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'; // bootstrap css
import {useEffect} from 'react';
import {analytics} from "../utils/Firebase";
import {GTMPageView} from  '../utils/gtm.ts'
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      analytics();
      // Initiate GTM
      useEffect(() => {
        const handleRouteChange = (url) => GTMPageView(url);
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
          Router.events.off('routeChangeComplete', handleRouteChange);
        };
      }, []);
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
