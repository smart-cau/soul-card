import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'; // bootstrap css
import {useEffect} from 'react';
import TagManager from 'react-gtm-module'

import {analytics} from "../utils/Firebase";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Firebase Analytics
      analytics();

      // GTM
      const tagManagerArgs = {
        gtmId: 'GTM-WF3BWH2'
      }
      TagManager.initialize(tagManagerArgs)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
