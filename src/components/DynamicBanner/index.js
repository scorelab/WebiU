import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import CountUp from "react-countup"
import { Row, Col } from "react-bootstrap"

export const DynamicBanner = ({
  mainText,
  subText,
  description,
  image,
  countUpListData,
}) => {
  return (
    <div
      className="dynamicBannerBackground"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="dynamicBannerWrap">
        <hr className="dynamicDivider" />
        <p className="dynamicSubText">{subText}</p>
        <p className="dynamicMainHeading">{mainText}</p>
        <p className="dynamicDescription">{description}</p>
        <Row md={4}>
          {countUpListData &&
            countUpListData.map((countUpListData, index) => {
              return (
                <Col key={index}>
                  <hr className="dynamicDivider" />
                  <div className="dynamicDiv">
                    <CountUp
                      className="dynamicCountUp"
                      decimal=","
                      duration={countUpListData.duration}
                      suffix="k"
                      end={countUpListData.end}
                    />
                    <h2 className="dynamicCountText">{countUpListData.text}</h2>
                  </div>
                </Col>
              )
            })}
        </Row>
      </div>
    </div>
  )
}

DynamicBanner.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  countUpListData: PropTypes.string,
}
