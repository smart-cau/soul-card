import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout";
import styles from '../styles/Home.module.scss'

import {useState} from 'react'

import ReactCardFlip from 'react-card-flip'; //https://github.com/AaronCCWong/react-card-flip
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp as thumbUnpressed, faThumbsDown as thumbDownUnpressed } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as thumbPressed, faThumbsDown as thumbDownPressed } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  const [isFlipped, setIsFlipped] = useState(false);
  const [problem, setProblem] = useState('');
  const [isProblem, setIsProblem] = useState(false);

  const [showCard, setShowCard] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);

  const onChange = (e) => {
    setProblem(e.target.value);
  }
  const onClickAsk = () => {
    if(problem) {
      setIsProblem(true)
      setShowCard(true);
    } else {
      setIsProblem(false)
    }
  }

  const onClickSkip = () => {
    setShowCard(true);
  }

  const handleFlip = (e) => {
    e.preventDefault();
    if(showCard) setIsFlipped(!isFlipped);
  }

  const handleLike = () => {
    setIsLike(!isLike);
    setIsDisLike(false);
  }

  const handleDisLike = () => {
   setIsDisLike(!isDisLike);
   setIsLike(false);
  }


  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>The Soul Card</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <main className={styles.main}>
            <section className={styles.question}>
              <p>
                What Brings You Here?
              </p>
            </section>

            <section className={styles.input_section}>
              <div className={styles.input}>
                <input
                  type={'text'}
                  placeholder={'Let your soul know your problem...'}
                  onChange={onChange}
                />
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.skip_button}
                  onClick={onClickSkip}
                >
                  Skip it
                </button>
                <button
                  className={styles.ask_button}
                  onClick={onClickAsk}
                >
                  Ask your soul
                </button>
              </div>
            </section>

            <section>
              <div>
                  {!showCard
                    ?
                    <div className={styles.card}>
                      <div className={styles.soul_text}>
                        <p className={styles.front_title}>
                          Your Soul will tell you
                        </p>
                      </div>
                      <Image
                        src={`/images/soul-card-front.png`}
                        width={305}
                        height={524}
                        onClick={handleFlip}
                      />
                    </div>
                    :
                    <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
                      <div className={styles.card} onClick={handleFlip}>
                        <div className={styles.soul_text}>
                          <p className={styles.front_title}>
                            Your Soul will tell you
                          </p>
                          <p className={styles.front_content}>
                            Touch and Listen to it
                          </p>
                        </div>
                        <Image
                          src={`/images/soul-card-back.png`}
                          width={305}
                          height={524}

                        />
                      </div>
                      <div className={styles.card} onClick={handleFlip}>
                        <p>Back of the card</p>
                        <Image
                          src={`/images/soul-card-back.png`}
                          width={305}
                          height={524}


                        />
                      </div>
                    </ReactCardFlip>
                  }


              </div>
              {
                showCard &&
                  <div className={styles.likes}>
                    <div className={styles.like_button} onClick={handleLike}>
                      {!isLike
                        ?<FontAwesomeIcon icon={thumbUnpressed} />
                        :<FontAwesomeIcon icon={thumbPressed} />
                      }
                    </div>
                    <div className={styles.like_button} onClick={handleDisLike}>
                      {!isDisLike
                        ?<FontAwesomeIcon icon={thumbDownUnpressed} />
                        :<FontAwesomeIcon icon={thumbDownPressed} />
                      }
                    </div>
                  </div>
              }
            </section>
          </main>


      </div>
    </Layout>
  )
}
