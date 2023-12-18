import Link from "next/link";
import React from "react";

const User = async () => {
  interface User {
    name: string;
    id: number;
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await res.json();
  return (
    <>
      <div>User</div>
      <Link href="/">Home</Link>
      {data.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </>
  );
};

export default User;
