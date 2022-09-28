import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast} from 'react-toastify';

const CheckOut = () => {
    const {serviceId} =useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // console.log(user.displayName)
    // const [user, setUser] = useState({
    //     name: "Akbar Ali",
    //     email: "akbar@gmail.com",
    //     address: "Tajmohol Road, Dhaka",
    //     phone: "01956346564"
    // });

    // const handleAddressChange = event => {
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {newAddress, ...rest};
    //     setUser(newUser);
    //     console.log(event.target.value);
    //     console.log(address, rest);
    // }

    const handlePlaceOrder = async(event) => {
        event.preventDefault();
        const order = {
            service: service.name,
            email: user.email,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        console.log(order);
        axios.post('https://afternoon-escarpment-23249.herokuapp.com/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast("Your Order Is Booked.");
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto border'>
            <h2 className=' text-center'>Please order : {service.name}</h2>
            <form onSubmit={handlePlaceOrder} >
                <input className='w-100 mb-2' value={user?.displayName} type="text" name='name' placeholder='Name' required disabled readOnly/><br />
                <input className='w-100 mb-2' value={user?.email} type="email" name='email' placeholder='Email' required disabled readOnly/><br />
                <input className='w-100 mb-2' value={service.name} type="text" name='service' placeholder='Service Name' required disabled readOnly/><br />
                <input  className='w-100 mb-2'  type="text" name='address' placeholder='Address' autoComplete="new-password"  required/><br />
                <input className='w-100 mb-2'  type="text" name='phone' placeholder='Phone' autocomplete="new-password" required /><br />
                <input className='btn btn-primary' type="submit" value="Place Order" /><br />
            </form>
        </div>
    );
};

export default CheckOut;