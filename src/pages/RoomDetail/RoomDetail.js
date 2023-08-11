import './RoomDetail.css';

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';


const RoomDetail = () => {

    console.log("Start code!");

    const roomID = useParams();

    console.log(roomID.roomID);

    const [roomList, setRoomList] = useState([]);
    const [roomDetail, setRoomDetail] = useState([]);

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, "Rooms"));
        const roomData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setRoomList(roomData);

        const matchingRoom = roomData.find((room) => room.id === roomID.roomID);
        if (matchingRoom) {
            console.log('displayRoom', matchingRoom);
            setRoomDetail(matchingRoom);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    console.log('roomlist', roomList);
    console.log('roomdetail', roomDetail);

    // comments

    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmitComment = () => {
        // Your comment submission logic
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
                                                Chỉ từ <span> {roomDetail.roomPrice}</span> đồng /đêm
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
                                                    <Link to={`/roomlist`}
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
                                            <textarea placeholder="Comment" defaultValue={""} onChange={(e) => setComment(e.target.value)} />
                                            <input
                                                type="name"
                                                name=""
                                                placeholder="Name *"
                                                className="name"
                                                onChange={
                                                    (e) => {
                                                        setUser(e.target.value);
                                                        console.log('USER', user)
                                                    }

                                                }
                                            />
                                            <input
                                                type="email"
                                                name=""
                                                placeholder="Email *"
                                                className="email"
                                            />
                                            <input
                                                type="text"
                                                name=""
                                                placeholder="Website"
                                                className="web"
                                            />
                                            <button onClick={handleSubmitComment}>post comment</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="right col-xl-4 col-lg-4 col-md-12">
                                    <div className="row" style={{ width: "100%" }}>

                                        <div className="post right-item col-12 rating">
                                            <p className="title">Blogs</p>
                                            <div className="item">
                                                <div
                                                    className="row"
                                                    style={{ marginLeft: 0, marginRight: 0 }}
                                                >
                                                    <div
                                                        className="col-4 image"
                                                        style={{ backgroundImage: "url(img/dining1.jpg)" }}
                                                    />
                                                    <div className="col-8">
                                                        <p className="article">
                                                            <a href="#">Best Beef steak and Grilled vegetables</a>
                                                        </p>
                                                        <p className="rate">
                                                            <span className="star-rate">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </span>
                                                            <span className="number-rate">5.0</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div
                                                    className="row"
                                                    style={{ marginLeft: 0, marginRight: 0 }}
                                                >
                                                    <div
                                                        className="col-4 image"
                                                        style={{ backgroundImage: "url(img/dining2.jpg)" }}
                                                    />
                                                    <div className="col-8">
                                                        <p className="article">
                                                            <a href="#">Best Beef steak and Grilled vegetables</a>
                                                        </p>
                                                        <p className="rate">
                                                            <span className="star-rate">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </span>
                                                            <span className="number-rate">4.8</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slice" />
                                        <div className="tags right-item col-12">
                                            <p className="title">Tags</p>
                                            <p className="item">Asia</p>
                                            <p className="item">Best deals</p>
                                            <p className="item">Cheap Hotels</p>
                                            <p className="item">Discount</p>
                                            <p className="item">Honeymoon</p>
                                            <p className="item">Island</p>
                                        </div>
                                        <div className="slice" />
                                        <div className="slice" />
                                        <div className="search right-item col-12">
                                            <p className="title">Search</p>
                                            <input
                                                type="search"
                                                name=""
                                                placeholder="Enter keyword"
                                                id="right-search"
                                            />
                                            <label htmlFor="right-search">
                                                <i className="fa fa-search" />
                                            </label>
                                        </div>
                                        <div className="slice" />


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

