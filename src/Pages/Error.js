import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <section className="">
      <div className="">
        <h1 className="error">oops! it's a dead end</h1>
        <Link to="/" className="">
          back home
        </Link>
      </div>
    </section>
  );
}
