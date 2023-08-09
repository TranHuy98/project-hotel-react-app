import React, { useState, useEffect } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';
import { addDoc, setDoc } from "firebase/firestore";

const AddData = () => {

    //get data from firebase

    const [rooms, setRooms] = useState([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "Rooms"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setRooms(newData);
                console.log(rooms, newData);
            })

    }

    useEffect(() => {
        fetchPost();
    }, [])

    //completed get rooms data from firebase

    const [newRoom, setNewRoom] = useState({});

    const handleChangeInput = (event) => {
        console.log(event.target.value);
        setNewRoom({
            roomType: event.target.value,
        })
    }

    const deleteRoom = (e) => {
        console.log('deleta a room');
        console.log(e.target.vlue)
    }


    const addRoom = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Rooms"), {
                ...newRoom
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    



    console.log("room-list", rooms);

    return (
        <>
            <div>
                {
                    rooms?.map((room, i) => (
                        <>
                            <div style={{ margin: '15px 0 0' }}>
                                <span key={i}>
                                    {room.roomType}
                                </span>
                                <button onClick={deleteRoom}>Delete</button>
                            </div>
                        </>
                    ))
                }
                <input type='text' onChange={handleChangeInput}></input> <button onClick={addRoom}>ADD</button>
            </div>
        </>
    )
}

export default AddData