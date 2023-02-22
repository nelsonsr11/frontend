import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link to="/ticket-page" className="btn btn-primary">
        Create Ticket
      </Link>
    </div>
  );
};

export default HomePage;
