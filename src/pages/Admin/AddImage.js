import React from 'react'
import { useState, useEffect } from "react";
import { db } from '../../Firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import firebase from "firebase/compat/app";
import 'firebase/storage';
import 'firebase/firestore';


const AddImage = () => {

    const handleFileChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const [selectedImage, setSelectedImage] = useState(null);

    const [roomImg, setRoomImg] = useState('');

    

      const handleUpload = () => {
        if (selectedImage) {
          const storageRef = firebase.storage().ref("RoomImages");
          const imageRef = storageRef.child(selectedImage.name);
          imageRef
            .put(selectedImage)
            .then(() => {
              console.log('Image uploaded successfully');
              // Retrieve the download URL
              return imageRef.getDownloadURL();
            })
            .then((url) => {
              console.log('Download URL:', url);
              // Save the download URL to Firestore
              saveImageUrlToFirestore(url);
              setRoomImg(url);
              console.log("URL for image", url); // observe the updated value directly
            })
            .catch((error) => {
              console.error('Error uploading image:', error);
            });
        }
      };

    const saveImageUrlToFirestore = (url) => {
        const firestore = firebase.firestore();
        const collectionRef = firestore.collection('Rooms');
        const docRef = collectionRef.doc(); // Auto-generate document ID
        docRef.set({ image: url })
            .then(() => {
                console.log('Image URL saved to Firestore:', docRef.id);
            })
            .catch((error) => {
                console.error('Error saving image URL to Firestore:', error);
            });

    };



    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default AddImage