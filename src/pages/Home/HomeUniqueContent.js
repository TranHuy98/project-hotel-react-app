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
                {/* dining */}
                <div className="container-fluid dining">
                    <div className="container words">
                        <p className="title">Exceptional dining</p>
                        <div className="icon-title">
                            <img src="img/icon-title.png" />
                        </div>
                        <p className="detail">
                            On our scenic, quiet property, you will be treated to idyllic views of
                            Beautiful Lake and its glistening water, our guardian mountains in the
                            distance and luscious gardens.
                        </p>
                    </div>
                    <div className="images container">
                        <div className="row dining-slide">
                            <div
                                className="col-12 dining-item"
                                style={{ backgroundImage: "url(img/dining1.jpg)" }}
                            >
                                <div className="info">
                                    <p className="title">Special Feast Menu</p>
                                    <p className="detail">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-12 dining-item"
                                style={{ backgroundImage: "url(img/dining2.jpg)" }}
                            >
                                <div className="info">
                                    <p className="title">Best Beef steak and Grilled vegetables</p>
                                    <p className="detail">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-12 dining-item"
                                style={{ backgroundImage: "url(img/dining3.png)" }}
                            >
                                <div className="info">
                                    <p className="title">Sandwich, Tapas with Grilled chicken</p>
                                    <p className="detail">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end dining */}
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
                {/* blogs */}
                <div className="container-fluid blogs">
                    <div className="container title">
                        <p>From Blogs</p>
                        <div className="icon-title">
                            <img src="img/icon-title.png" />
                        </div>
                    </div>
                    <div className="container info">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="itemBox">
                                    <div className="item">
                                        <div
                                            className="img"
                                            style={{ backgroundImage: "url(img/dining1.jpg)" }}
                                        />
                                        <div className="slice" />
                                        <p className="info-title">Lake House</p>
                                        <p className="time">
                                            Feb 23,2016{" "}
                                            <span>
                                                <i className="fas fa-comment" /> 0
                                            </span>
                                        </p>
                                        <div className="slice" />
                                        <p className="detail">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <p className="more">
                                            <a href="detail-article.html">Read More</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="itemBox">
                                    <div className="item">
                                        <div
                                            className="img"
                                            style={{ backgroundImage: "url(img/dining1.jpg)" }}
                                        />
                                        <div className="slice" />
                                        <p className="info-title">Lake House</p>
                                        <p className="time">
                                            Feb 23,2016{" "}
                                            <span>
                                                <i className="fas fa-comment" /> 0
                                            </span>
                                        </p>
                                        <div className="slice" />
                                        <p className="detail">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <p className="more">
                                            <a href="detail-article.html">Read More</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="itemBox">
                                    <div className="item">
                                        <div
                                            className="img"
                                            style={{ backgroundImage: "url(img/dining1.jpg)" }}
                                        />
                                        <div className="slice" />
                                        <p className="info-title">Lake House</p>
                                        <p className="time">
                                            Feb 23,2016{" "}
                                            <span>
                                                <i className="fas fa-comment" /> 0
                                            </span>
                                        </p>
                                        <div className="slice" />
                                        <p className="detail">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <p className="more">
                                            <a href="detail-article.html">Read More</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="itemBox">
                                    <div className="item">
                                        <div
                                            className="img"
                                            style={{ backgroundImage: "url(img/dining1.jpg)" }}
                                        />
                                        <div className="slice" />
                                        <p className="info-title">Lake House</p>
                                        <p className="time">
                                            Feb 23,2016{" "}
                                            <span>
                                                <i className="fas fa-comment" /> 0
                                            </span>
                                        </p>
                                        <div className="slice" />
                                        <p className="detail">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <p className="more">
                                            <a href="detail-article.html">Read More</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-btn">
                            <a href="check-article.html">
                                <input type="submit" name="" defaultValue="go to the blog" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* end blogs */}
            </>

        </>
    )
}

export default HomeUniqueContent