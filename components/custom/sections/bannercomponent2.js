/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/staticslider/slider/2.png";
const BannerComponent2 = () => {
  return (
    <div>
      <div className="static-slider10" style={{background:"#607df9"}}>
        <Container>
          <Row className="">
          <Col md="6">
              <Image src={herobanner} alt="herobanner"></Image>
            </Col>
            <Col md="6" className="align-self-center ">
          
              <h1 className="title">Teens</h1>
              <h6 className="subtitle op-8">
              Sex education is highly important for teenagers due to several key reasons. Firstly, it provides them with accurate and comprehensive information about their bodies, reproductive systems, and sexual health. This knowledge empowers teenagers to make informed decisions regarding their sexual behavior and relationships.
              </h6>
              <a
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>Get answers t6o your questions!</span>
              </a>
            </Col>
            {/* <Col md="6">
              <Image src={herobanner} alt="herobanner"></Image>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent2;
