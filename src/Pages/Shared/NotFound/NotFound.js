import React from 'react';
import sleeping from '../../../images/footerbg.jpg'

const NotFound = () => {
    return (
        <div className='my-5'>
            <h1 className='text-primary text-center'>Macanic is Slepping.</h1>
            <img className='w-100' height={500}  src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;