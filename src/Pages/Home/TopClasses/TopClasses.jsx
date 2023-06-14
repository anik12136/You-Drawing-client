import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ClassesCard from '../../Classes/ClassesCard';

const TopClasses = () => {

    const { data: TopClasses = [], refetch } = useQuery([''], async () => {
        const res = await fetch('https://server-assignment-12-anik12136.vercel.app/approved')
        // const res = await fetch('http://localhost:8000/approved')
        return res.json();
    });
    const sixTopClasses = TopClasses.slice(0,6)

    return (
        <div>
            <div className="divider mx-96 mt-10"></div> 
            <h2 className='text-center text-warning text-3xl'>Popular Classes</h2>
            <div className="divider mx-60"></div>
            <div className="grid grid-cols-3 gap-4 justify-center mx-40 my-20">
                {
                    sixTopClasses.map(item => <ClassesCard
                    key={item._id}
                    item={item}
                    ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default TopClasses;