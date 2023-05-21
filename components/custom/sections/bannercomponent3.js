/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/staticslider/slider/1.png";
const BannerComponent3 = () => {
  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
            
              <h1 className="title">Pre-Teens</h1>
              <h6 className="subtitle op-8">
              Sex education is important for pre-teens because it provides accurate information about their bodies and sexuality, promoting understanding and reducing anxiety. It teaches personal safety, including consent and recognizing and reporting abuse. Additionally, it helps develop healthy attitudes towards relationships, fostering positive interactions and preventing harmful dynamics.
              </h6>
              <a
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href="/preTeens"
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

export default BannerComponent3;
