import React from 'react';

// Components
import Navbar from './Navbar';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { ChatEngine } from 'react-chat-engine';
// Styles
import styles from "./Chats.module.css"

const Chats = () => {

    const histroy = useHistory();

    const logOutHandler = async () =>{
        await auth.signOut();
        histroy.push("/");
    }

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