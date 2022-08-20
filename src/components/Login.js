import React from "react";
import firebase from 'firebase/compat/app';
import { auth } from "../firebase";
//icons
import google from '../assets/google.svg';
//styles
import styles from './login.module.css';


const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCart}>
                <h2>Chat App</h2>
                <div
                     className={styles.Btn}
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <img src={google} alt='icon' /> Sign in with google
                </div>
            </div>
        </div>
    );
};

export default Login;