import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"
import { Container, Row, Col, Form } from "react-bootstrap"

export const ContactUsThemeFive = ({
  contactListData,
  subText,
  mainText,
  handleContactSubmit,
}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleName = e => setName(e.target.value)
  const handleEmail = e => setEmail(e.target.value)
  const handlePhone = e => setPhone(e.target.value)
  const handleSubject = e => setSubject(e.target.value)
  const handleMessage = e => setMessage(e.target.value)

  return (
    <div className="contactUsFiveWrap">
      <Container>
        <div className="contactFiveHeadingsDiv">
        <p className="contactFiveSubText">{subText}</p>
          <h1 className="contactFiveMainHeading">{mainText}</h1>
        </div>
          
        <Row>
          <Col md={4} className="contactUsFiveLeftCol">
            {contactListData &&
              contactListData.map((contactListData, index) => {
                return (
                  <div key={index}>
                    <p className="contactListDataHeading">{contactListData.detailHeader + ":"} </p>
                    <p className="contactListDataDetail">{contactListData.detail}</p>
                  </div>
                )
              })}
          </Col>
          <Col md={8} className="contactUsFiveRightCol">
            <Container className="contactUsFiveMessageDiv">
              <Form
                onSubmit={handleContactSubmit(name, email, subject, message)}
              >
                <Form.Group controlId="contact-form">
                  <Row>
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        onChange={handleName}
                        className="customFieldFive"
                        required
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        onChange={handleEmail}
                        className="customFieldFive"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="Your Phone"
                        onChange={handlePhone}
                        className="customFieldFive"
                        required
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="Enter E-mail"
                        onChange={handleSubject}
                        className="customFieldFive"
                        required
                      />
                    </Col>
                  </Row>
                  <Form.Control
                     type="text"
                    placeholder="Send Message"
                    className="customFieldFive"
                    onChange={handleMessage}
                    required
                  />
                </Form.Group>
                <button type="submit" className="send-button">
                  SEND
                </button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

ContactUsThemeFive.defaultProps = {
  handleContactSubmit: function() {},
}

ContactUsThemeFive.propTypes = {
  contactListData: PropTypes.object,
  subText: PropTypes.string,
  mainText: PropTypes.string,
  handleContactSubmit: PropTypes.func,
}
