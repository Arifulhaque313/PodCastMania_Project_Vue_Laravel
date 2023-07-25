import{d as u,u as f,o as y,c as w,w as e,a as c,b as t,g as a,S as h,n as v,i as s}from"./app.266ad528.js";import{a as g,b as k}from"./DialogModal.060b4fdb.js";import{_}from"./DangerButton.a8ad4d51.js";import{_ as x,a as b}from"./InputError.08552280.js";import{_ as C}from"./SecondaryButton.5b91994a.js";import"./SectionTitle.73100993.js";import"./_plugin-vue_export-helper.cdc0426e.js";const D=s(" Delete Account "),V=s(" Permanently delete your account. "),$=c("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),A={class:"mt-5"},U=s(" Delete Account "),B=s(" Delete Account "),F=s(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),K={class:"mt-4"},N=s(" Cancel "),P=s(" Delete Account "),G={__name:"DeleteUserForm",setup(S){const n=u(!1),r=u(null),o=f({password:""}),m=()=>{n.value=!0,setTimeout(()=>r.value.focus(),250)},d=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>r.value.focus(),onFinish:()=>o.reset()})},l=()=>{n.value=!1,o.reset()};return(I,i)=>(y(),w(g,null,{title:e(()=>[D]),description:e(()=>[V]),content:e(()=>[$,c("div",A,[t(_,{onClick:m},{default:e(()=>[U]),_:1})]),t(k,{show:n.value,onClose:l},{title:e(()=>[B]),content:e(()=>[F,c("div",K,[t(x,{ref_key:"passwordInput",ref:r,modelValue:a(o).password,"onUpdate:modelValue":i[0]||(i[0]=p=>a(o).password=p),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:h(d,["enter"])},null,8,["modelValue","onKeyup"]),t(b,{message:a(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(C,{onClick:l},{default:e(()=>[N]),_:1}),t(_,{class:v(["ml-3",{"opacity-25":a(o).processing}]),disabled:a(o).processing,onClick:d},{default:e(()=>[P]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{G as default};
