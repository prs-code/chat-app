import React from 'react';

//styles
import styles from './navigation.module.css';

const Navigation = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.name}>chat App</h2>
            <button className={styles.logout} onClick={logoutHandler}>Log out</button>
        </div>
    );
};

export default Navigation;