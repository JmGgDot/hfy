import{_ as z,u as E,r as _,a as l,o as r,c as i,b as o,w as c,e as d,d as t,F as y,g as w,x as S,A as D,z as G,v as p}from"./index-f4a9a0c5.js";import{s as H}from"./index-51a74c78.js";const U=g=>H({url:`/Shop/GetShopListForPublic?page=${g}&count=15&ishot=true`,method:"get"});const q={class:"box"},A={class:"oneDiv"},M={class:"leftDiv"},R=["src"],T={class:"rightDiv"},j=["src","onClick"],J={class:"colorff4466"},K={class:"ovhd"},O={class:"pagina"},Q={__name:"index",setup(g){const h=E(),u=_([]),f=_(0),C=_(1),k=_(),L=()=>{k.value=G.service({lock:!0,text:"Loading"})},x=()=>{L(),U(C.value).then(({Data:n,Remark:e})=>{f.value=e.count,u.value=n,k.value.close()})};x();const b=n=>{C.value=n,x()},F=n=>{const e=h.resolve({name:"Comment",query:{id:n}});window.open(e.href)},v=n=>{const e=h.resolve({name:n});window.open(e.href)};return(n,e)=>{const m=l("el-link"),N=l("el-header"),P=l("el-tooltip"),$=l("el-divider"),B=l("el-empty"),I=l("el-pagination"),V=l("el-main");return r(),i("div",q,[o(N,null,{default:c(()=>[o(m,{underline:!1,onClick:e[0]||(e[0]=s=>v("Home"))},{default:c(()=>[d("主页")]),_:1}),o(m,{underline:!1,onClick:e[1]||(e[1]=s=>v("CommUnity"))},{default:c(()=>[d("社区精选")]),_:1}),o(m,{underline:!1,onClick:e[2]||(e[2]=s=>v("MallHighlights")),class:"colorff4466"},{default:c(()=>[d("商城精选")]),_:1})]),_:1}),o(V,null,{default:c(()=>[t("ul",null,[(r(!0),i(y,null,w(u.value,s=>S((r(),i("li",{key:s.ID},[t("div",A,[t("div",M,[t("img",{src:s.LogoSrc,alt:""},null,8,R),t("p",null,p(s.Name),1),t("p",null,[d(" 商品： "),t("span",null,p(s.ProductCount),1)])]),t("div",T,[(r(!0),i(y,null,w(s.Products,a=>(r(),i("div",{key:a.ID},[t("img",{src:a.FaceSrc,alt:"",onClick:W=>F(a.ID),style:{cursor:"pointer"}},null,8,j),t("p",J,"￥"+p(a.BasePrice),1),o(P,{class:"box-item",effect:"dark",content:a.Name,placement:"top-start"},{default:c(()=>[t("p",K,p(a.Name),1)]),_:2},1032,["content"])]))),128))])]),o($)])),[[D,u.value.length>=1]])),128)),S(o(B,{description:"数据跑丢了..."},null,512),[[D,u.value.length<=0]]),t("div",O,[o(I,{background:"",layout:"prev, pager, next",total:f.value,onCurrentChange:b},null,8,["total"])])])]),_:1})])}}},Z=z(Q,[["__scopeId","data-v-a232860e"]]);export{Z as default};
