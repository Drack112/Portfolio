import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import SectionSubtitle from './SectionSubtitle'
import Image from 'next/image'

import img01 from '../../public/images/img-01.jpg'
import img02 from '../../public/images/img-02.jpg'
import img03 from '../../public/images/img-03.jpg'

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
              Atualmente eu sou um desenvolvedor Backend de Python, TypeScript,
              e Golang, atualmente estou estudando temas abordando mais o DevOps
              como Kubernetes, Service Mesh, gateways e etc.
            </p>
            <p>
              Sempre gosto de implementar ferramentas para me ajudar no
              desenvolvimento como Docker, plataformas de comunicação como
              Discord, padrões de boas práticas como SOLID, DRY e testes
              automatizados, dependendo da complexidade eu consigo implementar
              Clean Arch e nada que um bom café para impulsionar ☕.
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
                  <Image src={img01} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" />
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
