import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ManageClassesCard from './ManageClassesCard';

const ManageClasses = () => {

    const { data: allClasses = [], refetch } = useQuery([''], async () => {
        // const res = await fetch('http://localhost:8000/instructors')
        const res = await fetch('http://localhost:8000/allClasses')
        return res.json();
    });
console.log(allClasses);
    return (
        <div className="grid grid-cols-3 gap-4 justify-center mx-40 my-20" >
            {
                allClasses.map(item => <ManageClassesCard
                key={item._id}
                item={item}
                ></ManageClassesCard>)
            }
        </div>
    );
};

export default ManageClasses;