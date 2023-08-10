import './RoomList.css';
import React, { useEffect, useState } from 'react';
import Room from './Room';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { Pagination } from 'antd';


const RoomList = () => {

  const [roomList, setRoomList] = useState([]);

  const [pageCurrent, setPageCurrent] = useState(1);

  const fetchPost = async () => {

    await getDocs(collection(db, "Rooms"))
      .then((querySnapshot) => {
        const roomData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setRoomList(roomData);
      })

  }

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
      <>
        {/* page title */}
        <div className="page-title container-fluid">
          <div className="container" style={{ position: "relative" }}>
            <p className="title">Rooms</p>
            <p className="page-tree">
              <span className="home">
                <a href="index.html">Home</a>
              </span>
              <span>
                <i className="fa fa fa-angle-right" />
              </span>
              <span>Rooms</span>
            </p>
          </div>
        </div>
        {/* end page title */}

        {/* room content */}
        <div className="container-fluid room-content">
          <div className="row">
            <div className="container">
              <div className="row">
                {roomList.slice((pageCurrent - 1) * 4, pageCurrent * 4).map((room, index) => {
                  return (
                    <Room
                      image={room.image}
                      roomID={room.id}
                      type={room.roomType}
                      price={room.roomPrice}
                      bed={room.bed}
                      maxPeople={room.maxPeople}
                      view={room.view}
                      size={room.roomSize}
                      key={room.id}
                    >

                    </Room>
                  )
                })}

              </div>
              {/* <div className="row">
                <div className="col-12 pagination">
                  <div className="page-block" onClick={() => setPageCurrent(1)}>1</div>
                  <div className="page-block" onClick={() => setPageCurrent(2)}>2</div>
                  <div className="page-block" onClick={() => setPageCurrent(3)}>3</div>
                  <div className="page-block">
                    <i className="fa fa-angle-right" />
                  </div>
                  <div className="page-block">
                    <i className="fa fa-angle-double-right" />
                  </div>
                </div>
              </div> */}

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
        {/* end room content */}
      </>

    </>
  )
}

export default RoomList