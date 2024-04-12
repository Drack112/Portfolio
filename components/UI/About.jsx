/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import SectionSubtitle from './SectionSubtitle'

import classes from '../../styles/about.module.css'

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="" />
            <h3 className="mt-4">Opa!</h3>
            <h3 className="mb-4">Hora de contar um pouco do que eu sei.</h3>
            <p>
              Me chamo João Vitor e sou um desenvolvedor Backend com dois anos
              de experiência. Atualmente, tenho habilidade em construir e dar
              manutenção a sistemas REST, GraphQL e micro serviços, além de
              automatizar ambientes de desenvolvimento com Docker e outras
              ferramentas. Trabalho principalmente com Node.js, utilizando
              frameworks como Adonis, Express e NestJS. Também tenho
              conhecimento em Flask e Django Rest com Python, e uma compreensão
              adicional em Golang com o micro-framework Gin.
            </p>

            <p>Posso ajudar você em:</p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Solução de problemas para o seu Software.
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Sugerir tecnologias eficientes.
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Desenvolver aplicações documentadas, testadas automaticamente
                  e escaláveis.
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Planejar novas implementações futuras para o nosso
                  desenvolvimento.
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">Meus Projetos</Link>
              </button>
            </div>
          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <img src="images/img-01.jpg" alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <img src="images/img-02.jpg" alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <img src="images/img-06.jpg" alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <img src="images/img-03.jpg" alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <img src="images/img-04.jpg" alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <img src="images/img-05.jpg" alt="about-img" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
