import{q as d,r as p,o as m,u as _,b as h,c as b,d as t,t as e}from"./index-df8b9645.js";import{d as v,a as f}from"./plan-7f4f46a7.js";const g=t("h1",null,"계획 보기",-1),k={class:"table"},w=t("th",{scope:"col"},"제목",-1),y={scope:"col"},P=t("th",{scope:"row"},"여행자",-1),B=t("th",{scope:"row"},"작성일",-1),C=t("th",{scope:"row"},"내용",-1),x=t("th",{scope:"row"},"언급한 사용자",-1),D={__name:"PlanView",setup(L){const s=d(),o=p({});function u(l){v(l,({data:n})=>{console.log(n),o.value=n},n=>{console.log(n)})}m(()=>{console.log(s.params.contentid),u(s.params.contentid)});const a=_();function c(){a.push({name:"plan-list"})}function i(){a.push({name:"plan-update",params:{contentid:o.contentid}})}function r(l){f(l,({data:n})=>{console.log(n),alert(n.msg),c()},n=>{console.log(n)})}return(l,n)=>(h(),b("div",null,[g,t("table",k,[t("thead",null,[t("tr",null,[w,t("th",y,e(o.value.title),1)])]),t("tbody",null,[t("tr",null,[P,t("td",null,e(o.value.userid),1)]),t("tr",null,[B,t("td",null,e(o.value.timestamp),1)]),t("tr",null,[C,t("td",null,e(o.value.content),1)]),t("tr",null,[x,t("td",null,e(o.value.mentionList),1)])])]),t("button",{class:"btn btn-outline-primary btn-sm",onClick:i}," 계획 수정 "),t("button",{class:"btn btn-outline-primary btn-sm",onClick:n[0]||(n[0]=R=>r(o.value.contentid))}," 계획 삭제 "),t("button",{class:"btn btn-outline-primary btn-sm",onClick:c}," 목록으로 ")]))}};export{D as default};
