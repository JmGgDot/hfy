import{_ as z,u as E,r as _,a as l,o as r,c as i,b as t,w as c,e as d,d as e,F as y,g as S,x as D,A as w,z as G,v as p}from"./index-738a9a27.js";import{s as U}from"./index-2d8d502a.js";const q=m=>U({url:`/Shop/GetShopListForPublic?page=${m}&count=15&ishot=true`,method:"get"});const A={class:"box"},H={class:"oneDiv"},R={class:"leftDiv"},T=["src"],j={class:"rightDiv"},J=["src","onClick"],K={class:"colorff4466"},M={class:"ovhd"},O={class:"pagina"},Q={__name:"index",setup(m){const g=E(),u=_([]),h=_(0),f=_(1),x=_(),L=()=>{x.value=G.service({lock:!0,text:"Loading"})},C=()=>{L(),q(f.value).then(({Data:o,Remark:n})=>{h.value=n.count,u.value=o,x.value.close()})};C();const b=o=>{f.value=o,C()},F=o=>{const n=g.resolve({name:"Comment",query:{id:o}});window.open(n.href)},k=o=>{g.push({name:o})};return(o,n)=>{const v=l("el-link"),N=l("el-header"),P=l("el-tooltip"),B=l("el-divider"),I=l("el-empty"),V=l("el-pagination"),$=l("el-main");return r(),i("div",A,[t(N,null,{default:c(()=>[t(v,{underline:!1,onClick:n[0]||(n[0]=s=>k("Home"))},{default:c(()=>[d("主页")]),_:1}),t(v,{underline:!1,onClick:n[1]||(n[1]=s=>k("CommUnity"))},{default:c(()=>[d("社区精选")]),_:1}),t(v,{underline:!1,class:"colorff4466"},{default:c(()=>[d("商城精选")]),_:1})]),_:1}),t($,null,{default:c(()=>[e("ul",null,[(r(!0),i(y,null,S(u.value,s=>D((r(),i("li",{key:s.ID},[e("div",H,[e("div",R,[e("img",{src:s.LogoSrc,alt:""},null,8,T),e("p",null,p(s.Name),1),e("p",null,[d(" 商品： "),e("span",null,p(s.ProductCount),1)])]),e("div",j,[(r(!0),i(y,null,S(s.Products,a=>(r(),i("div",{key:a.ID},[e("img",{src:a.FaceSrc,alt:"",onClick:W=>F(a.ID),style:{cursor:"pointer"}},null,8,J),e("p",K,"￥"+p(a.BasePrice),1),t(P,{class:"box-item",effect:"dark",content:a.Name,placement:"top-start"},{default:c(()=>[e("p",M,p(a.Name),1)]),_:2},1032,["content"])]))),128))])]),t(B)])),[[w,u.value.length>=1]])),128)),D(t(I,{description:"数据跑丢了..."},null,512),[[w,u.value.length<=0]]),e("div",O,[t(V,{background:"",layout:"prev, pager, next",total:h.value,onCurrentChange:b},null,8,["total"])])])]),_:1})])}}},Z=z(Q,[["__scopeId","data-v-0106ac95"]]);export{Z as default};
