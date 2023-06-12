import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

    // to do load users data
const isAdmin = true;
const isStudent = false;
const isInstructor = false;

    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {
        isAdmin && 
        <div>
              <h2>Admin</h2>
             <li><Link to="/dashboard/manageClasses">Manage Classes</Link></li>
             <li><Link to="/dashboard/allUsers">Manage Users</Link></li>
             <div className="divider"></div> 
        </div>
         
      }
    
      {
       isStudent &&
       <div>
        <li><Link to="/dashboard/mySelectedClass">My Selected Classes</Link></li>
        <li><Link to="/dashboard/myEnrolledClass">My Enrolled Classes</Link></li>
        <li><Link to="/dashboard/payment">Payment</Link></li>
        <div className="divider"></div>
      </div> 
      }
     
      
      {
        isInstructor &&
        <div>
        <li><Link to="/dashboard/addAClass">Add a Class</Link></li>
        <li><Link to="/dashboard/myClasses">My Classes</Link></li>
        <div className="divider"></div>
      </div>
      }  

    </ul> 
  
  </div>
</div>
    );
};

export default Dashboard;