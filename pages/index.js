import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {useState} from 'react'

import ReactCardFlip from 'react-card-flip'; //https://github.com/AaronCCWong/react-card-flip
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Home() {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped)
  }

  return (
    // <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


          <main className={styles.main}>

            <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
              <div>
                Front of the card
                <button onClick={handleFlip}>Click to flip</button>
              </div>

              <div>
                Back of the card
                <button onClick={handleFlip}>Click to flip</button>
              </div>

            </ReactCardFlip>
          </main>


      </div>
    // </Layout>
  )
}
