import React from 'react';

const ClassesCard = ({item}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={item?.ClassImage} alt="Shoes" className='h-[300px]' /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.ClassName}
            <div className="badge badge-secondary">{item.Price}$</div>
          </h2>
          <p>InstructorName: {item.InstructorName}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Available Seats:{item.AvailableSeats}</div> 
            <button className="badge badge-outline">Select Course</button>
          </div>
        </div>
      </div>
    );
};

export default ClassesCard;