import{d as b,o as u,x as y,C as V,c as k,w as m,b as l,a as s,u as a,m as $,h as B,j as f,s as _,n as x,f as v,t as S,W as C}from"./app-CrU1426M.js";import{_ as U}from"./AppLayout-DtFpUeiR.js";import{_ as c,a as n}from"./TextInput-AC9gHHv5.js";import{_ as g}from"./InputLabel-CIQmguyz.js";import{_ as E}from"./PrimaryButton-F_hdWXsO.js";import{_ as M}from"./SecondaryButton--Bg6WDwQ.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T=["id","value"],j={__name:"TextArea",props:{id:String,modelValue:[String,Number,Boolean]},emits:["update:modelValue"],setup(r){return(o,i)=>(u(),b("textarea",y({id:r.id,value:r.modelValue,class:["border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",o.$attrs.class||""]},o.$attrs,{onInput:i[0]||(i[0]=e=>o.$emit("update:modelValue",e.target.value))}),null,16,T))}},A={class:"font-semibold text-xl text-gray-800 leading-tight"},I={class:"py-6"},z={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},D={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},K={class:"p-6 bg-white border-b border-gray-200"},L={class:"grid grid-cols-1 gap-6"},P={class:"mt-2 flex space-x-4"},O={class:"inline-flex items-center"},W=["disabled"],F={class:"inline-flex items-center"},H=["disabled"],J={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},R={class:"flex justify-end space-x-3"},q={key:0},G={key:1},Q={__name:"Edit",props:{person:Object},setup(r){const o=r,i=p=>p?new Date(p).toISOString().split("T")[0]:null,e=V({name:o.person.name,gender:o.person.gender,birth_date:i(o.person.birth_date),death_date:i(o.person.death_date),bio:o.person.bio}),h=()=>{e.put(route("people.update",o.person.id),{preserveScroll:!0,onSuccess:()=>{e.reset()}})},w=()=>{C.visit(route("people.show",o.person.id))};return(p,t)=>(u(),k(U,null,{header:m(()=>[s("h2",A," Edit Anggota Keluarga: "+S(a(e).name),1)]),default:m(()=>[l(a($),{title:"Edit Anggota Keluarga"}),s("div",I,[s("div",z,[s("div",D,[s("div",K,[s("form",{onSubmit:B(h,["prevent"])},[s("div",L,[s("div",null,[t[6]||(t[6]=s("div",{class:"flex items-center"},[s("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Nama Lengkap "),s("span",{class:"text-red-600 ml-1"},"*")],-1)),l(c,{id:"name",modelValue:a(e).name,"onUpdate:modelValue":t[0]||(t[0]=d=>a(e).name=d),type:"text",class:"mt-1 block w-full",disabled:a(e).processing},null,8,["modelValue","disabled"]),l(n,{message:a(e).errors.name,class:"mt-2"},null,8,["message"])]),s("div",null,[t[9]||(t[9]=s("div",{class:"flex items-center"},[s("label",{class:"block text-sm font-medium text-gray-700"}," Jenis Kelamin "),s("span",{class:"text-red-600 ml-1"},"*")],-1)),s("div",P,[s("label",O,[f(s("input",{"onUpdate:modelValue":t[1]||(t[1]=d=>a(e).gender=d),type:"radio",value:"male",class:"h-4 w-4 text-indigo-600 focus:ring-indigo-500",disabled:a(e).processing},null,8,W),[[_,a(e).gender]]),t[7]||(t[7]=s("span",{class:"ml-2"},"Laki-laki",-1))]),s("label",F,[f(s("input",{"onUpdate:modelValue":t[2]||(t[2]=d=>a(e).gender=d),type:"radio",value:"female",class:"h-4 w-4 text-indigo-600 focus:ring-indigo-500",disabled:a(e).processing},null,8,H),[[_,a(e).gender]]),t[8]||(t[8]=s("span",{class:"ml-2"},"Perempuan",-1))])]),l(n,{message:a(e).errors.gender,class:"mt-2"},null,8,["message"])]),s("div",J,[s("div",null,[l(g,{for:"birth_date",value:"Tanggal Lahir"}),l(c,{id:"birth_date",modelValue:a(e).birth_date,"onUpdate:modelValue":t[3]||(t[3]=d=>a(e).birth_date=d),type:"date",class:"mt-1 block w-full",disabled:a(e).processing},null,8,["modelValue","disabled"]),l(n,{message:a(e).errors.birth_date,class:"mt-2"},null,8,["message"])]),s("div",null,[l(g,{for:"death_date",value:"Tanggal Meninggal (jika ada)"}),l(c,{id:"death_date",modelValue:a(e).death_date,"onUpdate:modelValue":t[4]||(t[4]=d=>a(e).death_date=d),type:"date",class:"mt-1 block w-full",disabled:a(e).processing},null,8,["modelValue","disabled"]),l(n,{message:a(e).errors.death_date,class:"mt-2"},null,8,["message"])])]),s("div",null,[l(g,{for:"bio",value:"Biografi"}),l(j,{id:"bio",modelValue:a(e).bio,"onUpdate:modelValue":t[5]||(t[5]=d=>a(e).bio=d),class:"mt-1 block w-full",rows:"3",disabled:a(e).processing},null,8,["modelValue","disabled"]),l(n,{message:a(e).errors.bio,class:"mt-2"},null,8,["message"])]),s("div",R,[l(M,{type:"button",onClick:w,disabled:a(e).processing,class:x({"opacity-50 cursor-not-allowed":a(e).processing})},{default:m(()=>t[10]||(t[10]=[v(" Batal ")])),_:1},8,["disabled","class"]),l(E,{disabled:a(e).processing,class:x({"opacity-75 cursor-not-allowed":a(e).processing})},{default:m(()=>[a(e).processing?(u(),b("span",q,t[11]||(t[11]=[s("svg",{class:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),v(" Menyimpan... ")]))):(u(),b("span",G," Simpan Perubahan "))]),_:1},8,["disabled","class"])])])],32)])])])])]),_:1}))}},le=N(Q,[["__scopeId","data-v-af414dd8"]]);export{le as default};
