import{r as L}from"./index-822a0e63.js";import{_ as S,r as _,a as n,v as i,o,c as a,b as c,w as l,x as v,F as w,g as F,d as e,t as m,p as N,l as U,y as B}from"./index-6b169b34.js";const C=s=>(N("data-v-da43d61d"),s=s(),U(),s),H={class:"box"},V=C(()=>e("h2",null,"社区精选",-1)),E={class:"content","transition-duration":"0.5s","item-selector":".content_one"},M=["src"],T={class:"describe"},j={class:"ovhd"},q=["innerHTML"],G=["src"],$={__name:"index",setup(s){const h=()=>{u.value=B.service({lock:!0,text:"Loading"})},r=_([]),d=_(1),u=_();function f(){h(),d.value++,L("get",`/Feed/GetFeedList?maxid=4437742&objecttype=trend&count=10&page=${d.value}`).then(p=>{r.value=r.value.concat(p.data.Data),u.value.close()})}return(p,z)=>{const x=n("el-header"),g=n("el-tooltip"),y=n("el-card"),b=n("el-main"),D=i("masonry-tile"),k=i("masonry"),I=i("infinite-scroll");return o(),a("div",H,[c(x,null,{default:l(()=>[V]),_:1}),c(b,null,{default:l(()=>[v((o(),a("ul",E,[(o(!0),a(w,null,F(r.value,t=>v((o(),a("li",{key:t.ID,class:"content_one"},[c(y,{class:"box-card"},{default:l(()=>[e("div",null,[e("img",{src:t.User.HeadUrl,alt:"",class:"head"},null,8,M),e("p",T,[e("span",j,m(t.User.NickName),1),c(g,{class:"box-item",effect:"dark",content:t.User.Describe,placement:"top-start"},{default:l(()=>[e("span",null,m(t.User.Describe),1)]),_:2},1032,["content"])])]),e("p",{innerHTML:t.Content,class:"content"},null,8,q),e("img",{src:t.ImageSrcs[0],alt:""},null,8,G)]),_:2},1024)])),[[D]])),128))])),[[k],[I,f]])]),_:1})])}}},K=S($,[["__scopeId","data-v-da43d61d"]]);export{K as default};
