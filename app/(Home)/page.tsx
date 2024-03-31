import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Link href='/folder'>Folder 페이지로</Link>
      <Link href='/shared'>Shared 페이지로</Link>
    </>
  );
};

export default Home;
