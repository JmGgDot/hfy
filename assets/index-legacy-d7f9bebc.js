System.register(["./index-legacy-1af3510d.js","./index-legacy-62e05fa7.js"],(function(e,t){"use strict";var a,l,i,n,o,d,u,r,s,c,v,h,p,m,g,x,b,f,y,D,w,k,I,X,Y,L,P;return{setters:[e=>{a=e.B,l=e.C,i=e.r,n=e.D,o=e.f,d=e._,u=e.q,r=e.n,s=e.a,c=e.o,v=e.c,h=e.b,p=e.w,m=e.d,g=e.x,x=e.A,b=e.t,f=e.v,y=e.F,D=e.g,w=e.h,k=e.z,I=e.G,X=e.H,Y=e.p,L=e.l},e=>{P=e.s}],execute:function(){var t=document.createElement("style");t.textContent=".box[data-v-4411401c]{height:100%}.box .el-header h2[data-v-4411401c]{padding-left:35px;font-size:20px;font-weight:700;background:white;margin:0;height:62px;line-height:62px}.box .el-main[data-v-4411401c]{width:60%;margin:0 auto}.box .el-main img[data-v-4411401c]{width:300px;height:400px}.box .el-main .oneDiv[data-v-4411401c]{position:relative;display:flex;overflow:hidden}.box .el-main .oneDiv .middleImage[data-v-4411401c]{position:relative;height:400px}.box .el-main .oneDiv .middleImage div[data-v-4411401c]{position:absolute;width:150px;height:200px;background:rgba(0,0,0,.2);left:0;top:0}.box .el-main .oneDiv .glassLook[data-v-4411401c]{position:absolute;left:300px;background:pink;z-index:10;width:300px;height:400px;background-repeat:no-repeat;background-size:600px 800px}.box .el-main .oneDiv p[data-v-4411401c],.box .el-main .oneDiv li[data-v-4411401c]{font-size:14px}.box .el-main .oneDiv p[data-v-4411401c]{margin:10px 0 0}.box .el-main .oneDiv .el-divider--vertical[data-v-4411401c]{height:400px}.box .el-main .oneDiv .commodity[data-v-4411401c]{display:block;width:100%;height:100%}.box .el-main .oneDiv .twoDiv .pitchStyle[data-v-4411401c]{box-shadow:0 0 1px 1px #f79090}.box .el-main .oneDiv .twoDiv img[data-v-4411401c]{width:30px;height:30px;margin-right:10px}.box .el-main .oneDiv li .headerBox[data-v-4411401c]{display:flex}.box .el-main .oneDiv li .headerBox .headerLeft[data-v-4411401c]{display:flex;flex-direction:column;margin-right:20px;align-items:center;min-width:100px}.box .el-main .oneDiv li .headerBox .headerLeft img[data-v-4411401c]{width:50px;height:50px;border-radius:50%;margin-bottom:5px}.box .el-main .oneDiv li .headerBox .headerRight div img[data-v-4411401c]{width:50px;height:50px;padding:2px;border:2px #eee solid;margin-right:5px}.box .el-main .oneDiv li .headerBox .headerRight span[data-v-4411401c]{font-size:12px;color:#999}.box .el-main .oneDiv .layer[data-v-4411401c]{width:150px;height:200px;background:rgba(0,0,0,.2);left:0;top:0;position:absolute}\n",document.head.appendChild(t);const _="undefined"!=typeof window,B=e=>"string"==typeof e,T=()=>{},C=_?window:void 0;function O(...e){let t,i,d,u;if(B(e[0])?([i,d,u]=e,t=C):[t,i,d,u]=e,!t)return T;let r=T;const s=n((()=>o(t)),(e=>{r(),e&&(e.addEventListener(i,d,u),r=()=>{e.removeEventListener(i,d,u),r=T})}),{immediate:!0,flush:"post"}),c=()=>{s(),r()};var v;return v=c,a()&&l(v),c}function M(e,t={}){const{handleOutside:a=!0,window:l=C}=t,{x:d,y:u,sourceType:r}=function(e={}){const{touch:t=!0,resetOnTouchEnds:a=!1,initialValue:l={x:0,y:0},window:n=C}=e,o=i(l.x),d=i(l.y),u=i(null),r=()=>{o.value=l.x,d.value=l.y},s=e=>{e.touches.length>0&&(o.value=e.touches[0].clientX,d.value=e.touches[0].clientY,u.value="touch")};return n&&(O(n,"mousemove",(e=>{o.value=e.pageX,d.value=e.pageY,u.value="mouse"}),{passive:!0}),t&&(O(n,"touchstart",s,{passive:!0}),O(n,"touchmove",s,{passive:!0}),a&&O(n,"touchend",r,{passive:!0}))),{x:o,y:d,sourceType:u}}(t),s=i(null!=e?e:null==l?void 0:l.document.body),c=i(0),v=i(0),h=i(0),p=i(0),m=i(0),g=i(0),x=i(!1);let b=()=>{};return l&&(b=n([s,d,u],(()=>{const e=function(e){var t,a;const l=o(e);return null!==(a=null===(t=l)||void 0===t?void 0:t.$el)&&void 0!==a?a:l}(s);if(!e)return;const{left:t,top:i,width:n,height:r}=e.getBoundingClientRect();h.value=t+l.pageXOffset,p.value=i+l.pageYOffset,m.value=r,g.value=n;const b=d.value-h.value,f=u.value-p.value;x.value=b<0||f<0||b>g.value||f>m.value,!a&&x.value||(c.value=b,v.value=f)}),{immediate:!0})),{x:d,y:u,sourceType:r,elementX:c,elementY:v,elementPositionX:h,elementPositionY:p,elementHeight:m,elementWidth:g,isOutside:x,stop:b}}var N;!function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"}(N||(N={}));const S=e=>(Y("data-v-4411401c"),e=e(),L(),e),E={class:"box"},H=S((()=>m("h2",null,"评论区",-1))),z={class:"oneDiv"},R=["src"],G={style:{width:"100%"}},U=S((()=>m("h3",{class:"colorff4466"},"品牌描述：",-1))),j=["innerHTML"],q=S((()=>m("h3",{class:"colorff4466"},"商品展示：",-1))),F=["src"],W={class:"twoDiv"},$=["src","onClick"],A={key:0},V={class:"headerBox"},J={class:"headerLeft"},K=["src"],Q={class:"headerRight"},Z={key:0},ee=["src"],te=["src"];e("default",d({__name:"index",setup(e){const t=u(),a=i([]),l=i([]),o=i(""),d=i(),Y=i(""),L=i("http://pic.hanfugou.com/web/2020/4/11/19/08132c01396947bcb382af4f34634df3.jpeg"),_=i(!1),B=r({top:0,left:0}),T=r({backgroundPositionX:0,backgroundPositionY:0}),C=i(null),{elementX:O,elementY:N,isOutside:S}=M(C);var ae;return n([O,N,S],(()=>{_.value=!S.value;const e={X:0,Y:0};O.value<100?e.X=0:O.value>250?e.X=150:e.X=O.value-100,N.value<100?e.Y=0:N.value>300?e.Y=200:e.Y=N.value-100,B.left=e.X+"px",B.top=e.Y+"px",T.backgroundPositionX=-2*e.X+"px",T.backgroundPositionY=-2*e.Y+"px"})),d.value=k.service({lock:!0,text:"Loading"}),(ae=t.query.id,P({url:"/Product/GetProductPublic?id="+ae,method:"get"})).then((({Data:e})=>{o.value=e.Banners[0].ImgSrc,Y.value=e.Banners[0].ID,a.value=e})),(e=>P({url:"/ProductComment/GetProductCommentList?role=20&productid="+e,method:"get"}))(t.query.id).then((({Data:e})=>{l.value=e,d.value.close()})),(e,t)=>{const i=s("el-header"),n=s("el-divider"),d=s("el-tab-pane"),u=s("el-popover"),r=s("el-empty"),k=s("el-tabs"),P=s("el-main");return c(),v("div",E,[h(i,null,{default:p((()=>[H])),_:1}),h(P,null,{default:p((()=>[m("div",z,[m("div",{ref_key:"target",ref:C,class:"middleImage",onMouseenter:t[0]||(t[0]=e=>_.value=!0),onMouseleave:t[1]||(t[1]=e=>_.value=!1),onMousemove:t[2]||(t[2]=(...t)=>e.handleMouseMove&&e.handleMouseMove(...t))},[m("img",{src:o.value||L.value,alt:""},null,8,R),g(m("div",{class:"layer",style:b(B)},null,4),[[x,_.value]])],544),g(m("div",{class:"glassLook",style:b([{backgroundImage:`url(${o.value})`},T])},null,4),[[x,_.value]]),h(n,{direction:"vertical"}),m("div",G,[h(k,{type:"border-card"},{default:p((()=>[m("h3",null,f(a.value.Name),1),h(d,{label:"商品详情"},{default:p((()=>[U,m("p",{innerHTML:a.value.Describe},null,8,j),q,m("div",null,[(c(!0),v(y,null,D(a.value.Images,(e=>(c(),v("img",{src:e.ImgSrc,alt:"",key:e.ID,class:"commodity",style:{display:"block"}},null,8,F)))),128))])])),_:1}),h(d,{label:"评论"},{default:p((()=>[m("div",W,[(c(!0),v(y,null,D(a.value.Banners,(e=>(c(),v("img",{src:e.ImgSrc,alt:"",key:e.ID,onClick:t=>(o.value=e.ImgSrc,Y.value=e.ID),class:I({pitchStyle:Y.value==e.ID})},null,10,$)))),128))]),l.value.length>=1?(c(),v("ul",A,[(c(!0),v(y,null,D(l.value,(e=>(c(),v("li",{key:e.ID},[m("div",V,[m("div",J,[m("img",{src:e.UserHeadUrl,alt:""},null,8,K),m("span",null,f(e.UserNickName),1)]),m("div",Q,[m("p",null,f(e.Content),1),e.Images.length>=1?(c(),v("div",Z,[(c(!0),v(y,null,D(e.Images,(e=>(c(),w(u,{placement:"bottom",width:400,trigger:"hover",key:e.ID},{reference:p((()=>[m("img",{src:e.ImgSrc,alt:""},null,8,ee)])),default:p((()=>[m("img",{src:e.ImgSrc,alt:"",style:{width:"400px",height:"400px"}},null,8,te)])),_:2},1024)))),128))])):X("",!0),m("span",null,f(e.CommentDatetime.replace("T"," ")),1)])]),h(n)])))),128))])):(c(),w(r,{key:1,description:"暂无评论"}))])),_:1})])),_:1})])])])),_:1})])}}},[["__scopeId","data-v-4411401c"]]))}}}));
