import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <caption>** Hover over flight for additional detail **</caption>
      <thead>
        <tr>
          <th scope="col">Origin</th>
          <th scope="col">Destination</th>
          <th scope="col">Origin Full Name</th>
          <th scope="col">Destination Full Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((flight) => (
          <tr key={flight.id}>
            <td className="has-details">
              {flight.origin}
              <span className="details">
                Flight Number: {flight.flt_num}
                <br></br> Departure Gate: {flight.scheduled_origin_gate}{" "}
                <br></br> Arrival Gate: {flight.scheduled_destination_gate}{" "}
              </span>
            </td>
            <td>{flight.destination}</td>
            <td>{flight.origin_full_name}</td>
            <td>{flight.destination_full_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
