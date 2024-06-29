import React from "react"

import { DynamicBanner } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 4/DynamicBanner",
  component: DynamicBanner,
  argTypes: {
    mainText: { control: "text" },
    subText: { control: "text" },
    image: { control: "text" },
    description: { control: "text" },
    countUpListData: { control: "text" },
  },
}

export const dynamicbanner = args => <DynamicBanner {...args} />

dynamicbanner.args = {
  mainText: "Why buy and sell Stocks with us?",
  subText: "Take A look at Our",
  image:
    "https://user-images.githubusercontent.com/64387054/191454071-b7fa5de0-8b8c-4c34-9560-a27988ca4449.png",
  description:
    "Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.",
  countUpListData: [
    { duration: 10, end: 12, text: "Lorem Ipsume" },
    { duration: 10, end: 39, text: "Lorem Ipsume" },
    { duration: 10, end: 72, text: "Lorem Ipsume" },
    { duration: 10, end: 6, text: "Lorem Ipsume" },
  ],
}
