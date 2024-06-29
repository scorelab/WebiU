import React from "react"

import { FooterThemeFive } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 5/FooterThemeFive",
  component: FooterThemeFive,
  argTypes: {
    headingTwo: { control: "text" },
    headingThree: { control: "text" },
    headingOne: { control: "text" },
    facebookProfile: { control: "text" },
    aboutText: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    linksListData: { control: "object" },
    contactListData: { control: "object" },
    socialLinks: { control: "object" },
  },
}

export const footerthemefive = args => <FooterThemeFive {...args} />

footerthemefive.args = {
  aboutText:
    "The goal of our research is to generate computing solutions through identifying low cost methodologies.",
  headingTwo: "Workshop",
  headingThree: "Our Feed",
  headingOne: "Contact",
  linksListData: [
    { linkName: "Compliance", linkUrl: "#" },
    { linkName: "Score Projects series", linkUrl: "#" },
    { linkName: "Forum Speaker Series", linkUrl: "#" },
    { linkName: "Tedx Moscow ", linkUrl: "#" },
  ],
  contactListData: [
    {
      detail: "184 Main Collins Street",
      link: "#",
    },
    { detail: "+(226) 446 9371", link: "#" },
    { detail: "info@scorelab.org", link: "#" },
    { detail: "scorelab.org", link: "#" },
  ],
  socialLinks: {
    facebook: "#",
    twitter: "#",
    github: "#",
    linkedin: "#",
  },
  facebookProfile: "SCoRe.Lab.Org",
  width: "200px",
  height: "150px",
}
