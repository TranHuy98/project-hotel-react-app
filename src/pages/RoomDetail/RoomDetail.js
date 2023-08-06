import './RoomDetail.css';

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const RoomDetail = () => {

    const [roomDetail, setRoomDetail] = useState({});

    const { roomID } = useParams();

    //render

    useEffect(() => {
        fetch(`https://64b1564e062767bc48260e8d.mockapi.io/api/v1/rooms/${roomID}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log("data", data);
                setRoomDetail(data);

                console.log('roomDetail', roomDetail);
            });
    }, []);


    //comments

    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmitComment = () => {
        const review = {
            user: user,
            comment: comment,
        };


        const newRoom = {
            ...roomDetail,
            comments: [...roomDetail.comments, review],
        };

        setRoomDetail(newRoom);

        fetch(
            `https://64b1564e062767bc48260e8d.mockapi.io/api/v1/rooms/${roomID}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(newRoom),
            }
        ).then((response) => {
            console.log(response);
            return response.json();
        });

        console.log('review: ', review);
        console.log('newRoom: ', newRoom);
        console.log('post comment', roomDetail.comment);
    };

    return (
        <>
            <>
                {/* page title */}
                <div className="page-title container-fluid">
                    <div className="container" style={{ position: "relative" }}>
                        <p className="title">Standard Room</p>
                        <p className="page-tree">
                            <span className="home">
                                <a href="index.html">Home</a>
                            </span>
                            <span>
                                <i className="fa fa-angle-right" />
                            </span>
                            <span>Single</span>
                            <span>
                                <i className="fa fa-angle-right" />
                            </span>
                            <span>Standard Room</span>
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
                                                {roomDetail.type}</p>

                                            {/* <p>room image: {roomDetail.image}</p> */}


                                            <p className="price">
                                                Start from <span>${roomDetail.price}</span> /night
                                            </p>
                                        </div>
                                        <div className="criteria left-item">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <p className="item">
                                                        <i className="far fa-check-square" /> Room Type: {roomDetail.bed}
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" /> Max Guests: {roomDetail.maxPeople}
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" /> Room Size: {roomDetail.size}
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" /> Room Faces: {roomDetail.view}
                                                    </p>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <p className="item">
                                                        <i className="far fa-check-square" /> Wifi: Yes
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" /> Breakfast: Yes
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" /> Room Service: Yes
                                                    </p>
                                                    <p className="item">
                                                        <i className="far fa-check-square" /> Airport pickup: No
                                                    </p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="description">
                                                        {roomDetail.description}
                                                    </p>
                                                </div>
                                                <div className="col-12">
                                                    <Link to={`/roomlist`}
                                                        className='back-to-roomlist'>ALL ROOMS</Link>
                                                </div>
                                            </div>
                                        </div>


                                        {roomDetail?.comments?.map((comment, index) => {
                                            return (
                                                <>
                                                    <h2>{comment.comments}</h2>
                                                </>
                                            );
                                        })}
                                        <h1>COMMENTs HERE</h1>


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
                                        <div className="room-category right-item col-12">
                                            <p className="title">Categories</p>
                                            <p className="item">
                                                <i className="fa fa-angle-right" />
                                                <a href="#"> Blog</a>
                                            </p>
                                            <p className="item">
                                                <i className="fa fa-angle-right" />
                                                <a href="#"> Room</a>
                                            </p>
                                            <p className="item">
                                                <i className="fa fa-angle-right" />
                                                <a href="#"> Gallery</a>
                                            </p>
                                            <p className="item">
                                                <i className="fa fa-angle-right" />
                                                <a href="#"> Shop</a>
                                            </p>

                                        </div>
                                        <div className="slice" />
                                        <div className="post right-item col-12">
                                            <p className="title">Recent Posts</p>
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
                                                        <p className="time">
                                                            <span className="date">Feb 26,2016</span>
                                                            <span className="mes">
                                                                <i className="fas fa-comment" /> 0
                                                            </span>
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
                                                        <p className="time">
                                                            <span className="date">Feb 26,2016</span>
                                                            <span className="mes">
                                                                <i className="fas fa-comment" /> 0
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slice" />
                                        <div className="calendar right-item col-12">
                                            <p className="title">Calendar</p>
                                            <div id="calendar-init" />
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

                                        <div className="post right-item col-12 rating">
                                            <p className="title">Rating</p>
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

