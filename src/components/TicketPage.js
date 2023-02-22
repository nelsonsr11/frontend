import React from "react";
import { post } from "../services/service";

const TicketPage = () => {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("");

  const ticket = async (e) => {
    e.preventDefault();
    setStatus("Thank you for reaching. We will be in contact with you shortly");
    try {
      let response = await post("/createTicket", {
        fullname: fullname,
        email: email,
        description: description,
      });

      console.log(response);
    } catch (err) {}
  };

  React.useEffect(() => {
    ticket();
  }, []);

  return (
    <div className="ticketPage">
      <h1>
        Welcome to the ticket page. Please add your info and we will be in
        contact with you soon.
      </h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setFullname(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="desceiption"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" onClick={ticket} />
      </form>
      <h3>{status}</h3>
    </div>
  );
};

export default TicketPage;
