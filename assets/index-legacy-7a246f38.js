System.register(["./index-legacy-ea1febe8.js","./index-legacy-f3c37458.js"],(function(e,a){"use strict";var t,n,o,l,i,c,d,r,s,u,m,v,g,f,p,h,y,x,b,_;return{setters:[e=>{t=e._,n=e.r,o=e.a,l=e.o,i=e.c,c=e.b,d=e.w,r=e.e,s=e.x,u=e.z,m=e.F,v=e.g,g=e.h,f=e.t,p=e.d,h=e.j,y=e.p,x=e.l,b=e.A},e=>{_=e.r}],execute:function(){var a=document.createElement("style");a.textContent=".common-layout .el-dialog__body{padding-top:0!important}.common-layout[data-v-8f2c146a]{background:#ededef}.common-layout .el-header h2[data-v-8f2c146a]{padding-left:35px;font-size:20px;font-weight:700;background:white;margin:0;height:62px;line-height:62px}.common-layout .el-container .el-container[data-v-8f2c146a]{padding:20px}.common-layout .el-container .el-container .el-aside[data-v-8f2c146a]{display:flex;flex-direction:column}.common-layout .el-container .el-container .el-aside .el-button[data-v-8f2c146a]{margin:0 0 12px 12px}.common-layout .el-container .el-container .el-main[data-v-8f2c146a]{display:flex;padding:20px!important}.common-layout .el-container .el-container .el-main canvas[data-v-8f2c146a],.common-layout .el-container .el-container .el-main video[data-v-8f2c146a]{width:100%;height:80%;background:url(http://pic.hanfugou.com/web/2020/4/11/19/08132c01396947bcb382af4f34634df3.jpeg) no-repeat center center}.common-layout .el-container .el-container .el-main div[data-v-8f2c146a]{flex:1}.common-layout .el-container .el-container .el-main div h3[data-v-8f2c146a]{text-align:center}\n",document.head.appendChild(a);const w=e=>(y("data-v-8f2c146a"),e=e(),x(),e),k={class:"common-layout"},U=w((()=>p("h2",null,"摄像头",-1))),C=w((()=>p("h3",null,"选定图片区",-1))),j={ref:"canvas",width:"640",height:"480"},M=w((()=>p("h3",null,"拍摄区",-1))),O={ref:"video",width:"640",height:"480",autoplay:""},$=t({__name:"Camera",setup(e){const a=n([]),t=n(!1),y=n(!0),x=n(""),{proxy:w}=b(),$=()=>{navigator.mediaDevices.getUserMedia({video:!0}).then((e=>{w.$refs.video.srcObject=e,w.$refs.video.play(),t.value=!0})).catch((e=>{h({message:"摄像头开启失败，请检查是否开启权限",type:"warning"})}))},D=async()=>{try{const e=await navigator.mediaDevices.getUserMedia({video:!0});if(x.value=e.id,e){w.$refs.canvas.getContext("2d").drawImage(w.$refs.video,0,0,640,480);let e=w.$refs.canvas.toDataURL("image/jpeg",.7),a=G(e,"摄像头拍摄"),t=new FormData;t.append("files",a),t.append("module",113),_("post","http://localhost:81/dev-api/common/uploadMore",t)}}catch(e){h({message:"摄像头开启失败，请检查是否开启权限",type:"warning"});const a=navigator.userAgent;a.indexOf("Chrome")>-1?console.log("chrome://settings/content/camera"):a.indexOf("Firefox")>-1?console.log("firefox://settings/content/camera"):a.indexOf("Safari")>-1?console.log("safari://settings/content/camera"):a.indexOf("Opera")>-1?console.log("opera://settings/content/camera"):a.indexOf("Edge")>-1?console.log("edge://settings/content/camera"):console.log("无法识别的浏览器")}},E=()=>{if(x.value){let e=document.createElement("a");e.href=w.$refs.canvas.toDataURL("image/jpg",.7),e.download=(new Date).getTime()+".jpeg",e.click()}else h({message:"请进行拍照后再尝试下载",type:"warning"})},z=()=>{w.$refs.video.srcObject&&(w.$refs.video.srcObject.getTracks().forEach((e=>{e.stop(),t.value=!1})),w.$refs.video.srcObject=null)},A=()=>{navigator.mediaDevices.enumerateDevices().then((e=>{a.value=[],e.forEach((e=>{"videoinput"==e.kind&&a.value.push({label:e.label,id:e.deviceId})}))})).catch((function(e){console.log(e)}))},F=(e,a,t)=>{navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(e).then((e=>{w.$refs.video.srcObject=e,w.$refs.video.play()})).catch(t):navigator.webkitGetUserMedia?navigator.webkitGetUserMedia(e,a,t):navigator.mozGetUserMedia?navigator.mozGetUserMedia(e,a,t):navigator.getUserMedia&&navigator.getUserMedia(e,a,t)},G=(e,a)=>{let t=e.split(","),n=t[0].match(/:(.*?);/)[1],o=atob(t[1]),l=o.length,i=new Uint8Array(l);for(;l--;)i[l]=o.charCodeAt(l);return new File([i],a,{type:n})};return A(),(e,n)=>{const h=o("el-header"),x=o("el-button"),b=o("el-divider"),_=o("el-link"),w=o("el-tooltip"),G=o("el-aside"),I=o("el-main"),T=o("el-container"),V=o("el-dialog");return l(),i("div",k,[c(V,{width:"80%",modelValue:y.value,"onUpdate:modelValue":n[0]||(n[0]=e=>y.value=e),title:"Tips","lock-scroll":""},{default:d((()=>[c(T,null,{default:d((()=>[c(h,null,{default:d((()=>[U])),_:1}),c(T,null,{default:d((()=>[c(G,{width:"200px"},{default:d((()=>[c(x,{onClick:$,type:"primary",plain:""},{default:d((()=>[r("开启摄像头")])),_:1}),c(x,{onClick:A,type:"primary",plain:"",disabled:""},{default:d((()=>[r("切换摄像头")])),_:1}),c(x,{onClick:z,type:"primary",plain:""},{default:d((()=>[r("关闭摄像头")])),_:1}),s(c(x,{type:"primary",onClick:D,plain:""},{default:d((()=>[r("拍照")])),_:1},512),[[u,t.value]]),s(c(x,{type:"primary",onClick:E,plain:""},{default:d((()=>[r("下载")])),_:1},512),[[u,t.value]]),c(b),(l(!0),i(m,null,v(a.value,(e=>(l(),g(w,{class:"box-item",effect:"dark",content:e.label,placement:"right-end",key:e.id},{default:d((()=>[c(_,{onClick:a=>(e=>{const a={};""===e?a.facingMode="environment":(a.deviceId={exact:e},t.value=!0),F({video:a})})(e.id),underline:!1,class:"ovhd"},{default:d((()=>[r(f(e.label),1)])),_:2},1032,["onClick"])])),_:2},1032,["content"])))),128))])),_:1}),c(I,null,{default:d((()=>[p("div",null,[C,p("canvas",j,null,512)]),p("div",null,[M,p("video",O,null,512)])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-8f2c146a"]]);e("default",{__name:"index",setup:e=>(e,a)=>(l(),g($))})}}}));