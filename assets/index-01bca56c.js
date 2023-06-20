import{_ as L,r as g,a as i,o as y,c as M,b as o,w as n,e as m,x as U,A as D,F as G,g as N,h as I,v as R,d,I as h,E as z,p as P,l as q,B as H}from"./index-f4a9a0c5.js";import{s as J}from"./index-51a74c78.js";const K=c=>J({url:"http://localhost:81/dev-api/common/uploadMore",method:"post",data:c});const x=c=>(P("data-v-2e44d0e4"),c=c(),q(),c),Q={class:"common-layout"},W=x(()=>d("h2",null,"摄像头",-1)),X=x(()=>d("h3",null,"选定图片区",-1)),Y={ref:"canvas",width:"640",height:"480"},Z=x(()=>d("h3",null,"拍摄区",-1)),ee={ref:"video",width:"640",height:"480",autoplay:""},te={__name:"Camera",setup(c){const v=g([]),_=g(!1),k=g(!0),w=g(""),{proxy:s}=H(),$=()=>{navigator.mediaDevices.getUserMedia({video:!0}).then(t=>{s.$refs.video.srcObject=t,s.$refs.video.play(),_.value=!0}).catch(t=>{h({message:"摄像头开启失败，请检查是否开启权限",type:"warning"})})},O=async()=>{try{const t=await navigator.mediaDevices.getUserMedia({video:!0});if(w.value=t.id,t){s.$refs.canvas.getContext("2d").drawImage(s.$refs.video,0,0,640,480);let a=s.$refs.canvas.toDataURL("image/jpeg",.7),l=V(a,"摄像头拍摄"),r=new FormData;r.append("files",l),r.append("module",113),K(r)}}catch(t){h({message:"摄像头开启失败，请检查是否开启权限",type:"warning"});const e=navigator.userAgent;e.indexOf("Chrome")>-1?console.log("chrome://settings/content/camera"):e.indexOf("Firefox")>-1?console.log("firefox://settings/content/camera"):e.indexOf("Safari")>-1?console.log("safari://settings/content/camera"):e.indexOf("Opera")>-1?console.log("opera://settings/content/camera"):e.indexOf("Edge")>-1?console.log("edge://settings/content/camera"):console.log("无法识别的浏览器")}},B=()=>{w.value?z.prompt("请输入此文件的名字","Tip",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(({value:t})=>{let e=document.createElement("a");e.href=s.$refs.canvas.toDataURL("image/jpg",.7),e.download=t+".jpeg",e.click(),h({type:"success",message:"下载成功"})}):h({message:"请进行拍照后再尝试下载",type:"warning"})},j=()=>{if(!s.$refs.video.srcObject)return;s.$refs.video.srcObject.getTracks().forEach(a=>{a.stop(),_.value=!1}),s.$refs.video.srcObject=null},C=()=>{navigator.mediaDevices.enumerateDevices().then(t=>{v.value=[],t.forEach(e=>{e.kind=="videoinput"&&v.value.push({label:e.label,id:e.deviceId})})}).catch(function(t){console.log(t)})},E=t=>{const e={};t===""?e.facingMode="environment":(e.deviceId={exact:t},_.value=!0);var a={video:e};A(a)},A=(t,e,a)=>{navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(t).then(l=>{s.$refs.video.srcObject=l,s.$refs.video.play()}).catch(a):navigator.webkitGetUserMedia?navigator.webkitGetUserMedia(t,e,a):navigator.mozGetUserMedia?navigator.mozGetUserMedia(t,e,a):navigator.getUserMedia&&navigator.getUserMedia(t,e,a)},V=(t,e)=>{let a=t.split(","),l=a[0].match(/:(.*?);/)[1],r=atob(a[1]),p=r.length,f=new Uint8Array(p);for(;p--;)f[p]=r.charCodeAt(p);return new File([f],e,{type:l})};return C(),(t,e)=>{const a=i("el-header"),l=i("el-button"),r=i("el-divider"),p=i("el-link"),f=i("el-tooltip"),F=i("el-aside"),S=i("el-main"),b=i("el-container"),T=i("el-dialog");return y(),M("div",Q,[o(T,{width:"80%",modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=u=>k.value=u),title:"Tips","lock-scroll":""},{default:n(()=>[o(b,null,{default:n(()=>[o(a,null,{default:n(()=>[W]),_:1}),o(b,null,{default:n(()=>[o(F,{width:"200px"},{default:n(()=>[o(l,{onClick:$,type:"primary",plain:""},{default:n(()=>[m("开启摄像头")]),_:1}),o(l,{onClick:C,type:"primary",plain:"",disabled:""},{default:n(()=>[m("切换摄像头")]),_:1}),o(l,{onClick:j,type:"primary",plain:""},{default:n(()=>[m("关闭摄像头")]),_:1}),U(o(l,{type:"primary",onClick:O,plain:""},{default:n(()=>[m("拍照")]),_:1},512),[[D,_.value]]),U(o(l,{type:"primary",onClick:B,plain:""},{default:n(()=>[m("下载")]),_:1},512),[[D,_.value]]),o(r),(y(!0),M(G,null,N(v.value,u=>(y(),I(f,{class:"box-item",effect:"dark",content:u.label,placement:"right-end",key:u.id},{default:n(()=>[o(p,{onClick:oe=>E(u.id),underline:!1,class:"ovhd"},{default:n(()=>[m(R(u.label),1)]),_:2},1032,["onClick"])]),_:2},1032,["content"]))),128))]),_:1}),o(S,null,{default:n(()=>[d("div",null,[X,d("canvas",Y,null,512)]),d("div",null,[Z,d("video",ee,null,512)])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}},ae=L(te,[["__scopeId","data-v-2e44d0e4"]]),le={__name:"index",setup(c){return(v,_)=>(y(),I(ae))}};export{le as default};
