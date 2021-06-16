import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { apiClient } from "../constant/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    apiClient.get("/users").then(function (response) {
      setUsers(response.data);
    });
  }, []);
  const renderHeader = () => {
    return (
      <Table.Row>
        <Table.HeaderCell style={{ textAlign: "left" }}>Name</Table.HeaderCell>
        <Table.HeaderCell style={{ textAlign: "right" }}>Age</Table.HeaderCell>
      </Table.Row>
    );
  };

  const renderUser = () => {
    if (!users) return null;
    else {
      return users.map((user) => (
        <Table.Row key={user.username}>
          <Table.Cell style={{ textAlign: "left" }}>{user.username}</Table.Cell>
          <Table.Cell style={{ textAlign: "right" }}>{user.age}</Table.Cell>
        </Table.Row>
      ));
    }
  };

  return (
    <div>
      <h1>All Users</h1>
      <p>Username and Age</p>
      <Table>
        <Table.Header>{renderHeader()}</Table.Header>
        <Table.Body>{renderUser()}</Table.Body>
      </Table>
    </div>
  );
};

export default Users;
