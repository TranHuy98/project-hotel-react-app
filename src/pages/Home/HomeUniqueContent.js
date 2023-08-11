import React from 'react'

const HomeUniqueContent = () => {
    return (
        <>
            <>
                {/* welcome */}
                <div className="container-fluid welcome">
                    <div className="container words">
                        <p className="title">Welcome to the Lake Inn!</p>
                        <div className="icon-title">
                            <img src="img/icon-title.png" />
                        </div>
                        <p className="short-des">
                            We are pleased to be your premier breakfast and bed for rest, activities
                            and nature on Beautiful Lake.
                        </p>
                    </div>
                    <div className="container images">
                        <div className="row">
                            <div
                                className="col-xl-8 col-lg-12 col-md-12 itemBox"
                                style={{ height: 400 }}
                            >
                                <div
                                    className="item"
                                    style={{ backgroundImage: "url(img/greeting-img1.jpg)" }}
                                />
                            </div>
                            <div className="col-xl-4 col-lg-12 col-md-12">
                                <div className="row">
                                    <div
                                        className="col-xl-12 col-lg-6 col-md-12 itemBox"
                                        style={{ height: 200 }}
                                    >
                                        <div
                                            className="item"
                                            style={{ backgroundImage: "url(img/greeting-img2.jpg)" }}
                                        />
                                    </div>
                                    <div
                                        className="col-xl-12 col-lg-6 col-md-12 itemBox"
                                        style={{ height: 200 }}
                                    >
                                        <div
                                            className="item"
                                            style={{ backgroundImage: "url(img/greeting-img3.jpg)" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container detail">
                        <p>
                            Smithhammer House at Terry Point is the perfect New Hampshire Inn. with
                            nature at our doorstep and many attractions nearby. On our scenic, quiet
                            property, you will be treated to idyllic views of Beautiful Lake and its
                            glistening water, our guardian mountains in the distance and luscious
                            gardens.
                        </p>
                        <div className="more">
                            <a href="about.html">
                                <input type="submit" name="" defaultValue="more about us" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* end welcome */}
                {/* introduce rooms */}
                <div className="container-fluid introduce">
                    <p className="title">Feel yourself at home</p>
                    <p className="detail">Book today and get 7% discount</p>
                    <div className="book-btn">
                        <a href="room-rate.html">
                            <input type="submit" name="" defaultValue="our rooms & rates" />
                        </a>
                    </div>
                </div>
                {/* end introduce rooms */}
                
                {/* stats */}
                <div className="container-fluid stats">
                    <div className="container title">
                        <p>Numbers we are proud of</p>
                        <div className="icon-title">
                            <img src="img/icon-title.png" />
                        </div>
                    </div>
                    <div className="container info">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="itemBox">
                                    <div className="item">
                                        <p className="number">12</p>
                                        <div className="slice" />
                                        <p className="criteria">Luxury Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="itemBox">
                                    <div className="item">
                                        <p className="number">43</p>
                                        <div className="slice" />
                                        <p className="criteria">Dining Options</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="itemBox">
                                    <div className="item">
                                        <p className="number">854</p>
                                        <div className="slice" />
                                        <p className="criteria">Happy Guests</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="itemBox">
                                    <div className="item">
                                        <p className="number">9.5</p>
                                        <div className="slice" />
                                        <p className="criteria">Average Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end stats */}
                
            </>

        </>
    )
}

export default HomeUniqueContent