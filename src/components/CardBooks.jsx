import styles from './cardBook.module.css'

export default function CardBooks({ data }) {
    return (
        <>
            <div className={styles.containerCard}>
                <h3>{ data.author }</h3>
                <p>{ data.book }</p>
            </div>
            
        </>
    )
}