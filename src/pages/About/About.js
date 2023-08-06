import React from 'react'

const About = () => {
    return (
        <>
            <>
                {/* page title */}
                <div className="page-title container-fluid">
                    <div className="container" style={{ position: "relative" }}>
                        <p className="title">About</p>
                        <p className="page-tree">
                            <span className="home">
                                <a href="index.html">Home</a>
                            </span>
                            <span>
                                <i className="fa fa-angle-right" />
                            </span>
                            <span>About</span>
                        </p>
                    </div>
                </div>
                {/* end page title */}
                {/* welcome */}
                <div className="container-fluid welcome">
                    <div className="container words">
                        {/* <p class="title">Welcome to the Lake Inn!</p>
			<div class="icon-title">
				<img src="img/icon-title.png">
			</div> */}
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
                {/* introduce rooms 2 */}
                <div className="container-fluid introduce2">
                    <p className="detail">The perfect romantic escape</p>
                    <p className="title">A wedding you will remember forever</p>
                    <div className="book-btn">
                        <a href="#">
                            <input type="submit" name="CHANGE" defaultValue="intersted?" />
                        </a>
                    </div>
                </div>
                {/* end introduce rooms 2 */}
                {/* review */}
                <div className="container-fluid review">
                    <p className="title">Our Guests say</p>
                    <div className="icon-title">
                        <img src="img/icon-title.png" />
                    </div>
                    <div className="container guest">
                        <div className="row review-slide">
                            <div className="col-12 item">
                                <p className="detail">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="guest-info row">
                                    <div className="col-6 info-item">
                                        <div
                                            className="guest-img"
                                            style={{ backgroundImage: "url(img/tourist1.jpg)" }}
                                        />
                                    </div>
                                    <div className="col-6 info-item">
                                        <div className="row">
                                            <div className="col-12 name">
                                                <p>Dylan Dawnson</p>
                                            </div>
                                            <div className="col-12 job">
                                                <p>Tourist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 item">
                                <p className="detail">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="guest-info row">
                                    <div className="col-6 info-item">
                                        <div
                                            className="guest-img"
                                            style={{ backgroundImage: "url(img/tourist2.jpg)" }}
                                        />
                                    </div>
                                    <div className="col-6 info-item">
                                        <div className="row">
                                            <div className="col-12 name">
                                                <p>Dylan Dawnson</p>
                                            </div>
                                            <div className="col-12 job">
                                                <p>Tourist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 item">
                                <p className="detail">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="guest-info row">
                                    <div className="col-6 info-item">
                                        <div
                                            className="guest-img"
                                            style={{ backgroundImage: "url(img/tourist3.jpg)" }}
                                        />
                                    </div>
                                    <div className="col-6 info-item">
                                        <div className="row">
                                            <div className="col-12 name">
                                                <p>Dylan Dawnson</p>
                                            </div>
                                            <div className="col-12 job">
                                                <p>Tourist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end review */}
                {/* check room */}
                <div className="container-fluid check">
                    <div className="container check-items">
                        <div className="row">
                            <div className="col-8">
                                <p className="ad">Free kayaking lessons for our guests!</p>
                                <p className="detail">
                                    Do you fancy kayaking? How about fishing? We always have to offer
                                    something you'll enjoy.
                                </p>
                            </div>
                            <div
                                className="col-4"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <button>
                                    <a href="room-rate.html">check rooms &amp; rates</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end check room */}
            </>

        </>
    )
}

export default About