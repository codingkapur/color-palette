(this["webpackJsonpcolor-palette"]=this["webpackJsonpcolor-palette"]||[]).push([[0],{11:function(t,e,o){"use strict";o.r(e);var r=o(1),c=o.n(r),n=o(4),a=o.n(n),s=(o(9),o(2)),i=o(0),l=function(t){var e=t.color,o=(t.index,t.rgbToHex),r=t.clickToCopy,c={backgroundColor:"rgb(".concat(e[0],", ").concat(e[1],", ").concat(e[2],")")},n=o(e);return Object(i.jsxs)("div",{className:"color__container",style:c,onClick:function(){return r(n)},children:[Object(i.jsxs)("p",{className:"color__intensity",children:[e[3],"% Lighter"]}),Object(i.jsxs)("p",{className:"color__title",children:["#",n]})]})},u=function(t){var e=t.color,o=(t.index,t.rgbToHex),r=t.clickToCopy,c={backgroundColor:"rgb(".concat(e[0],", ").concat(e[1],", ").concat(e[2],")")},n=o(e);return Object(i.jsxs)("div",{className:"color__container",style:c,onClick:function(){return r(n)},children:[Object(i.jsxs)("p",{className:"color__intensity",children:[e[3],"% Darker"]}),Object(i.jsxs)("p",{className:"color__title",children:["#",n]})]})},p=function(t){var e=t.lightList,o=t.darkList,r=t.originalColor,c=t.rgbToHex,n=t.clickToCopy,a={backgroundColor:r,boxShadow:"0px 10px 5px rgba(0,0,0,0.5)"};return Object(i.jsxs)("div",{className:"colors__container",children:[e.map((function(t,e){return Object(i.jsx)(l,{color:t,rgbToHex:c,clickToCopy:n},e)})),Object(i.jsxs)("div",{className:"color__container",style:a,children:[Object(i.jsx)("p",{className:"color__intensity",children:"Original Color"}),Object(i.jsx)("p",{className:"color__title",children:r.toUpperCase()})]}),o.map((function(t,e){return Object(i.jsx)(u,{color:t,rgbToHex:c,clickToCopy:n},e)}))]})};var b=function(){var t=Object(r.useState)("#1266CF"),e=Object(s.a)(t,2),o=e[0],c=e[1],n=Object(r.useState)(""),a=Object(s.a)(n,2),l=a[0],u=a[1],b=Object(r.useState)(!0),j=Object(s.a)(b,2),d=j[0],h=j[1],x=Object(r.useState)([]),f=Object(s.a)(x,2),O=f[0],m=f[1],_=Object(r.useState)([]),v=Object(s.a)(_,2),g=v[0],C=v[1],k=new RegExp("^#([A-Fa-f0-9]{6})$"),N=function(t){u(t.toUpperCase().trim()),k.test(t)?h(!1):h(!0)},y={borderBottom:"3px solid #".concat(d?"ff0000":"00ff00")},T={backgroundColor:"".concat(o)},S=function(t){for(var e=t.slice(1),o=[],r=[],c=0;c<=4;)o.push(e.slice(c,c+2)),c+=2;for(var n=0;n<3;n++)r.push(parseInt(o[n],16));return r},M=function(t){for(var e=[],o=0;o<3;o++)e.push(parseInt(t[o]).toString(16).padStart(2,"0"));return e.join("").toUpperCase()},H=function(){for(var t=S(l),e=[],o=10;t[0]+t[0]*o/100<=255&&t[1]+t[1]*o/100<=255&&t[2]+t[2]*o/100<=255;){var r=[];if(r.push(Math.round(t[0]+t[0]*o/100)),r.push(Math.round(t[1]+t[1]*o/100)),r.push(Math.round(t[2]+t[2]*o/100)),r.push(o),e.push(r),r=[],(o+=10)>=110)break}return e.reverse()},w=function(){var t=S(l);console.log(t);for(var e=[],o=10;t[0]-t[0]*o/100>=0&&t[1]-t[1]*o/100>=0&&t[2]-t[2]*o/100>=0;){var r=[];if(r.push(Math.round(t[0]-t[0]*o/100)),r.push(Math.round(t[1]-t[1]*o/100)),r.push(Math.round(t[2]-t[2]*o/100)),r.push(o),e.push(r),r=[],(o+=10)>=110)break}return e};return Object(i.jsxs)("div",{className:"app__container",style:T,children:[Object(i.jsx)("h1",{className:"app__title",children:"Color Palette"}),Object(i.jsxs)("div",{className:"color__selector--container",children:[Object(i.jsxs)("form",{className:"color__input--form ",onSubmit:function(t){return function(t){t.preventDefault(),d?(alert("Check the input, fool!"),u("#"),c("#")):(c(l),m(H()),C(w()))}(t)},children:[Object(i.jsx)("input",{type:"text",value:l,placeholder:"Enter Hex Value",className:"color__input",onChange:function(t){return N(t.target.value)},style:y}),Object(i.jsx)("button",{className:"btn submit-btn",children:"Submit"})]}),Object(i.jsx)("button",{className:"btn randomize-btn",onClick:function(){for(var t=[],e=0;e<3;e++)t.push(Math.ceil(255*Math.random()));var o=M(t);N(o.padStart(7,"#")),c((function(){return l})),m(H()),C(w())},children:"Random Color"})]}),Object(i.jsx)(p,{lightList:O,darkList:g,originalColor:o,rgbToHex:M,clickToCopy:function(t){navigator.clipboard.writeText("#".concat(t))}})]})};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))},9:function(t,e,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.11dde148.chunk.js.map