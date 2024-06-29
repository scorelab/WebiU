import React from "react"

import { ContactUsThemeFive } from "./index"

import "bootstrap/dist/css/bootstrap.css"

import { action } from "@storybook/addon-actions"

export default {
  title: "Theme 5/ContactUsThemeFive",
  component: ContactUsThemeFive,
  argTypes: {
    subText: { control: "text" },
    mainText: { control: "text" },
    contactListData: { control: "object" },
    handleContactSubmit: { control: "function" },
  },
}

export const contactusthemefive = args => (
  <ContactUsThemeFive
    {...args}
    handleContactSubmit={action("contact submit")}
  />
)

contactusthemefive.args = {
  subText: "Have Question ?",
  mainText: "Contact us",
  contactListData: [
    {
      detailHeader: "Address",
      detail: "184 Main Collins Street",
    },
    { detailHeader: "Phone", detail: "(226) 446 9371" },
    { detailHeader: "Email", detail: "info@scorelab.org" },
    { detailHeader: "Website", detail: "www.scorelab.org" },
  ],
}
