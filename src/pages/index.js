import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Home Page</h1>
      <Link to="https://converse.co.kr/index.html"> 컨버스 카테고리 </Link>
      <Link to="/test"> test </Link>
      <Link to="/about"> about </Link>
      <Link to="/test-space"> test-space </Link>
    </main>
  );
};

export default IndexPage;
