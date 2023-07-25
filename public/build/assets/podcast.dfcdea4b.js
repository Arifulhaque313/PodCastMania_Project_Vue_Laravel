import{A as b}from"./AppLayout.582bc2c8.js";import{C as y,S as v,P as A,N as w}from"./carousel.es.8fae5d43.js";import{L as O,E as p,o as s,e as a,a as e,F as n,h as d,c as g,w as x,i as T,t as o,n as S,f as E}from"./app.266ad528.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import"./XMarkIcon.59d2b262.js";const L={components:{Link:O},props:{links:Array},setup(c){}},N={class:"container mx-auto px-4 py-8"},C={class:"flex flex-row flex-nowrap justify-center items-center","aria-label":"Pagination"};function G(c,h,m,i,f,_){const r=p("Link");return s(),a("div",N,[e("nav",C,[(s(!0),a(n,null,d(m.links,(t,l)=>(s(),a(n,{key:l},[t.url?(s(),g(r,{key:0,class:S(t.active?"flex bg-[#D1127C] md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-brandColor bg-brandColor text-white pointer-events-none":"flex md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-brandColorNew bg-white text-[rgba(0,0,0,0.35)] hover:border-brandColor"),title:"Page 1",href:t.url},{default:x(()=>[T(o(t.label.includes("Previous")?"<<":t.label&&t.label.includes("Next")?">>":t.label),1)]),_:2},1032,["class","href"])):E("",!0)],64))),128))])])}const H=u(L,[["render",G]]),k=[{type:"FASHION",title:"We Get Only One Shot At This",img:"/images/podcast/card_img1.svg"},{type:"MARKETING",title:"We Get Only One Shot At This",img:"/images/podcast/card_img2.svg"},{type:"HELTH",title:"We Get Only One Shot At This",img:"/images/podcast/card_img3.svg"},{type:"FASHION",title:"We Get Only One Shot At This",img:"/images/podcast/card_img4.svg"},{type:"MARKETING",title:"We Get Only One Shot At This",img:"/images/podcast/card_img5.svg"},{type:"HELTH",title:"We Get Only One Shot At This",img:"/images/podcast/card_img6.svg"},{type:"FASHION",title:"We Get Only One Shot At This",img:"/images/podcast/card_img7.svg"},{type:"MARKETING",title:"We Get Only One Shot At This",img:"/images/podcast/card_img8.svg"},{type:"HELTH",title:"We Get Only One Shot At This",img:"/images/podcast/card_img2.svg"}],W=[{name:"fashion"},{name:"education"},{name:"health"},{name:"entertainment"},{name:"Business"},{name:"Marketing"},{name:"Technology"},{name:"politics"},{name:"social media"},{name:"Telecomuniction Media"},{name:"Current Affairs"}],$={name:"Blog",components:{AppLayout:b,Carousel:y,Slide:v,Pagination:A,Navigation:w,PaginateFrontend:H},data:()=>({settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:1,snapAlign:"center"},1024:{itemsToShow:3,snapAlign:"start"}}}),setup(){return{episode:k,category:W}}},B=e("div",{class:"max-w-full h-auto md:h-[100vh] background pt-14 md:pt-24 flex items-center justify-center"},[e("div",{class:"max-w-7xl mx-auto"},[e("div",{class:"text-white text-center py-12"},[e("p",{class:"font-['Helvetica'] text-3xl md:text-7xl font-bold"},"Podcast"),e("p",{class:"text-sm font-semibold md:text-xl px-6 md:px-20 lg:px-60 mt-2 md:mt-6"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, pulvinar proin lectus ornare aliquam in ")])])],-1),F={class:"max-w-full h-auto about_section_bg bg[#E5E5E5] pt-2 md:pt-2"},I={class:"max-w-7xl mx-auto md:px-12"},P={class:"max-w-full mx-auto mt-8 mb-40"},j={class:"flex flex-wrap gap-2 px-4 md:px-0 py-6"},M=e("a",{href:"#",class:"px-4 md:px-8 py-2 text-sm md:text-base text-white rounded-full bg-gradient-to-r from-[#0616E0] to-[#01B9F7]"},"All",-1),K={class:"py-4 md:py-4 grid grid-cols-12 px-4 md:px-0 gap-y-2 md:gap-8"},R={class:"flex justify-center relative"},V=["src"],q=e("div",{class:"absolute bg-[rgba(0,0,0,0.3)] top-3 right-3 rounded-full px-4 py-1 text-sm md:text-base text-white font-semibold md:font-bold"}," April 20, 2021 ",-1),D={class:"flex item-center gap-2 mt-2"},z=e("span",null,[e("img",{src:"/images/about/headphones-alt.svg",alt:""})],-1),J={class:"font-bold text-[#0087E9]"},Q={class:"text-base font-semibold text-md:text-xl md:font-bold pb-0 md:pb-6 pt-2"},U=e("div",{class:"flex gap-4 px-4 md:px-0 my-12"},[e("a",{href:"",class:"text-sm text-white bg-[#0087E9] font-bold rounded-full px-3 py-1.5"},"1"),e("a",{href:"",class:"text-sm text-gray-500 border border-gray-500 font-bold rounded-full px-3 py-1.5"},"2"),e("a",{href:"",class:"text-sm text-gray-500 border border-gray-500 font-bold rounded-full px-2 py-1.5"},">>")],-1);function X(c,h,m,i,f,_){const r=p("AppLayout");return s(),g(r,null,{default:x(()=>[B,e("div",F,[e("div",I,[e("div",P,[e("div",j,[M,(s(!0),a(n,null,d(i.category,t=>(s(),a("a",{key:t,href:"",class:"px-4 md:px-8 py-2 text-sm md:text-base text-gray-400 border border-gray-500 rounded-full"},o(t.name),1))),128))]),e("div",K,[(s(!0),a(n,null,d(i.episode,(t,l)=>(s(),a("div",{class:"col-span-12 md:col-span-4 bg-white p-6 rounded-lg shadow-lg",key:l},[e("div",R,[e("img",{class:"w-[600px]",src:t.img,alt:""},null,8,V),q]),e("div",D,[z,e("span",J,o(t.type),1)]),e("p",Q,o(t.title),1)]))),128))]),U])])])]),_:1})}const ae=u($,[["render",X]]);export{ae as default};