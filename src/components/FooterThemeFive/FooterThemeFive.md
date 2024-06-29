## Initial Setup

Hope you have successfully set up the project in your local system and install all dependencies

## About the Footer Component

This is a reusable component for the footer of a website. This Component is highly reusable and customizable via props, it consists of different section like short note about the site, services, important links, contact info and social links as well.

## How to use the component

Import the component to `pages/index.js`
`import {FooterThemeFive} from "../components/FooterThemeFive";`

## How to handle props to the component

```
<FooterThemeFive
    headingOne = "sample-headingOne"
    headingTwo = "sample-headingTwo"
    headingThree = "sample-headingThree"
    aboutText = "sample-aboutText"
    linksListData =  {[linkName: "link_name", LinkUrl :"link_Url"],[linkName: "link_name", LinkUrl :"link_Url"]}
    contactListData =  {[ detail: "sample-detail", link: "#"],[detail: "sample-detail",link: "#"]}
    socialLinks = {{facebook: "your_link", gitter: "your_link", twitter: "your_link", github: "your_link" linkedin:"your_link", medium:"your_link"}}
    facebookProfile: "facebookaddress",
    height: "sample-height",
    width: "sample-width",
/>
```

`headingOne` this prop is use to add the heading of the first section
`headingTwo` this prop is use to add the heading of the second section
`headingThree` this prop is use to add the heading of the third section
`aboutText` this prop is use to add the mainheading/moto of the site
`linksListData` this prop is use to add deails and links to the important links section of the site
`ConatctListData` this prop is use to add deails and links to the contact section of the site
`socialLinks` this prop is use to add the link the social handle of the org
`width` this prop is use to add the width of the embed profile
`height` this prop is use to add the height of the embed profile
