import React, {useState, useContext, useEffect} from 'react';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';
//components
import Navigation from './Navigation';
//styles
import styles from './chat.module.css';
//context
import  {AuthContext}  from '../context/AuthContextProvider';

const Chats = () => {

    const[loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
          navigate("/");
          return;
        }

        axios.get("https://api.chatengine.io/users/me",  { //user exist in server or not
          headers: {
                "project-id": "12946fb6-335e-4ab1-88df-3166d3857ea6",
                "user-name": user.email,
                "user-secret": user.uid
          }
        })
          .then(() => {//if account exist
                setLoading(false);
              }) 
          .catch(() => {//if account not exist , create a new account
              let formdata = new FormData();
              formdata.append("email", user.email);
              formdata.append("username", user.email);
              formdata.append("secret", user.uid);
              getAvater(user.photoURL)
                  .then(avatar => {
                        formdata.append("avatar", avatar, avatar.name);
                        axios.post("https://api.chatengine.io/users", formdata, {
                                headers: {
                                  "private-key": "074b4c8b-c22c-4636-8741-d87a21be3dcb",
                                }
                              })
                              .then(() => setLoading(false))
                              .catch(error => console.log(error));
                  })
          })
    }, [user, navigate]);

    const getAvater = async (url) => {//for access to image of user
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
      };

    const logoutHandler = async () => { //when click on log out button
      await auth.signOut();
      navigate ("/");
    }

    if (!user || loading) return "Loading ..."

    return (
        <div className={styles.container}>
          <Navigation logoutHandler={logoutHandler} />
          <ChatEngine
              height="calc(100vh - 50px)"
              projectID="12946fb6-335e-4ab1-88df-3166d3857ea6"
              userName={user.email}
              userSecret={user.uid}
           />
        </div>
    );
};

export default Chats;