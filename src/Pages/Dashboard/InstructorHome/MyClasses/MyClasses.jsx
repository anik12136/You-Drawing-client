import React, { useContext, useEffect, useState } from 'react';
import MyClassesCard from './MyClassesCard';
import { AuthContext } from '../../../../Provider/AuthProvider';

const MyClasses = () => {
    const [myClass, setMyClass] = useState([]);
    const { user,loading } = useContext(AuthContext);
    

    useEffect(() => {
        fetch(`http://localhost:8000/allClasses/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyClass(data))
    }, [user]);

console.log(myClass)
    return (
        <div>
            <div >
           <div className="grid grid-cols-3 gap-4 justify-center mx-40 my-20">
           {
                myClass.map(cls => <MyClassesCard
                    key={cls._id}
                    cls={cls}
                ></MyClassesCard>)
            }
           </div>           
        </div>
        </div>
    );
};

export default MyClasses;