import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1 style={{ fontSize: "100px" }}>HomePage</h1>

      <div>
        <Link href='/folder' style={{ fontSize: "100px" }}>
          Folder 페이지로
        </Link>
      </div>

      <div>
        <Link href='/shared' style={{ fontSize: "100px" }}>
          Shared 페이지로
        </Link>
      </div>
    </>
  );
};

export default Home;
