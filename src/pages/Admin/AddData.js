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
import styles from './AddData.module.css'; // Import CSS module
import { v4 as uuidv4 } from 'uuid';

const AddData = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const [newRoomType, setNewRoomType] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [newBed, setNewBed] = useState("");
    const [newMaxPeople, setNewMaxPeople] = useState(0);
    const [newView, setNewView] = useState("");
    const [newSize, setNewSize] = useState("");
    const [roomImg, setRoomImg] = useState("");
    const [roomDes, setRoomDes] = useState('');

    const [hasChange, setHasChange] = useState(false);
    const [rooms, setRooms] = useState([]);
    const roomsCollectionRef = collection(db, "Rooms");

    const handleFileChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const createRoom = async () => {
        if (selectedImage) {
            const storageRef = firebase.storage().ref("RoomImages");
            const imageRef = storageRef.child(selectedImage.name);

            try {
                await imageRef.put(selectedImage);
                console.log('Image uploaded successfully');

                const url = await imageRef.getDownloadURL();
                console.log('Download URL:', url);

                await addDoc(roomsCollectionRef, {
                    roomType: newRoomType,
                    roomPrice: newPrice,
                    bed: newBed,
                    maxPeople: newMaxPeople,
                    view: newView,
                    roomSize: newSize,
                    image: url,
                    description: roomDes,
                    comments: [],
                });

                setHasChange(true);
                setHasChange(true);
                setSelectedImage(null);
                setNewRoomType("");
                setNewPrice(0);
                setNewBed("");
                setNewMaxPeople(0);
                setNewView("");
                setNewSize("");
                setRoomImg("");

                alert('Upload successfully');
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            alert('Please select an image');
        }
    };

    const updateRoom = async (id) => {
        const userDoc = doc(db, "Rooms", id);
        const newFields = {
        };
        if (newRoomType !== '') {
            newFields.roomType = newRoomType;
            setNewRoomType("");
        }
        if (newPrice !== 0) {
            newFields.roomPrice = newPrice;
            setNewPrice("");
        }
        if (newBed !== '') {
            newFields.bed = newBed;
            setNewBed("");
        }
        if (newView !== '') {
            newFields.view = newView;
            setNewView("");
        }
        if (newMaxPeople !== 0) {
            newFields.maxPeople = newMaxPeople;
            setNewMaxPeople("");
        }
        if (newSize !== '') {
            newFields.roomSize = newSize;
            setNewSize("");
        }
        if (roomImg !== '') {
            newFields.image = roomImg;
            setRoomImg("");
        }
        if (roomDes !== '') {
            newFields.description = roomDes;
            setRoomDes("");
        }
        await updateDoc(userDoc, newFields);
        setHasChange(true);

        const roomFields = document.getElementsByClassName('room-field');
        for (let field of roomFields) {
            field.value = '';
        }
    };

    const deleteRoom = async (id) => {
        const userDoc = doc(db, "Rooms", id);
        await deleteDoc(userDoc);
        setHasChange(true);

        const roomFields = document.getElementsByClassName('room-field');
        for (let field of roomFields) {
            field.value = '';
        }
    };

    // Render
    useEffect(() => {
        const getRooms = async () => {
            const data = await getDocs(roomsCollectionRef);
            setRooms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getRooms();
        setHasChange(false);
    }, [hasChange]);

    return (
        <div className={styles.container}>
            <div className={styles['upload-section']}>
                <input id="roomImg" type="file" onChange={handleFileChange} />
            </div>
            <input className={styles['room-field']} placeholder="RoomType..." onChange={(event) => setNewRoomType(event.target.value)} />
            <input className={styles['room-field']} type="text" placeholder="price..." onChange={(event) => setNewPrice(event.target.value)} />
            <input className={styles['room-field']} type="bed" placeholder="bed..." onChange={(event) => setNewBed(event.target.value)} />
            <input className={styles['room-field']} type="number" placeholder="max people..." onChange={(event) => setNewMaxPeople(event.target.value)} />
            <input className={styles['room-field']} type="text" placeholder="view..." onChange={(event) => setNewView(event.target.value)} />
            <input className={styles['room-field']} type="number" placeholder="size..." onChange={(event) => setNewSize(event.target.value)} />
            <input className={styles['room-field']} type="text" placeholder="description..." onChange={(event) => setRoomDes(event.target.value)} />
            <button className={styles.button} onClick={createRoom}>Create Room</button>
            {rooms.map((roomItem) => {
                return (
                    <div className={styles['room-item']} key={roomItem.id}>
                        <img src={roomItem.image} width="200" height="100" alt="Room Image" />
                        <p>RoomType: {roomItem.roomType}</p>
                        <p>Price: {roomItem.roomPrice}$</p>
                        <p>Bed: {roomItem.bed}</p>
                        <p>Max Guests: {roomItem.maxPeople} people</p>
                        <p>View: {roomItem.view}</p>
                        <p>Size: {roomItem.roomSize}m<sup>2</sup></p>
                        <button className={styles.button} onClick={() => updateRoom(roomItem.id)}>Update Room</button>
                        <button className={styles.button} onClick={() => deleteRoom(roomItem.id)}>Delete Room</button>
                    </div>
                );
            })}
        </div>
    )
}

export default AddData