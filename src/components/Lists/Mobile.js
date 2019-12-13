import React from "react";
import { Row, Col } from "reactstrap";
import MobileItem from "../Item/Mobile";

export default function Desktop(props) {
  const { lists } = props;
  return (
    <Row xs="1">
      {lists.map((item, index) => (
        <Col key={index}>
          <MobileItem item={item} />
        </Col>
      ))}
    </Row>
  );
}
