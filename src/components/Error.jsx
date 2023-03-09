import styles from './error.module.css'

export default function Error({ error }) {
    return(
        <>
            <p className={styles.error}>{ error }</p>
        </>
    )
}