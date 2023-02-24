import { useSession } from "next-auth/react";
import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Link href="/">Return home</Link>
      <pre>
        <code>{JSON.stringify(session, null, 4)}</code>
      </pre>
    </>
  );
};

export default Page;
