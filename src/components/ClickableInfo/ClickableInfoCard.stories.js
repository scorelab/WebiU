import React from "react"

import { ClickableInfoCard } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 3/ClickableInfoCard",
  component: ClickableInfoCard,
  argTypes: {
    image: { control: "text" },
    mainText: { control: "text" },
    description: { control: "text" },
  },
}

export const clickableinfocard = args => <ClickableInfoCard {...args} />

clickableinfocard.args = {
  image:
    "https://user-images.githubusercontent.com/64387054/193463768-e3e3bb1f-0cfd-4174-b1c4-6c5cb6c44b53.png",
  mainText: "Join Our Community",
  description:
    "Find your tribe and participate in community with other Blockchain enthusiasts.",
}
