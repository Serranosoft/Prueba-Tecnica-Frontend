(this["webpackJsonpplanet-express"]=this["webpackJsonpplanet-express"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(6),r=c.n(a),i=(c(11),c(2)),l=c(0);var o=function(){var e=Object(s.useRef)(new Date("09/12/2021").getTime()),t=Object(s.useState)("00 d\xedas : 00 horas : 00 m\xednutos : 00 segundos"),c=Object(i.a)(t,2),n=c[0],a=c[1];Object(s.useEffect)((function(){setInterval((function(){return r()}),1e3)}),[]);var r=function(){var t=(new Date).getTime(),c=e.current-t,s=Math.floor(c/864e5),n=Math.floor(c%6e4/1e3),r=Math.floor(c%36e5/6e4),i=Math.floor(c%864e5/36e5);s.toString().length<2&&(s="0".concat(s)),i.toString().length<2&&(i="0".concat(i)),r.toString().length<2&&(r="0".concat(r)),n.toString().length<2&&(n="0".concat(n)),a("".concat(s," d\xedas : ").concat(i," horas : ").concat(r," m\xednutos : ").concat(n," segundos"))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("p",{id:"countdown-text",children:["50% dto en env\xedos espaciales: ",Object(l.jsx)("span",{children:n})]})})};var j=function(){return Object(l.jsx)("header",{children:Object(l.jsx)(o,{})})};var u=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsx)("section",{id:"newsletter-section",children:Object(l.jsxs)("aside",{id:"newsletter-wrapper",children:[Object(l.jsxs)("div",{className:"flex-column-center",children:[Object(l.jsx)("p",{className:"h2",children:"Suscribete a nuestra newsletter"}),Object(l.jsx)("span",{className:"h3",children:"Recibe notificaciones y ofertas de nuestros servicios"})]}),Object(l.jsxs)("form",{id:"newsletter-form",children:[Object(l.jsx)("fieldset",{children:Object(l.jsxs)("label",{for:"emailInput",children:["Direcci\xf3n de correo electr\xf3nico",Object(l.jsx)("input",{id:"emailInput",className:"input",type:"email",name:"email",value:c,placeholder:"manuel@manu-scholz.com",onChange:function(e){n(e.target.value)},required:!0})]})}),Object(l.jsx)("span",{id:"newsletter-info"}),Object(l.jsx)("input",{id:"newsletter-submit",type:"submit",value:"Suscribirme",onClick:function(e){e.preventDefault(),new RegExp(/.+@.+\..+/).test(c)?(document.getElementById("newsletter-info").setAttribute("style","color: rgb(45, 138, 51)"),document.getElementById("newsletter-info").innerHTML="Te has suscrito correctamente con el email ".concat(c)):(document.getElementById("newsletter-info").setAttribute("style","color: rgb(240, 12, 12)"),document.getElementById("newsletter-info").innerHTML="Introduce un email v\xe1lido")}})]})]})})},d=c(3),h=c(5);var b=function(){var e=Object(s.useState)({packages:0,weight:0}),t=Object(i.a)(e,2),c=t[0],n=t[1],a=c.packages,r=c.weight,o=function(e){var t=e.target,s=t.name,a=t.value;n(Object(h.a)(Object(h.a)({},c),{},Object(d.a)({},s,parseInt(a))))};return Object(s.useEffect)((function(){Number.isNaN(a)||Number.isNaN(r)||(document.getElementById("calc-result").innerHTML="".concat(parseInt(4*a*(0===r?1:parseInt(r)+1)),"\u20ac"))}),[c]),Object(l.jsxs)("div",{id:"calc-wrapper",children:[Object(l.jsx)("h2",{className:"h2",children:"Calcula tu presupuesto"}),Object(l.jsx)("h3",{className:"h3",children:"Rellena los datos para obtener un presupuesto a medida"}),Object(l.jsxs)("fieldset",{children:[Object(l.jsxs)("label",{children:["N\xfamero de paquetes a env\xedar",Object(l.jsx)("input",{className:"input",id:"packages",type:"number",name:"packages",min:"0",value:a,onChange:o})]}),Object(l.jsxs)("label",{children:["Peso total de los paquetes (kg)",Object(l.jsx)("input",{className:"input",id:"weight",type:"number",name:"weight",min:"0",value:r,onChange:o})]})]}),Object(l.jsx)("span",{className:"highlight-text",children:"Precio total"}),Object(l.jsx)("span",{id:"calc-result",children:"0\u20ac"})]})};var p=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=[];return Object(s.useEffect)((function(){fetch("https://futuramaapi.herokuapp.com/api/v2/characters/",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){a.length<5&&a.push(e)})),n(a)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsxs)("section",{className:"wrapper",children:[Object(l.jsx)("h2",{className:"h2",children:"Nos encargamos de hacer llegar tu producto"}),Object(l.jsx)("div",{id:"employees-grid",children:0!==c.length&&c.map((function(e){return Object(l.jsxs)("div",{className:"employee",children:[Object(l.jsx)("img",{src:e.PicUrl}),Object(l.jsx)("p",{children:e.Name})]})}))})]})},m=c.p+"static/media/planetExpress.2cefe176.png";var x=function(){return Object(l.jsx)("section",{className:"wrapper",children:Object(l.jsxs)("div",{id:"hero",className:"grid-2-columns",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"PLANET EXPRESS"}),Object(l.jsx)("h1",{className:"h1",children:"Env\xedos espaciales dise\xf1ados para trabajar por ti"}),Object(l.jsx)("p",{className:"hero-text",children:"Dise\xf1amos las mejores rutas para hacer llegar tu producto"}),Object(l.jsx)("p",{className:"hero-text",children:"\xdaltimas tecnolog\xedas aplicadas a nuestros sistemas de detecci\xf3n de rutas y env\xedos de paquetes automatizados"}),Object(l.jsx)("button",{className:"btn",onClick:function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},children:"Calcula tu presupuesto"})]}),Object(l.jsxs)("div",{id:"logo",children:[Object(l.jsx)("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{fill:"#1F2937",d:"M49.4,-69.3C63.8,-57.5,75.2,-42.8,81.8,-25.8C88.4,-8.8,90.3,10.6,85.1,28C79.9,45.5,67.8,61,52.4,72.4C37.1,83.9,18.5,91.2,0.4,90.7C-17.8,90.2,-35.5,81.8,-49.5,69.9C-63.5,58,-73.8,42.7,-79.7,25.6C-85.7,8.6,-87.3,-10.2,-82.4,-27.2C-77.5,-44.2,-65.9,-59.5,-51.1,-71.2C-36.2,-82.8,-18.1,-90.8,-0.3,-90.4C17.5,-89.9,34.9,-81,49.4,-69.3Z",transform:"translate(100 100)"})}),Object(l.jsx)("img",{src:m,alt:"Planet Express"})]})]})})};var O=function(){return Object(l.jsxs)("section",{id:"container",children:[Object(l.jsx)(j,{}),Object(l.jsx)(x,{}),Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 210",children:Object(l.jsx)("path",{fill:"#151b24","fill-opacity":"1",d:"M0,0L48,10.7C96,21,192,43,288,74.7C384,107,480,149,576,144C672,139,768,85,864,85.3C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})}),Object(l.jsx)(u,{}),Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 270",children:Object(l.jsx)("path",{fill:"#151b24","fill-opacity":"1",d:"M0,160L48,138.7C96,117,192,75,288,90.7C384,107,480,181,576,202.7C672,224,768,192,864,170.7C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})}),Object(l.jsx)(p,{}),Object(l.jsx)(b,{})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.33633543.chunk.js.map