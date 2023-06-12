import React from 'react';

const InstructorCard = ({instructor}) => {
    console.log(instructor)
    return (
      <div className="card w-96 bg-base-100 shadow-xl h-96">
        <figure><img src={instructor.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{instructor.name}</h2>
         <p>{instructor.email}</p>  
        </div>
      </div>
    );
};

export default InstructorCard;