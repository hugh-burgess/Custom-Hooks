export default function UserList({ users }) {
  function renderUsers() {
    return users.map((user) => (
      <li>
        My name is {user.firstName} {user.lastName} and I am {user.age} years
        old. Write me! {user.email}
      </li>
    ));
  }

  return <section>{users && renderUsers()}</section>;
}
