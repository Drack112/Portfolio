import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/portfolio.module.css'
import PortfolioItem from './PortfolioItem'

import portfolioData from '../data/portfolio'

const Portfolio = () => {
  const [filter, setFilter] = useState('Aplicações FullStack')
  const [data, setData] = useState()

  useEffect(() => {
    if (filter === 'Aplicações FullStack') {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter,
      )

      setData(filteredData)
    }

    if (filter === 'Projetos') {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter,
      )

      setData(filteredData)
    }

    if (filter === 'Formações') {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter,
      )

      setData(filteredData)
    }
  }, [filter])

  const active = `${classes.tab__btn__active}`

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="" />
            <h4 className="mt-4">Alguns dos meus trabalhos como dev:</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === 'Aplicações FullStack' ? active : ''
                } secondary__btn text-white`}
                onClick={() => setFilter('Aplicações FullStack')}
              >
                Aplicações FullStack
              </button>
              <button
                className={`${
                  filter === 'Formações' ? active : ''
                } secondary__btn text-white`}
                onClick={() => setFilter('Formações')}
              >
                Formações
              </button>
              <button
                className={`${
                  filter === 'Projetos' ? active : ''
                } secondary__btn text-white`}
                onClick={() => setFilter('Projetos')}
              >
                Projetos
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Portfolio
