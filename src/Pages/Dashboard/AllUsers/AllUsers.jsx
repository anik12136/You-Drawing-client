import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {


        const { data: users = [], refetch } = useQuery([''], async () => {
            const res = await fetch('http://localhost:8000/users')
            return res.json();
        });

            //make admin function
        const handleMakeAdmin = user =>{
            fetch(`http://localhost:8000/users/admin/${user._id}`, {
                method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }

        //make instructor function

        const handleMakeInstructor = user =>{
            fetch(`http://localhost:8000/users/instructor/${user._id}`, {
                method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }



      return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-purple-500 text-white">Serial Number</th>
                <th className="py-2 px-4 border-b bg-blue-500 text-white">Name</th>
                <th className="py-2 px-4 border-b bg-green-500 text-white">Email</th>
                <th className="py-2 px-4 border-b bg-purple-500 text-white">Role</th>
                <th className="py-2 px-4 border-b bg-purple-500 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user,index) => (
                <tr key={user._id}>
                  <td className="py-2 px-4 border-b">{index+1}</td>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td>{ user.role === 'admin' && 'admin' ||
                        user.role === 'instructor' && 'instructor' ||                                    
                        <div>
                             <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-blue-600  text-white ms-2">Make Admin </button>
                             <button onClick={() => handleMakeInstructor(user)}  className="btn btn-ghost bg-green-600  text-white">Make Instructor </button>
                         </div> 
                       }
                       
                  </td>  
                   {/* <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td> */}
                   <td><button  className="btn btn-ghost bg-red-600  text-white mx-2"><FaTrashAlt></FaTrashAlt></button></td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
export default AllUsers;