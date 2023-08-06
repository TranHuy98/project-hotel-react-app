import React from 'react'

const Carousel = () => {
    return (
        <>
            <>
                {/* carousel banner */}
                <div className="container-fluid banner">
                    <div className="row banner-slide">
                        <div
                            className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 banner-item"
                            style={{ backgroundImage: "url(img/banner-img1.jpg)" }}
                        >
                            <div className="title banner-word">
                                <p>Come and Relax</p>
                            </div>
                            <div className="description banner-word">
                                <p>a paradise for sense, vacation for souls</p>
                            </div>
                        </div>
                        <div
                            className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 banner-item"
                            style={{ backgroundImage: "url(img/banner-img2.jpg)" }}
                        >
                            <div className="title banner-word">
                                <p>Celebrate your Love</p>
                            </div>
                            <div className="description banner-word">
                                <p>arrange the wedding to remember forever</p>
                            </div>
                        </div>
                        <div
                            className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 banner-item"
                            style={{ backgroundImage: "url(img/banner-img3.jpg)" }}
                        >
                            <div className="title banner-word">
                                <p>Feast for your Taste</p>
                            </div>
                            <div className="description banner-word">
                                <p>enjoy our perfect homemade dishes and BBQ</p>
                            </div>
                        </div>
                    </div>
                    <div className="prev-banner-box">
                        <span>
                            <i className="fa fa-angle-left" id="prevBanner" />
                        </span>
                    </div>
                    <div className="next-banner-box">
                        <span>
                            <i className="fa fa-angle-right" id="nextBanner" />
                        </span>
                    </div>
                    <div className="booking">
                        <div className="row" style={{ backgroundColor: "#faf9f8" }}>
                            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 item">
                                <p>
                                    Email<span>*</span>
                                </p>
                                <div className="infos">
                                    <input type="email" name="" className="criteria" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 item item-sm">
                                <p>
                                    Room Type<span>*</span>
                                </p>
                                <div className="infos">
                                    <select className="criteria">
                                        <option>Single</option>
                                        <option>Double</option>
                                        <option>Kid</option>
                                        <option>Family</option>
                                        <option>Deluxe</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 item item-md">
                                <p>
                                    Check-in Date<span>*</span>
                                </p>
                                <div className="infos">
                                    <input type="date" name="" className="criteria" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 item item-lg">
                                <p>
                                    Check-out Date<span>*</span>
                                </p>
                                <div className="infos">
                                    <input type="date" name="" className="criteria" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 item item-lg">
                                <p>
                                    Guest<span>*</span>
                                </p>
                                <div className="infos">
                                    <input type="text" name="" className="criteria" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 item item-lg">
                                <p style={{ color: "transparent" }}>A</p>
                                <div className="infos">
                                    <input
                                        type="submit"
                                        name=""
                                        defaultValue="BOOK NOW"
                                        className="criteria sub-btn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end carousel banner */}
            </>

        </>
    )
}

export default Carousel