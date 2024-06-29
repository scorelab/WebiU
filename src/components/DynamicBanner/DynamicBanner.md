## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Dynamic Banner Component

This is a resuasble component for the Banner section, it has many customizations and it also come with count up stats for showing diffrent numbers. This Component is highly reusable and customizable via props

## How to use the component

Import the component to `pages/index.js`
`import {DynamicBanner} from "../components/DynamicBanner";`

## How to handle props to the component

```
<DynamicBanner  mainText ="sample-mainText"
  subText = "sample-subText"
  image = "sample-image"
  description: ="sample-desc"
  countUpListData = {duration="sample-numneric-value" end="sample-end-value" text="sample-text"}
}/>
```

`mainText` prop is the main title or heading for the banner
`subText` prop is the subtext or side text for the banner
`image` props is the backgound image of the banner
`description` prop is the desrcption text for the banner
`countUpListData` prop is the stats for the banner
