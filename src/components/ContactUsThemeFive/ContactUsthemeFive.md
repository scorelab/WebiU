## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Contact Us Component

This is a resuasble component for contact and subscribe forms which are very common on modern websites

## How to use the component

Import the component to `pages/index.js`
`import {ContactUsThemeFive} from "../components/ContactUsThemeFive";`

How to handle props to the component

```
<ContactUsThemeFive contactListData= { detailHeader: "header-one" detail = "detail-one",detailHeader: "header-one"  detail = "detail-two", detailHeader: "header-one" detail = "detail-three"}
  subText = "sample-text"
  mainText = "main-heading"
```

`contactListData` prop is the detail on the contact info
`subText` and `mainText` props are the subtext and main heading of contact form
