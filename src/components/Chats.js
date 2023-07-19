import React , {useState, useEffect, useContext} from 'react';

// Components
import Navbar from './Navbar';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';

// Styles
import styles from "./Chats.module.css"

// context
import { AuthContext } from '../contexts/AuthContextProvider'; 

const Chats = () => {

    const [Loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);

    const histroy = useHistory();

    useEffect(()=>{
        if(!user){
            histroy.push("/login");
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            hearders: {
                "project-id" : "c586e3d8-43ae-431d-86a0-baeb6a49fd73",
                "user-name": user.email,
                "user-secret" : user.uid,
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            const formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
            .then(avatar => {
                formdata.append("avatar", avatar, avatar.name)
            })

        });

    },[user, histroy]);

    const getFile = async (url) =>{
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"});
    }

    const logOutHandler = async () =>{
        await auth.signOut();
        histroy.push("/login");
    }

    if(!user || Loading) return (
        <>
            <div className={styles.onLoad}>
                <p>Loading...</p>
            </div>
        </>
    )

    return (
        <div className={styles.container}>
            <Navbar logOutHandler={logOutHandler} />
            <ChatEngine
                height="calc(100vh - 50px)"
                projectId="c586e3d8-43ae-431d-86a0-baeb6a49fd73"
                userName="."
                userSecret="."
            />
        </div>
    );
};

export default Chats;
