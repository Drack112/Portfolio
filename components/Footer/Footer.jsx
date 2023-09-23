import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import classes from './footer.module.css'
import Link from 'next/link'

const NAV__LINK = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '#about',
    display: 'Sobre',
  },
  {
    path: '#services',
    display: 'Serviços',
  },
  {
    path: '#portfolio',
    display: 'Portfolio',
  },
  {
    path: '#contact',
    display: 'Contato',
  },
]

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Desenvolvido por João Vitor Alcântara
                Cavalcante.{' '}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
