import React from 'react'

const GalleryImageCard = (room) => {

    const { image, type, price, bed, maxPeople, view, size, roomID } = room;
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 item">
                <div className="image">
                    <img src={image} className="bg-replace" />
                </div>
                <div className="info-layer">
                    <div className="zoom layer-item">
                        <i className="fas fa-search" />
                    </div>
                    <div className="detail layer-item">
                        <a href="detail-article.html">
                            <i className="fas fa-link" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryImageCard