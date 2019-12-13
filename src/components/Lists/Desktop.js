import React from "react";
import { Row, Col } from "reactstrap";
import DesktopItem from "../Item/Desktop";

export default function Desktop(props) {
  const { lists } = props;
  return (
    <Row xs="1">
      {lists.map((item, index) => (
        <Col key={index}>
          <DesktopItem item={item} />
        </Col>
      ))}
    </Row>
  );
}
