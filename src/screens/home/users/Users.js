import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () =>
      fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.users));

    fetchUsers();
  }, []);

  console.log(users, "users data");

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>
            {user.firstName} {user.lastName}
          </h2>

          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;