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

import { storage } from '../../Firebase';
import { v4 as uuidv4 } from 'uuid';

const AddData = () => {

    //get data from firebase

    const [newRoomType, setNewRoomType] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [newBed, setNewBed] = useState('');
    const [newMaxPeople, setNewMaxPeople] = useState(0);
    const [newView, setNewView] = useState("");
    const [newSize, setNewSize] = useState('');

    const [hasChange, setHasChange] = useState(false);

    const [rooms, setRooms] = useState([]);
    const roomsCollectionRef = collection(db, "Rooms");

    const createRoom = async () => {
        await addDoc(roomsCollectionRef, {
            roomType: newRoomType,
            roomPrice: newPrice,
            bed: newBed,
            maxPeople: newMaxPeople,
            view: newView,
            roomSize: newSize,
        });
        setHasChange(true);
        let roomField = document.getElementsByClassName('room-field');
        for(let field of roomField){
            field.value = '';
        }
    };

    const updateRoom = async (id) => {
        const userDoc = doc(db, "Rooms", id);
        const newFields = {
            roomType: newRoomType,
            roomPrice: newPrice,
            bed: newBed,
            maxPeople: newMaxPeople,
            view: newView,
            roomSize: newSize,
        };
        await updateDoc(userDoc, newFields);
        setHasChange(true);
    };

    const deleteRoom = async (id) => {
        const userDoc = doc(db, "Rooms", id);
        await deleteDoc(userDoc);
        setHasChange(true);
    };


    //render
    useEffect(() => {
        const getRooms = async () => {
            const data = await getDocs(roomsCollectionRef);
            setRooms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getRooms();
        setHasChange(false);
    }, [hasChange]);

    //render

    return (
        <div>
            <input className='room-field'

                placeholder="RoomType..."
                onChange={(event) => {
                    setNewRoomType(event.target.value);
                }}
            />
            <input className='room-field'
                type="text"
                placeholder="price..."
                onChange={(event) => {
                    setNewPrice(event.target.value);
                }}
            />
            <input className='room-field'
                type="bed"
                placeholder="bed..."
                onChange={(event) => {
                    setNewBed(event.target.value);
                }}
            />
            <input className='room-field'
                type="number"
                placeholder="max people..."
                onChange={(event) => {
                    setNewMaxPeople(event.target.value);
                }}
            />
            <input className='room-field'
                type="text"
                placeholder="view..."
                onChange={(event) => {
                    setNewView(event.target.value);
                }}
            />
            <input className='room-field'
                type="number"
                placeholder="size..."
                onChange={(event) => {
                    setNewSize(event.target.value);
                }}
            />
            {/* <div>
                <input type="file" onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }} accept="/image/*" />
                <button onClick={uploadFile}>Upload to Firebase</button>
            </div> */}

            <button onClick={createRoom}> Create Room</button>
            {rooms.map((roomItem) => {
                return (
                    <div key={roomItem.id}>
                        {" "}
                        <img src={roomItem.image} width='200' height='100'></img>
                        <p>RoomType: {roomItem.roomType}</p>
                        <p>price {roomItem.roomPrice}$</p>
                        <p>bed: {roomItem.bed}</p>
                        <p>maxGuest: {roomItem.maxPeople} people</p>
                        <p>view: {roomItem.view}</p>
                        <p>size: {roomItem.roomSize}m<sup>2</sup></p>
                        <button
                            onClick={() => {
                                updateRoom(roomItem.id, roomItem.view);
                            }}
                        >
                            {" "}
                            Update View
                        </button>
                        <button
                            onClick={() => {
                                deleteRoom(roomItem.id);
                            }}
                        >
                            {" "}
                            Delete User
                        </button>
                    </div>
                );
            })}
        </div>
    )
}

export default AddData