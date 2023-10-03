import styles from './House.module.css'

const House = ({ children }) => {
    return (
        <div className={styles.house}>
            {children}
        </div>
    )
}

export default House;
