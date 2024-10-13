(()=>{"use strict";var e,t,n,a={461:(e,t,n)=>{var a=n(540),r=n(338),i=n(976),o=n(767);const s=function(e){var t=e.linkItems;return a.createElement("nav",{className:"navbar"},a.createElement("ul",null,t.map((function(e,t){return a.createElement("li",{key:t},a.createElement(i.N_,{to:e.to},e.text.toUpperCase()))}))))};const l=function(e){var t=e.linkItems,n=(0,a.useState)(!1),r=n[0],o=n[1],s=(0,a.useRef)(null),l=(0,a.useRef)(null),c=(0,a.useState)(0),u=c[0],m=c[1],p=function(e){s.current&&!s.current.contains(e.target)&&o(!1)},d=function(){l.current&&(l.current.style.transition="none",l.current.style.visibility="hidden",setTimeout((function(){l.current&&(l.current.style.transition="",l.current.style.visibility="")}),0)),o(!1),m(window.scrollY)};(0,a.useEffect)((function(){return document.addEventListener("click",p),document.addEventListener("touchstart",p),window.addEventListener("scroll",d),function(){document.removeEventListener("click",p),document.removeEventListener("touchstart",p),window.removeEventListener("scroll",d)}}),[]);var h=Math.max(96-u,0);return a.createElement("div",{ref:s,className:"hamburger-menu"},a.createElement("div",{className:"hamburger-icon ".concat(r?"open":""),onClick:function(){o(!r)}},a.createElement("span",null),a.createElement("span",null),a.createElement("span",null)),a.createElement("nav",{ref:l,className:"hamburger-navbar ".concat(r?"open":""),style:{top:"".concat(h,"px"),position:"fixed"}},a.createElement("ul",null,t.map((function(e,t){return a.createElement("li",{key:t},a.createElement(i.N_,{to:e.to},a.createElement("span",{onClick:function(){return o(!1)}},e.text.toUpperCase())))})))))},c=n.p+"5cfb494313cf1acde3ea.png";const u=function(){var e=[{to:"/",text:"Home"},{to:"/about",text:"About"},{to:"/strategy",text:"Our Strategy"},{to:"/faq",text:"FAQ"},{to:"/invest",text:"Invest with Us"}];return a.createElement("header",{className:"header-container"},a.createElement("div",{className:"flex-container"},a.createElement("div",{className:"title"},a.createElement("img",{src:c,alt:"logo"}),a.createElement("h1",null,"Porter Legacy Group")),a.createElement(l,{linkItems:e}),a.createElement(s,{linkItems:e})))};const m=function(e){var t=e.bannerItem,n=e.marginTop,r=void 0===n?"0px":n,i=e.marginBottom,o=void 0===i?"0px":i,s=e.backgroundImage,l=e.panning,c=void 0!==l&&l,u=s?{backgroundImage:"url(".concat(s,")"),marginTop:r,marginBottom:o}:{marginTop:r,marginBottom:o};return a.createElement("div",{className:"main-banner ".concat(c?"panning-bg":void 0),style:u},(null==t?void 0:t.Title)&&a.createElement("h1",{className:"banner-title"},t.Title),(null==t?void 0:t.Tagline)&&a.createElement("h1",null,t.Tagline))};const p=function(e){var t=e.bannerItem,n=(void 0===t?{}:t).Tagline;return a.createElement("div",{className:"mission-container"},a.createElement("h1",null,n))};function d(){var e=[];return e.push("Our mission is to excel in the acquisition, renovation, lease, and divestiture of multifamily "),e.push("properties, ensuring consistent returns for investors and building strong relationships with "),e.push("partners in the communities in which we operate."),{Title:void 0,Tagline:e.join("")}}const h=n.p+"9568975869f80f105e81.png";const f=function(){return a.createElement("footer",{className:"footer-container"},a.createElement("div",{className:"flex-container"},a.createElement("div",{className:"footer-logo"},a.createElement("img",{src:h,alt:"logo"})),a.createElement("div",{className:"footer-contact"},a.createElement("h4",null,"Get in Touch with Us"),a.createElement("address",null,a.createElement("span",null,"Porter Legacy Group"),a.createElement("span",null,"2724 Bryant St"),a.createElement("span",null,"San Francisco, CA 94110")),a.createElement("p",null,a.createElement("a",{href:"tel:+14152166575"},"Phone: +1.415.216.6575"),a.createElement("a",{href:"mailto:info@porterlegacygroup.com"},"Email: info@porterlegacy.com")),a.createElement("div",{className:"copyright"},a.createElement("small",null,"Copyright ",a.createElement("span",{className:"symbol"},"©")," 2024 Porter Legacy Group")))))},g=n.p+"6f8fb23ca42e589ecabc.jpg",v=n.p+"2cfcab68c9cd810f5333.jpg",y=n.p+"9ab14e042739afdd8472.jpg",E=n.p+"18cf69cac28e9987208e.jpg";const b=function(){var e,t=(0,o.zy)(),n="/"===t.pathname,r="/about"===t.pathname,i="/strategy"===t.pathname;return a.createElement("div",{className:"layout-container"},a.createElement(u,null),n&&a.createElement(a.Fragment,null,a.createElement(m,{bannerItem:(e=[],e.push("Porter Legacy is a private, multifamily (MF) real estate investment firm focused on workforce "),e.push("housing in the Dallas-Fort Worth (DFW) area and the State of Texas. We provide carefully curated "),e.push("investment opportunities that offer risk-adjusted monthly cash flow and capital appreciation with "),e.push("significant tax advantages"),{Title:"Private Equity Real Estate",Tagline:e.join("")}),marginTop:"3px",backgroundImage:g,panning:!0}),a.createElement(p,{bannerItem:d()})),a.createElement("main",{className:"page-content"},a.createElement(o.sv,null)),n&&a.createElement(m,{backgroundImage:E,marginBottom:"3px"}),r&&a.createElement(m,{backgroundImage:v,marginTop:"50px",marginBottom:"3px"}),i&&a.createElement(m,{backgroundImage:y,marginTop:"50px",marginBottom:"3px"}),a.createElement(f,null))};const w=function(e){var t=e.title,n=e.content,r=e.logo;return a.createElement("section",{className:"section-card-container"},a.createElement("div",{className:"logo-container"},a.createElement("img",{src:r,alt:"Section logo",className:"section-logo"})),a.createElement("div",{className:"text-container"},a.createElement("h2",{className:"section-title"},t),a.createElement("p",{className:"section-text"},n)))},x=n.p+"50ec37a221618b4da1c0.png";const T=function(){var e=(0,a.useState)("Open Sans"),t=e[0],n=e[1],r=function(){var e=[],t={Title:"Why Invest with Us?",Sections:[]};return(e=[]).push("Now is an ideal time to acquire multifamily assets in DFW and Texas due to rising construction costs, increasing "),e.push("rental demand, and lower valuations (down 30%) caused by higher interest rates and a surge "),e.push("in new units. Population growth is absorbing new units quickly, and once the supply surge ends in Q4 "),e.push("2025, both valuations and rental income are expected to rise significantly."),t.Sections.push({Title:"MultiFamily",ContentText:e.join("")}),(e=[]).push("DFW is the 4th fastest-growing metro area in the US, with 418 new residents daily. Low unemployment, "),e.push("high job growth, and a young population favoring renting make it attractive. Texas is also landlord-friendly. "),e.push("Key industries are technology, finance, healthcare, and "),e.push("transportation, with major companies like AT&T, ExxonMobil, "),e.push("and American Airlines. Economic and population growth is expected to continue."),t.Sections.push({Title:"DFW Market",ContentText:e.join("")}),(e=[]).push("High-demand rental units in multifamily properties provide steady cash flow, as a few vacancies have minimal "),e.push("impact. Economies of scale offer cost efficiency and enable professional management, making it easier for "),e.push("investors to receive consistent monthly income without directly handling property management or tenant issues."),t.Sections.push({Title:"Passive Income",ContentText:e.join("")}),(e=[]).push("Improving multifamily properties through renovations or added amenities boosts investor equity by raising "),e.push("rental income and paying down debt.Multifamily real estate typically offers higher risk - adjusted returns "),e.push("(12-18%) than the S&P 500 (8-9%), with less volatility and lower correlation to the stock market."),t.Sections.push({Title:"Capital Appreciation",ContentText:e.join("")}),(e=[]).push("Real estate investments offer tax advantages through depreciation, which reduces taxable income. "),e.push("Deductible expenses like mortgage interest, maintenance, and "),e.push("management fees increase net income, benefiting investors with higher monthly returns."),t.Sections.push({Title:"Tax Advantages",ContentText:e.join("")}),{WhyInvestWithUs:t}}().WhyInvestWithUs;return a.createElement("div",{className:"home-container"},a.createElement("div",null,a.createElement("label",{htmlFor:"font-selector"},"Choose a font: "),a.createElement("select",{id:"font-selector",onChange:function(e){var t=e.target.value;n(t),document.body.style.fontFamily=t},value:t},["Open Sans","Roboto","Lato","Source Sans Pro","Merriweather","Inter","Work Sans","Montserrat","Raleway","Poppins"].map((function(e,t){return a.createElement("option",{key:t,value:e},e)})))),a.createElement("div",{className:"why-invest"},a.createElement("h2",{className:"title"},r.Title),r.Sections.map((function(e,t){return a.createElement(w,{key:t,title:e.Title,content:e.ContentText,logo:x})}))))};const k=n.p+"f72a476fbc9056eef2be.png",N=n.p+"fd25f3d8984314e35d80.png",S=n.p+"05a394883e38fc7497da.png",I=n.p+"4eea83677a5a466a6ef2.png";const P=function(){var e=function(){var e=[],t=[];return(e=[]).push('Acquire Class B & C "value-add" apartment buildings in the State of Texas, preferably in the '),e.push("Dallas-Fort Worth (DFW). Then, Invest in the property and its amenities through capital improvements."),t.push({Title:"1. Invest & Add-Value",ContentText:e.join("")}),(e=[]).push("After renovations and improvements, we seek to maintain or achieve 95% "),e.push("occupancy and 95% market rents within 36 months."),t.push({Title:"2. Increase Income & Occupancy",ContentText:e.join("")}),(e=[]).push("During the hold period, we seek to pay investors 9% monthly preferred returns with an additional "),e.push("goal of returning investor capital prior to selling. Investors will maintain their equity position "),e.push("in the asset and continue to earn preferred returns until divestiture."),t.push({Title:"3. Pay Investor Preferred Returns & Equity",ContentText:e.join("")}),(e=[]).push("Once the property has been stabilized our goal is to hold for about 5 years providing income for our partners. "),e.push("After the hold period the asset will be sold with investors earning double digit Internal Rate of Returns."),t.push({Title:"4. Operate and Divest",ContentText:e.join("")}),{PageTitle:"Our Strategy",Sections:t}}(),t=e.PageTitle,n=e.Sections,r=[N,I,k,S];return a.createElement("div",{className:"strategy-container"},a.createElement("h1",null,t),a.createElement("div",{className:"strategy"},n.map((function(e,t){return a.createElement(w,{key:t,title:e.Title,content:e.ContentText,logo:r[t]})}))))};const A=n.p+"b8810c5ff689300e729f.svg";const j=function(e){var t=e.picture,n=e.memberName,r=e.memberLinkedIn;return a.createElement("section",{className:"team-card-container"},a.createElement("div",{className:"outer-logo-container"},a.createElement("img",{src:t,alt:"Logo",className:"section-logo"})),a.createElement("div",{className:"content-container"},a.createElement("div",{className:"title-container"},a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{src:A,alt:""}),a.createElement("h3",{className:"section-subtitle"},n))),a.createElement("div",{className:"inner-logo-container"},a.createElement("img",{src:t,alt:"Logo",className:"section-logo"})),a.createElement("div",{className:"text-container"},a.createElement("p",null,"Ryan is a Principal Consultant with Amazon Web Services (AWS) where he advises Technology Executives of utilities and publicly traded companies on how to migrate and modernize their infrastructure to the Amazon cloud. Ryan has 25 years of consulting and technology experience in the San Francisco Bay Area."),a.createElement("p",null,"Ryan grew up in the Real Estate & Investment Industries with his father",a.createElement("a",{href:"https://www.linkedin.com/in/bruce-a-porter-1b841a5",target:"_blank",rel:"noopener noreferrer"}," Bruce A. Porter "),"(RE Broker,  Retail Investment Advisor & former owner of a Broker Dealer) and uncles including Davis R. Chant (owner of ",a.createElement("a",{href:"https://www.chantre.com/",target:"_blank",rel:"noopener noreferrer"},"Davis R. Chant Realtors")," in the Poconos) on both coasts."),a.createElement("p",null,"Ryan began his real estate journey remodeling, renting and flipping apartments in California and Latin America for 10 years. Over the years Ryan's passion for Real Estate has deepened and he views multifamily as one of the top opportunities to generate wealth and secure solid risk-adjusted returns."))))};var C=n(589),O=function(){return O=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},O.apply(this,arguments)};const q=function(e){var t=e.data;return a.createElement("div",{className:"carousel-container"},a.createElement("div",{className:"inner"},a.createElement(C.A,O({},{dots:!0,infinite:!0,speed:750,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,arrows:!1,pauseOnHover:!0,adaptiveHeight:!0,variableWidth:!1}),t.ValuesItems.map((function(e,t){return a.createElement("div",{key:t},a.createElement("h2",null,e.SectionTitle),a.createElement("p",null,e.SectionText))})))))},F=n.p+"f8910318ca094bf0b907.jpg";const L=function(e){var t=e.items;return a.createElement("div",{className:"values-summary-container"},t.map((function(e,t){return a.createElement("p",{key:t,dangerouslySetInnerHTML:{__html:e}})})))};const R=function(){var e,t,n,r=(e=[],t=[],n=[],(e=[]).push("Ryan is a huge believer in the Amazon Leadership Principles that have propelled the growth and success of many Amazon businesses. "),e.push("All 14 leadership principles can be seen <a href='https://www.amazon.jobs/content/en/our-workplace/leadership-principles' target='_blank' rel='noopener noreferrer'>here</a>."),t.push(e.join("")),(e=[]).push("The following 8 values are a focus for Porter Legacy Group and all day-to-day work is guided by these values."),t.push(e.join("")),(e=[]).push('"Prioritize and obsess over customer needs and satisfaction above all else."'),n.push({SectionTitle:"Customer Obsession",SectionText:e.join("")}),(e=[]).push('"Meet established objectives by delivering high-quality products or services in a timely and consistent manner."'),n.push({SectionTitle:"Deliver Results",SectionText:e.join("")}),(e=[]).push('"Build solid relationships based on transparency, honesty and mutual respect."'),n.push({SectionTitle:"Earn Trust",SectionText:e.join("")}),(e=[]).push('"Maximize available resources and find efficient ways to achieve results without overspending."'),n.push({SectionTitle:"Frugality",SectionText:e.join("")}),(e=[]).push('"Prioritize quick decision-making and action over procrastination and over-analysis."'),n.push({SectionTitle:"Bias for Action",SectionText:e.join("")}),(e=[]).push('"Have a bold and ambitious vision that inspires meaningful actions and results."'),n.push({SectionTitle:"Think Big",SectionText:e.join("")}),(e=[]).push('"Set exceptional quality standards and demand their fulfillment in all areas of work."'),n.push({SectionTitle:"Insist on the Highest Standards",SectionText:e.join("")}),(e=[]).push('"Maintain a mindset of constant learning and always be open to new ideas and perspectives."'),n.push({SectionTitle:"Learn and Be Curious",SectionText:e.join("")}),(e=[]).push('"Encourage innovation and creativity, and seek ways to simplify processes and solutions."'),n.push({SectionTitle:"Invent and Simplify",SectionText:e.join("")}),{ValuesData:{ValuesTitle:"Values",ValuesSummaryItems:t,ValuesItems:n},TeamData:{TeamTitle:"About",MemberName:"Ryan B. Porter",MemberLinkedIn:"https://www.linkedin.com/in/ryanbporter/"}}),i=r.TeamData,o=r.ValuesData,s=i.MemberName,l=i.MemberLinkedIn,c=i.TeamTitle;return a.createElement("div",{className:"about-container"},a.createElement("div",{className:"team-container"},a.createElement("h1",null,i.TeamTitle),a.createElement("div",{className:"team-member-container"},a.createElement(j,{title:c,memberName:s,memberLinkedIn:l,picture:F}))),a.createElement("div",{className:"values-container"},a.createElement("h1",null,o.ValuesTitle),a.createElement("div",{className:"outline-container"},a.createElement(L,{items:o.ValuesSummaryItems}),a.createElement(q,{data:o}))))};const W=function(){return{PageTitle:"Investor Frequently Asked Questions",Questions:[{Question:"What is Porter Legacy Group and what do you invest in?",Answer:"Porter Legacy Group is a Private Equity Firm that focuses on acquiring commercial real estate properties.\n\t\t\t\tWe target high-quality assets with strong growth potential, aiming to generate consistent returns for our investors."},{Question:"How does Porter Legacy Group generate returns for investors?",Answer:"We generate returns through a combination of rental income, property appreciation, expertly timed sales. Through \n\t\t\t\tcareful professional property management and capital improvements to the properties, we aim to maximize profits and return them to\n\t\t\t\tour investors."},{Question:"Who can invest with Porter Legacy Group?",Answer:"Porter Legacy Group is open to accredited investors, as defined by the SEC. \n\t\t\t\tThis typically includes individuals or entities who meet certain financial thresholds in income or net worth."},{Question:"What is the typical holding period for an investment?",Answer:"Our typical holding period for Commercial Real Estate Investments ranges from 3 to 7 years. \n\t\t\t\tThis allows us to capitalize on market conditions and maximize returns before executing an exit strategy."},{Question:"What are the risks involved with investing in commercial real estate?",Answer:"As with any investment, Commercial Real Estate carries risks, including market fluctuations, \n\t\t\t\ttenant vacancies, and changes in interest rates. However, our experience and due diligence help mitigate these risks."},{Question:"How often will I receive updates about my investment?",Answer:"Investors receive regular updates, including monthly reports that detail property \n\t\t\t\tperformance, financials, \n\t\t\t\tand market conditions. We also provide timely updates on major events, such as property sales or acquisitions."},{Question:"When can I expect to receive returns on my investment?",Answer:"Investors typically receive distributions on a monthly basis, depending on the cash flow generated by \n\t\t\t\tthe properties. Final returns are distributed upon the sale of the property, which is part of the exit strategy."},{Question:"Can I reinvest my returns?",Answer:"Yes, we offer the option for Investors to reinvest their returns into future investment opportunities with Porter Legacy Group."},{Question:"How do I get started with investing?",Answer:"To get started, please visit our 'Invest with Us' page and fill out the contact form. Our team will reach out \n\t\t\t \tto guide you through the process and discuss available opportunities."},{Question:"What happens if I want to exit my investment early?",Answer:"Real Estate Investments with Porter Legacy Group are typically long-term and illiquid, meaning early exits are \n\t\t\t\tuncommon. However, in certain circumstances, we may be able to accommodate early exit requests depending on the terms of the agreement."}]}};const _=function(e){var t=e.Question,n=e.Index,r=e.Open,i=e.OnClick;return a.createElement(a.Fragment,null,a.createElement("div",{key:"Key_Faq_Item_".concat(n),className:"faq-item"},a.createElement("h2",null,t.Question),a.createElement("div",{className:"icon ".concat(r?"open":""),onClick:i})),a.createElement("div",{key:"Key_Answer_".concat(n),className:"answer ".concat(r?"open":"")},t.Answer))};const M=function(e){var t=e.faqs,n=(0,a.useState)(void 0),r=n[0],i=n[1];return t.map((function(e,t){var n=r===t;return a.createElement("section",{key:"Question_Group_".concat(t)},a.createElement(_,{Question:e,Index:t,Open:n,OnClick:function(){return i(n?void 0:t)}}))}))};const G=function(){var e=W();return a.createElement("div",{className:"faq-container"},a.createElement("div",{className:"faq-list"},a.createElement("h1",null,e.PageTitle),a.createElement(M,{faqs:e.Questions})))};var D=n(845),B=(n(482),function(){return B=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},B.apply(this,arguments)}),Q=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((a=a.apply(e,t||[])).next())}))},U=function(e,t){var n,a,r,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(n=1,a&&(r=2&s[0]?a.return:s[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;switch(a=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,a=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],a=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},z=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,i=t.length;r<i;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};const H=function(){var e,t=(0,a.useState)({Name:"",Email:"",Phone:"",Accredited:"",Experience:[]}),n=t[0],r=t[1],i=(0,a.useState)(!1),o=i[0],s=i[1],l=((e=[]).push("We are committed to implementing our strategy with diligence and transparency. "),e.push("We look forward to partnering with investors who share our long-term vision. "),e.push("Learn more about our process and how we can help you grow."),{PageTitle:"Invest with Us",GoogleScriptsWebAppUrl:"https://script.google.com/macros/s/AKfycbxzF2sAUyVpWDC3Ozb_InGUMiJmSXppSD1_Me7fDFBvguV7eEEvX_INu9Tb7MvUHXjh/exec",InvestmentProgramText:e.join("")}),c=l.PageTitle,u=l.InvestmentProgramText,m=l.GoogleScriptsWebAppUrl,p=function(e){var t=e.target,n=t.name,a=t.value,i=t.type,o="checkbox"===i&&e.target.checked;r((function(e){var t;if("checkbox"===i){var r=o?z(z([],e.Experience,!0),[a],!1):e.Experience.filter((function(e){return e!==a}));return B(B({},e),{Experience:r})}return B(B({},e),((t={})[n]=a,t))}))};return a.createElement("div",{className:"invest-container"},a.createElement("h1",null,c),a.createElement("div",{className:"info-section"},a.createElement("p",null,u)),a.createElement("div",{className:"form-container"},a.createElement("form",{onSubmit:function(e){return Q(void 0,void 0,void 0,(function(){var t,a;return U(this,(function(i){switch(i.label){case 0:e.preventDefault(),s(!0),t="Thank you, We'll be in touch soon!",a="Sorry, there was a problem submitting your information.",i.label=1;case 1:return i.trys.push([1,4,5,6]),[4,fetch(m,{method:"POST",body:new URLSearchParams(B(B({},n),{Experience:n.Experience.join(", ")})),headers:{"Content-Type":"application/x-www-form-urlencoded"}})];case 2:return[4,i.sent().text()];case 3:return"Success"===i.sent()?D.oR.success(t):D.oR.error(a),[3,6];case 4:return i.sent(),D.oR.error(a),[3,6];case 5:return s(!1),r({Name:"",Email:"",Phone:"",Accredited:"",Experience:[]}),[7];case 6:return[2]}}))}))}},a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"name"},"Full Name",a.createElement("span",{className:"required"},"*")),a.createElement("input",{type:"text",id:"name",name:"Name",placeholder:"Your Name",value:n.Name,onChange:p,required:!0}),a.createElement("label",{htmlFor:"email"},"Email Address",a.createElement("span",{className:"required"},"*")),a.createElement("input",{type:"email",id:"email",name:"Email",placeholder:"Your Email",value:n.Email,onChange:p,required:!0}),a.createElement("label",{htmlFor:"phone"},"Phone Number",a.createElement("span",{className:"required"},"*")),a.createElement("input",{type:"tel",id:"phone",name:"Phone",placeholder:"Phone Number",value:n.Phone,onChange:p,required:!0})),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Are you an accredited investor?",a.createElement("span",{className:"required"},"*")),a.createElement("div",{className:"radio-group"},a.createElement("div",{className:"radio-button-pair"},a.createElement("input",{type:"radio",id:"non-accredited",name:"Accredited",value:"Non-Accredited",checked:"Non-Accredited"===n.Accredited,required:!0,onChange:p}),a.createElement("label",{htmlFor:"non-accredited"},"Non-accredited")),a.createElement("div",{className:"radio-button-pair"},a.createElement("input",{type:"radio",id:"accredited",name:"Accredited",value:"Accredited",checked:"Accredited"===n.Accredited,onChange:p}),a.createElement("label",{htmlFor:"accredited"},"Accredited")),a.createElement("div",{className:"radio-button-pair"},a.createElement("input",{type:"radio",id:"qualified",name:"Accredited",value:"Qualified",checked:"Qualified"===n.Accredited,onChange:p}),a.createElement("label",{htmlFor:"qualified"},"Qualified"))),a.createElement("label",null,"Do you have Real Estate Investment Experience?"),a.createElement("div",{className:"checkbox-group"},a.createElement("div",{className:"check-box-pair"},a.createElement("input",{type:"checkbox",id:"single-family",name:"Experience",value:"Single-Family",checked:n.Experience.includes("Single-Family"),onChange:p}),a.createElement("label",{htmlFor:"single-family"},"Single family")),a.createElement("div",{className:"check-box-pair"},a.createElement("input",{type:"checkbox",id:"multi-family-lp",name:"Experience",value:"Multi-Family-LP",checked:n.Experience.includes("Multi-Family-LP"),onChange:p}),a.createElement("label",{htmlFor:"multi-family-lp"},"Multifamily Limited Partner")),a.createElement("div",{className:"check-box-pair"},a.createElement("input",{type:"checkbox",id:"multi-family-gp",name:"Experience",value:"Multi-Family-GP",checked:n.Experience.includes("Multi-Family-GP"),onChange:p}),a.createElement("label",{htmlFor:"multi-family-gp"},"Multifamily General Partner")),a.createElement("div",{className:"check-box-pair"},a.createElement("input",{type:"checkbox",id:"co-gp",name:"Experience",value:"Co-GP",checked:n.Experience.includes("Co-GP"),onChange:p}),a.createElement("label",{htmlFor:"co-gp"},"Co-GP")),a.createElement("div",{className:"check-box-pair"},a.createElement("input",{type:"checkbox",id:"reits",name:"Experience",value:"REITS",checked:n.Experience.includes("REITS"),onChange:p}),a.createElement("label",{htmlFor:"reits"},"REITs"))),a.createElement("button",{type:"submit",disabled:o},o?"Submitting...":"Submit")))),a.createElement(D.N9,{position:"bottom-right",autoClose:5e3,hideProgressBar:!0}))};const V=function(){return a.createElement("div",{className:"loading-container"},a.createElement("div",{className:"loading-text"},"Loading..."),a.createElement("div",{className:"loading-spinner"}))};const K=function(){return a.createElement(i.Kd,{basename:"/PorterLegacyGroup"},a.createElement(a.Suspense,{fallback:a.createElement(V,null)},a.createElement(o.BV,null,a.createElement(o.qh,{path:"/",element:a.createElement(b,null)},a.createElement(o.qh,{index:!0,element:a.createElement(T,null)}),a.createElement(o.qh,{path:"strategy",element:a.createElement(P,null)}),a.createElement(o.qh,{path:"about",element:a.createElement(R,null)}),a.createElement(o.qh,{path:"faq",element:a.createElement(G,null)}),a.createElement(o.qh,{path:"invest",element:a.createElement(H,null)})))))};var Y=document.getElementById("root");Y.classList.add("root-style"),r.createRoot(Y).render(a.createElement(a.StrictMode,null,a.createElement(K,null)))}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return a[e](n,n.exports,i),n.exports}i.m=a,e=[],i.O=(t,n,a,r)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,a,r]=e[u],s=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(s=!1,r<o&&(o=r));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);i.r(r);var o={};t=t||[null,n({}),n([]),n(n)];for(var s=2&a&&e;"object"==typeof s&&!~t.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,i.d(r,o),r},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={792:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[o,s,l]=n,c=0;if(o.some((t=>0!==e[t]))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(l)var u=l(i)}for(t&&t(n);c<o.length;c++)r=o[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(u)},n=self.webpackChunkporter_legacy_group=self.webpackChunkporter_legacy_group||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=i.O(void 0,[605],(()=>i(461)));o=i.O(o)})();
//# sourceMappingURL=main.4f913e171b5ae6fe2091.js.map