import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link className="block" href="/posts">
        Go to posts page
      </Link>
      <Link className="block" href="/profile">
        Go to profile
      </Link>
    </div>
  );
}
