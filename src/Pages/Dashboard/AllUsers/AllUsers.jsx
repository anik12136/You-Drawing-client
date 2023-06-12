import React from 'react';

const AllUsers = () => {
    const data = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com' },
      ];
    
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-purple-500 text-white">Serial Number</th>
                <th className="py-2 px-4 border-b bg-blue-500 text-white">Name</th>
                <th className="py-2 px-4 border-b bg-green-500 text-white">Email</th>
                <th className="py-2 px-4 border-b bg-purple-500 text-white">Role</th>

                <th className="py-2 px-4 border-b bg-yellow-500 text-white">Action</th>

              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b">{item.id}</td>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.email}</td>
                  <td className="py-2 px-4 border-b">
                    {/* Add your action buttons or links here */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
export default AllUsers;