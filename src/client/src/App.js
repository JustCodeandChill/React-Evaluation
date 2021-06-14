import React, { useState, useEffect } from "react";
import Hobby from "./Hobby";
import axios from "axios";
import { Table } from "semantic-ui-react";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  const renderUser = () => {
    if (!users) return null;
    else {
      return users.map((user) => (
        <Table.Row>
          <Table.Cell style={{ textAlign: "left" }}>{user.username}</Table.Cell>
          <Table.Cell  style={{ textAlign: "right" }}>{user.age}</Table.Cell>
        </Table.Row>
      ));
    }
  };
  return (
    <div className="app">
      <h1>All Users</h1>
      <p>Username and Age</p>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={{ textAlign: "left" }}>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: "right" }}>
              Age
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{renderUser()}</Table.Body>
      </Table>
      <Hobby />
    </div>
  );
};

export default App;
