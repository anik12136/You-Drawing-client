import React from 'react';
import InstructorCard from '../../Instructors/instructorCard';
import { useQuery } from '@tanstack/react-query';

const TopInstructor = () => {

    const { data: topInstructors = [] } = useQuery([''], async () => {
        // const res = await fetch('http://localhost:8000/instructors')
        const res = await fetch('https://server-assignment-12-anik12136.vercel.app/instructors')
        return res.json();
    });
   const sixTopInstructor = topInstructors.slice(0,6)
    return (
        <div>
           <div className="divider mx-96 mt-10"></div> 
            <h2 className='text-center text-warning text-3xl'>Popular Instructors</h2>
            <div className="divider mx-60"></div> 

            <div className="grid grid-cols-3 gap-4 justify-center mx-40 my-20">
            {
                sixTopInstructor.map(instructor =><InstructorCard
                key={instructor._id}
                instructor={instructor}
                ></InstructorCard>)
            }
        </div>
        </div>
    );
};

export default TopInstructor;