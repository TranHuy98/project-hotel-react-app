import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/firestore";
import firebase from "firebase/compat/app";

const Comments = () => {

    const [rooms, setRooms] = useState([]);
    const roomsCollectionRef = collection(db, "Rooms");

    const [newComment, setNewComment] = useState('');

    const postComment = () =>{
        console.log("post comment")
    }

    return (
        <>
            <input type='text' placeholder='comment' onChange={ (event) => setNewComment(event.target.value)}></input> <br></br>
            <button onClick={postComment}>Post comment</button>
        </>
    )
}

export default Comments