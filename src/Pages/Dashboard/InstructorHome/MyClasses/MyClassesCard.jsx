import React from 'react';

const MyClassesCard = ({cls}) => {
    console.log(cls)
    return (
      <div className="card w-60 bg-base-100 shadow-xl h-96">
        <figure><img src={cls.ClassImage} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{cls.ClassName}</h2>
            <div>
                <h2>{cls.InstructorName}</h2>
                <p>{cls.InstructorEmail}</p>
            </div>
            <h2>{cls.Price}</h2> 
            <p>{cls.status}</p> 
        </div>
      </div>
    );
};

export default MyClassesCard;