import React from "react";
import { get } from "../services/service";
import { post } from "../services/service";

const AdminPage = () => {
  const [tickets, setTickets] = React.useState({});
  const [refresh, setRefresh] = React.useState(false);

  const getTicket = async () => {
    try {
      let response = await get("/messages");
      console.log("error", response.data);
      setTickets(response.data);
    } catch (err) {
      err.json(err.message);
    }
  };

  React.useEffect(
    function () {
      getTicket();
    },
    [refresh]
  );

  return (
    <div className="adminPage">
      <h1>Hello Admin Page</h1>
      {tickets.length > 0 &&
        tickets.map(function (ticket) {
          return (
            <div>
              <h1>Name: {ticket.fullname}</h1>
              <h2>Email: {ticket.email}</h2>
              <h3>Description: {ticket.descprition}</h3>
              <h3>Status: {ticket.status}</h3>
            </div>
          );
        })}

      <label>
        Answer to customer:
        <input type="text" name="desceiption" />
      </label>
      <input type="submit" value="Submit answer" />
    </div>
  );
};

export default AdminPage;
