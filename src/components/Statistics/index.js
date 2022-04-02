import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignal } from "@fortawesome/free-solid-svg-icons"

export const Statistics = ({ header, title, description, data, image }) => {
  return (
    <div className="statistics-component">
      {header ? (
        <div className="header-component">
          <h2>
            <FontAwesomeIcon className="icon-h2" icon={faSignal} /> {header}
          </h2>
        </div>
      ) : null}
      <Container>
        <Row>
          <Col md={6} className="stats-col">
            <h2>{title}</h2>
            <p>{description}</p>
            <Row className="stats-row">
              {data.map((item, index) => (
                <Col md={4} xs={6}>
                  <h2 className="stats-name">{item.stat}</h2>
                  <p className="stats-para">{item.name}</p>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={6}>
            <div className="stats-img-div">
              <img src={image} alt="logo" className="stats-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Statistics.defaultProps = {
  header: "",
  title: "",
  description: "",
  data: [],
  image: "",
}

Statistics.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}
