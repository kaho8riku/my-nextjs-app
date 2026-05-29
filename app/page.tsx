import Link from "next/link";
import { users } from "./lib/users"; // 💡 同じ階層にあるlibからデータを読み込みます

export default function Home() {
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">Users</h1>
      <ul className="list-disc ml-4">
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} className="text-blue-500 hover:text-blue-700">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}