System.register(["./index-legacy-7234a2cc.js","./index-legacy-9022f0f0.js"],(function(e,a){"use strict";var t,n,o,l,i,d,c,r,s,u,m,v,p,g,f,h,y,x,b,_,w;return{setters:[e=>{t=e._,n=e.r,o=e.a,l=e.o,i=e.c,d=e.b,c=e.w,r=e.e,s=e.x,u=e.A,m=e.F,v=e.g,p=e.h,g=e.v,f=e.d,h=e.I,y=e.E,x=e.p,b=e.l,_=e.B},e=>{w=e.s}],execute:function(){var a=document.createElement("style");a.textContent=".common-layout .el-dialog__body{padding-top:0!important}.common-layout[data-v-2e44d0e4]{background:#ededef}.common-layout .el-header h2[data-v-2e44d0e4]{padding-left:35px;font-size:20px;font-weight:700;background:white;margin:0;height:62px;line-height:62px}.common-layout .el-container .el-container[data-v-2e44d0e4]{padding:20px}.common-layout .el-container .el-container .el-aside[data-v-2e44d0e4]{display:flex;flex-direction:column}.common-layout .el-container .el-container .el-aside .el-button[data-v-2e44d0e4]{margin:0 0 12px 12px}.common-layout .el-container .el-container .el-main[data-v-2e44d0e4]{display:flex;padding:20px!important}.common-layout .el-container .el-container .el-main canvas[data-v-2e44d0e4],.common-layout .el-container .el-container .el-main video[data-v-2e44d0e4]{width:100%;height:80%;background:url(http://pic.hanfugou.com/web/2020/4/11/19/08132c01396947bcb382af4f34634df3.jpeg) no-repeat center center}.common-layout .el-container .el-container .el-main div[data-v-2e44d0e4]{flex:1}.common-layout .el-container .el-container .el-main div h3[data-v-2e44d0e4]{text-align:center}\n",document.head.appendChild(a);const k=e=>(x("data-v-2e44d0e4"),e=e(),b(),e),U={class:"common-layout"},C=k((()=>f("h2",null,"摄像头",-1))),M=k((()=>f("h3",null,"选定图片区",-1))),j={ref:"canvas",width:"640",height:"480"},O=k((()=>f("h3",null,"拍摄区",-1))),$={ref:"video",width:"640",height:"480",autoplay:""},D=t({__name:"Camera",setup(e){const a=n([]),t=n(!1),x=n(!0),b=n(""),{proxy:k}=_(),D=()=>{navigator.mediaDevices.getUserMedia({video:!0}).then((e=>{k.$refs.video.srcObject=e,k.$refs.video.play(),t.value=!0})).catch((e=>{h({message:"摄像头开启失败，请检查是否开启权限",type:"warning"})}))},E=async()=>{try{const e=await navigator.mediaDevices.getUserMedia({video:!0});if(b.value=e.id,e){k.$refs.canvas.getContext("2d").drawImage(k.$refs.video,0,0,640,480);let e=k.$refs.canvas.toDataURL("image/jpeg",.7),a=G(e,"摄像头拍摄"),t=new FormData;t.append("files",a),t.append("module",113),w({url:"http://localhost:81/dev-api/common/uploadMore",method:"post",data:t})}}catch(e){h({message:"摄像头开启失败，请检查是否开启权限",type:"warning"});const a=navigator.userAgent;a.indexOf("Chrome")>-1?console.log("chrome://settings/content/camera"):a.indexOf("Firefox")>-1?console.log("firefox://settings/content/camera"):a.indexOf("Safari")>-1?console.log("safari://settings/content/camera"):a.indexOf("Opera")>-1?console.log("opera://settings/content/camera"):a.indexOf("Edge")>-1?console.log("edge://settings/content/camera"):console.log("无法识别的浏览器")}},I=()=>{b.value?y.prompt("请输入此文件的名字","Tip",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((({value:e})=>{let a=document.createElement("a");a.href=k.$refs.canvas.toDataURL("image/jpg",.7),a.download=e+".jpeg",a.click(),h({type:"success",message:"下载成功"})})):h({message:"请进行拍照后再尝试下载",type:"warning"})},T=()=>{k.$refs.video.srcObject&&(k.$refs.video.srcObject.getTracks().forEach((e=>{e.stop(),t.value=!1})),k.$refs.video.srcObject=null)},A=()=>{navigator.mediaDevices.enumerateDevices().then((e=>{a.value=[],e.forEach((e=>{"videoinput"==e.kind&&a.value.push({label:e.label,id:e.deviceId})}))})).catch((function(e){console.log(e)}))},F=(e,a,t)=>{navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(e).then((e=>{k.$refs.video.srcObject=e,k.$refs.video.play()})).catch(t):navigator.webkitGetUserMedia?navigator.webkitGetUserMedia(e,a,t):navigator.mozGetUserMedia?navigator.mozGetUserMedia(e,a,t):navigator.getUserMedia&&navigator.getUserMedia(e,a,t)},G=(e,a)=>{let t=e.split(","),n=t[0].match(/:(.*?);/)[1],o=atob(t[1]),l=o.length,i=new Uint8Array(l);for(;l--;)i[l]=o.charCodeAt(l);return new File([i],a,{type:n})};return A(),(e,n)=>{const h=o("el-header"),y=o("el-button"),b=o("el-divider"),_=o("el-link"),w=o("el-tooltip"),k=o("el-aside"),G=o("el-main"),z=o("el-container"),B=o("el-dialog");return l(),i("div",U,[d(B,{width:"80%",modelValue:x.value,"onUpdate:modelValue":n[0]||(n[0]=e=>x.value=e),title:"Tips","lock-scroll":""},{default:c((()=>[d(z,null,{default:c((()=>[d(h,null,{default:c((()=>[C])),_:1}),d(z,null,{default:c((()=>[d(k,{width:"200px"},{default:c((()=>[d(y,{onClick:D,type:"primary",plain:""},{default:c((()=>[r("开启摄像头")])),_:1}),d(y,{onClick:A,type:"primary",plain:"",disabled:""},{default:c((()=>[r("切换摄像头")])),_:1}),d(y,{onClick:T,type:"primary",plain:""},{default:c((()=>[r("关闭摄像头")])),_:1}),s(d(y,{type:"primary",onClick:E,plain:""},{default:c((()=>[r("拍照")])),_:1},512),[[u,t.value]]),s(d(y,{type:"primary",onClick:I,plain:""},{default:c((()=>[r("下载")])),_:1},512),[[u,t.value]]),d(b),(l(!0),i(m,null,v(a.value,(e=>(l(),p(w,{class:"box-item",effect:"dark",content:e.label,placement:"right-end",key:e.id},{default:c((()=>[d(_,{onClick:a=>(e=>{const a={};""===e?a.facingMode="environment":(a.deviceId={exact:e},t.value=!0),F({video:a})})(e.id),underline:!1,class:"ovhd"},{default:c((()=>[r(g(e.label),1)])),_:2},1032,["onClick"])])),_:2},1032,["content"])))),128))])),_:1}),d(G,null,{default:c((()=>[f("div",null,[M,f("canvas",j,null,512)]),f("div",null,[O,f("video",$,null,512)])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-2e44d0e4"]]);e("default",{__name:"index",setup:e=>(e,a)=>(l(),p(D))})}}}));