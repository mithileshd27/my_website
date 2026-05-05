
import styles from '../CSS/Landing.module.css'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function Landing() {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.landingHeader}>
            <p style={{marginTop: "20px"}}>Mithilesh Domala</p>
        </div>
        <div className={styles.landingMiddle}>
            <div className={styles.middleLeft}>
                <div className={styles.contentCode}>
                    <p className={styles.codeTitle} style={{margin: 0}}>Code _&gt;</p>
                    <p className={styles.landingCodeText}>Full stack web development, React ecosystems, and relevant stuff</p>
                    <Button variant='outline-light' className={styles.landingButtons}>Let's Dive Deep</Button>
                </div>
            </div>
            <div className={styles.middleRight}>
                <div className={styles.contentPhoto}>
                    <p className={styles.photoTitle} style={{margin: 0}}>
                        <FontAwesomeIcon icon="fa-solid fa-camera" />
                        &nbsp;Photos</p>
                    <p className={styles.landingPhotoText}>Landscape and wildlife images, captured with heart</p>
                    <Button variant='outline-light' className={styles.landingButtons}>Enter my Digital Gallery</Button>
                </div>
            </div>
        </div>
        <div className={styles.landingFooter}>
            <p></p>
        </div>
    </div>
    </>
  )
}
