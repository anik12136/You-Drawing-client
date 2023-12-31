import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const AllUsers = () => {

        const { data: users = [], refetch } = useQuery([''], async () => {
            const res = await fetch('https://server-assignment-12-anik12136.vercel.app/users')
            return res.json();
        });

            //make admin function
        const handleMakeAdmin = user =>{
            fetch(`https://server-assignment-12-anik12136.vercel.app/users/admin/${user._id}`, {
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
            fetch(`https://server-assignment-12-anik12136.vercel.app/users/instructor/${user._id}`, {
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
        <div>
          <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box"
      >
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-purple-500 text-white">Serial Number</th>
                <th className="py-2 px-4 border-b bg-blue-500 text-white">Name</th>
                <th className="py-2 px-4 border-b bg-green-500 text-white">Email</th>
                <th className="py-2 px-4 border-b bg-purple-500 text-white">Role</th>
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
                  
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
          
        </div>
      );
    };
export default AllUsers;