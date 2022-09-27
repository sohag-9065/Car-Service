import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setorders] = useState([]);
    useEffect(()=> {
        const getOrders = async() => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const {data} = await axios.get(url);
            setorders(data);
        }
        getOrders();
        
    },[user])

    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
        </div>
    );
};

export default Order;