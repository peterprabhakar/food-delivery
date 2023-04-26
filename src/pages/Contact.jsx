

import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

function Contact() {

  const contactNameRef = useRef();
  const contactPhoneRef = useRef();
  const contactEmailRef = useRef();
  const contactMessageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title="Contact">
    <CommonSection title="Contact" />

    <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={contactNameRef}
                  />
                </div>
                
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    required
                    ref={contactPhoneRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={contactEmailRef}
                  />
                </div>
                <div className="form__group">
                  <textarea rows="3" type="text" placeholder="Enter your message"
                    required
                    ref={contactMessageRef}/>
                </div>
                <button type="submit" className="addTOCart__btn">
                  Submit
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Contact