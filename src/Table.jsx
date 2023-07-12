import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Origin</th>
          <th>Destination</th>
          <th>Full Name</th>
        </tr>
        {data.map((flight) => (
          <tr key={flight.id}>
            <td>{flight.origin}</td>
            <td>{flight.destination}</td>
            <td>{flight.origin_full_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
