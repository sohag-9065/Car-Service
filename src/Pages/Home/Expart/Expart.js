import React from 'react';

const Expart = ({ expart }) => {
    const { name, image } = expart;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4  '>
            <div className="card " >
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="btn btn-primary">Go somewhere</p>
                </div>
            </div>
        </div>

    );
};

export default Expart;