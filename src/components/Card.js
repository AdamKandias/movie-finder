import React from 'react';

const Card = ({ year, image, title, rate }) => {
    return (
        <div className="card bg-dark text-white h-100 p-0">
            <img className="card-img-top" src={ `${process.env.REACT_APP_BASE_IMAGE_URL}/${image}` } alt="" />
            <div className="card-body">
                <h5 className="card-title text-center text-truncate">{ title }</h5>
                <div className='d-flex justify-content-between mt-4 p-0 align-items-center'>
                    <span className="card-text"><span className='bi bi-star-fill text-warning me-1'></span> { rate }/10</span>
                    <span className='text-muted'>{ year }</span>
                </div>
            </div>
        </div>
    );
};

export default Card;