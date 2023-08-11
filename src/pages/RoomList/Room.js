import React from 'react'
import { Link } from 'react-router-dom';

const Room = (room) => {

    const { image, type, price, bed, maxPeople, view, size, roomID } = room;

    return (
        <>
            <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="row room-item">
                    <div
                        className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 room-img"
                        style={{ backgroundImage: `url(${String(image)})` }}
                    >
                    
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 room-info">
                        <p className="title">{type}</p>
                        <div className="slice" />
                        <p className="price">
                            Chỉ từ <span className="num">{price}$</span>{" "}
                            <span>/đêm</span>
                        </p>
                        <p className="criteria">
                            <span>
                                <i className="fa fa-angle-right" />
                            </span>{" "}
                            Giường: {bed}
                        </p>
                        <p className="criteria">
                            <span>
                                <i className="fa fa-angle-right"> </i>
                            </span>{" "}
                            Tối đa: {maxPeople} người
                        </p>
                        <p className="criteria">
                            <span>
                                <i className="fa fa-angle-right" />
                            </span>{" "}
                            View: {view}
                        </p>
                        <p className="criteria">
                            <span>
                                <i className="fa fa-angle-right" />
                            </span>{" "}
                            Diện tích: {size}m<sup>2</sup>
                        </p>

                        <Link to={`roomDT/${roomID}`} className='room-item-link'>Xem ngay</Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Room;