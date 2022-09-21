import React from 'react';
import expart1 from '../../../images/experts/expert-1.jpg';
import expart2 from '../../../images/experts/expert-2.jpg';
import expart3 from '../../../images/experts/expert-3.jpg';
import expart4 from '../../../images/experts/expert-4.jpg';
import expart5 from '../../../images/experts/expert-5.jpg';
import expart6 from '../../../images/experts/expert-6.png';
import Expart from '../Expart/Expart';

const exparts = [
    { id: 1, name: "Will Smith", image: expart1 },
    { id: 2, name: "Crish Rock", image: expart2 },
    { id: 3, name: "Dowan te", image: expart3 },
    { id: 4, name: "Messi Boss", image: expart4 },
    { id: 5, name: "Neimar JR", image: expart5 },
    { id: 6, name: "Xavi asfg", image: expart6 },
]

const Exparts = () => {
    return (
        <div id='experts' className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Our Exparts</h1>
                <div className="row">
                    {
                        exparts.map(expart => <Expart
                            key={expart.id}
                            expartEngineer={expart}
                        ></Expart>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Exparts;