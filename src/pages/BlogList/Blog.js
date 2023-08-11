import React from 'react'
import { Link } from 'react-router-dom';

const Blog = (blog) => {

  const {image, title, description, blogID} = blog;
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="itemBox">
          <div className="item">
            <div
              className="img"
              style={{ backgroundImage: `url(${String(image)})` }}
            />
            <div className="slice" />
            <p className="info-title">{title}</p>
            <p className="time">
              Feb 23,2016{" "}
              <span>
                <i className="fas fa-comment" /> 0
              </span>
            </p>
            <div className="slice" />
            <p className="detail">
              {description}
            </p>
            <Link to={`blogDT/${blogID}`} className='room-item-link'>Xem ngay</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog