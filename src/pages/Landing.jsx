
import styles from '../CSS/Landing.module.css'
import Button from 'react-bootstrap/Button'

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
                    <p className={styles.codeTitle} style={{margin: 0}}>_&gt; Code</p>
                    <p>Full stack web development, React ecosystems, Node.js APIs, and generative AI integration</p>
                    <Button variant='outline-primary'>Let's Dive Deep</Button>
                </div>
            </div>
            <div className={styles.middleRight}>
                <p>This is virtual photography gallery</p>
                <button>Enter my virtual exhibition</button>
            </div>
        </div>
        <div className={styles.landingFooter}>
            <p></p>
        </div>
    </div>
    </>
  )
}
