import{p as u,r as d,o as r,u as _,b as m,c as p,d as t}from"./index-113fe4ec.js";import{u as b,b as v}from"./plan-11b70149.js";const f={class:"box"},h={class:"mb-3"},g=t("label",{class:"form-label"},"여행자 ID :",-1),x=["value"],y={class:"mb-3"},k=t("label",{class:"form-label"},"제목 :",-1),w=["value"],B={class:"mb-3"},P=t("label",{class:"form-label"},"계획 :",-1),V=["value"],C={class:"mb-3"},E=t("label",{class:"form-label"},"언급할 사람을 쉼표로 구분하여 입력해주세요.",-1),L=["value"],I={__name:"PlanEditView",setup(R){const n=u(),o=d({});function a(s){b(s,({data:e})=>{console.log(e),o.value=e},e=>{console.log(e)})}r(()=>{console.log(n.params.contentid),a(n.params.contentid)});const c=_();function l(){c.push({name:"plan-list"})}function i(){const s={userid:userid.value,title:title.value,content:content.value,contentid:n.params.contentid,mentionedid:mentionedid.value.split(",")};v(s,({data:e})=>{console.log(e),alert(e.msg),l()},e=>{console.log(e)})}return(s,e)=>(m(),p("div",f,[t("div",h,[g,t("input",{id:"userid",value:o.value.userid,type:"text",class:"form-control"},null,8,x)]),t("div",y,[k,t("input",{id:"title",value:o.value.title,type:"text",class:"form-control"},null,8,w)]),t("div",B,[P,t("textarea",{id:"content",value:o.value.content,class:"form-control",rows:"3"},null,8,V)]),t("div",C,[E,t("input",{id:"mentionedid",value:o.value.mentionList,type:"text",class:"form-control"},null,8,L)]),t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:i},"계획 등록"),t("button",{class:"btn btn-outline-primary btn-sm",onClick:l},"목록으로")]))}};export{I as default};
