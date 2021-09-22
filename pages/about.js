import Meta from '../components/Meta'
import styles from '../styles/About.module.css'

const about = () => {
    return (
        <div className={styles.container}>
            <Meta title='About'/>
            <h1>Hi, my name is</h1>
            <h2>Stephania Nevado.</h2>
            <h3>I build things for the web.</h3>
            <h4>
                I'm a nutritionist, manager, writer and now I'm a web developer located in Sweden. This is me playing with Next.js !!!
            </h4>
        </div>
    )
}

export default about