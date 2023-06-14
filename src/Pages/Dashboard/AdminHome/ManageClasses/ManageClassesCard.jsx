import React from 'react';

const ManageClassesCard = ({item}) => {

    console.log(item)
    return (
        <div className="card w-[260px] bg-base-100 shadow-xl">
  <figure><img src={item.ClassImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.ClassName}
      <div className="badge badge-secondary">{item.Price}$</div>
    </h2>
    <p>InstructorName: {item.InstructorName}</p>
    <p>Email: {item.InstructorEmail}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Available Seats:{item.AvailableSeats}</div> 
      <div className="badge badge-outline">{item.status}</div>
    </div>
    <div className="card-actions justify-end">
        <button className="badge badge-outline">Approve</button>
        <button className="badge badge-outline">Deny</button>
        <button className="badge badge-outline">feedback</button>
    </div>
  </div>
</div>
    );
};

export default ManageClassesCard;