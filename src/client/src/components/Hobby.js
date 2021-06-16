import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Dropdown } from "semantic-ui-react";
import { apiClient } from "../constant/api";

const Hobby = () => {
  const [hobby, setHobby] = useState([]);
  const [choice, setChoice] = useState("");
  useEffect(() => {
    apiClient.get("/hobbies").then(function (response) {
      setHobby(response.data);
    });
  }, []);

  const renderHobby = () => {
    if (!hobby) return null;
    else {
      return (
        <Dropdown text="hobby">
          <Dropdown.Menu>
            {hobby.map((item) => (
              <Dropdown.Item key={item + Math.random() * 1000}>
                <span onClick={handleOnClick}>{item}</span>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      );
    }
  };

  const renderHeader = () => {
    return (
      <Table.Row>
        <Table.HeaderCell style={{ textAlign: "left" }}>Age</Table.HeaderCell>
        <Table.HeaderCell style={{ textAlign: "right" }}>
          Count
        </Table.HeaderCell>
      </Table.Row>
    );
  };

  const renderBody = () => {
    return choice.map((item) => {
      if (item.count == 0) return null;
      return (
        <Table.Row key={Math.random() * 1000}>
          <Table.Cell style={{ textAlign: "left" }}>{item.age}</Table.Cell>
          <Table.Cell style={{ textAlign: "right" }}>{item.count}</Table.Cell>
        </Table.Row>
      );
    });
  };

  const renderTable = () => {
    if (!choice) return null;
    else {
      return (
        <Table>
          <Table.Header>{renderHeader()}</Table.Header>
          <Table.Body>{renderBody()}</Table.Body>
        </Table>
      );
    }
  };

  function handleOnClick() {
    apiClient.get("/users/age").then(function (response) {
      setChoice(response.data);
    });
  }
  return (
    <div className="app">
      <h1>Age Demographic users with hobby</h1>
      {renderHobby()}
      {renderTable()}
    </div>
  );
};

export default Hobby;
