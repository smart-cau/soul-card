import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'; // bootstrap css
import {useEffect} from 'react';
import {analytics} from "../utils/Firebase";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      analytics();
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
