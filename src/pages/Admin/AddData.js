import React, { useState, useEffect } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';
import { addDoc } from "firebase/firestore";

const AddData = () => {

    //test firebase

    const [newData, setNewData] = useState({});

    const handleChangeInput = (event) => {
        console.log(event.target.value);
        setNewData({
            roomType: event.target.value,
        })
    }

    // const handleAddData = () => {

    // }

    const [todos, setTodos] = useState([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "Rooms"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTodos(newData);
                console.log(todos, newData);
            })

    }

    useEffect(() => {
        fetchPost();
    }, [])


    const addTodo = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Rooms"), {
                ...newData
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    //end test firebase

    return (
        <>
            <div>
                {
                    todos?.map((todo, i) => (
                        <p key={i}>
                            {todo.roomType}
                        </p>
                    ))
                }
                <input type='text' onChange={handleChangeInput}></input> <button onClick={addTodo}>ADD</button>
            </div>
        </>
    )
}

export default AddData