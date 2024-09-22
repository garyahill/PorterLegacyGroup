(()=>{"use strict";var e,t,n,r={327:(e,t,n)=>{var r=n(540),a=n(338),o=n(976),i=n(767);const l=({linkItems:e})=>r.createElement("nav",{className:"navbar"},r.createElement("ul",null,e.map(((e,t)=>r.createElement("li",{key:t},r.createElement(o.N_,{to:e.to},e.text.toUpperCase())))))),s=({linkItems:e})=>{const[t,n]=(0,r.useState)(!1),a=(0,r.useRef)(null),i=(0,r.useRef)(null),[l,s]=(0,r.useState)(0),c=e=>{a.current&&!a.current.contains(e.target)&&n(!1)},m=()=>{i.current&&(i.current.style.transition="none",i.current.style.visibility="hidden",setTimeout((()=>{i.current&&(i.current.style.transition="",i.current.style.visibility="")}),0)),n(!1),s(window.scrollY)};(0,r.useEffect)((()=>(document.addEventListener("click",c),document.addEventListener("touchstart",c),window.addEventListener("scroll",m),()=>{document.removeEventListener("click",c),document.removeEventListener("touchstart",c),window.removeEventListener("scroll",m)})),[]);const u=Math.max(96-l,0);return r.createElement("div",{ref:a,className:"hamburger-menu"},r.createElement("div",{className:"hamburger-icon "+(t?"open":""),onClick:()=>{n(!t)}},r.createElement("span",null),r.createElement("span",null),r.createElement("span",null)),r.createElement("nav",{ref:i,className:"hamburger-navbar "+(t?"open":""),style:{top:`${u}px`,position:"fixed"}},r.createElement("ul",null,e.map(((e,t)=>r.createElement("li",{key:t},r.createElement(o.N_,{to:e.to},r.createElement("span",{onClick:()=>n(!1)},e.text.toUpperCase()))))))))},c=n.p+"5cfb494313cf1acde3ea.png",m=()=>{const e=[{to:"/",text:"Home"},{to:"/team",text:"Our Team"},{to:"/faq",text:"FAQ"},{to:"/invest",text:"Invest with Us"}];return r.createElement("header",{className:"header-container"},r.createElement("div",{className:"flex-container"},r.createElement("div",{className:"title"},r.createElement("img",{src:c,alt:"logo"}),r.createElement("h1",null,"Porter Legacy Group")),r.createElement(s,{linkItems:e}),r.createElement(l,{linkItems:e})))},u=n.p+"9568975869f80f105e81.png",p=()=>r.createElement("footer",{className:"footer-container"},r.createElement("div",{className:"flex-container"},r.createElement("div",{className:"footer-logo"},r.createElement("img",{src:u,alt:"logo"})),r.createElement("div",{className:"footer-contact"},r.createElement("h4",null,"Get in Touch with Us"),r.createElement("address",null,r.createElement("span",null,"Porter Legacy Group"),r.createElement("span",null,"2724 Bryant St"),r.createElement("span",null,"San Francisco, CA 94110")),r.createElement("p",null,r.createElement("a",{href:"tel:+1234567890"},"Phone: +1.415.216.6575"),r.createElement("a",{href:"mailto:info@porterlegacygroup.com"},"Email: info@porterlegacy.com")),r.createElement("div",{className:"copyright"},r.createElement("small",null,"Copyright ",r.createElement("span",{className:"symbol"},"©")," 2024 Porter Legacy Group"))))),d=()=>r.createElement("div",{className:"layout-container"},r.createElement(m,null),r.createElement("main",{className:"page-content"},r.createElement(i.sv,null)),r.createElement(p,null)),h=()=>r.createElement("div",{className:"home-container"},r.createElement("div",{className:"banner"},r.createElement("h1",null,"Porter Legacy is a private, multifamily (MF) real estate investment firm focused on workforce housing in the Dallas-Fort Worth (DFW) area and the State of Texas. We provide carefully curated investment opportunities that offer risk-adjusted, monthly cash flow and capital appreciation with significant tax-advantages for individual accredited and institutional investors.")),r.createElement("div",{className:"mission"},r.createElement("h2",null,"Our Mission"),r.createElement("p",null,"Our mission is to excel in the acquisition, renovation, lease, and divestiture of multifamily properties, ensuring consistent returns for investors and building strong relationships with partners in the communities in which we operate."))),v=()=>r.createElement("div",{className:"team-container"},"Team Page - Coming Soon!");const g=function(){return[{Question:"What is Porter Legacy Group and what do you invest in?",Answer:"Porter Legacy Group is a private equity firm that focuses on acquiring commercial real estate properties.\n\t\t  We target high-quality assets with strong growth potential, aiming to generate consistent returns for our investors."},{Question:"How does Porter Legacy Group generate returns for investors?",Answer:"We generate returns through a combination of rental income, property appreciation, and strategic sales. \n\t\t  By carefully managing and improving the properties, we aim to maximize profits and return them to our investors."},{Question:"Who can invest with Porter Legacy Group?",Answer:"Porter Legacy Group is open to accredited investors, as defined by the SEC. \n\t\t  This typically includes individuals or entities who meet certain financial thresholds in income or net worth."},{Question:"What is the typical holding period for an investment?",Answer:"Our typical holding period for commercial real estate investments ranges from 3 to 7 years. \n\t\t  This allows us to capitalize on market conditions and maximize returns before executing an exit strategy."},{Question:"What are the risks involved with investing in commercial real estate?",Answer:"As with any investment, commercial real estate carries risks, including market fluctuations, \n\t\t  tenant vacancies, and changes in interest rates. However, our experience and due diligence help mitigate these risks."},{Question:"How often will I receive updates about my investment?",Answer:"Investors receive regular updates, including quarterly reports that detail property performance, financials, \n\t\t  and market conditions. We also provide timely updates on major events, such as property sales or acquisitions."},{Question:"When can I expect to receive returns on my investment?",Answer:"Investors typically receive distributions on a quarterly or annual basis, depending on the cash flow generated by \n\t\t  the properties. Final returns are distributed upon the sale of the property, which is part of the exit strategy."},{Question:"Can I reinvest my returns?",Answer:"Yes, we offer the option for investors to reinvest their returns into future investment opportunities with Porter Legacy Group."},{Question:"How do I get started with investing?",Answer:"To get started, please visit our 'Invest with Us' page and fill out the contact form. Our team will reach out \n\t\t  to guide you through the process and discuss available opportunities."},{Question:"What happens if I want to exit my investment early?",Answer:"Real estate investments with Porter Legacy Group are typically long-term and illiquid, meaning early exits are \n\t\t  uncommon. However, in certain circumstances, we may be able to accommodate early exit requests depending on the terms of the agreement."}]},f=e=>{const{Question:t,Index:n,Open:a,OnClick:o}=e;return r.createElement(r.Fragment,null,r.createElement("div",{key:`Key_Faq_Item_${n}`,className:"faq-item"},r.createElement("h2",null,t.Question),r.createElement("div",{className:"icon "+(a?"open":""),onClick:o})),r.createElement("div",{key:`Key_Answer_${n}`,className:"answer "+(a?"open":"")},t.Answer))},E=({faqs:e})=>{const[t,n]=(0,r.useState)(void 0);return e.map(((e,a)=>{const o=t===a;return r.createElement("section",{key:`Question_Group_${a}`},r.createElement(f,{Question:e,Index:a,Open:o,OnClick:()=>n(o?void 0:a)}))}))},y=()=>{const e=g();return r.createElement("div",{className:"faq-container"},r.createElement("div",{className:"faq-list"},r.createElement("h1",null,"Investor Frequently Asked Questions"),r.createElement(E,{faqs:e})))};var w=n(845),b=(n(482),function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))});const x=()=>{const[e,t]=(0,r.useState)({name:"",email:"",phone:"",experience:""}),[n,a]=(0,r.useState)(!1),{InvestmentProgramText:o,GoogleScriptsWebAppUrl:i}=function(){let e=[];e.push("https://script.google.com/macros/s/AKfycbxw-jmuyavrG4aq6AFt0Pp3EVXK9pbWK"),e.push("__wQSSytVe3Lmr_QcFazQt2l_ml3g8btPUPxQ/exec");const t=e.join("");return e=[],e.push("We are committed to implementing our strategy with diligence and transparency. "),e.push("We look forward to partnering with investors who share our long-term vision. "),e.push("Learn more about our process and how we can help you grow."),{GoogleScriptsWebAppUrl:t,InvestmentProgramText:e.join("")}}(),l=e=>{const{name:n,value:r}=e.target;t((e=>Object.assign(Object.assign({},e),{[n]:r})))};return r.createElement("div",{className:"invest-container"},r.createElement("h1",null,"Invest with Us"),r.createElement("div",{className:"flex-container"},r.createElement("div",{className:"info-section"},r.createElement("h2",null,"About Our Investment Program"),r.createElement("aside",null,o)),r.createElement("form",{onSubmit:n=>b(void 0,void 0,void 0,(function*(){n.preventDefault(),a(!0);try{const t=yield fetch(i,{method:"POST",body:new URLSearchParams(e),headers:{"Content-Type":"application/x-www-form-urlencoded"}});"Success"===(yield t.text())?w.oR.success("Thank you, We'll be in touch soon!"):w.oR.error("Sorry, there was a problem submitting your information.")}catch(e){w.oR.error("An error occurred during submission.")}finally{a(!1),t({name:"",email:"",phone:"",experience:""})}}))},r.createElement("label",{htmlFor:"name"},"Full Name",r.createElement("span",{className:"required"},"*")),r.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Your Name",value:e.name,onChange:l,required:!0}),r.createElement("label",{htmlFor:"email"},"Email Address",r.createElement("span",{className:"required"},"*")),r.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Your Email",value:e.email,onChange:l,required:!0}),r.createElement("label",{htmlFor:"phone"},"Phone Number",r.createElement("span",{className:"required"},"*")),r.createElement("input",{type:"tel",id:"phone",name:"phone",placeholder:"Your Phone Number",value:e.phone,onChange:l,required:!0}),r.createElement("label",{htmlFor:"experience"},"Investor Experience Level",r.createElement("span",{className:"required"},"*")),r.createElement("select",{id:"experience",name:"experience",value:e.experience,onChange:l,required:!0},r.createElement("option",{value:"",disabled:!0},"Select Experience Level"),r.createElement("option",{value:"beginner"},"Beginner"),r.createElement("option",{value:"intermediate"},"Intermediate"),r.createElement("option",{value:"advanced"},"Advanced"),r.createElement("option",{value:"accredited"},"Accredited")),r.createElement("button",{type:"submit",disabled:n},n?"Submitting...":"Submit"))),r.createElement(w.N9,{position:"bottom-right",autoClose:5e3,hideProgressBar:!0}))},N=()=>r.createElement("div",{className:"loading-container"},r.createElement("div",{className:"loading-text"},"Loading..."),r.createElement("div",{className:"loading-spinner"}));const P=function(){return r.createElement(o.Kd,{basename:"/PorterLegacyGroup"},r.createElement(r.Suspense,{fallback:r.createElement(N,null)},r.createElement(i.BV,null,r.createElement(i.qh,{path:"/",element:r.createElement(d,null)},r.createElement(i.qh,{index:!0,element:r.createElement(h,null)}),r.createElement(i.qh,{path:"team",element:r.createElement(v,null)}),r.createElement(i.qh,{path:"faq",element:r.createElement(y,null)}),r.createElement(i.qh,{path:"invest",element:r.createElement(x,null)})))))},O=document.getElementById("root");O.classList.add("root-style");a.createRoot(O).render(r.createElement(r.StrictMode,null,r.createElement(P,null)))}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(m=0;m<e.length;m++){for(var[n,r,a]=e[m],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,r,a]},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var i={};t=t||[null,n({}),n([]),n(n)];for(var l=2&r&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,o.d(a,i),a},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(s)var m=s(o)}for(t&&t(n);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(m)},n=self.webpackChunkporter_legacy_group=self.webpackChunkporter_legacy_group||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[874],(()=>o(327)));i=o.O(i)})();
//# sourceMappingURL=main.599bc99babe1ecbae44b.js.map