import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, updateDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Booking = () => {

  const roomID = useParams();
  const [roomList, setRoomList] = useState([]);
  const [roomDetail, setRoomDetail] = useState([]);
  const [hasChange, setHasChange] = useState(false);

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, 'Rooms'));
    const roomData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setRoomList(roomData);

    const matchingRoom = roomData.find((room) => room.id === roomID.roomID);
    if (matchingRoom) {
      setRoomDetail(matchingRoom);
      document.title = 'LakeInn - ' + matchingRoom.roomType;
    }
  };

  useEffect(() => {
    fetchPost();

    setHasChange(false);
  }, [hasChange]);

  // date picker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalFee, setTotalFee] = useState(0);
  const [stayTime, setStayTime] = useState(0);

  const calculateDateDifference = (event) => {
    if (startDate && endDate) {
      const diffInMilliseconds = Math.abs(endDate - startDate);
      const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
      console.log('Difference in days:', diffInDays);
      setTotalFee(diffInDays * event.target.value * roomDetail.roomPrice);
    }
  };
  // date picker 

  return (
    <>
      {/* page title */}
      <div className="page-title container-fluid">
        <div className="container" style={{ position: "relative" }}>
          <p className="title">{roomDetail.roomType}</p>
          <p className="page-tree">
            <span className="home">
              <a href="index.html">Home</a>
            </span>
            <span>
              <i className="fa fa-angle-right" />
            </span>
            <span>Booking</span>
            <span>
              <i className="fa fa-angle-right" />
            </span>
            <span>{roomDetail.roomType}</span>
          </p>
        </div>
      </div>
      {/* end page title */}
      {/* detail room */}
      <div className="detail-room container-fluid">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="left col-xl-8 col-lg-8 col-md-12">
                <div className="row" style={{ width: "100%" }}>
                  <div className="room-img left-item">
                    <img src={roomDetail.image} className="bg-replace" />
                    <div className="zoom-layer">
                      <div className="zoom-btn">
                        <i className="far fa-eye" />
                      </div>
                    </div>
                    <div className="img-popup" id="img-popup">
                      <div className="img-box" id="img-box">
                        <img src={roomDetail.image} />
                      </div>
                      <div className="close-popup">
                        <i className="fas fa-times" />
                      </div>
                    </div>
                  </div>
                  <div className="overview left-item">
                    <p className="room-type">
                      {roomDetail.roomType}</p>

                    <p className="price">
                      <span> {roomDetail.roomPrice}</span> $ /đêm
                    </p>
                  </div>
                  <div className="criteria left-item">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <p className="item">
                          <i className="far fa-check-square" />Giường: {roomDetail.bed}
                        </p>
                        <p className="item">
                          <i className="far fa-check-square" />Số người tối đa: {roomDetail.maxPeople}
                        </p>
                        <p className="item">
                          <i className="far fa-check-square" />Diện tích phòng: {roomDetail.roomSize} m<sup>2</sup>
                        </p>
                        <p className="item">
                          <i className="far fa-check-square" />View: {roomDetail.view}
                        </p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <p className="item">
                          <i className="far fa-check-square" />Wifi: Có
                        </p>
                        <p className="item">
                          <i className="far fa-check-square" />Bữa sáng: Có
                        </p>
                        <p className="item">
                          <i className="far fa-check-square" />Dịch vụ: Có
                        </p>
                        <p className="item">
                          <i className="far fa-check-square" />Đưa đón: Không
                        </p>
                      </div>
                      <div className='col-12'>
                        <div className='date-pickers'>
                          <div>

                            <span className='picker-criteria'>Tên khách hàng:</span>
                            <input type='text' placeholder='Nhập tên' className='picker' ></input>
                          </div>
                          <div>

                            <span className='picker-criteria'>Email:</span>
                            <input type='email' placeholder='Nhập email' className='picker' ></input>
                          </div>
                          <div>

                            <span className='picker-criteria'>Ngày nhận phòng:</span>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              placeholderText="Chọn ngày"
                              className='start-picker picker'
                            />
                          </div>
                          <div>

                            <span className='picker-criteria'>Ngày trả phòng</span>
                            <DatePicker
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
                              placeholderText="Chọn ngày"
                              className='end-picker picker'
                            />
                          </div>

                          <div>

                            <span className='picker-criteria'>Số phòng:</span>
                            <input type='number' placeholder='Số phòng' className='picker' onChange={calculateDateDifference}></input>
                          </div>

                          <p className='totalFee'>Tổng: <span className='end-price'>{totalFee}</span> $</p>

                        </div>
                      </div>
                      <div className='col-12'>

                      </div>
                      <div className="col-12">
                        

                        <Popup trigger={<Link
                          className='back-to-roomlist'>ĐẶT NGAY !</Link>} position="right center">
                          <div className='pop-up'>Thành công! Chúng tôi sẽ sớm liên hệ lại với bạn.</div>
                        </Popup>
                      </div>



                    </div>
                  </div>

                </div>
              </div>
              <div className="right col-xl-4 col-lg-4 col-md-12">
                <div className="row" style={{ width: "100%" }}>
                  <div className="tags right-item col-12">
                    <p className="title">Review</p>
                    {/* comment */}
                    <div>
                      {roomDetail.arrayField && roomDetail.arrayField.length > 0 ? (
                        roomDetail.arrayField.map((item, index) => (
                          <div key={index} className='comment-item'>
                            <p className='cm-user'><i className="fas fa-user"></i> {item.user}</p>
                            <p><strong>Email:</strong> <em>{item.userEmail}</em></p>
                            <p><strong>Review:</strong> {item.comment}</p>
                          </div>
                        ))
                      ) : (
                        <p>No review yet</p>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* detail room */}
    </>
  )
}

export default Booking