import React from 'react'

const Footer = () => {
    return (
        <>
            <>
                {/* footer */}
                <div className="container-fluid footer">
                    <div className="row info">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item contact">
                                    <p className="title">Contact Us</p>
                                    <p className="criteria">
                                        Your Email<span>*</span>
                                    </p>
                                    <input type="email" name="" />
                                    <p className="criteria">
                                        Your Name<span>*</span>
                                    </p>
                                    <input type="name" name="" />
                                    <p className="criteria">
                                        Message<span>*</span>
                                    </p>
                                    <textarea defaultValue={""} />
                                    <div className="policy">
                                        <div className="checkbox">
                                            <input type="checkbox" name="" id="check-policy" />
                                        </div>
                                        <div className="words">
                                            <p>
                                                I agree that my submitted data is being collected and stored.
                                                For further details on handling user data, see our
                                                <br />
                                                <span>
                                                    <a href="#">Privacy Policy</a>
                                                </span>
                                            </p>
                                        </div>
                                        <button className="condition-policy">send message</button>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item category">
                                    <p className="title">Categories</p>
                                    <li>
                                        <a href="#">Restaurant and Inn</a>
                                    </li>
                                    <li>
                                        <a href="#">The Gallery</a>
                                    </li>
                                    <li>
                                        <a href="#">The Bedrooms</a>
                                    </li>
                                    <li>
                                        <a href="#">The Menus</a>
                                    </li>
                                    <li>
                                        <a href="#">The Lastest</a>
                                    </li>
                                    <li>
                                        <a href="#">The Story</a>
                                    </li>
                                    <li>
                                        <a href="#">The Detail</a>
                                    </li>
                                    <p className="title" style={{ marginTop: 50 }}>
                                        Connect
                                    </p>
                                    <p className="icon">
                                        <a href="#">
                                            <i className="fab fa-tripadvisor" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-facebook" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </p>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item direction">
                                    <p className="title">Get Directions</p>
                                    <div className="map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d29802.2357104396!2d105.77820092863278!3d20.981431855523436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d20.9548739!2d105.79380719999999!4m5!1s0x3135ad15a3789c51%3A0xa1b9661a09fd952d!2zTWluZFggVGVjaG5vbG9neSBTY2hvb2wgKEhvw6BuZyDEkOG6oW8gVGjDunkpLCAyOSBUMSBIb8OgbmcgxJDhuqFvIFRow7p5IEjDoCBO4buZaSwgSGFub2kgQ2l0eSwgMTAwMDA!3m2!1d21.0079916!2d105.80213049999999!5e0!3m2!1svi!2s!4v1690203536774!5m2!1svi!2s"
                                            width={600}
                                            height={450}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />

                                    </div>
                                    <p className="address">
                                        Cầu Giấy, Hà Nội
                                    </p>
                                    <p className="address">Tel: 0123456789</p>
                                    <p className="address">Email: info@lakeinn.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="container" style={{ height: "100%" }}>
                            <p>
                                <span>
                                    <a href="#" target="_blank">
                                        LAKEINN
                                    </a>{" "}
                                </span>
                                <i className="far fa-copyright" /> 2020. All right reserved.
                            </p>
                        </div>
                    </div>
                </div>
                {/* end footer */}
            </>

        </>
    )
}

export default Footer