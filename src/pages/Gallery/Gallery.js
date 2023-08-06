import './Gallery.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GalleryImageCard from './GalleryImageCard';
import $ from 'jquery';

import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';


const Gallery = () => {

    ///api
    const [listRoom, setListRoom] = useState([]);
    const [pageCurrent, setPageCurrent] = useState(1);


    useEffect(() => {
        fetch(
            `https://64b1564e062767bc48260e8d.mockapi.io/api/v1/rooms?page=${pageCurrent}&limit=12`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setListRoom(data);
            });
    }, [pageCurrent]);


    useEffect(() => {

        // layer

        $('.gallery-grid .item').mouseenter(function () {
            $(this).find('.info-layer').css('animation-name', 'infoShow');
        });
        $('.gallery-grid .item').mouseleave(function () {
            $(this).find('.info-layer').css('animation-name', 'infoHide');
        });



        // button
        $(document).ready(function () {
            $('.gallery-grid .item').mouseenter(function () {
                $(this).find('.layer-item').css('animation-name', 'buttonShow');
            });
            $('.gallery-grid .item').mouseleave(function () {
                $(this).find('.layer-item').css('animation-name', 'buttonHide');
            });
        });



        // close image popup when not click on it
        $(document).mouseup(function (e) {
            if (!$('.image-item img').is(e.target) && $('.image-item img').has(e.target).length === 0) {
                $('.image-show').hide();
            }
        });



    }, []);

    const onChangePage: PaginationProps['onChange'] = (page) => {
        console.log(page);
        setPageCurrent(page);
    };

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };


    return (
        <>

            {/* page title */}
            <div className="page-title container-fluid">
                <div className="container" style={{ position: "relative" }}>
                    <p className="title">Grid</p>
                    <p className="page-tree">
                        <span className="home">
                            <a href="index.html">Home</a>
                        </span>
                        <span>
                            <i className="fa fa-angle-right" />
                        </span>
                        <span>Grid</span>
                    </p>
                </div>
            </div>
            {/* end page title */}
            {/* image show */}
            <div className="image-show">
                <div className="image-item">
                    <img src="" />
                </div>
            </div>
            {/* end image show */}
            {/* gallery-grid */}
            <div className="gallery-grid container-fluid">
                <div className="row">
                    <div className="container">
                        <div className="row">


                            {listRoom.map((room, index) => {
                                return (
                                    <GalleryImageCard
                                        image={room.image}
                                    ></GalleryImageCard>
                                )
                            })}

                        </div>
                        <div className="row">
                            {/* <div className="col-12 pagination">
                                <div className="page-block" onClick={() => setPageCurrent(1)}>1</div>
                                <div className="page-block" onClick={() => setPageCurrent(2)}>2</div>
                                <div className="page-block" onClick={() => setPageCurrent(3)}>3</div>
                                <div className="page-block">
                                    <i className="fa fa-angle-right" />
                                </div>
                                <div className="page-block">
                                    <i className="fa fa-angle-double-right" />
                                </div>
                            </div> */}


                        </div>
                        <Pagination
                            showSizeChanger={false}
                            onShowSizeChange={onShowSizeChange}
                            defaultCurrent={3}
                            total={30}
                            pageSize={5}
                            showQuickJumper={true}
                            current={pageCurrent}
                            onChange={onChangePage}
                        />
                    </div>
                </div>
            </div>
            {/* end gallery-grid */}




        </>
    )
}

export default Gallery