import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, name, price, description, img} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${_id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>Service Id: {_id}</h3>
            <h2>This is Service: {name}</h2>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <button onClick={()=>navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;