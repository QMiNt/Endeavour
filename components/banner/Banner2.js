import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";

const Banner2 = () => {
  return (
    <>
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              Sex Education is Necessary
            </h1>
            <h4 className="subtitle font-light">
              Get correct information
              <br /> about sex education
            </h4>
            <a
              href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Talk with us
            </a>
            <Link href="/#coming">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                Know yourself
              </a>
            </Link>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
    <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Is it important to learn sex education?</h1>
              <h6 className="subtitle">
              Because of religious boundaries, many communities can’t give sex ed to teens.

Providing Sex Education to adolescents is as important as teaching the other topic. It helps to navigate the relationship in teenagers. Because of inconsistent laws & policies too many youngsters are not getting precise sex education. However, sex education helps teenagers to know their bodies biologically.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner2;
