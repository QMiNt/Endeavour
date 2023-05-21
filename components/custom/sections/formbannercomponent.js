import React from "react";
import { Row, Col, Container, Form } from "reactstrap";
import Image from "next/image";
import banner from "../../../assets/images/form-banners/banner1/1.png";

const FormBannerComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Have your own specific questions?</h1>
              <h6 className="subtitle">
                Write to us anonymously!
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light">
        <section>
          <div id="banner1" className="banner spacer">
            <Container>
              <Row>
                <Col lg="5" md="7" className="align-self-center">
                  <h2 className="title font-bold">
                   Write us your questions
                  </h2>
                  <p className="m-t-40 m-b-30">
                  We are here to answer all your questions within 12 hours of your question being provided to us!
                  we promise you to give answers to your clichiest questions without hesitation with most authentic information suitable to you.
                  </p>
                  <Form className="m-t-40">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your question"
                      className="font-16"
                    />
                    <input
                      type="submit"
                      value="Ask us!"
                      className="bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                    />
                  </Form>
                </Col>
                <Col lg="6" md="5" className="align-self-center ml-auto">
                  <Image
                    src={banner}
                    alt="We are Digital Agency"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormBannerComponent;
