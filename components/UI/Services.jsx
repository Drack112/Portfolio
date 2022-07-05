import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="DevOps" icon="ri-apps-line" />

                <ServicesItem title="Monitoramento" icon="ri-computer-line" />
              </div>
              <ServicesItem
                title="Desenvolvimento Backend"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Posso te entregar um sistema" />
            <h3 className="mb-0 mt-1">Responsivo</h3>
            <h3 className="mb-4">Escalável</h3>
            <h3 className="mb-4">E de fácil manutenção</h3>
            <p>
              Tanto APIs REST simples quanto aplicativos integrados a Logger,
              Cache, autenticação, código limpo e sempre focado ao
              desenvolvimento em equipe usando ferramentas para auxiliar em
              versionamento, gestor de dependências e outros serviços.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
