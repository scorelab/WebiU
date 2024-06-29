import React from "react"
import "./style.sass"
import PropTypes from "prop-types"
import Card from "react-bootstrap/Card"

export const ClickableInfoCard = ({
  image,
  mainText,
  description,
}) => {
  return (
    <Card className="clickableCardWrap" >
      <Card.Img className="clickableCardImage" variant="top" src={image} />
      <Card.Body className="clickableCardBody">
        <Card.Title className="clickableTitle">{mainText}</Card.Title>
        <Card.Text className="clickableText">{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

ClickableInfoCard.propTypes = {
  image: PropTypes.string,
  mainText: PropTypes.string,
  description: PropTypes.string,
}
