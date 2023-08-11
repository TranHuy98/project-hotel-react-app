import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <>
                {/* header */}
                <div className="container-fluid header-box">
                    <div className="row header-info">
                        <div className="container">
                            <div className="row" style={{ position: "relative" }}>
                                <p className="info">
                                    <span>
                                        <a href="#">
                                            <i className="fa fa-phone" /> 0123456789
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#">
                                            <i className="fas fa-envelope" /> info@lakeinn.com
                                        </a>
                                    </span>
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
                        </div>
                    </div>
                    <div className="row header">
                        <div className="container">
                            <div className="row forResLogo" style={{ position: "relative" }}>
                                <a href="index.html">
                                    <img src="/img/logo.webp" />
                                </a>
                                <div className="menu">
                                    <li>

                                        <NavLink to='/' className='title'>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>

                                        <NavLink to='/roomlist' className='title'>
                                            Room
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/bloglist' className='title'>
                                            Blogs
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/gallery' className='title'>
                                            Gallery
                                        </NavLink>
                                    </li>
                                   
                                    {/* <li>
                                        <NavLink to='/edit' className='title'>
                                            Edit Data
                                        </NavLink>
                                    </li> */}
                                    
                                </div>
                                {/* res header button */}
                                <div className="headerBtn">
                                    <div className="box" id="box1">
                                        <div className="line1 line" />
                                        <div className="line2 line" />
                                        <div className="line3 line" />
                                    </div>
                                    <div className="box" id="box2">
                                        <div className="line4 line" />
                                        <div className="line5 line" />
                                        <div className="line6 line" />
                                    </div>
                                    <div className="box" id="box3">
                                        <div className="line7 line" />
                                        <div className="line8 line" />
                                        <div className="line9 line" />
                                    </div>
                                </div>
                                {/* end res header button */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* end header */}
                {/* resHeader */}
                <div className="resHeader container-fluid" id="resHeader">
                    <div className="row">
                        <div className="hidden-drop-menu" id="dropMenu">
                            <div className="col-12 itemBox">
                                <div className="pre-hid">
                                    Home{" "}
                                    <span>
                                        <i className="fa fa-angle-down" />
                                    </span>
                                </div>
                                <div className="hid-item container">
                                    <div className="row">
                                        <div className="child-menu each">
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="index.html">Home 1</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="#">Home 2</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 itemBox">
                                <div className="pre-hid">
                                    Features{" "}
                                    <span>
                                        <i className="fa fa-angle-down" />
                                    </span>
                                </div>
                                <div className="hid-item container">
                                    <div className="row">
                                        <div className="child-menu each">
                                            <div className="col-12">
                                                <div className="hid-child pre-hid-child">
                                                    Pages{" "}
                                                    <span>
                                                        <i className="fa fa-angle-down" />
                                                    </span>
                                                </div>
                                                <div className="hid-item container">
                                                    <div className="row">
                                                        <div className="grandchild-menu each">
                                                            <div className="col-12">
                                                                <div className="hid-child">
                                                                    <a href="about.html">about</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="hid-child">
                                                                    <a href="our-team.html">team</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="hid-child">
                                                                    <a href="#">team members</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="hid-child">
                                                                    <a href="contact.html">contact</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="#">typography</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="#">short codes</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="#">video tutorials</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="#">supports</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="#">404</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 itemBox  ">
                                <div className="pre-hid">
                                    <a href="room-rate.html">room &amp; rate</a>
                                </div>
                            </div>
                            <div className="col-12 itemBox  ">
                                <div className="pre-hid">
                                    blog{" "}
                                    <span>
                                        <i className="fa fa-angle-down" />
                                    </span>
                                </div>
                                <div className="hid-item container">
                                    <div className="row">
                                        <div className="child-menu each">
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="#">classic</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child pre-hid-child">
                                                    <a href="#">
                                                        mansory{" "}
                                                        <span>
                                                            <i className="fa fa-angle-down" />
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="hid-item container">
                                                    <div className="row">
                                                        <div className="grandchild-menu each">
                                                            <div className="col-12">
                                                                <div className="hid-child">
                                                                    <a href="#">mansory columns 2</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="hid-child">
                                                                    <a href="#">mansory columns 3</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child pre-hid-child">
                                                    <a href="#">
                                                        portfolio{" "}
                                                        <span>
                                                            <i className="fa fa-angle-down" />
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="hid-item container">
                                                    <div className="row">
                                                        <div className="grandchild-menu each">
                                                            <div className="col-12">
                                                                <div className="hid-child">
                                                                    <a href="#">portfolio columns 2</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="hid-child">
                                                                    <a href="check-article.html">portfolio columns 3</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="#">post formats</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 itemBox  ">
                                <div className="pre-hid">
                                    Gallery{" "}
                                    <span>
                                        <i className="fa fa-angle-down" />
                                    </span>
                                </div>
                                <div className="hid-item container">
                                    <div className="row">
                                        <div className="child-menu each">
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="gallery-grid.html">grid</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="#">mansory</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="hid-child">
                                                    <a href="#">cobbles</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 itemBox  ">
                                <div className="pre-hid hid-item">
                                    <a href="#">shop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end resHeader */}
            </>

        </>
    )
}

export default Navigation