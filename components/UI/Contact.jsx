import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="" />
            <h3 className="mt-4 mb-4">Contato</h3>
            <p>
              Sinta-se a vontade para me chamar para o assunto que te interesse.
              Tanto desenvolvimento, bate papo ou quem sabe uma jogatina :D
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>joaosagrado3@hotmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+55 (11) 94903-2410</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/Drack112">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.instagram.com/vitoralcantara122/">
                <i className="ri-instagram-line"></i>
              </Link>
               <Link href="https://www.linkedin.com/in/jo%C3%A3o-vitor-4bb732229/">
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
