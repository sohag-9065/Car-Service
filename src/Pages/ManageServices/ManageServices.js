import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if(proceed){
            console.log(id);
            const url = `https://afternoon-escarpment-23249.herokuapp.com/service/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            });
        }
     }

    return (
        <div className='w-50 mx-auto border p-3 border-3'>
            <h2>Manage your Services.</h2>
            {
                services.map(service => <div key={service._id}> 
                    <h5>{service.name} <button onClick={()=> handleDelete(service._id)} className='ms-3'>X</button></h5>
                </div> )
            }
        </div>
    );
};

export default ManageServices;