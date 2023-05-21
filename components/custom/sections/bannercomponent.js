/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/staticslider/slider/3.png";
const BannerComponent = () => {
  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              <h1 className="title">Adults</h1>
              <h6 className="subtitle op-8">
              It promotes sexual health by providing knowledge about reproductive health, safe sex practices, and preventing STIs and unwanted pregnancies. It enhances communication and relationships by facilitating open discussions about sexual needs and boundaries. It also helps individuals explore their own pleasure and understand consent, leading to a more satisfying and fulfilling sexual experience.
              </h6>
              <a
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href="D:\Endeavour\components\custom\sections\Adults.js"
              >
                <span>Get answers to your questions!</span>
              </a>
            </Col>
            <Col md="6">
              <Image src={herobanner} alt="herobanner"></Image>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
  );
};

export default BannerComponent;
