import{C as f,c as p,o as _,K as v,w as m,b as o,u as n,f as i,n as g,a as t,t as l}from"./app-CrU1426M.js";import{_ as b}from"./ActionMessage-DF7bnrGR.js";import{_ as T}from"./FormSection-CYT04iHz.js";import{_ as w,a as x}from"./TextInput-AC9gHHv5.js";import{_ as d}from"./InputLabel-CIQmguyz.js";import{_ as N}from"./PrimaryButton-F_hdWXsO.js";import"./SectionTitle-_kcootCw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"col-span-6"},S={class:"flex items-center mt-2"},V=["src","alt"],$={class:"ms-4 leading-tight"},k={class:"text-gray-900"},B={class:"text-gray-700 text-sm"},U={class:"col-span-6 sm:col-span-4"},A={__name:"UpdateTeamNameForm",props:{team:Object,permissions:Object},setup(a){const r=a,s=f({name:r.team.name}),c=()=>{s.put(route("teams.update",r.team),{errorBag:"updateTeamName",preserveScroll:!0})};return(j,e)=>(_(),p(T,{onSubmitted:c},v({title:m(()=>[e[1]||(e[1]=i(" Team Name "))]),description:m(()=>[e[2]||(e[2]=i(" The team's name and owner information. "))]),form:m(()=>[t("div",y,[o(d,{value:"Team Owner"}),t("div",S,[t("img",{class:"size-12 rounded-full object-cover",src:a.team.owner.profile_photo_url,alt:a.team.owner.name},null,8,V),t("div",$,[t("div",k,l(a.team.owner.name),1),t("div",B,l(a.team.owner.email),1)])])]),t("div",U,[o(d,{for:"name",value:"Team Name"}),o(w,{id:"name",modelValue:n(s).name,"onUpdate:modelValue":e[0]||(e[0]=u=>n(s).name=u),type:"text",class:"mt-1 block w-full",disabled:!a.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),o(x,{message:n(s).errors.name,class:"mt-2"},null,8,["message"])])]),_:2},[a.permissions.canUpdateTeam?{name:"actions",fn:m(()=>[o(b,{on:n(s).recentlySuccessful,class:"me-3"},{default:m(()=>e[3]||(e[3]=[i(" Saved. ")])),_:1},8,["on"]),o(N,{class:g({"opacity-25":n(s).processing}),disabled:n(s).processing},{default:m(()=>e[4]||(e[4]=[i(" Save ")])),_:1},8,["class","disabled"])]),key:"0"}:void 0]),1024))}};export{A as default};
