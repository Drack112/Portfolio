import React from 'react'
import SectionSubtitle from './SectionSubtitle'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
import classes from '../../styles/hero.module.css'

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">Bem-vindo(a)</h2>
              <p>
                Se está procurando um desenvolvedor Backend, você acabou de
                encontrar um :D
              </p>
              <p>
                Me chamo João Vitor e estou pronto para te ajudar no projeto que
                você desejar. Continue descendo a página para saber um pouco
                mais.
              </p>

              <p>Você também pode me encontrar com o nome de Drack.</p>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image
                alt="hero-image"
                src={
                  'https://raw.githubusercontent.com/Drack112/Portfolio/master/public/images/hero.jpeg'
                }
              />

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experiência</h6>
                  <h5 className="mb-0">2 anos</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
