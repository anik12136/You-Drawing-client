import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from 'framer-motion';


const Dashboard = () => {

  const [checkUser, setCheckUser] = useState([])
  // const [isUser, setIsUser] = useState('isStudent')

  const { user } = useContext(AuthContext);

    // to do load users data

 useEffect(() => {
        // fetch(`http://localhost:8000/users/check/${user?.email}`)
        fetch(`https://server-assignment-12-anik12136.vercel.app/users/check/${user?.email}`)
            .then(res => res.json())
            .then(data => setCheckUser(data))
            // .catch(error => console.error(error))
    }, [user]);


if (checkUser.role === 'admin') {
  
  return (
   <div className="ms-20">
     <div className="drawer lg:drawer-open">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-content flex flex-col items-center justify-center">
{/* Page content here */}
<Outlet></Outlet>
<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

</div>
<div className="drawer-side">
<label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
<ul className="menu p-4 w-80 h-full bg-fuchsia-200 text-base-content">
  {/* Sidebar content here */}

   
  <div className="mx-16">
  <h2 className="text-3xl ms-3">Admin</h2>

  <div>
  <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box"
      >
        <li><Link to="/dashboard/manageClasses">Manage Classes</Link></li>

      </motion.div>
  </div>
  <div>
  <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box"
      >
         <li><Link to="/dashboard/allUsers">Manage Users</Link></li>

      </motion.div>
  </div>
         <div className="divider"></div> 
    </div>  

</ul> 

</div>
</div>
   </div>
);

}


else if (checkUser.role === 'instructor') {
  return (
    <div className="ms-20">
      <div className="drawer lg:drawer-open ">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-content flex flex-col items-center justify-center">
{/* Page content here */}
<Outlet></Outlet>
<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

</div>
<div className="drawer-side">
<label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
<ul className="menu p-4 w-80 h-full bg-fuchsia-200 text-base-content">
  {/* Sidebar content here */}

   
  <div className="mx-16">
         <h2 className="text-3xl ms-3">Instructor</h2>

         <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box"
      >
         <li><Link to="/dashboard/addAClass">Add a Class</Link></li>

      </motion.div>

         <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box"
      >
         <li><Link to="/dashboard/myClasses">My Classes</Link></li>

      </motion.div>
         <div className="divider"></div>
       </div>  

</ul> 

</div>
</div>
    </div>
);

}

else {
  return (
  <div className="ms-20">
      <div className="drawer lg:drawer-open">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-content flex flex-col items-center justify-center">
{/* Page content here */}
<Outlet></Outlet>
<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

</div>
<div className="drawer-side">
<label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
<ul className="menu p-4 w-80 h-full bg-fuchsia-200 text-base-content">
  {/* Sidebar content here */}

   
  <div className="mx-16">
         <h2 className="text-3xl ms-3">Student</h2>

         <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box"
      >
        <li><Link to="/dashboard/mySelectedClass">My Selected Classes</Link></li>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box"
      >
         <li><Link to="/dashboard/myClasses">My Classes</Link></li>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box"
      >
       <li><Link to="/dashboard/payment">Payment</Link></li>

      </motion.div>
        <div className="divider"></div>
      </div>  

</ul> 

</div>
</div>
  </div>
);

}

};

export default Dashboard;