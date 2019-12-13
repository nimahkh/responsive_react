import React from "react";
import { Row, Col, CardImg } from "reactstrap";
import BoatImage from "../../assets/images/boat-image@2x.png";
import "./Styles/Styles.css";
import Tick from "../../assets/icons/check-material.png";
import ViewDetail from "../../assets/icons/s.png";
import Flash from "../../assets/icons/flash-on-material.png";
import Heart from "../../assets/icons/heart.png";
import Stars from "../../assets/icons/stars.png";

function DesktopItem(props) {
  const { item } = props;

  return (
    <React.Fragment>
      <Row className="boat-card p-0">
        <Col xs={4} className="boat_image">
          <CardImg src={BoatImage} alt="Boat" />
          <span className="recommended"> Zizoo recommended </span>
        </Col>

        <Col>
          {/*top*/}
          <Row className="boat-card-top-bar">
            <Col className="boat-card-top-left p-2" xs={9}>
              <Row>
                <Col xs={10}>
                  {/*left*/}
                  <Row className="pl-3">
                    <h5 className="title mr-2">{item.name}</h5>
                    <span className="year">{item.year}</span>
                  </Row>
                  <Row className="pl-3 city">{item.location}</Row>
                </Col>
                <Col>
                  <img src={Heart} alt="" />
                </Col>
              </Row>
            </Col>
            <Col>
              {/*right*/}
              <Row className="boat-card-top-right">
                <Col className="top-right-col">
                  <Row>
                    <span className="Hot"> HOT </span>
                    <span className="views"> {item.views} Views </span>
                  </Row>
                  <Row>
                    <span className="last24">in the last 24 hours</span>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          {/*Bottom*/}
          <Row>
            {/*left*/}
            <Col xs={8}>
              {/*Features*/}
              <Row>
                <Col className="features p-2">
                  <div className="value">{item.Length}</div>
                  <div className="label"> Length </div>
                </Col>
                <Col className="features p-2">
                  <div className="value">{item.cabins}</div>
                  <div className="label"> Cabins </div>
                </Col>
                <Col className="features p-2">
                  <div className="value">{item.guests}</div>
                  <div className="label"> Guests </div>
                </Col>
              </Row>
              {/*Extras*/}
              <Row className="p-3 extras">
                <Col>
                  <Row>
                    {item.tags.map((tag, index) => (
                      <span key={index} className="tag mr-3">
                        <img src={Tick} alt="" />
                        {tag}
                      </span>
                    ))}
                  </Row>
                  <Row className="mb-2 mt-2">
                    <span className="label bold mr-3">Sale Type</span>
                    <span className="value small"> {item.sail_type} </span>
                  </Row>
                  <Row>
                    <span className="label bold mr-3">Free Extras</span>
                    <span className="value small">{item.free_extras} </span>
                  </Row>
                </Col>
              </Row>
            </Col>
            {/*right*/}
            <Col xs={4}>
              {/*review*/}
              <Row>
                <Col className="separated-col review-col">
                  <Row className="starts">
                    <img src={Stars} alt="" />
                  </Row>
                  <Row className="reviews">
                    <span>{item.reviews} REVIEWS </span>
                  </Row>
                </Col>
              </Row>
              {/*price*/}
              <Row>
                <Col className="separated-col p-2">
                  <Row>
                    <span className="label bold mr-2">From </span>
                    <span className="value"> {item.from}</span>
                    <span className="label bold ml-2">
                      {" "}
                      {item.price_period}{" "}
                    </span>
                  </Row>
                </Col>
              </Row>
              {/*booking*/}
              <Row>
                <Col className="details-col p-2">
                  <Row>
                    <span className="value small direct-booking">
                      <img src={Flash} alt="" />
                      Direct Booking{" "}
                    </span>
                  </Row>
                  <Row>
                    <span className="view-detail">
                      {" "}
                      <img src={ViewDetail} alt="" />{" "}
                    </span>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default DesktopItem;
