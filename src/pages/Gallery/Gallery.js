import './Gallery.css';
import React, { useEffect, useState } from 'react';
import GalleryImageCard from './GalleryImageCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { Pagination } from 'antd';


const Gallery = () => {

    const [roomList, setRoomList] = useState([]);
    const [pageCurrent, setPageCurrent] = useState(1);

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, "Rooms"));
        const roomData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setRoomList(roomData);
    };

    useEffect(() => {
        fetchPost();
    }, [pageCurrent]);


    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!location.search) {
            navigate('?page=1', { replace: true });
        }
    }, [location.search, navigate]);

    const onChangePage = (page) => {
        console.log(page);
        setPageCurrent(page);
        navigate(`?page=${page}`);
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
                            {
                                roomList.slice((pageCurrent - 1) * 6, pageCurrent * 6).map((room, index) => {
                                    return (
                                        <GalleryImageCard
                                            image={room.image}
                                        ></GalleryImageCard>
                                    )
                                })
                            }

                        </div>
                        <Pagination
                            showSizeChanger={false}
                            onShowSizeChange={onShowSizeChange}
                            defaultCurrent={1}
                            total={roomList.length}
                            pageSize={6}
                            showQuickJumper={false}
                            current={pageCurrent}
                            onChange={onChangePage}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery