import React from 'react';
// import React , {useState, useEffect, useContext} from 'react';

// Components
import Navbar from './Navbar';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { ChatEngine } from 'react-chat-engine';
// import axios from 'axios';

// Styles
import styles from "./Chats.module.css"

// context
// import { AuthContext } from '../contexts/AuthContextProvider'; 

const Chats = () => {

    const histroy = useHistory();

    const logOutHandler = async () =>{
        await auth.signOut();
        histroy.push("/login");
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
