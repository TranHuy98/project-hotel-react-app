import './RoomList.css';
import React, { useEffect, useState } from 'react';
import Room from './Room';

const RoomList = () => {

  const [listRoom, setListRoom] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);

  useEffect(() => {
    fetch(
      `https://64b1564e062767bc48260e8d.mockapi.io/api/v1/rooms?page=${pageCurrent}&limit=6`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListRoom(data);
      });
  }, [pageCurrent]);

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
                {listRoom.map((room, index) => {
                  return (
                    <Room
                      image={room.image}
                      roomID={room.id}
                      type={room.type}
                      price={room.price}
                      bed={room.bed}
                      maxPeople={room.maxPeople}
                      view={room.view}
                      size={room.size}
                    >

                    </Room>
                  )
                })}

              </div>
              <div className="row">
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
              </div>
            </div>
          </div>
        </div>
        {/* end room content */}
      </>

    </>
  )
}

export default RoomList