import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import CompanyLogo from "../../../static/images/main-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

export const FooterThemeFive = ({
  headingTwo,
  headingThree,
  headingOne,
  aboutText,
  linksListData,
  contactListData,
  socialLinks,
  facebookProfile,
  width,
  height,
}) => {
  const { facebook, twitter, github, linkedin } = socialLinks

  const facebookEmbedLink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F
                             ${facebookProfile}%2F&tabs=timeline&width=340&height=500&small_header=false&
                             adapt_container_width=true&hide_cover=false&show_facepile=true&appId`

  return (
    <footer class="footerThemeFive-section">
      <div class="container">
        <div class="footerThemeFive-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 mb-30">
              <div class="footerThemeFive-widget">
                <div class="footerThemeFive-logo">
                  <a href="#">
                    <img src={CompanyLogo} class="img-fluid" alt="logo" />
                  </a>
                </div>
                <div class="footerThemeFive-text">
                  <p>{aboutText}</p>
                </div>
                <div class="text-left">
                  <div class="footerThemeFive-menu">
                    <div className="footerFive-social-icons-container">
                      <a href={facebook}>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="footerThemeFive-social-icon "
                        />
                      </a>
                      <a href={twitter}>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="footerThemeFive-social-icon "
                        />
                      </a>
                      <a href={github}>
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="footerThemeFive-social-icon "
                        />
                      </a>
                      <a href={linkedin}>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="footerThemeFive-social-icon "
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 mb-30">
              <div class="footerThemeFive-widget">
                <div class="footerThemeFive-widget-heading">
                  <h3>{headingOne}</h3>
                </div>
                <ul>
                  {contactListData &&
                    contactListData.map((contactListData, index) => {
                      return (
                        <li key={index}>
                          <a href={contactListData.link}>
                            {contactListData.detail}
                          </a>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 mb-30">
              <div class="footerThemeFive-widget">
                <div class="footerThemeFive-widget-heading">
                  <h3>{headingTwo}</h3>
                </div>
                <ul>
                  {linksListData &&
                    linksListData.map((linksListData, index) => {
                      return (
                        <li key={index}>
                          <a href={linksListData.linkUrl}>
                            {linksListData.linkName}
                          </a>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 mb-50">
              <div class="footerThemeFive-widget">
                <div class="footerThemeFive-widget-heading">
                  <h3>{headingThree}</h3>
                  <div className="embed-facebook">
                    <iframe
                      src={facebookEmbedLink}
                      width={width}
                      height={height}
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameborder="0"
                      allowfullscreen="true"
                      title="Facebook-Profile"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div class="footer-five-copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="footer-five-copyright-text">
                <p>Copyright ©2022 All rights reserved by SCoRe Lab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

FooterThemeFive.propTypes = {
  headingTwo: PropTypes.string,
  headingThree: PropTypes.string,
  headingOne: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  facebookProfile: PropTypes.string,
  aboutText: PropTypes.string,
  socialLinks: PropTypes.object,
  linksListData: PropTypes.object,
  contactListData: PropTypes.object,
}
