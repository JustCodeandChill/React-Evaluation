import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => <div>Home</div>;
import { Table, Dropdown } from "semantic-ui-react";
const About = () => <div>About</div>;

const Hobby = () => {
  const [hobby, setHobby] = useState([]);
  const [choice, setChoice] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/hobbies").then(function (response) {
      console.log(response.data);
      setHobby(response.data);
    });
  }, []);

  const renderHobby = () => {
    if (!hobby) return null;
    else {
      return <Dropdown text="hobby">
        <Dropdown.Menu>
          {hobby.map((item) => (
            <Dropdown.Item key={item + 12}>
              <span onClick={handleOnClick}>
                {item}
              </span>
            </Dropdown.Item>
          ))}

        </Dropdown.Menu>
      </Dropdown>;
    }
  };

  const renderTable = () => {
    if (!choice) return null;
    else {
      return (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{ textAlign: "left" }}>
                Age
              </Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: "right" }}>
                Count
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {choice.map((item) => {
              if (item.count == 0) return null;
              return (
                <Table.Row key={Math.random() * 1000}>
                  <Table.Cell style={{ textAlign: "left" }}>
                    {item.age}
                  </Table.Cell>
                  <Table.Cell style={{ textAlign: "right" }}>
                    {item.count}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      );
    }
  };

  function handleOnClick() {
    axios.get("http://localhost:3000/users/age").then(function (response) {
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
