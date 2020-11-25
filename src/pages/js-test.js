import React, { Component, useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CssTest() {
  const [roomId, setRoomId] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [data, setData] = useState([
    {
      id: "",
      roomId: "",
      startTime: "",
      endTime: "",
      title: "",
    },
  ]);

  const checkAvailability = (roomId, startTime, endTime) => {
    fetch("http://localhost:3001/checkAvailability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        roomId: roomId,
        startTime: startTime,
        endTime: endTime,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getBookingsForWeek = (roomId, weekNo) => {
    fetch("http://localhost:3001/getBookingsForWeek", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        roomId: roomId,
        weekNo: weekNo,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <div style={{ margin: "4px" }}>
      <Row>
        {" "}
        <Form>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Room ID</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setRoomId(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setStartTime(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setEndTime(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Form>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => checkAvailability(roomId, startTime, endTime)}>
            checkAvailability
          </Button>{" "}
          <Button
            variant="primary"
            onClick={() => getBookingsForWeek(roomId, 0)}
          >
            To days
          </Button>{" "}
          <Button onClick={() => getBookingsForWeek(roomId, 1)}>
            This week
          </Button>{" "}
          <Button onClick={() => getBookingsForWeek(roomId, 2)}>
            Next week
          </Button>{" "}
        </Col>
      </Row>
      <div>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <span>{item.id}</span>
              <br />
              <span>{item.roomId}</span>
              <br />
              <span>{item.startTime}</span>
              <br />
              <span>{item.endTime}</span>
              <br />
              <span>{item.title}</span>
              <br />
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}

// const getBookingsForWeek = (roomId, weekNo) => {
//   return true;
// };

export default CssTest;
