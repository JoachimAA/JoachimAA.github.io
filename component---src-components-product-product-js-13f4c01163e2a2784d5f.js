(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"10DV":function(e,t,a){e.exports={divider:"productInformation-module--divider--TJFZm",description:"productInformation-module--description--QgbTD",titleText:"productInformation-module--titleText--yRBin",subTitle:"productInformation-module--subTitle--2trHt",infoSectionContainer:"productInformation-module--infoSectionContainer--2UZ-2",priceText:"productInformation-module--priceText--2uYNO",quantitySelector:"productInformation-module--quantitySelector--W9q6h",quantityTitle:"productInformation-module--quantityTitle--b3NNw",tierBox:"productInformation-module--tierBox--1lZIl",variantBox:"productInformation-module--variantBox--8I-D4",basketButton:"productInformation-module--basketButton--3qc9X",link:"productInformation-module--link--29UNr"}},"5Lpc":function(e,t,a){e.exports={topContainer:"product-module--topContainer--2N9d0",bigPictureContainer:"product-module--bigPictureContainer--oMvym",arrow:"product-module--arrow--2fs0G",productPicture:"product-module--productPicture--1uF3t",moreImagesContainer:"product-module--moreImagesContainer--2IqVY",moreImageContainer:"product-module--moreImageContainer--29eZa",moreImageContent:"product-module--moreImageContent--1tFZr",informationContainer:"product-module--informationContainer--14gGJ",mobileTitle:"product-module--mobileTitle--1XBC4"}},"76vg":function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("q1tI")),i=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=i},E2gh:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("q1tI")),i=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.default=i},TpwS:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("rY4l"),i=a("JwsL"),o=a("10DV"),m=a.n(o),c=(a("Vbhz"),function(e){var t=e.firstTier,a=e.title,n=e.listItems,r=e.selectedTier;return l.a.createElement("div",{className:m.a.infoSectionContainer},n?l.a.createElement("div",null,l.a.createElement("div",{className:m.a.subTitle,style:{fontFamily:"Montserrat-Regular"}},a),n.map((function(e){var a=e;if(e.includes(t+"/")){for(var n=e.indexOf(t),i=e.substring(n),o=["0","1","2","3","4","5","6","7","8","9","/"],m=!1,c=0,s=0;s<i.length;s++)o.includes(i[s])||m||(m=!0,c=s);a=e.replace(e.substring(n,c+n),r)}return l.a.createElement("div",{key:e},a)}))):l.a.createElement("div",null))}),s=function(e){var t=e.title,a=e.listItems;return l.a.createElement("div",{className:m.a.infoSectionContainer},a?l.a.createElement("div",null,l.a.createElement("div",{className:m.a.subTitle,style:{fontFamily:"Montserrat-Regular"}},t),a.map((function(e){return l.a.createElement("div",{key:e},e)}))):l.a.createElement("div",null))},u=function(e){var t,a,r,i,o,u=e.item,d=e.setSelectedImage,f=e.windowDimesions,v=u.includes&&u.includes.split("?"),g=u.optionalIncludes&&u.optionalIncludes.split("?"),E=null!==(t=u.custom)&&void 0!==t?t:"",p=null!==(a=u.sizes)&&void 0!==a?a:"",I=null!==(r=u.materials)&&void 0!==r?r:"",y=u.alsoAvailable&&u.alsoAvailable.split("?"),h=null!==(i=u.description)&&void 0!==i?i:"",b=Object(n.useState)(null==u?void 0:u.tiers[0].name),C=b[0],N=b[1],k=Object(n.useState)((null==u?void 0:u.variants)&&(null==u?void 0:u.variants.length)>0&&(null==u||null===(o=u.variants[0])||void 0===o?void 0:o.name)),w=k[0],S=k[1],T=u.tiers.find((function(e){return e.name===C})),x=T?T.price:"Unknown",F=null!=u&&u.variants?"Open "+w+" in Etsy":"Open in Etsy",q=null!=u&&u.variants?null==u?void 0:u.variants.find((function(e){return e.name===w})).link:u.link;return l.a.createElement("div",null,f>760?l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:m.a.titleText},u.name)):l.a.createElement("div",null),l.a.createElement("div",{className:m.a.priceText,style:{fontFamily:"Montserrat-Regular"}},"number"==typeof x?"£"+x.toFixed(2):x),l.a.createElement("div",{className:m.a.divider}),u.variants?l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:m.a.quantityTitle,style:{fontFamily:"Montserrat-Regular",marginBottom:"5px"}},"Variant :"),l.a.createElement("div",{className:m.a.quantitySelector},u.variants.map((function(e){return l.a.createElement("button",{key:e.name,className:m.a.variantBox,style:{backgroundColor:e.name===w?"var(--logo-pink)":"#ffffff",fontFamily:"Montserrat-Regular"},onClick:function(){S(e.name),console.log("name -> ",e.name+" variant imageIndex -> ",e.imageIndex),d(e.imageIndex)}},e.name)})))):l.a.createElement("div",null),l.a.createElement("div",{className:m.a.quantityTitle,style:{fontFamily:"Montserrat-Regular",marginBottom:"5px"}},"Quantity :"),l.a.createElement("div",{className:m.a.quantitySelector},u.tiers.map((function(e){return l.a.createElement("button",{key:e.name,className:m.a.tierBox,style:{backgroundColor:e.name===C?"var(--logo-pink)":"#ffffff",fontFamily:"Montserrat-Regular"},onClick:function(){N(e.name)}},e.name)}))),u.link?l.a.createElement("div",{className:m.a.basketButton},l.a.createElement("a",{href:q,className:m.a.link,target:"_blank",rel:"noreferrer"},F)):l.a.createElement(n.Fragment,null),l.a.createElement("div",null,u.sampleTrue?"This is for a non-personalised sample only.":""),l.a.createElement("div",null,u.shouldContact?"Please contact me to request a quote for a full order.":""),l.a.createElement("div",{className:m.a.description},h),l.a.createElement(c,{title:"Includes:",listItems:v,firstTier:u.tiers[0].name,selectedTier:C}),l.a.createElement(s,{title:"Optional extras:",listItems:g}),l.a.createElement("div",null,E),l.a.createElement("div",{className:m.a.infoSectionContainer},l.a.createElement("div",{style:{fontFamily:"Montserrat-Regular"},className:m.a.subTitle},"Sizes:"),l.a.createElement("div",null,p)),l.a.createElement("div",{className:m.a.infoSectionContainer},l.a.createElement("div",{style:{fontFamily:"Montserrat-Regular"},className:m.a.subTitle},"Materials:"),l.a.createElement("div",null,I)),l.a.createElement(s,{title:"Also available in this design:",listItems:y}))},d=a("5Lpc"),f=a.n(d),v=a("9eSz"),g=a.n(v),E=a("76vg"),p=a.n(E),I=a("E2gh"),y=a.n(I),h=function(e){var t=e.selectedImage,a=e.setSelectedImage,r=e.sortedImages,i=e.name;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:f.a.mobileTitle},i),l.a.createElement("div",{className:f.a.bigPictureContainer},r.length>1?l.a.createElement("div",{className:f.a.arrow,onClick:function(){a(0!==t?t-1:r.length-1)},style:{left:"calc(0% + 8px)"}},l.a.createElement(p.a,{fontSize:"large"})):l.a.createElement(n.Fragment,null),r.length>0?l.a.createElement(g.a,{fluid:r[t].node.childImageSharp.fluid,alt:""}):l.a.createElement("div",null,"no image"),r.length>1?l.a.createElement("div",{className:f.a.arrow,onClick:function(){t!==r.length-1?a(t+1):a(0)},style:{right:"calc(0% + 8px)"}},l.a.createElement(y.a,{fontSize:"large"})):l.a.createElement(n.Fragment,null)),l.a.createElement("div",{className:f.a.moreImagesContainer},r.map((function(e,n){return l.a.createElement("div",{style:{outline:t===n?"solid 2px #474747":"none"},key:e.node.name,className:f.a.moreImageContainer,onClick:function(){return a(n)}},l.a.createElement(g.a,{fluid:r[n].node.childImageSharp.fluid,alt:""}))}))))},b=function(e){var t=e.selectedImage,a=e.setSelectedImage,r=e.sortedImages;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:f.a.bigPictureContainer},r.length>1?l.a.createElement("div",{className:f.a.arrow,onClick:function(){a(0!==t?t-1:r.length-1)},style:{left:"calc(0% + 8px)"}},l.a.createElement(p.a,{fontSize:"large"})):l.a.createElement(n.Fragment,null),r.length>0?l.a.createElement(g.a,{fluid:r[t].node.childImageSharp.fluid,alt:""}):l.a.createElement("div",null,"no image"),r.length>1?l.a.createElement("div",{className:f.a.arrow,onClick:function(){t!==r.length-1?a(t+1):a(0)},style:{right:"calc(0% + 8px)"}},l.a.createElement(y.a,{fontSize:"large"})):l.a.createElement(n.Fragment,null)),l.a.createElement("div",{className:f.a.moreImagesContainer},r.map((function(e,n){return l.a.createElement("div",{style:{outline:t===n?"solid 2px #474747":"none"},key:e.node.name,className:f.a.moreImageContainer,onClick:function(){return a(n)}},l.a.createElement(g.a,{fluid:r[n].node.childImageSharp.fluid,alt:""}))}))))},C="undefined"!=typeof window;t.default=function(e){var t=e.data,a=e.location,o=function(){if(!C)return{width:0,height:0};var e=window;return{width:e.innerWidth,height:e.innerHeight}},m=Object(n.useState)(o()),c=m[0],s=m[1];Object(n.useEffect)((function(){var e=function(){s(o())};return C&&window.addEventListener("resize",e),function(){C&&window.removeEventListener("resize",e)}}),[]);var d=t.allFile.edges.sort((function(e,t){return e.node.name-t.node.name})),v=Object(n.useState)(0),g=v[0],E=v[1],p=a.state?a.state.item:{};return l.a.createElement("div",{style:{fontFamily:"Montserrat"}},l.a.createElement(r.a,null),l.a.createElement("div",{className:f.a.topContainer},c.width>760?l.a.createElement(b,{selectedImage:g,setSelectedImage:E,sortedImages:d}):l.a.createElement(h,{selectedImage:g,setSelectedImage:E,sortedImages:d,name:p.name}),l.a.createElement("div",{className:f.a.informationContainer},l.a.createElement(u,{item:p,setSelectedImage:E,windowDimensions:c}))),l.a.createElement(i.a,null))}},Vbhz:function(e,t,a){}}]);
//# sourceMappingURL=component---src-components-product-product-js-13f4c01163e2a2784d5f.js.map