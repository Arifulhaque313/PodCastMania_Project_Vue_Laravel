import{C as m,S as d,P as l,N as p}from"./carousel.es.8fae5d43.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{E as o,o as s,e as n,b as e,w as t,F as u,h as f,a as w}from"./app.266ad528.js";const g={name:"App",components:{Carousel:m,Slide:d,Pagination:l,Navigation:p},data(){return{item_to_show:3}},mounted(){screen.width<768&&(this.item_to_show=1),console.log(screen.width)}},v={class:"mt-24 mx-12"},x=w("div",{class:"w-28 h-28 bg-indigo-500"},null,-1);function C(N,k,B,$,a,b){const i=o("slide"),r=o("navigation"),c=o("carousel");return s(),n("div",v,[e(c,{"items-to-show":a.item_to_show},{addons:t(()=>[e(r)]),default:t(()=>[(s(),n(u,null,f(10,_=>e(i,{key:_},{default:t(()=>[x]),_:2},1024)),64))]),_:1},8,["items-to-show"])])}const S=h(g,[["render",C]]);export{S as default};