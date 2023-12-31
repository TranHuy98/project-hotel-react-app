import './RoomDetail.css';

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, updateDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase';


const RoomDetail = () => {

    // blog
    const [blogList, setBlogList] = useState([]);
    const [pageCurrent, setPageCurrent] = useState(1);

    const fetchBlog = async () => {
        const querySnapshot = await getDocs(collection(db, "Blogs"));
        const blogData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setBlogList(blogData);
    };
    // blog

    const roomID = useParams();
    const [roomList, setRoomList] = useState([]);
    const [roomDetail, setRoomDetail] = useState([]);
    const [hasChange, setHasChange] = useState(false);

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, 'Rooms'));
        const roomData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setRoomList(roomData);

        const matchingRoom = roomData.find((room) => room.id === roomID.roomID);
        if (matchingRoom) {
            setRoomDetail(matchingRoom);
            document.title = 'LakeInn - ' + matchingRoom.roomType;

        }
    };

    useEffect(() => {
        fetchPost();
        fetchBlog();

        setHasChange(false);
    }, [hasChange]);

    const [cm, setCm] = useState('');
    const [user, setUser] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const createListComments = async () => {
        try {
            const collectionRef = doc(db, 'Rooms', roomID.roomID);
            const docSnapshot = await getDoc(collectionRef);
            const existingData = docSnapshot.data();

            let arrayData = [];
            if (existingData && existingData.arrayField) {
                arrayData = existingData.arrayField;
            }

            arrayData.push({
                comment: cm,
                user: user,
                userEmail: userEmail,
            });

            await setDoc(collectionRef, { arrayField: arrayData }, { merge: true });
            console.log('Array field created successfully!');
        } catch (error) {
            console.error('Error creating array field: ', error);
        }
        setHasChange(true);
        document.getElementById('comment-field').value = '';
        document.getElementById('user-field').value = '';
        document.getElementById('email-field').value = '';
    };


    return (
        <>

            <>
                {/* page title */}
                <div className="page-title container-fluid">
                    <div className="container" style={{ position: "relative" }}>
                        <p className="title">{roomDetail.roomType}</p>
                        <p className="page-tree">
                            <span className="home">
                                <a href="index.html">Home</a>
                            </span>
                            <span>
                                <i className="fa fa-angle-right" />
                            </span>
                            <span>Rooms</span>
                            <span>
                                <i className="fa fa-angle-right" />
                            </span>
                            <span>{roomDetail.roomType}</span>
                        </p>
                    </div>
                </div>
                {/* end page title */}
                {/* detail room */}
                <div className="detail-room container-fluid">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="left col-xl-8 col-lg-8 col-md-12">
                                    <div className="row" style={{ width: "100%" }}>
                                        <div className="room-img left-item">
                                            <img src={roomDetail.image} className="bg-replace" />
                                            <div className="zoom-layer">
                                                <div className="zoom-btn">
                                                    <i className="far fa-eye" />
                                                </div>
                                            </div>
                                            <div className="img-popup" id="img-popup">
                                                <div className="img-box" id="img-box">
                                                    <img src={roomDetail.image} />
                                                </div>
                                                <div className="close-popup">
                                                    <i className="fas fa-times" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overview left-item">
                                            <p className="room-type">
                                                {roomDetail.roomType}</p>

                                            <p className="price">
                                                Chỉ từ <span> {roomDetail.roomPrice}</span> $ /đêm
                                            </p>
                                        </div>
                                        <div className="criteria left-item">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <p className="item">
                                                        <i className="far fa-check-square" />Giường: {roomDetail.bed}
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" />Số người tối đa: {roomDetail.maxPeople}
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" />Diện tích phòng: {roomDetail.roomSize} m<sup>2</sup>
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" />View: {roomDetail.view}
                                                    </p>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <p className="item">
                                                        <i className="far fa-check-square" />Wifi: Có
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" />Bữa sáng: Có
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" />Dịch vụ: Có
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" />Đưa đón: Không
                                                    </p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="description">
                                                        {roomDetail.description}
                                                    </p>
                                                </div>
                                                <div className="col-12">
                                                    <Link to={`/booking/${roomID.roomID}`}
                                                        className='back-to-roomlist'>ĐẶT NGAY !</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment left-item">
                                            <p className="title">Add Comments</p>
                                            <p className="note">
                                                Your email address will not be published. Required fields are
                                                marked *
                                            </p>
                                            <textarea id='comment-field' placeholder="Comment" defaultValue={""} onChange={(e) => setCm(e.target.value)} />
                                            <input
                                                id='user-field'
                                                type="name"
                                                name=""
                                                placeholder="Name *"
                                                className="name"
                                                onChange={
                                                    (e) => {
                                                        setUser(e.target.value);
                                                    }

                                                }
                                            />
                                            <input
                                                id='email-field'
                                                type="email"
                                                name=""
                                                placeholder="Email *"
                                                className="email"
                                                onChange={
                                                    (e) => {
                                                        setUserEmail(e.target.value);
                                                    }

                                                }
                                            />
                                            <input
                                                type="text"
                                                name=""
                                                placeholder="Website"
                                                className="web"
                                            />
                                            <button onClick={createListComments}>post comment</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="right col-xl-4 col-lg-4 col-md-12">
                                    <div className="row" style={{ width: "100%" }}>
                                        <div className="post right-item col-12 rating">
                                            <p className="title">Blogs</p>
                                            {blogList.map((blog, index) => {
                                                return (

                                                    <div className="item">
                                                        <div
                                                            className="row"
                                                            style={{ marginLeft: 0, marginRight: 0 }}
                                                        >
                                                            <div
                                                                className="col-4 image"
                                                                style={{
                                                                    backgroundImage: `url(${String(blog.img)})`,
                                                                    height: '65px'
                                                                }}
                                                            />
                                                            <div className="col-8">
                                                                <p className="article">
                                                                    <Link>{blog.title}</Link>
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </div>


                                                )

                                            })}
                                        </div>

                                        <div className="slice" />
                                        <div className="tags right-item col-12">
                                            <p className="title">Review</p>
                                            {/* comment */}
                                            <div>
                                                {roomDetail.arrayField && roomDetail.arrayField.length > 0 ? (
                                                    roomDetail.arrayField.map((item, index) => (
                                                        <div key={index} className='comment-item'>
                                                            <p className='cm-user'><i className="fas fa-user"></i> {item.user}</p>
                                                            <p><strong>Email:</strong> <em>{item.userEmail}</em></p>
                                                            <p><strong>Review:</strong> {item.comment}</p>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>No review yet</p>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* detail room */}
            </>

        </>
    )
}



export default RoomDetail;

