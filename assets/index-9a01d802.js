import{r as u}from"./index-36f464b5.js";import{_ as q,u as B,q as G,n as U,a as l,o as c,c as i,b as s,w as n,s as F,d as e,t as d,e as k,F as y,g as v,h as L,p as T,l as V}from"./index-d97ca0a3.js";const h=_=>(T("data-v-42f0bbf7"),_=_(),V(),_),R={class:"headBlock"},z={class:"top"},E=["src"],H={class:"bottom"},M={class:"left"},j=h(()=>e("span",null,"商品",-1)),A={class:"right"},J=h(()=>e("span",null,"粉丝",-1)),K=h(()=>e("p",null,"商品列表",-1)),O={key:0},Q=["onClick"],W=["src"],X={class:"price"},Y={class:"text"},Z={__name:"index",setup(_){const I=B(),p=G(),t=U({headDetail:[],headImage:{},headUrlImage:"",listDetail:[],asideDetail:[]});u("get",`/Shop/GetShop?id=${p.query.id}`).then(a=>{t.headDetail=a.data.Data,t.headImage=a.data.Data.MainBgSrc,t.headUrlImage=a.data.Data.User.HeadUrl});const m=()=>{u("get",`/Product/GetProductListPublic?count=300&page=1&shopid=${p.query.id}`).then(a=>{t.listDetail=a.data.Data})};m(),u("get",`/Tag/GetGouTag?shopid=${p.query.id}`).then(a=>{t.asideDetail=a.data.Data[0].PubChilds});const b=a=>{u("get",`/Product/GetProductListPublic?count=300&page=1&shopid=1936&tagid=${a}`).then(r=>{t.listDetail=r.data.Data})},x=a=>{const r=I.resolve({name:"Comment",query:{id:a}});window.open(r.href)};return(a,r)=>{const g=l("el-divider"),C=l("el-header"),f=l("el-link"),P=l("el-aside"),S=l("el-tooltip"),w=l("el-empty"),N=l("el-main"),D=l("el-container");return c(),i("div",null,[s(D,null,{default:n(()=>[s(C,{style:F({backgroundImage:`url(${t.headImage})`})},{default:n(()=>[e("div",R,[e("div",z,[e("img",{src:t.headUrlImage,alt:""},null,8,E),e("span",null,d(t.headDetail.Name),1)]),e("div",H,[e("div",M,[e("i",null,d(t.headDetail.ProductCount),1),j]),s(g,{direction:"vertical"}),e("div",A,[e("i",null,d(t.headDetail.FollowCount),1),J])])])]),_:1},8,["style"]),s(D,null,{default:n(()=>[s(P,{width:"200px"},{default:n(()=>[K,s(g),e("p",null,[s(f,{underline:!1,onClick:m},{default:n(()=>[k("全部商品")]),_:1})]),e("ul",null,[(c(!0),i(y,null,v(t.asideDetail,o=>(c(),i("li",{key:o.ID},[s(f,{underline:!1,onClick:$=>b(o.ID)},{default:n(()=>[k(d(o.TagName),1)]),_:2},1032,["onClick"])]))),128))])]),_:1}),s(N,null,{default:n(()=>[t.listDetail.length>=1?(c(),i("ul",O,[(c(!0),i(y,null,v(t.listDetail,o=>(c(),i("li",{key:o.ID,onClick:$=>x(o.ID),style:{cursor:"pointer"}},[e("img",{src:o.FaceSrc,alt:""},null,8,W),e("p",X,"￥"+d(o.Price),1),s(S,{class:"box-item",effect:"dark",content:o.Name,placement:"top-start"},{default:n(()=>[e("p",Y,d(o.Name),1)]),_:2},1032,["content"])],8,Q))),128))])):(c(),L(w,{key:1,description:"暂无商品"}))]),_:1})]),_:1})]),_:1})])}}},ae=q(Z,[["__scopeId","data-v-42f0bbf7"]]);export{ae as default};