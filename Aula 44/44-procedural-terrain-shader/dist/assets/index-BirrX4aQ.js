(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="166",Bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qh=0,Xl=1,tf=2,zu=1,ku=2,Dn=3,xn=0,Re=1,Ke=2,ai=0,mr=1,Yl=2,$l=3,jl=4,ef=5,bi=100,nf=101,rf=102,sf=103,of=104,af=200,lf=201,cf=202,uf=203,La=204,Ia=205,hf=206,ff=207,df=208,pf=209,mf=210,gf=211,_f=212,vf=213,xf=214,yf=0,Mf=1,Sf=2,ro=3,Ef=4,bf=5,Af=6,wf=7,Hu=0,Tf=1,Cf=2,li=0,Rf=1,Pf=2,Lf=3,Vu=4,If=5,Df=6,Uf=7,Gu=300,vr=301,xr=302,so=303,Da=304,_o=306,Ua=1e3,Fn=1001,Na=1002,Fe=1003,Nf=1004,ns=1005,be=1006,Po=1007,ri=1008,kn=1009,Wu=1010,Xu=1011,Kr=1012,Ml=1013,Pi=1014,Ze=1015,On=1016,Sl=1017,El=1018,yr=1020,Yu=35902,$u=1021,ju=1022,pn=1023,qu=1024,Ku=1025,gr=1026,Mr=1027,Zu=1028,bl=1029,Ju=1030,Al=1031,wl=1033,js=33776,qs=33777,Ks=33778,Zs=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Ha=37492,Va=37496,Ga=37808,Wa=37809,Xa=37810,Ya=37811,$a=37812,ja=37813,qa=37814,Ka=37815,Za=37816,Ja=37817,Qa=37818,tl=37819,el=37820,nl=37821,Js=36492,il=36494,rl=36495,Qu=36283,sl=36284,ol=36285,al=36286,Ff=3200,th=3201,Tl=0,Of=1,ni="",mn="srgb",Gn="srgb-linear",Cl="display-p3",vo="display-p3-linear",oo="linear",te="srgb",ao="rec709",lo="p3",ki=7680,ql=519,Bf=512,zf=513,kf=514,eh=515,Hf=516,Vf=517,Gf=518,Wf=519,Kl=35044,Zl="300 es",Bn=2e3,co=2001;class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const Xr=Math.PI/180,Zr=180/Math.PI;function br(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function Rl(i,t){return(i%t+t)%t}function Xf(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Yf(i,t,e){return i!==t?(e-i)/(t-i):0}function Yr(i,t,e){return(1-e)*i+e*t}function $f(i,t,e,n){return Yr(i,t,1-Math.exp(-e*n))}function jf(i,t=1){return t-Math.abs(Rl(i,t*2)-t)}function qf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Jf(i,t){return i+Math.random()*(t-i)}function Qf(i){return i*(.5-Math.random())}function td(i){i!==void 0&&(Jl=i);let t=Jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ed(i){return i*Xr}function nd(i){return i*Zr}function id(i){return(i&i-1)===0&&i!==0}function rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function od(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),d=s((t-n)/2),f=o((t-n)/2),m=s((n-t)/2),v=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const nh={DEG2RAD:Xr,RAD2DEG:Zr,generateUUID:br,clamp:ge,euclideanModulo:Rl,mapLinear:Xf,inverseLerp:Yf,lerp:Yr,damp:$f,pingpong:jf,smoothstep:qf,smootherstep:Kf,randInt:Zf,randFloat:Jf,randFloatSpread:Qf,seededRandom:td,degToRad:ed,radToDeg:nd,isPowerOfTwo:id,ceilPowerOfTwo:rd,floorPowerOfTwo:sd,setQuaternionFromProperEuler:od,normalize:Te,denormalize:fr};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,r,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],S=r[0],p=r[3],h=r[6],M=r[1],y=r[4],E=r[7],C=r[2],A=r[5],b=r[8];return s[0]=o*S+a*M+l*C,s[3]=o*p+a*y+l*A,s[6]=o*h+a*E+l*b,s[1]=c*S+u*M+d*C,s[4]=c*p+u*y+d*A,s[7]=c*h+u*E+d*b,s[2]=f*S+m*M+v*C,s[5]=f*p+m*y+v*A,s[8]=f*h+m*E+v*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*s,m=c*s-o*l,v=e*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return t[0]=d*S,t[1]=(r*c-u*n)*S,t[2]=(a*n-r*o)*S,t[3]=f*S,t[4]=(u*e-r*l)*S,t[5]=(r*s-a*e)*S,t[6]=m*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lo.makeScale(t,e)),this}rotate(t){return this.premultiply(Lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Vt;function ih(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ad(){const i=uo("canvas");return i.style.display="block",i}const Ql={};function rh(i){i in Ql||(Ql[i]=!0,console.warn(i))}function ld(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const tc=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ec=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[Gn]:{transfer:oo,primaries:ao,toReference:i=>i,fromReference:i=>i},[mn]:{transfer:te,primaries:ao,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vo]:{transfer:oo,primaries:lo,toReference:i=>i.applyMatrix3(ec),fromReference:i=>i.applyMatrix3(tc)},[Cl]:{transfer:te,primaries:lo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ec),fromReference:i=>i.applyMatrix3(tc).convertLinearToSRGB()}},cd=new Set([Gn,vo]),Jt={enabled:!0,_workingColorSpace:Gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=is[t].toReference,r=is[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return is[i].primaries},getTransfer:function(i){return i===ni?oo:is[i].transfer}};function _r(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class ud{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=uo("canvas")),Hi.width=t.width,Hi.height=t.height;const n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=uo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_r(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_r(e[n]/255)*255):e[n]=_r(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hd=0;class sh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=br(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Do(r[o].image)):s.push(Do(r[o]))}else s=Do(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ud.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;class Pe extends Di{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Fn,r=Fn,s=be,o=ri,a=pn,l=kn,c=Pe.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=br(),this.name="",this.source=new sh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Gu;Pe.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,r=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],S=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,E=(m+1)/2,C=(h+1)/2,A=(u+f)/4,b=(d+S)/4,x=(v+p)/4;return y>E&&y>C?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=b/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=A/r,s=x/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=b/s,r=x/s),this.set(n,r,s,e),this}let M=Math.sqrt((p-v)*(p-v)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-v)/M,this.y=(d-S)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends Di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Pe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends dd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class oh extends Pe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pd extends Pe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],v=s[o+2],S=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=S;return}if(d!==S||l!==f||c!==m||u!==v){let p=1-a;const h=l*f+c*m+u*v+d*S,M=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,h*M);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const E=a*M;if(l=l*p+f*E,c=c*p+m*E,u=u*p+v*E,d=d*p+S*E,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],f=s[o+1],m=s[o+2],v=s[o+3];return t[e]=a*v+u*d+l*m-c*f,t[e+1]=l*v+u*f+c*d-a*m,t[e+2]=c*v+u*m+a*f-l*d,t[e+3]=u*v-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),f=l(n/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Uo.copy(this).projectOnVector(t),this.sub(Uo)}reflect(t){return this.sub(Uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new z,nc=new Ii;class Le{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(t.matrixWorld),this.union(rs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),ss.subVectors(this.max,Rr),Vi.subVectors(t.a,Rr),Gi.subVectors(t.b,Rr),Wi.subVectors(t.c,Rr),Yn.subVectors(Gi,Vi),$n.subVectors(Wi,Gi),fi.subVectors(Vi,Wi);let e=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-fi.z,fi.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,fi.z,0,-fi.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-fi.y,fi.x,0];return!No(e,Vi,Gi,Wi,ss)||(e=[1,0,0,0,1,0,0,0,1],!No(e,Vi,Gi,Wi,ss))?!1:(os.crossVectors(Yn,$n),e=[os.x,os.y,os.z],No(e,Vi,Gi,Wi,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new z,new z,new z,new z,new z,new z,new z,new z],an=new z,rs=new Le,Vi=new z,Gi=new z,Wi=new z,Yn=new z,$n=new z,fi=new z,Rr=new z,ss=new z,os=new z,di=new z;function No(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){di.fromArray(i,s);const a=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const md=new Le,Pr=new z,Fo=new z;class xo{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):md.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);const e=Pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Pr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(Fo)),this.expandByPoint(Pr.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new z,Oo=new z,as=new z,jn=new z,Bo=new z,ls=new z,zo=new z;class yo{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Oo.copy(t).add(e).multiplyScalar(.5),as.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Oo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(as),a=jn.dot(this.direction),l=-jn.dot(as),c=jn.lengthSq(),u=Math.abs(1-o*o);let d,f,m,v;if(u>0)if(d=o*l-a,f=o*a-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const S=1/u;d*=S,f*=S,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Oo).addScaledVector(as,f),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),r=An.dot(An)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,r,s){Bo.subVectors(e,t),ls.subVectors(n,t),zo.crossVectors(Bo,ls);let o=this.direction.dot(zo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const l=a*this.direction.dot(ls.crossVectors(jn,ls));if(l<0)return null;const c=a*this.direction.dot(Bo.cross(jn));if(c<0||l+c>o)return null;const u=-a*jn.dot(zo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,r,s,o,a,l,c,u,d,f,m,v,S,p){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,d,f,m,v,S,p)}set(t,e,n,r,s,o,a,l,c,u,d,f,m,v,S,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=v,h[11]=S,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Xi.setFromMatrixColumn(t,0).length(),s=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*u,m=o*d,v=a*u,S=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+v*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=v+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*d,v=c*u,S=c*d;e[0]=f+S*a,e[4]=v*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=m*a-v,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*d,v=c*u,S=c*d;e[0]=f-S*a,e[4]=-o*d,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*u,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*d,v=a*u,S=a*d;e[0]=l*u,e[4]=v*c-m,e[8]=f*c+S,e[1]=l*d,e[5]=S*c+f,e[9]=m*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,v=a*l,S=a*c;e[0]=l*u,e[4]=S-f*d,e[8]=v*d+m,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*d+v,e[10]=f-S*d}else if(t.order==="XZY"){const f=o*l,m=o*c,v=a*l,S=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+S,e[5]=o*u,e[9]=m*d-v,e[2]=v*d-m,e[6]=a*u,e[10]=S*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gd,t,_d)}lookAt(t,e,n){const r=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),qn.crossVectors(n,ke),qn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),qn.crossVectors(n,ke)),qn.normalize(),cs.crossVectors(ke,qn),r[0]=qn.x,r[4]=cs.x,r[8]=ke.x,r[1]=qn.y,r[5]=cs.y,r[9]=ke.y,r[2]=qn.z,r[6]=cs.z,r[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],S=n[6],p=n[10],h=n[14],M=n[3],y=n[7],E=n[11],C=n[15],A=r[0],b=r[4],x=r[8],_=r[12],g=r[1],w=r[5],P=r[9],U=r[13],F=r[2],k=r[6],B=r[10],V=r[14],Y=r[3],et=r[7],nt=r[11],pt=r[15];return s[0]=o*A+a*g+l*F+c*Y,s[4]=o*b+a*w+l*k+c*et,s[8]=o*x+a*P+l*B+c*nt,s[12]=o*_+a*U+l*V+c*pt,s[1]=u*A+d*g+f*F+m*Y,s[5]=u*b+d*w+f*k+m*et,s[9]=u*x+d*P+f*B+m*nt,s[13]=u*_+d*U+f*V+m*pt,s[2]=v*A+S*g+p*F+h*Y,s[6]=v*b+S*w+p*k+h*et,s[10]=v*x+S*P+p*B+h*nt,s[14]=v*_+S*U+p*V+h*pt,s[3]=M*A+y*g+E*F+C*Y,s[7]=M*b+y*w+E*k+C*et,s[11]=M*x+y*P+E*B+C*nt,s[15]=M*_+y*U+E*V+C*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],m=t[14],v=t[3],S=t[7],p=t[11],h=t[15];return v*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*m-n*l*m)+S*(+e*l*m-e*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+e*c*d-e*a*m-s*o*d+n*o*m+s*a*u-n*c*u)+h*(-r*a*u-e*l*d+e*a*f+r*o*d-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],m=t[11],v=t[12],S=t[13],p=t[14],h=t[15],M=d*p*c-S*f*c+S*l*m-a*p*m-d*l*h+a*f*h,y=v*f*c-u*p*c-v*l*m+o*p*m+u*l*h-o*f*h,E=u*S*c-v*d*c+v*a*m-o*S*m-u*a*h+o*d*h,C=v*d*l-u*S*l-v*a*f+o*S*f+u*a*p-o*d*p,A=e*M+n*y+r*E+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=M*b,t[1]=(S*f*s-d*p*s-S*r*m+n*p*m+d*r*h-n*f*h)*b,t[2]=(a*p*s-S*l*s+S*r*c-n*p*c-a*r*h+n*l*h)*b,t[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*m-n*l*m)*b,t[4]=y*b,t[5]=(u*p*s-v*f*s+v*r*m-e*p*m-u*r*h+e*f*h)*b,t[6]=(v*l*s-o*p*s-v*r*c+e*p*c+o*r*h-e*l*h)*b,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*m+e*l*m)*b,t[8]=E*b,t[9]=(v*d*s-u*S*s-v*n*m+e*S*m+u*n*h-e*d*h)*b,t[10]=(o*S*s-v*a*s+v*n*c-e*S*c-o*n*h+e*a*h)*b,t[11]=(u*a*s-o*d*s-u*n*c+e*d*c+o*n*m-e*a*m)*b,t[12]=C*b,t[13]=(u*S*r-v*d*r+v*n*f-e*S*f-u*n*p+e*d*p)*b,t[14]=(v*a*r-o*S*r-v*n*l+e*S*l+o*n*p-e*a*p)*b,t[15]=(o*d*r-u*a*r+u*n*l-e*d*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,f=s*c,m=s*u,v=s*d,S=o*u,p=o*d,h=a*d,M=l*c,y=l*u,E=l*d,C=n.x,A=n.y,b=n.z;return r[0]=(1-(S+h))*C,r[1]=(m+E)*C,r[2]=(v-y)*C,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(f+h))*A,r[6]=(p+M)*A,r[7]=0,r[8]=(v+y)*b,r[9]=(p-M)*b,r[10]=(1-(f+S))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Xi.set(r[0],r[1],r[2]).length();const o=Xi.set(r[4],r[5],r[6]).length(),a=Xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ln.copy(this);const c=1/s,u=1/o,d=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,e.setFromRotationMatrix(ln),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Bn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),f=(n+r)/(n-r);let m,v;if(a===Bn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===co)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Bn){const l=this.elements,c=1/(e-t),u=1/(n-r),d=1/(o-s),f=(e+t)*c,m=(n+r)*u;let v,S;if(a===Bn)v=(o+s)*d,S=-2*d;else if(a===co)v=s*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new z,ln=new $t,gd=new z(0,0,0),_d=new z(1,1,1),qn=new z,cs=new z,ke=new z,ic=new $t,rc=new Ii;class yn{constructor(t=0,e=0,n=0,r=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rc.setFromEuler(this),this.setFromQuaternion(rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vd=0;const sc=new z,Yi=new Ii,wn=new $t,us=new z,Lr=new z,xd=new z,yd=new Ii,oc=new z(1,0,0),ac=new z(0,1,0),lc=new z(0,0,1),cc={type:"added"},Md={type:"removed"},$i={type:"childadded",child:null},ko={type:"childremoved",child:null};class Ae extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new z,e=new yn,n=new Ii,r=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new Vt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?us.copy(t):us.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Lr,us,this.up):wn.lookAt(us,Lr,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(wn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Md),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new z(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new z,Tn=new z,Ho=new z,Cn=new z,ji=new z,qi=new z,uc=new z,Vo=new z,Go=new z,Wo=new z;class re{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),cn.subVectors(t,e),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){cn.subVectors(r,e),Tn.subVectors(n,e),Ho.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(Tn),l=cn.dot(Ho),c=Tn.dot(Tn),u=Tn.dot(Ho),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static isFrontFacing(t,e,n,r){return cn.subVectors(n,e),Tn.subVectors(t,e),cn.cross(Tn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),cn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return re.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return re.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return re.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return re.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return re.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,n),qi.subVectors(s,n),Vo.subVectors(t,n);const l=ji.dot(Vo),c=qi.dot(Vo);if(l<=0&&c<=0)return e.copy(n);Go.subVectors(t,r);const u=ji.dot(Go),d=qi.dot(Go);if(u>=0&&d<=u)return e.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ji,o);Wo.subVectors(t,s);const m=ji.dot(Wo),v=qi.dot(Wo);if(v>=0&&m<=v)return e.copy(s);const S=m*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(qi,a);const p=u*v-m*d;if(p<=0&&d-u>=0&&m-v>=0)return uc.subVectors(s,r),a=(d-u)/(d-u+(m-v)),e.copy(r).addScaledVector(uc,a);const h=1/(p+S+f);return o=S*h,a=f*h,e.copy(n).addScaledVector(ji,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Jt.workingColorSpace){if(t=Rl(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Xo(o,s,t+1/3),this.g=Xo(o,s,t),this.b=Xo(o,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Jt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(ge(Ee.r*255,0,255))*65536+Math.round(ge(Ee.g*255,0,255))*256+Math.round(ge(Ee.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,r=Ee.g,s=Ee.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=mn){Jt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,r=Ee.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(hs);const n=Yr(Kn.h,hs.h,e),r=Yr(Kn.s,hs.s,e),s=Yr(Kn.l,hs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Wt;Wt.NAMES=lh;let Sd=0;class Ui extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=br(),this.name="",this.type="Material",this.blending=mr,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ch extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Nn=Ed();function Ed(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function bd(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=ge(i,-65504,65504),Nn.floatView[0]=i;const t=Nn.uint32View[0],e=t>>23&511;return Nn.baseTable[e]+((t&8388607)>>Nn.shiftTable[e])}function Ad(i){const t=i>>10;return Nn.uint32View[0]=Nn.mantissaTable[Nn.offsetTable[t]+(i&1023)]+Nn.exponentTable[t],Nn.floatView[0]}const fs={toHalfFloat:bd,fromHalfFloat:Ad},fe=new z,ds=new Rt;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return rh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kl&&(t.usage=this.usage),t}}class uh extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hh extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ci extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wd=0;const $e=new $t,Yo=new Ae,Ki=new z,He=new Le,Ir=new Le,xe=new z;class Ni extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ih(t)?hh:uh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Yo.lookAt(t),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ci(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Le);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];He.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(He.min,Ir.min),He.expandByPoint(xe),xe.addVectors(He.max,Ir.max),He.expandByPoint(xe)):(He.expandByPoint(Ir.min),He.expandByPoint(Ir.max))}He.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)xe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(xe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xe.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(t,c),xe.add(Ki)),r=Math.max(r,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new z,l[x]=new z;const c=new z,u=new z,d=new z,f=new Rt,m=new Rt,v=new Rt,S=new z,p=new z;function h(x,_,g){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,_),d.fromBufferAttribute(n,g),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,_),v.fromBufferAttribute(s,g),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const w=1/(m.x*v.y-v.x*m.y);isFinite(w)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(w),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(w),a[x].add(S),a[_].add(S),a[g].add(S),l[x].add(p),l[_].add(p),l[g].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,_=M.length;x<_;++x){const g=M[x],w=g.start,P=g.count;for(let U=w,F=w+P;U<F;U+=3)h(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new z,E=new z,C=new z,A=new z;function b(x){C.fromBufferAttribute(r,x),A.copy(C);const _=a[x];y.copy(_),y.sub(C.multiplyScalar(C.dot(_))).normalize(),E.crossVectors(A,_);const w=E.dot(l[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,w)}for(let x=0,_=M.length;x<_;++x){const g=M[x],w=g.start,P=g.count;for(let U=w,F=w+P;U<F;U+=3)b(t.getX(U+0)),b(t.getX(U+1)),b(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),S=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*u;for(let h=0;h<u;h++)f[v++]=c[m++]}return new Oe(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ni,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new $t,pi=new yo,ps=new xo,fc=new z,Zi=new z,Ji=new z,Qi=new z,$o=new z,ms=new z,gs=new Rt,_s=new Rt,vs=new Rt,dc=new z,pc=new z,mc=new z,xs=new z,ys=new z;class Je extends Ae{constructor(t=new Ni,e=new ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&($o.fromBufferAttribute(d,t),o?ms.addScaledVector($o,u):ms.addScaledVector($o.sub(e),u))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),pi.copy(t.ray).recast(t.near),!(ps.containsPoint(pi.origin)===!1&&(pi.intersectSphere(ps,fc)===null||pi.origin.distanceToSquared(fc)>(t.far-t.near)**2))&&(hc.copy(s).invert(),pi.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){const p=f[v],h=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,C=y;E<C;E+=3){const A=a.getX(E),b=a.getX(E+1),x=a.getX(E+2);r=Ms(this,h,t,n,c,u,d,A,b,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=v,h=S;p<h;p+=3){const M=a.getX(p),y=a.getX(p+1),E=a.getX(p+2);r=Ms(this,o,t,n,c,u,d,M,y,E),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){const p=f[v],h=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,C=y;E<C;E+=3){const A=E,b=E+1,x=E+2;r=Ms(this,h,t,n,c,u,d,A,b,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=v,h=S;p<h;p+=3){const M=p,y=p+1,E=p+2;r=Ms(this,o,t,n,c,u,d,M,y,E),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Td(i,t,e,n,r,s,o,a){let l;if(t.side===Re?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===xn,a),l===null)return null;ys.copy(a),ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ys);return c<e.near||c>e.far?null:{distance:c,point:ys.clone(),object:i}}function Ms(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Zi),i.getVertexPosition(l,Ji),i.getVertexPosition(c,Qi);const u=Td(i,t,e,n,Zi,Ji,Qi,xs);if(u){r&&(gs.fromBufferAttribute(r,a),_s.fromBufferAttribute(r,l),vs.fromBufferAttribute(r,c),u.uv=re.getInterpolation(xs,Zi,Ji,Qi,gs,_s,vs,new Rt)),s&&(gs.fromBufferAttribute(s,a),_s.fromBufferAttribute(s,l),vs.fromBufferAttribute(s,c),u.uv1=re.getInterpolation(xs,Zi,Ji,Qi,gs,_s,vs,new Rt)),o&&(dc.fromBufferAttribute(o,a),pc.fromBufferAttribute(o,l),mc.fromBufferAttribute(o,c),u.normal=re.getInterpolation(xs,Zi,Ji,Qi,dc,pc,mc,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};re.getNormal(Zi,Ji,Qi,d.normal),u.face=d}return u}class Fi extends Ni{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,e,t,o,s,0),v("z","y","x",1,-1,n,e,-t,o,s,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(d,2));function v(S,p,h,M,y,E,C,A,b,x,_){const g=E/b,w=C/x,P=E/2,U=C/2,F=A/2,k=b+1,B=x+1;let V=0,Y=0;const et=new z;for(let nt=0;nt<B;nt++){const pt=nt*w-U;for(let Lt=0;Lt<k;Lt++){const Ut=Lt*g-P;et[S]=Ut*M,et[p]=pt*y,et[h]=F,c.push(et.x,et.y,et.z),et[S]=0,et[p]=0,et[h]=A>0?1:-1,u.push(et.x,et.y,et.z),d.push(Lt/b),d.push(1-nt/x),V+=1}}for(let nt=0;nt<x;nt++)for(let pt=0;pt<b;pt++){const Lt=f+pt+k*nt,Ut=f+pt+k*(nt+1),J=f+(pt+1)+k*(nt+1),lt=f+(pt+1)+k*nt;l.push(Lt,Ut,lt),l.push(Ut,J,lt),Y+=6}a.addGroup(m,Y,_),m+=Y,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Sr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Sr(i[e]);for(const r in n)t[r]=n[r]}return t}function Cd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Rd={clone:Sr,merge:Ce};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dh extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new z,gc=new Rt,_c=new Rt;class qe extends dh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,gc,_c),e.subVectors(_c,gc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const tr=-90,er=1;class Id extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qe(tr,er,t,e);r.layers=this.layers,this.add(r);const s=new qe(tr,er,t,e);s.layers=this.layers,this.add(s);const o=new qe(tr,er,t,e);o.layers=this.layers,this.add(o);const a=new qe(tr,er,t,e);a.layers=this.layers,this.add(a);const l=new qe(tr,er,t,e);l.layers=this.layers,this.add(l);const c=new qe(tr,er,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ph extends Pe{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:vr,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dd extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ph(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fi(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:ai});s.uniforms.tEquirect.value=e;const o=new Je(r,s),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=be),new Id(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const jo=new z,Ud=new z,Nd=new Vt;class fn{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=jo.subVectors(n,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nd.getNormalMatrix(t),r=this.coplanarPoint(jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new xo,Ss=new z;class Pl{constructor(t=new fn,e=new fn,n=new fn,r=new fn,s=new fn,o=new fn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],S=r[10],p=r[11],h=r[12],M=r[13],y=r[14],E=r[15];if(n[0].setComponents(l-s,f-c,p-m,E-h).normalize(),n[1].setComponents(l+s,f+c,p+m,E+h).normalize(),n[2].setComponents(l+o,f+u,p+v,E+M).normalize(),n[3].setComponents(l-o,f-u,p-v,E-M).normalize(),n[4].setComponents(l-a,f-d,p-S,E-y).normalize(),e===Bn)n[5].setComponents(l+a,f+d,p+S,E+y).normalize();else if(e===co)n[5].setComponents(a,d,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ss.x=r.normal.x>0?t.max.x:t.min.x,Ss.y=r.normal.y>0?t.max.y:t.min.y,Ss.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mh(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Fd(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,a),d.count===-1&&f.length===0&&i.bufferSubData(c,0,u),f.length!==0){for(let m=0,v=f.length;m<v;m++){const S=f[m];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ar extends Ni{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=t/a,f=e/l,m=[],v=[],S=[],p=[];for(let h=0;h<u;h++){const M=h*f-o;for(let y=0;y<c;y++){const E=y*d-s;v.push(E,-M,0),S.push(0,0,1),p.push(y/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<a;M++){const y=M+c*h,E=M+c*(h+1),C=M+1+c*(h+1),A=M+1+c*h;m.push(y,E,A),m.push(E,C,A)}this.setIndex(m),this.setAttribute("position",new Ci(v,3)),this.setAttribute("normal",new Ci(S,3)),this.setAttribute("uv",new Ci(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.width,t.height,t.widthSegments,t.heightSegments)}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,op=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Np=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ig=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ag=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Od,alphahash_pars_fragment:Bd,alphamap_fragment:zd,alphamap_pars_fragment:kd,alphatest_fragment:Hd,alphatest_pars_fragment:Vd,aomap_fragment:Gd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:Yd,begin_vertex:$d,beginnormal_vertex:jd,bsdfs:qd,iridescence_fragment:Kd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:rp,color_vertex:sp,common:op,cube_uv_reflection_fragment:ap,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:up,emissivemap_fragment:hp,emissivemap_pars_fragment:fp,colorspace_fragment:dp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:_p,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Rp,envmap_vertex:xp,fog_vertex:yp,fog_pars_vertex:Mp,fog_fragment:Sp,fog_pars_fragment:Ep,gradientmap_pars_fragment:bp,lightmap_pars_fragment:Ap,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Tp,lights_pars_begin:Cp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Lp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Dp,lights_physical_fragment:Up,lights_physical_pars_fragment:Np,lights_fragment_begin:Fp,lights_fragment_maps:Op,lights_fragment_end:Bp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Vp,map_fragment:Gp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:Yp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:jp,morphinstance_vertex:qp,morphcolor_vertex:Kp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:Qp,normal_fragment_begin:tm,normal_fragment_maps:em,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:rm,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:um,packing:hm,premultiplied_alpha_fragment:fm,project_vertex:dm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:_m,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:xm,shadowmap_vertex:ym,shadowmask_pars_fragment:Mm,skinbase_vertex:Sm,skinning_pars_vertex:Em,skinning_vertex:bm,skinnormal_vertex:Am,specularmap_fragment:wm,specularmap_pars_fragment:Tm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Rm,transmission_fragment:Pm,transmission_pars_fragment:Lm,uv_pars_fragment:Im,uv_pars_vertex:Dm,uv_vertex:Um,worldpos_vertex:Nm,background_vert:Fm,background_frag:Om,backgroundCube_vert:Bm,backgroundCube_frag:zm,cube_vert:km,cube_frag:Hm,depth_vert:Vm,depth_frag:Gm,distanceRGBA_vert:Wm,distanceRGBA_frag:Xm,equirect_vert:Ym,equirect_frag:$m,linedashed_vert:jm,linedashed_frag:qm,meshbasic_vert:Km,meshbasic_frag:Zm,meshlambert_vert:Jm,meshlambert_frag:Qm,meshmatcap_vert:tg,meshmatcap_frag:eg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:rg,meshphong_frag:sg,meshphysical_vert:og,meshphysical_frag:ag,meshtoon_vert:lg,meshtoon_frag:cg,points_vert:ug,points_frag:hg,shadow_vert:fg,shadow_frag:dg,sprite_vert:pg,sprite_frag:mg},dt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},gn={basic:{uniforms:Ce([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ce([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ce([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ce([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ce([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ce([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ce([dt.points,dt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ce([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ce([dt.common,dt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ce([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ce([dt.sprite,dt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ce([dt.common,dt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ce([dt.lights,dt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};gn.physical={uniforms:Ce([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Es={r:0,b:0,g:0},gi=new yn,gg=new $t;function _g(i,t,e,n,r,s,o){const a=new Wt(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function v(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function S(M){let y=!1;const E=v(M);E===null?h(a,l):E&&E.isColor&&(h(E,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,y){const E=v(y);E&&(E.isCubeTexture||E.mapping===_o)?(u===void 0&&(u=new Je(new Fi(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Sr(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gi.copy(y.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gg.makeRotationFromEuler(gi)),u.material.toneMapped=Jt.getTransfer(E.colorSpace)!==te,(d!==E||f!==E.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,m=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Je(new Ar(2,2),new ci({name:"BackgroundMaterial",uniforms:Sr(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(E.colorSpace)!==te,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function h(M,y){M.getRGB(Es,fh(i)),n.buffers.color.setClear(Es.r,Es.g,Es.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,h(a,l)},render:S,addToRenderList:p}}function vg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(g,w,P,U,F){let k=!1;const B=d(U,P,w);s!==B&&(s=B,c(s.object)),k=m(g,U,P,F),k&&v(g,U,P,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,E(g,w,P,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function u(g){return i.deleteVertexArray(g)}function d(g,w,P){const U=P.wireframe===!0;let F=n[g.id];F===void 0&&(F={},n[g.id]=F);let k=F[w.id];k===void 0&&(k={},F[w.id]=k);let B=k[U];return B===void 0&&(B=f(l()),k[U]=B),B}function f(g){const w=[],P=[],U=[];for(let F=0;F<e;F++)w[F]=0,P[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:U,object:g,attributes:{},index:null}}function m(g,w,P,U){const F=s.attributes,k=w.attributes;let B=0;const V=P.getAttributes();for(const Y in V)if(V[Y].location>=0){const nt=F[Y];let pt=k[Y];if(pt===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(pt=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(pt=g.instanceColor)),nt===void 0||nt.attribute!==pt||pt&&nt.data!==pt.data)return!0;B++}return s.attributesNum!==B||s.index!==U}function v(g,w,P,U){const F={},k=w.attributes;let B=0;const V=P.getAttributes();for(const Y in V)if(V[Y].location>=0){let nt=k[Y];nt===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(nt=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(nt=g.instanceColor));const pt={};pt.attribute=nt,nt&&nt.data&&(pt.data=nt.data),F[Y]=pt,B++}s.attributes=F,s.attributesNum=B,s.index=U}function S(){const g=s.newAttributes;for(let w=0,P=g.length;w<P;w++)g[w]=0}function p(g){h(g,0)}function h(g,w){const P=s.newAttributes,U=s.enabledAttributes,F=s.attributeDivisors;P[g]=1,U[g]===0&&(i.enableVertexAttribArray(g),U[g]=1),F[g]!==w&&(i.vertexAttribDivisor(g,w),F[g]=w)}function M(){const g=s.newAttributes,w=s.enabledAttributes;for(let P=0,U=w.length;P<U;P++)w[P]!==g[P]&&(i.disableVertexAttribArray(P),w[P]=0)}function y(g,w,P,U,F,k,B){B===!0?i.vertexAttribIPointer(g,w,P,F,k):i.vertexAttribPointer(g,w,P,U,F,k)}function E(g,w,P,U){S();const F=U.attributes,k=P.getAttributes(),B=w.defaultAttributeValues;for(const V in k){const Y=k[V];if(Y.location>=0){let et=F[V];if(et===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(et=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(et=g.instanceColor)),et!==void 0){const nt=et.normalized,pt=et.itemSize,Lt=t.get(et);if(Lt===void 0)continue;const Ut=Lt.buffer,J=Lt.type,lt=Lt.bytesPerElement,xt=J===i.INT||J===i.UNSIGNED_INT||et.gpuType===Ml;if(et.isInterleavedBufferAttribute){const mt=et.data,Q=mt.stride,L=et.offset;if(mt.isInstancedInterleavedBuffer){for(let N=0;N<Y.locationSize;N++)h(Y.location+N,mt.meshPerAttribute);g.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let N=0;N<Y.locationSize;N++)p(Y.location+N);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let N=0;N<Y.locationSize;N++)y(Y.location+N,pt/Y.locationSize,J,nt,Q*lt,(L+pt/Y.locationSize*N)*lt,xt)}else{if(et.isInstancedBufferAttribute){for(let mt=0;mt<Y.locationSize;mt++)h(Y.location+mt,et.meshPerAttribute);g.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let mt=0;mt<Y.locationSize;mt++)p(Y.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let mt=0;mt<Y.locationSize;mt++)y(Y.location+mt,pt/Y.locationSize,J,nt,pt*lt,pt/Y.locationSize*mt*lt,xt)}}else if(B!==void 0){const nt=B[V];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(Y.location,nt);break;case 3:i.vertexAttrib3fv(Y.location,nt);break;case 4:i.vertexAttrib4fv(Y.location,nt);break;default:i.vertexAttrib1fv(Y.location,nt)}}}}M()}function C(){x();for(const g in n){const w=n[g];for(const P in w){const U=w[P];for(const F in U)u(U[F].object),delete U[F];delete w[P]}delete n[g]}}function A(g){if(n[g.id]===void 0)return;const w=n[g.id];for(const P in w){const U=w[P];for(const F in U)u(U[F].object),delete U[F];delete w[P]}delete n[g.id]}function b(g){for(const w in n){const P=n[w];if(P[g.id]===void 0)continue;const U=P[g.id];for(const F in U)u(U[F].object),delete U[F];delete P[g.id]}}function x(){_(),o=!0,s!==r&&(s=r,c(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:x,resetDefaultState:_,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function xg(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];e.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let S=0;S<d;S++)v+=u[S];for(let S=0;S<f.length;S++)e.update(v,n,f[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ze&&!b)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:S,maxAttributes:p,maxVertexUniforms:h,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:E,maxSamples:C}}function Mg(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new fn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,y=M*4;let E=h.clippingState||null;l.value=E,E=u(v,f,y,m);for(let C=0;C!==y;++C)E[C]=e[C];h.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,m,v){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=l.value,v!==!0||p===null){const h=m+S*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,E=m;y!==S;++y,E+=4)o.copy(d[y]).applyMatrix4(M,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}function Sg(i){let t=new WeakMap;function e(o,a){return a===so?o.mapping=vr:a===Da&&(o.mapping=xr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===so||a===Da)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class gh extends dh{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const dr=4,vc=[.125,.215,.35,.446,.526,.582],Ai=20,qo=new gh,xc=new Wt;let Ko=null,Zo=0,Jo=0,Qo=!1;const Ei=(1+Math.sqrt(5))/2,nr=1/Ei,yc=[new z(-Ei,nr,0),new z(Ei,nr,0),new z(-nr,0,Ei),new z(nr,0,Ei),new z(0,Ei,-nr),new z(0,Ei,nr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ko,Zo,Jo),this._renderer.xr.enabled=Qo,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vr||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:On,format:pn,colorSpace:Gn,depthBuffer:!1},r=Sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(s)),this._blurMaterial=bg(s,t,e)}return r}_compileMaterial(t){const e=new Je(this._lodPlanes[0],t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,r){const a=new qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xc),u.toneMapping=li,u.autoClear=!1;const m=new ch({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),v=new Je(new Fi,m);let S=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,S=!0):(m.color.copy(xc),S=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):M===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;bs(r,M*y,h>2?y:0,y,y),u.setRenderTarget(r),S&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===vr||t.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yc[(r-s-1)%yc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Je(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),S=s/v,p=isFinite(s)?1+Math.floor(u*S):Ai;p>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ai}`);const h=[];let M=0;for(let b=0;b<Ai;++b){const x=b/S,_=Math.exp(-x*x/2);h.push(_),b===0?M+=_:b<p&&(M+=2*_)}for(let b=0;b<h.length;b++)h[b]=h[b]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const E=this._sizeLods[r],C=3*E*(r>y-dr?r-y+dr:0),A=4*(this._cubeSize-E);bs(e,C,A,3*E,2*E),l.setRenderTarget(e),l.render(d,qo)}}function Eg(i){const t=[],e=[],n=[];let r=i;const s=i-dr+1+vc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-dr?l=vc[o-i+dr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,S=3,p=2,h=1,M=new Float32Array(S*v*m),y=new Float32Array(p*v*m),E=new Float32Array(h*v*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,x=A>2?0:-1,_=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];M.set(_,S*v*A),y.set(f,p*v*A);const g=[A,A,A,A,A,A];E.set(g,h*v*A)}const C=new Ni;C.setAttribute("position",new Oe(M,S)),C.setAttribute("uv",new Oe(y,p)),C.setAttribute("faceIndex",new Oe(E,h)),t.push(C),r>dr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sc(i,t,e){const n=new Li(i,t,e);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function bg(i,t,e){const n=new Float32Array(Ai),r=new z(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ec(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function bc(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ag(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===so||l===Da,u=l===vr||l===xr;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Mc(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Mc(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function wg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&rh("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Tg(i,t,e,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const S=f.morphAttributes[v];for(let p=0,h=S.length;p<h;p++)t.remove(S[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const S=m[v];for(let p=0,h=S.length;p<h;p++)t.update(S[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let S=0;if(m!==null){const M=m.array;S=m.version;for(let y=0,E=M.length;y<E;y+=3){const C=M[y+0],A=M[y+1],b=M[y+2];f.push(C,A,A,b,b,C)}}else if(v!==void 0){const M=v.array;S=v.version;for(let y=0,E=M.length/3-1;y<E;y+=3){const C=y+0,A=y+1,b=y+2;f.push(C,A,A,b,b,C)}}else return;const p=new(ih(f)?hh:uh)(f,1);p.version=S;const h=s.get(d);h&&t.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Cg(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*o),e.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,f*o,v),e.update(m,n,v))}function u(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,v);let p=0;for(let h=0;h<v;h++)p+=m[h];e.update(p,n,1)}function d(f,m,v,S){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/o,m[h],S[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,S,0,v);let h=0;for(let M=0;M<v;M++)h+=m[M];for(let M=0;M<S.length;M++)e.update(h,n,S[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Rg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Pg(i,t,e){const n=new WeakMap,r=new Qt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let g=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",g)};var m=g;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;v===!0&&(E=1),S===!0&&(E=2),p===!0&&(E=3);let C=a.attributes.position.count*E,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*A*4*d),x=new oh(b,C,A,d);x.type=Ze,x.needsUpdate=!0;const _=E*4;for(let w=0;w<d;w++){const P=h[w],U=M[w],F=y[w],k=C*A*4*w;for(let B=0;B<P.count;B++){const V=B*_;v===!0&&(r.fromBufferAttribute(P,B),b[k+V+0]=r.x,b[k+V+1]=r.y,b[k+V+2]=r.z,b[k+V+3]=0),S===!0&&(r.fromBufferAttribute(U,B),b[k+V+4]=r.x,b[k+V+5]=r.y,b[k+V+6]=r.z,b[k+V+7]=0),p===!0&&(r.fromBufferAttribute(F,B),b[k+V+8]=r.x,b[k+V+9]=r.y,b[k+V+10]=r.z,b[k+V+11]=F.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new Rt(C,A)},n.set(a,f),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Lg(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class _h extends Pe{constructor(t,e,n,r,s,o,a,l,c,u=gr){if(u!==gr&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gr&&(n=Pi),n===void 0&&u===Mr&&(n=yr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vh=new Pe,Ac=new _h(1,1),xh=new oh,yh=new pd,Mh=new ph,wc=[],Tc=[],Cc=new Float32Array(16),Rc=new Float32Array(9),Pc=new Float32Array(4);function wr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=wc[r];if(s===void 0&&(s=new Float32Array(r),wc[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mo(i,t){let e=Tc[t];e===void 0&&(e=new Int32Array(t),Tc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Pc.set(n),i.uniformMatrix2fv(this.addr,!1,Pc),ve(e,n)}}function Og(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Rc.set(n),i.uniformMatrix3fv(this.addr,!1,Rc),ve(e,n)}}function Bg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),ve(e,n)}}function zg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Gg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function $g(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ac.compareFunction=eh,s=Ac):s=vh,e.setTexture2D(t||s,r)}function jg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||yh,r)}function qg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Mh,r)}function Kg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||xh,r)}function Zg(i){switch(i){case 5126:return Ig;case 35664:return Dg;case 35665:return Ug;case 35666:return Ng;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return kg;case 35668:case 35672:return Hg;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Kg}}function Jg(i,t){i.uniform1fv(this.addr,t)}function Qg(i,t){const e=wr(t,this.size,2);i.uniform2fv(this.addr,e)}function t_(i,t){const e=wr(t,this.size,3);i.uniform3fv(this.addr,e)}function e_(i,t){const e=wr(t,this.size,4);i.uniform4fv(this.addr,e)}function n_(i,t){const e=wr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function i_(i,t){const e=wr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r_(i,t){const e=wr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function s_(i,t){i.uniform1iv(this.addr,t)}function o_(i,t){i.uniform2iv(this.addr,t)}function a_(i,t){i.uniform3iv(this.addr,t)}function l_(i,t){i.uniform4iv(this.addr,t)}function c_(i,t){i.uniform1uiv(this.addr,t)}function u_(i,t){i.uniform2uiv(this.addr,t)}function h_(i,t){i.uniform3uiv(this.addr,t)}function f_(i,t){i.uniform4uiv(this.addr,t)}function d_(i,t,e){const n=this.cache,r=t.length,s=Mo(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||vh,s[o])}function p_(i,t,e){const n=this.cache,r=t.length,s=Mo(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||yh,s[o])}function m_(i,t,e){const n=this.cache,r=t.length,s=Mo(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Mh,s[o])}function g_(i,t,e){const n=this.cache,r=t.length,s=Mo(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||xh,s[o])}function __(i){switch(i){case 5126:return Jg;case 35664:return Qg;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return r_;case 5124:case 35670:return s_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return h_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}class v_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zg(e.type)}}class x_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=__(e.type)}}class y_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Lc(i,t){i.seq.push(t),i.map[t.id]=t}function M_(i,t,e){const n=i.name,r=n.length;for(ta.lastIndex=0;;){const s=ta.exec(n),o=ta.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Lc(e,c===void 0?new v_(a,i,t):new x_(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new y_(a),Lc(e,d)),e=d}}}class Qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);M_(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Ic(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const S_=37297;let E_=0;function b_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function A_(i){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(i);let n;switch(t===e?n="":t===lo&&e===ao?n="LinearDisplayP3ToLinearSRGB":t===ao&&e===lo&&(n="LinearSRGBToLinearDisplayP3"),i){case Gn:case vo:return[n,"LinearTransferOETF"];case mn:case Cl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Dc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+b_(i.getShaderSource(t),o)}else return r}function w_(i,t){const e=A_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function T_(i,t){let e;switch(t){case Rf:e="Linear";break;case Pf:e="Reinhard";break;case Lf:e="OptimizedCineon";break;case Vu:e="ACESFilmic";break;case Df:e="AgX";break;case Uf:e="Neutral";break;case If:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function C_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function R_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gr(i){return i!==""}function Uc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(L_,D_)}const I_=new Map;function D_(i,t){let e=Gt[t];if(e===void 0){const n=I_.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ll(e)}const U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(i){return i.replace(U_,N_)}function N_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function O_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vr:case xr:t="ENVMAP_TYPE_CUBE";break;case _o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xr:t="ENVMAP_MODE_REFRACTION";break}return t}function z_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hu:t="ENVMAP_BLENDING_MULTIPLY";break;case Tf:t="ENVMAP_BLENDING_MIX";break;case Cf:t="ENVMAP_BLENDING_ADD";break}return t}function k_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function H_(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=F_(e),c=O_(e),u=B_(e),d=z_(e),f=k_(e),m=C_(e),v=R_(s),S=r.createProgram();let p,h,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Gr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Gr).join(`
`),h.length>0&&(h+=`
`)):(p=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),h=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Gt.tonemapping_pars_fragment:"",e.toneMapping!==li?T_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,w_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),o=ll(o),o=Uc(o,e),o=Nc(o,e),a=ll(a),a=Uc(a,e),a=Nc(a,e),o=Fc(o),a=Fc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=M+p+o,E=M+h+a,C=Ic(r,r.VERTEX_SHADER,y),A=Ic(r,r.FRAGMENT_SHADER,E);r.attachShader(S,C),r.attachShader(S,A),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function b(w){if(i.debug.checkShaderErrors){const P=r.getProgramInfoLog(S).trim(),U=r.getShaderInfoLog(C).trim(),F=r.getShaderInfoLog(A).trim();let k=!0,B=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,C,A);else{const V=Dc(r,C,"vertex"),Y=Dc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+V+`
`+Y)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||F==="")&&(B=!1);B&&(w.diagnostics={runnable:k,programLog:P,vertexShader:{log:U,prefix:p},fragmentShader:{log:F,prefix:h}})}r.deleteShader(C),r.deleteShader(A),x=new Qs(r,S),_=P_(r,S)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(S,S_)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E_++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=A,this}let V_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new W_(t),e.set(t,n)),n}}class W_{constructor(t){this.id=V_++,this.code=t,this.usedTimes=0}}function X_(i,t,e,n,r,s,o){const a=new ah,l=new G_,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,g,w,P,U){const F=P.fog,k=U.geometry,B=_.isMeshStandardMaterial?P.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||B),Y=V&&V.mapping===_o?V.image.height:null,et=v[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pt=nt!==void 0?nt.length:0;let Lt=0;k.morphAttributes.position!==void 0&&(Lt=1),k.morphAttributes.normal!==void 0&&(Lt=2),k.morphAttributes.color!==void 0&&(Lt=3);let Ut,J,lt,xt;if(et){const Yt=gn[et];Ut=Yt.vertexShader,J=Yt.fragmentShader}else Ut=_.vertexShader,J=_.fragmentShader,l.update(_),lt=l.getVertexShaderID(_),xt=l.getFragmentShaderID(_);const mt=i.getRenderTarget(),Q=U.isInstancedMesh===!0,L=U.isBatchedMesh===!0,N=!!_.map,H=!!_.matcap,D=!!V,tt=!!_.aoMap,it=!!_.lightMap,yt=!!_.bumpMap,ht=!!_.normalMap,Ht=!!_.displacementMap,At=!!_.emissiveMap,bt=!!_.metalnessMap,O=!!_.roughnessMap,R=_.anisotropy>0,X=_.clearcoat>0,rt=_.dispersion>0,ot=_.iridescence>0,st=_.sheen>0,Ct=_.transmission>0,ft=R&&!!_.anisotropyMap,_t=X&&!!_.clearcoatMap,kt=X&&!!_.clearcoatNormalMap,ct=X&&!!_.clearcoatRoughnessMap,vt=ot&&!!_.iridescenceMap,Xt=ot&&!!_.iridescenceThicknessMap,It=st&&!!_.sheenColorMap,Mt=st&&!!_.sheenRoughnessMap,Nt=!!_.specularMap,zt=!!_.specularColorMap,ne=!!_.specularIntensityMap,T=Ct&&!!_.transmissionMap,$=Ct&&!!_.thicknessMap,j=!!_.gradientMap,Z=!!_.alphaMap,at=_.alphaTest>0,wt=!!_.alphaHash,Ft=!!_.extensions;let le=li;_.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(le=i.toneMapping);const pe={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Ut,fragmentShader:J,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:xt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:L,batchingColor:L&&U._colorsTexture!==null,instancing:Q,instancingColor:Q&&U.instanceColor!==null,instancingMorph:Q&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Gn,alphaToCoverage:!!_.alphaToCoverage,map:N,matcap:H,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:Y,aoMap:tt,lightMap:it,bumpMap:yt,normalMap:ht,displacementMap:f&&Ht,emissiveMap:At,normalMapObjectSpace:ht&&_.normalMapType===Of,normalMapTangentSpace:ht&&_.normalMapType===Tl,metalnessMap:bt,roughnessMap:O,anisotropy:R,anisotropyMap:ft,clearcoat:X,clearcoatMap:_t,clearcoatNormalMap:kt,clearcoatRoughnessMap:ct,dispersion:rt,iridescence:ot,iridescenceMap:vt,iridescenceThicknessMap:Xt,sheen:st,sheenColorMap:It,sheenRoughnessMap:Mt,specularMap:Nt,specularColorMap:zt,specularIntensityMap:ne,transmission:Ct,transmissionMap:T,thicknessMap:$,gradientMap:j,opaque:_.transparent===!1&&_.blending===mr&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:at,alphaHash:wt,combine:_.combine,mapUv:N&&S(_.map.channel),aoMapUv:tt&&S(_.aoMap.channel),lightMapUv:it&&S(_.lightMap.channel),bumpMapUv:yt&&S(_.bumpMap.channel),normalMapUv:ht&&S(_.normalMap.channel),displacementMapUv:Ht&&S(_.displacementMap.channel),emissiveMapUv:At&&S(_.emissiveMap.channel),metalnessMapUv:bt&&S(_.metalnessMap.channel),roughnessMapUv:O&&S(_.roughnessMap.channel),anisotropyMapUv:ft&&S(_.anisotropyMap.channel),clearcoatMapUv:_t&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:kt&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:It&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&S(_.sheenRoughnessMap.channel),specularMapUv:Nt&&S(_.specularMap.channel),specularColorMapUv:zt&&S(_.specularColorMap.channel),specularIntensityMapUv:ne&&S(_.specularIntensityMap.channel),transmissionMapUv:T&&S(_.transmissionMap.channel),thicknessMapUv:$&&S(_.thicknessMap.channel),alphaMapUv:Z&&S(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ht||R),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(N||Z),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Lt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:N&&_.map.isVideoTexture===!0&&Jt.getTransfer(_.map.colorSpace)===te,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ke,flipSided:_.side===Re,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ft&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&_.extensions.multiDraw===!0||L)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function h(_){const g=[];if(_.shaderID?g.push(_.shaderID):(g.push(_.customVertexShaderID),g.push(_.customFragmentShaderID)),_.defines!==void 0)for(const w in _.defines)g.push(w),g.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(M(g,_),y(g,_),g.push(i.outputColorSpace)),g.push(_.customProgramCacheKey),g.join()}function M(_,g){_.push(g.precision),_.push(g.outputColorSpace),_.push(g.envMapMode),_.push(g.envMapCubeUVHeight),_.push(g.mapUv),_.push(g.alphaMapUv),_.push(g.lightMapUv),_.push(g.aoMapUv),_.push(g.bumpMapUv),_.push(g.normalMapUv),_.push(g.displacementMapUv),_.push(g.emissiveMapUv),_.push(g.metalnessMapUv),_.push(g.roughnessMapUv),_.push(g.anisotropyMapUv),_.push(g.clearcoatMapUv),_.push(g.clearcoatNormalMapUv),_.push(g.clearcoatRoughnessMapUv),_.push(g.iridescenceMapUv),_.push(g.iridescenceThicknessMapUv),_.push(g.sheenColorMapUv),_.push(g.sheenRoughnessMapUv),_.push(g.specularMapUv),_.push(g.specularColorMapUv),_.push(g.specularIntensityMapUv),_.push(g.transmissionMapUv),_.push(g.thicknessMapUv),_.push(g.combine),_.push(g.fogExp2),_.push(g.sizeAttenuation),_.push(g.morphTargetsCount),_.push(g.morphAttributeCount),_.push(g.numDirLights),_.push(g.numPointLights),_.push(g.numSpotLights),_.push(g.numSpotLightMaps),_.push(g.numHemiLights),_.push(g.numRectAreaLights),_.push(g.numDirLightShadows),_.push(g.numPointLightShadows),_.push(g.numSpotLightShadows),_.push(g.numSpotLightShadowsWithMaps),_.push(g.numLightProbes),_.push(g.shadowMapType),_.push(g.toneMapping),_.push(g.numClippingPlanes),_.push(g.numClipIntersection),_.push(g.depthPacking)}function y(_,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.skinning&&a.enable(4),g.morphTargets&&a.enable(5),g.morphNormals&&a.enable(6),g.morphColors&&a.enable(7),g.premultipliedAlpha&&a.enable(8),g.shadowMapEnabled&&a.enable(9),g.doubleSided&&a.enable(10),g.flipSided&&a.enable(11),g.useDepthPacking&&a.enable(12),g.dithering&&a.enable(13),g.transmission&&a.enable(14),g.sheen&&a.enable(15),g.opaque&&a.enable(16),g.pointsUvs&&a.enable(17),g.decodeVideoTexture&&a.enable(18),g.alphaToCoverage&&a.enable(19),_.push(a.mask)}function E(_){const g=v[_.type];let w;if(g){const P=gn[g];w=Rd.clone(P.uniforms)}else w=_.uniforms;return w}function C(_,g){let w;for(let P=0,U=u.length;P<U;P++){const F=u[P];if(F.cacheKey===g){w=F,++w.usedTimes;break}}return w===void 0&&(w=new H_(i,g,_,s),u.push(w)),w}function A(_){if(--_.usedTimes===0){const g=u.indexOf(_);u[g]=u[u.length-1],u.pop(),_.destroy()}}function b(_){l.remove(_)}function x(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:x}}function Y_(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function $_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,f,m,v,S,p){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:S,group:p},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=S,h.group=p),t++,h}function a(d,f,m,v,S,p){const h=o(d,f,m,v,S,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):e.push(h)}function l(d,f,m,v,S,p){const h=o(d,f,m,v,S,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||$_),n.length>1&&n.sort(f||Bc),r.length>1&&r.sort(f||Bc)}function u(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function j_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new zc,i.set(n,[o])):r>=s.length?(o=new zc,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function q_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Wt};break;case"SpotLight":e={position:new z,direction:new z,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function K_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Z_=0;function J_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Q_(i){const t=new q_,e=K_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const r=new z,s=new $t,o=new $t;function a(c){let u=0,d=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let m=0,v=0,S=0,p=0,h=0,M=0,y=0,E=0,C=0,A=0,b=0;c.sort(J_);for(let _=0,g=c.length;_<g;_++){const w=c[_],P=w.color,U=w.intensity,F=w.distance,k=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=P.r*U,d+=P.g*U,f+=P.b*U;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],U);b++}else if(w.isDirectionalLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const V=w.shadow,Y=e.get(w);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=w.shadow.matrix,M++}n.directional[m]=B,m++}else if(w.isSpotLight){const B=t.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(P).multiplyScalar(U),B.distance=F,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[S]=B;const V=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,V.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[S]=V.matrix,w.castShadow){const Y=e.get(w);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.spotShadow[S]=Y,n.spotShadowMap[S]=k,E++}S++}else if(w.isRectAreaLight){const B=t.get(w);B.color.copy(P).multiplyScalar(U),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=B,p++}else if(w.isPointLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const V=w.shadow,Y=e.get(w);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=w.shadow.matrix,y++}n.point[v]=B,v++}else if(w.isHemisphereLight){const B=t.get(w);B.skyColor.copy(w.color).multiplyScalar(U),B.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[h]=B,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const x=n.hash;(x.directionalLength!==m||x.pointLength!==v||x.spotLength!==S||x.rectAreaLength!==p||x.hemiLength!==h||x.numDirectionalShadows!==M||x.numPointShadows!==y||x.numSpotShadows!==E||x.numSpotMaps!==C||x.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=p,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,x.directionalLength=m,x.pointLength=v,x.spotLength=S,x.rectAreaLength=p,x.hemiLength=h,x.numDirectionalShadows=M,x.numPointShadows=y,x.numSpotShadows=E,x.numSpotMaps=C,x.numLightProbes=b,n.version=Z_++)}function l(c,u){let d=0,f=0,m=0,v=0,S=0;const p=u.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const y=c[h];if(y.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(y.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const E=n.hemi[S];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),S++}}}return{setup:a,setupView:l,state:n}}function kc(i){const t=new Q_(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function t0(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new kc(i),t.set(r,[a])):s>=o.length?(a=new kc(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Sh extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class e0 extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r0(i,t,e){let n=new Pl;const r=new Rt,s=new Rt,o=new Qt,a=new Sh({depthPacking:th}),l=new e0,c={},u=e.maxTextureSize,d={[xn]:Re,[Re]:xn,[Ke]:Ke},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ni;v.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Je(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let h=this.type;this.render=function(A,b,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const _=i.getRenderTarget(),g=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ai),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=h!==Dn&&this.type===Dn,F=h===Dn&&this.type!==Dn;for(let k=0,B=A.length;k<B;k++){const V=A[k],Y=V.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const et=Y.getFrameExtents();if(r.multiply(et),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/et.x),r.x=s.x*et.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/et.y),r.y=s.y*et.y,Y.mapSize.y=s.y)),Y.map===null||U===!0||F===!0){const pt=this.type!==Dn?{minFilter:Fe,magFilter:Fe}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Li(r.x,r.y,pt),Y.map.texture.name=V.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const nt=Y.getViewportCount();for(let pt=0;pt<nt;pt++){const Lt=Y.getViewport(pt);o.set(s.x*Lt.x,s.y*Lt.y,s.x*Lt.z,s.y*Lt.w),P.viewport(o),Y.updateMatrices(V,pt),n=Y.getFrustum(),E(b,x,Y.camera,V,this.type)}Y.isPointLightShadow!==!0&&this.type===Dn&&M(Y,x),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(_,g,w)};function M(A,b){const x=t.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,x,f,S,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,x,m,S,null)}function y(A,b,x,_){let g=null;const w=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)g=w;else if(g=x.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const P=g.uuid,U=b.uuid;let F=c[P];F===void 0&&(F={},c[P]=F);let k=F[U];k===void 0&&(k=g.clone(),F[U]=k,b.addEventListener("dispose",C)),g=k}if(g.visible=b.visible,g.wireframe=b.wireframe,_===Dn?g.side=b.shadowSide!==null?b.shadowSide:b.side:g.side=b.shadowSide!==null?b.shadowSide:d[b.side],g.alphaMap=b.alphaMap,g.alphaTest=b.alphaTest,g.map=b.map,g.clipShadows=b.clipShadows,g.clippingPlanes=b.clippingPlanes,g.clipIntersection=b.clipIntersection,g.displacementMap=b.displacementMap,g.displacementScale=b.displacementScale,g.displacementBias=b.displacementBias,g.wireframeLinewidth=b.wireframeLinewidth,g.linewidth=b.linewidth,x.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const P=i.properties.get(g);P.light=x}return g}function E(A,b,x,_,g){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&g===Dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const U=t.update(A),F=A.material;if(Array.isArray(F)){const k=U.groups;for(let B=0,V=k.length;B<V;B++){const Y=k[B],et=F[Y.materialIndex];if(et&&et.visible){const nt=y(A,et,_,g);A.onBeforeShadow(i,A,b,x,U,nt,Y),i.renderBufferDirect(x,null,U,nt,A,Y),A.onAfterShadow(i,A,b,x,U,nt,Y)}}}else if(F.visible){const k=y(A,F,_,g);A.onBeforeShadow(i,A,b,x,U,k,null),i.renderBufferDirect(x,null,U,k,A,null),A.onAfterShadow(i,A,b,x,U,k,null)}}const P=A.children;for(let U=0,F=P.length;U<F;U++)E(P[U],b,x,_,g)}function C(A){A.target.removeEventListener("dispose",C);for(const x in c){const _=c[x],g=A.target.uuid;g in _&&(_[g].dispose(),delete _[g])}}}function s0(i){function t(){let T=!1;const $=new Qt;let j=null;const Z=new Qt(0,0,0,0);return{setMask:function(at){j!==at&&!T&&(i.colorMask(at,at,at,at),j=at)},setLocked:function(at){T=at},setClear:function(at,wt,Ft,le,pe){pe===!0&&(at*=le,wt*=le,Ft*=le),$.set(at,wt,Ft,le),Z.equals($)===!1&&(i.clearColor(at,wt,Ft,le),Z.copy($))},reset:function(){T=!1,j=null,Z.set(-1,0,0,0)}}}function e(){let T=!1,$=null,j=null,Z=null;return{setTest:function(at){at?xt(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(at){$!==at&&!T&&(i.depthMask(at),$=at)},setFunc:function(at){if(j!==at){switch(at){case yf:i.depthFunc(i.NEVER);break;case Mf:i.depthFunc(i.ALWAYS);break;case Sf:i.depthFunc(i.LESS);break;case ro:i.depthFunc(i.LEQUAL);break;case Ef:i.depthFunc(i.EQUAL);break;case bf:i.depthFunc(i.GEQUAL);break;case Af:i.depthFunc(i.GREATER);break;case wf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=at}},setLocked:function(at){T=at},setClear:function(at){Z!==at&&(i.clearDepth(at),Z=at)},reset:function(){T=!1,$=null,j=null,Z=null}}}function n(){let T=!1,$=null,j=null,Z=null,at=null,wt=null,Ft=null,le=null,pe=null;return{setTest:function(Yt){T||(Yt?xt(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(Yt){$!==Yt&&!T&&(i.stencilMask(Yt),$=Yt)},setFunc:function(Yt,me,ue){(j!==Yt||Z!==me||at!==ue)&&(i.stencilFunc(Yt,me,ue),j=Yt,Z=me,at=ue)},setOp:function(Yt,me,ue){(wt!==Yt||Ft!==me||le!==ue)&&(i.stencilOp(Yt,me,ue),wt=Yt,Ft=me,le=ue)},setLocked:function(Yt){T=Yt},setClear:function(Yt){pe!==Yt&&(i.clearStencil(Yt),pe=Yt)},reset:function(){T=!1,$=null,j=null,Z=null,at=null,wt=null,Ft=null,le=null,pe=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],m=null,v=!1,S=null,p=null,h=null,M=null,y=null,E=null,C=null,A=new Wt(0,0,0),b=0,x=!1,_=null,g=null,w=null,P=null,U=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=B>=1):V.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=B>=2);let Y=null,et={};const nt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Lt=new Qt().fromArray(nt),Ut=new Qt().fromArray(pt);function J(T,$,j,Z){const at=new Uint8Array(4),wt=i.createTexture();i.bindTexture(T,wt),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<j;Ft++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D($+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return wt}const lt={};lt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),s.setFunc(ro),yt(!1),ht(Xl),xt(i.CULL_FACE),tt(ai);function xt(T){c[T]!==!0&&(i.enable(T),c[T]=!0)}function mt(T){c[T]!==!1&&(i.disable(T),c[T]=!1)}function Q(T,$){return u[T]!==$?(i.bindFramebuffer(T,$),u[T]=$,T===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),T===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function L(T,$){let j=f,Z=!1;if(T){j=d.get($),j===void 0&&(j=[],d.set($,j));const at=T.textures;if(j.length!==at.length||j[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Ft=at.length;wt<Ft;wt++)j[wt]=i.COLOR_ATTACHMENT0+wt;j.length=at.length,Z=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Z=!0);Z&&i.drawBuffers(j)}function N(T){return m!==T?(i.useProgram(T),m=T,!0):!1}const H={[bi]:i.FUNC_ADD,[nf]:i.FUNC_SUBTRACT,[rf]:i.FUNC_REVERSE_SUBTRACT};H[sf]=i.MIN,H[of]=i.MAX;const D={[af]:i.ZERO,[lf]:i.ONE,[cf]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[mf]:i.SRC_ALPHA_SATURATE,[df]:i.DST_COLOR,[hf]:i.DST_ALPHA,[uf]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[pf]:i.ONE_MINUS_DST_COLOR,[ff]:i.ONE_MINUS_DST_ALPHA,[gf]:i.CONSTANT_COLOR,[_f]:i.ONE_MINUS_CONSTANT_COLOR,[vf]:i.CONSTANT_ALPHA,[xf]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(T,$,j,Z,at,wt,Ft,le,pe,Yt){if(T===ai){v===!0&&(mt(i.BLEND),v=!1);return}if(v===!1&&(xt(i.BLEND),v=!0),T!==ef){if(T!==S||Yt!==x){if((p!==bi||y!==bi)&&(i.blendEquation(i.FUNC_ADD),p=bi,y=bi),Yt)switch(T){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yl:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}h=null,M=null,E=null,C=null,A.set(0,0,0),b=0,S=T,x=Yt}return}at=at||$,wt=wt||j,Ft=Ft||Z,($!==p||at!==y)&&(i.blendEquationSeparate(H[$],H[at]),p=$,y=at),(j!==h||Z!==M||wt!==E||Ft!==C)&&(i.blendFuncSeparate(D[j],D[Z],D[wt],D[Ft]),h=j,M=Z,E=wt,C=Ft),(le.equals(A)===!1||pe!==b)&&(i.blendColor(le.r,le.g,le.b,pe),A.copy(le),b=pe),S=T,x=!1}function it(T,$){T.side===Ke?mt(i.CULL_FACE):xt(i.CULL_FACE);let j=T.side===Re;$&&(j=!j),yt(j),T.blending===mr&&T.transparent===!1?tt(ai):tt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);const Z=T.stencilWrite;o.setTest(Z),Z&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),At(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(T){_!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),_=T)}function ht(T){T!==Qh?(xt(i.CULL_FACE),T!==g&&(T===Xl?i.cullFace(i.BACK):T===tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),g=T}function Ht(T){T!==w&&(k&&i.lineWidth(T),w=T)}function At(T,$,j){T?(xt(i.POLYGON_OFFSET_FILL),(P!==$||U!==j)&&(i.polygonOffset($,j),P=$,U=j)):mt(i.POLYGON_OFFSET_FILL)}function bt(T){T?xt(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function O(T){T===void 0&&(T=i.TEXTURE0+F-1),Y!==T&&(i.activeTexture(T),Y=T)}function R(T,$,j){j===void 0&&(Y===null?j=i.TEXTURE0+F-1:j=Y);let Z=et[j];Z===void 0&&(Z={type:void 0,texture:void 0},et[j]=Z),(Z.type!==T||Z.texture!==$)&&(Y!==j&&(i.activeTexture(j),Y=j),i.bindTexture(T,$||lt[T]),Z.type=T,Z.texture=$)}function X(){const T=et[Y];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function It(T){Lt.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Lt.copy(T))}function Mt(T){Ut.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Ut.copy(T))}function Nt(T,$){let j=l.get($);j===void 0&&(j=new WeakMap,l.set($,j));let Z=j.get(T);Z===void 0&&(Z=i.getUniformBlockIndex($,T.name),j.set(T,Z))}function zt(T,$){const Z=l.get($).get(T);a.get($)!==Z&&(i.uniformBlockBinding($,Z,T.__bindingPointIndex),a.set($,Z))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Y=null,et={},u={},d=new WeakMap,f=[],m=null,v=!1,S=null,p=null,h=null,M=null,y=null,E=null,C=null,A=new Wt(0,0,0),b=0,x=!1,_=null,g=null,w=null,P=null,U=null,Lt.set(0,0,i.canvas.width,i.canvas.height),Ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:xt,disable:mt,bindFramebuffer:Q,drawBuffers:L,useProgram:N,setBlending:tt,setMaterial:it,setFlipSided:yt,setCullFace:ht,setLineWidth:Ht,setPolygonOffset:At,setScissorTest:bt,activeTexture:O,bindTexture:R,unbindTexture:X,compressedTexImage2D:rt,compressedTexImage3D:ot,texImage2D:vt,texImage3D:Xt,updateUBOMapping:Nt,uniformBlockBinding:zt,texStorage2D:kt,texStorage3D:ct,texSubImage2D:st,texSubImage3D:Ct,compressedTexSubImage2D:ft,compressedTexSubImage3D:_t,scissor:It,viewport:Mt,reset:ne}}function Hc(i,t,e,n){const r=o0(n);switch(e){case $u:return i*t;case qu:return i*t;case Ku:return i*t*2;case Zu:return i*t/r.components*r.byteLength;case bl:return i*t/r.components*r.byteLength;case Ju:return i*t*2/r.components*r.byteLength;case Al:return i*t*2/r.components*r.byteLength;case ju:return i*t*3/r.components*r.byteLength;case pn:return i*t*4/r.components*r.byteLength;case wl:return i*t*4/r.components*r.byteLength;case js:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case za:return Math.max(i,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Js:case il:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qu:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function o0(i){switch(i){case kn:case Wu:return{byteLength:1,components:1};case Kr:case Xu:case On:return{byteLength:2,components:1};case Sl:case El:return{byteLength:2,components:4};case Pi:case Ml:case Ze:return{byteLength:4,components:1};case Yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function a0(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(O,R){return m?new OffscreenCanvas(O,R):uo("canvas")}function S(O,R,X){let rt=1;const ot=bt(O);if((ot.width>X||ot.height>X)&&(rt=X/Math.max(ot.width,ot.height)),rt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const st=Math.floor(rt*ot.width),Ct=Math.floor(rt*ot.height);d===void 0&&(d=v(st,Ct));const ft=R?v(st,Ct):d;return ft.width=st,ft.height=Ct,ft.getContext("2d").drawImage(O,0,0,st,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+st+"x"+Ct+")."),ft}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),O;return O}function p(O){return O.generateMipmaps&&O.minFilter!==Fe&&O.minFilter!==be}function h(O){i.generateMipmap(O)}function M(O,R,X,rt,ot=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let st=R;if(R===i.RED&&(X===i.FLOAT&&(st=i.R32F),X===i.HALF_FLOAT&&(st=i.R16F),X===i.UNSIGNED_BYTE&&(st=i.R8)),R===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(st=i.R8UI),X===i.UNSIGNED_SHORT&&(st=i.R16UI),X===i.UNSIGNED_INT&&(st=i.R32UI),X===i.BYTE&&(st=i.R8I),X===i.SHORT&&(st=i.R16I),X===i.INT&&(st=i.R32I)),R===i.RG&&(X===i.FLOAT&&(st=i.RG32F),X===i.HALF_FLOAT&&(st=i.RG16F),X===i.UNSIGNED_BYTE&&(st=i.RG8)),R===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(st=i.RG8UI),X===i.UNSIGNED_SHORT&&(st=i.RG16UI),X===i.UNSIGNED_INT&&(st=i.RG32UI),X===i.BYTE&&(st=i.RG8I),X===i.SHORT&&(st=i.RG16I),X===i.INT&&(st=i.RG32I)),R===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),R===i.RGBA){const Ct=ot?oo:Jt.getTransfer(rt);X===i.FLOAT&&(st=i.RGBA32F),X===i.HALF_FLOAT&&(st=i.RGBA16F),X===i.UNSIGNED_BYTE&&(st=Ct===te?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function y(O,R){let X;return O?R===null||R===Pi||R===yr?X=i.DEPTH24_STENCIL8:R===Ze?X=i.DEPTH32F_STENCIL8:R===Kr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Pi||R===yr?X=i.DEPTH_COMPONENT24:R===Ze?X=i.DEPTH_COMPONENT32F:R===Kr&&(X=i.DEPTH_COMPONENT16),X}function E(O,R){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==Fe&&O.minFilter!==be?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function C(O){const R=O.target;R.removeEventListener("dispose",C),b(R),R.isVideoTexture&&u.delete(R)}function A(O){const R=O.target;R.removeEventListener("dispose",A),_(R)}function b(O){const R=n.get(O);if(R.__webglInit===void 0)return;const X=O.source,rt=f.get(X);if(rt){const ot=rt[R.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&x(O),Object.keys(rt).length===0&&f.delete(X)}n.remove(O)}function x(O){const R=n.get(O);i.deleteTexture(R.__webglTexture);const X=O.source,rt=f.get(X);delete rt[R.__cacheKey],o.memory.textures--}function _(O){const R=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(R.__webglFramebuffer[rt]))for(let ot=0;ot<R.__webglFramebuffer[rt].length;ot++)i.deleteFramebuffer(R.__webglFramebuffer[rt][ot]);else i.deleteFramebuffer(R.__webglFramebuffer[rt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[rt])}else{if(Array.isArray(R.__webglFramebuffer))for(let rt=0;rt<R.__webglFramebuffer.length;rt++)i.deleteFramebuffer(R.__webglFramebuffer[rt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let rt=0;rt<R.__webglColorRenderbuffer.length;rt++)R.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[rt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const X=O.textures;for(let rt=0,ot=X.length;rt<ot;rt++){const st=n.get(X[rt]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(X[rt])}n.remove(O)}let g=0;function w(){g=0}function P(){const O=g;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),g+=1,O}function U(O){const R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function F(O,R){const X=n.get(O);if(O.isVideoTexture&&Ht(O),O.isRenderTargetTexture===!1&&O.version>0&&X.__version!==O.version){const rt=O.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(X,O,R);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+R)}function k(O,R){const X=n.get(O);if(O.version>0&&X.__version!==O.version){Ut(X,O,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+R)}function B(O,R){const X=n.get(O);if(O.version>0&&X.__version!==O.version){Ut(X,O,R);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+R)}function V(O,R){const X=n.get(O);if(O.version>0&&X.__version!==O.version){J(X,O,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+R)}const Y={[Ua]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},et={[Fe]:i.NEAREST,[Nf]:i.NEAREST_MIPMAP_NEAREST,[ns]:i.NEAREST_MIPMAP_LINEAR,[be]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},nt={[Bf]:i.NEVER,[Wf]:i.ALWAYS,[zf]:i.LESS,[eh]:i.LEQUAL,[kf]:i.EQUAL,[Gf]:i.GEQUAL,[Hf]:i.GREATER,[Vf]:i.NOTEQUAL};function pt(O,R){if(R.type===Ze&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===be||R.magFilter===Po||R.magFilter===ns||R.magFilter===ri||R.minFilter===be||R.minFilter===Po||R.minFilter===ns||R.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,Y[R.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,Y[R.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,Y[R.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,et[R.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,et[R.minFilter]),R.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,nt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Fe||R.minFilter!==ns&&R.minFilter!==ri||R.type===Ze&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Lt(O,R){let X=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",C));const rt=R.source;let ot=f.get(rt);ot===void 0&&(ot={},f.set(rt,ot));const st=U(R);if(st!==O.__cacheKey){ot[st]===void 0&&(ot[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ot[st].usedTimes++;const Ct=ot[O.__cacheKey];Ct!==void 0&&(ot[O.__cacheKey].usedTimes--,Ct.usedTimes===0&&x(R)),O.__cacheKey=st,O.__webglTexture=ot[st].texture}return X}function Ut(O,R,X){let rt=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(rt=i.TEXTURE_3D);const ot=Lt(O,R),st=R.source;e.bindTexture(rt,O.__webglTexture,i.TEXTURE0+X);const Ct=n.get(st);if(st.version!==Ct.__version||ot===!0){e.activeTexture(i.TEXTURE0+X);const ft=Jt.getPrimaries(Jt.workingColorSpace),_t=R.colorSpace===ni?null:Jt.getPrimaries(R.colorSpace),kt=R.colorSpace===ni||ft===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let ct=S(R.image,!1,r.maxTextureSize);ct=At(R,ct);const vt=s.convert(R.format,R.colorSpace),Xt=s.convert(R.type);let It=M(R.internalFormat,vt,Xt,R.colorSpace,R.isVideoTexture);pt(rt,R);let Mt;const Nt=R.mipmaps,zt=R.isVideoTexture!==!0,ne=Ct.__version===void 0||ot===!0,T=st.dataReady,$=E(R,ct);if(R.isDepthTexture)It=y(R.format===Mr,R.type),ne&&(zt?e.texStorage2D(i.TEXTURE_2D,1,It,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,It,ct.width,ct.height,0,vt,Xt,null));else if(R.isDataTexture)if(Nt.length>0){zt&&ne&&e.texStorage2D(i.TEXTURE_2D,$,It,Nt[0].width,Nt[0].height);for(let j=0,Z=Nt.length;j<Z;j++)Mt=Nt[j],zt?T&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Mt.width,Mt.height,vt,Xt,Mt.data):e.texImage2D(i.TEXTURE_2D,j,It,Mt.width,Mt.height,0,vt,Xt,Mt.data);R.generateMipmaps=!1}else zt?(ne&&e.texStorage2D(i.TEXTURE_2D,$,It,ct.width,ct.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,vt,Xt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,It,ct.width,ct.height,0,vt,Xt,ct.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){zt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$,It,Nt[0].width,Nt[0].height,ct.depth);for(let j=0,Z=Nt.length;j<Z;j++)if(Mt=Nt[j],R.format!==pn)if(vt!==null)if(zt){if(T)if(R.layerUpdates.size>0){const at=Hc(Mt.width,Mt.height,R.format,R.type);for(const wt of R.layerUpdates){const Ft=Mt.data.subarray(wt*at/Mt.data.BYTES_PER_ELEMENT,(wt+1)*at/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,wt,Mt.width,Mt.height,1,vt,Ft,0,0)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Mt.width,Mt.height,ct.depth,vt,Mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,It,Mt.width,Mt.height,ct.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Mt.width,Mt.height,ct.depth,vt,Xt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,It,Mt.width,Mt.height,ct.depth,0,vt,Xt,Mt.data)}else{zt&&ne&&e.texStorage2D(i.TEXTURE_2D,$,It,Nt[0].width,Nt[0].height);for(let j=0,Z=Nt.length;j<Z;j++)Mt=Nt[j],R.format!==pn?vt!==null?zt?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,It,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?T&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Mt.width,Mt.height,vt,Xt,Mt.data):e.texImage2D(i.TEXTURE_2D,j,It,Mt.width,Mt.height,0,vt,Xt,Mt.data)}else if(R.isDataArrayTexture)if(zt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$,It,ct.width,ct.height,ct.depth),T)if(R.layerUpdates.size>0){const j=Hc(ct.width,ct.height,R.format,R.type);for(const Z of R.layerUpdates){const at=ct.data.subarray(Z*j/ct.data.BYTES_PER_ELEMENT,(Z+1)*j/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ct.width,ct.height,1,vt,Xt,at)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,vt,Xt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,ct.width,ct.height,ct.depth,0,vt,Xt,ct.data);else if(R.isData3DTexture)zt?(ne&&e.texStorage3D(i.TEXTURE_3D,$,It,ct.width,ct.height,ct.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,vt,Xt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,It,ct.width,ct.height,ct.depth,0,vt,Xt,ct.data);else if(R.isFramebufferTexture){if(ne)if(zt)e.texStorage2D(i.TEXTURE_2D,$,It,ct.width,ct.height);else{let j=ct.width,Z=ct.height;for(let at=0;at<$;at++)e.texImage2D(i.TEXTURE_2D,at,It,j,Z,0,vt,Xt,null),j>>=1,Z>>=1}}else if(Nt.length>0){if(zt&&ne){const j=bt(Nt[0]);e.texStorage2D(i.TEXTURE_2D,$,It,j.width,j.height)}for(let j=0,Z=Nt.length;j<Z;j++)Mt=Nt[j],zt?T&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,vt,Xt,Mt):e.texImage2D(i.TEXTURE_2D,j,It,vt,Xt,Mt);R.generateMipmaps=!1}else if(zt){if(ne){const j=bt(ct);e.texStorage2D(i.TEXTURE_2D,$,It,j.width,j.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Xt,ct)}else e.texImage2D(i.TEXTURE_2D,0,It,vt,Xt,ct);p(R)&&h(rt),Ct.__version=st.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function J(O,R,X){if(R.image.length!==6)return;const rt=Lt(O,R),ot=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+X);const st=n.get(ot);if(ot.version!==st.__version||rt===!0){e.activeTexture(i.TEXTURE0+X);const Ct=Jt.getPrimaries(Jt.workingColorSpace),ft=R.colorSpace===ni?null:Jt.getPrimaries(R.colorSpace),_t=R.colorSpace===ni||Ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const kt=R.isCompressedTexture||R.image[0].isCompressedTexture,ct=R.image[0]&&R.image[0].isDataTexture,vt=[];for(let Z=0;Z<6;Z++)!kt&&!ct?vt[Z]=S(R.image[Z],!0,r.maxCubemapSize):vt[Z]=ct?R.image[Z].image:R.image[Z],vt[Z]=At(R,vt[Z]);const Xt=vt[0],It=s.convert(R.format,R.colorSpace),Mt=s.convert(R.type),Nt=M(R.internalFormat,It,Mt,R.colorSpace),zt=R.isVideoTexture!==!0,ne=st.__version===void 0||rt===!0,T=ot.dataReady;let $=E(R,Xt);pt(i.TEXTURE_CUBE_MAP,R);let j;if(kt){zt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$,Nt,Xt.width,Xt.height);for(let Z=0;Z<6;Z++){j=vt[Z].mipmaps;for(let at=0;at<j.length;at++){const wt=j[at];R.format!==pn?It!==null?zt?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,0,0,wt.width,wt.height,It,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,Nt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,0,0,wt.width,wt.height,It,Mt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,Nt,wt.width,wt.height,0,It,Mt,wt.data)}}}else{if(j=R.mipmaps,zt&&ne){j.length>0&&$++;const Z=bt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$,Nt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ct){zt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,vt[Z].width,vt[Z].height,It,Mt,vt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,vt[Z].width,vt[Z].height,0,It,Mt,vt[Z].data);for(let at=0;at<j.length;at++){const Ft=j[at].image[Z].image;zt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,0,0,Ft.width,Ft.height,It,Mt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,Nt,Ft.width,Ft.height,0,It,Mt,Ft.data)}}else{zt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,It,Mt,vt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,It,Mt,vt[Z]);for(let at=0;at<j.length;at++){const wt=j[at];zt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,0,0,It,Mt,wt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,Nt,It,Mt,wt.image[Z])}}}p(R)&&h(i.TEXTURE_CUBE_MAP),st.__version=ot.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function lt(O,R,X,rt,ot,st){const Ct=s.convert(X.format,X.colorSpace),ft=s.convert(X.type),_t=M(X.internalFormat,Ct,ft,X.colorSpace);if(!n.get(R).__hasExternalTextures){const ct=Math.max(1,R.width>>st),vt=Math.max(1,R.height>>st);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,st,_t,ct,vt,R.depth,0,Ct,ft,null):e.texImage2D(ot,st,_t,ct,vt,0,Ct,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),ht(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ot,n.get(X).__webglTexture,0,yt(R)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ot,n.get(X).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(O,R,X){if(i.bindRenderbuffer(i.RENDERBUFFER,O),R.depthBuffer){const rt=R.depthTexture,ot=rt&&rt.isDepthTexture?rt.type:null,st=y(R.stencilBuffer,ot),Ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=yt(R);ht(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,st,R.width,R.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,st,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,st,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,O)}else{const rt=R.textures;for(let ot=0;ot<rt.length;ot++){const st=rt[ot],Ct=s.convert(st.format,st.colorSpace),ft=s.convert(st.type),_t=M(st.internalFormat,Ct,ft,st.colorSpace),kt=yt(R);X&&ht(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,_t,R.width,R.height):ht(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,_t,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,_t,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(O,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),F(R.depthTexture,0);const rt=n.get(R.depthTexture).__webglTexture,ot=yt(R);if(R.depthTexture.format===gr)ht(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(R.depthTexture.format===Mr)ht(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Q(O){const R=n.get(O),X=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!R.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");mt(R.__webglFramebuffer,O)}else if(X){R.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[rt]),R.__webglDepthbuffer[rt]=i.createRenderbuffer(),xt(R.__webglDepthbuffer[rt],O,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),xt(R.__webglDepthbuffer,O,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function L(O,R,X){const rt=n.get(O);R!==void 0&&lt(rt.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Q(O)}function N(O){const R=O.texture,X=n.get(O),rt=n.get(R);O.addEventListener("dispose",A);const ot=O.textures,st=O.isWebGLCubeRenderTarget===!0,Ct=ot.length>1;if(Ct||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=R.version,o.memory.textures++),st){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let _t=0;_t<R.mipmaps.length;_t++)X.__webglFramebuffer[ft][_t]=i.createFramebuffer()}else X.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<R.mipmaps.length;ft++)X.__webglFramebuffer[ft]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ft=0,_t=ot.length;ft<_t;ft++){const kt=n.get(ot[ft]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&ht(O)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ft=0;ft<ot.length;ft++){const _t=ot[ft];X.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);const kt=s.convert(_t.format,_t.colorSpace),ct=s.convert(_t.type),vt=M(_t.internalFormat,kt,ct,_t.colorSpace,O.isXRRenderTarget===!0),Xt=yt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,vt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,X.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(X.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),pt(i.TEXTURE_CUBE_MAP,R);for(let ft=0;ft<6;ft++)if(R.mipmaps&&R.mipmaps.length>0)for(let _t=0;_t<R.mipmaps.length;_t++)lt(X.__webglFramebuffer[ft][_t],O,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else lt(X.__webglFramebuffer[ft],O,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(R)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,_t=ot.length;ft<_t;ft++){const kt=ot[ft],ct=n.get(kt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),pt(i.TEXTURE_2D,kt),lt(X.__webglFramebuffer,O,kt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),p(kt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ft=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,rt.__webglTexture),pt(ft,R),R.mipmaps&&R.mipmaps.length>0)for(let _t=0;_t<R.mipmaps.length;_t++)lt(X.__webglFramebuffer[_t],O,R,i.COLOR_ATTACHMENT0,ft,_t);else lt(X.__webglFramebuffer,O,R,i.COLOR_ATTACHMENT0,ft,0);p(R)&&h(ft),e.unbindTexture()}O.depthBuffer&&Q(O)}function H(O){const R=O.textures;for(let X=0,rt=R.length;X<rt;X++){const ot=R[X];if(p(ot)){const st=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ct=n.get(ot).__webglTexture;e.bindTexture(st,Ct),h(st),e.unbindTexture()}}}const D=[],tt=[];function it(O){if(O.samples>0){if(ht(O)===!1){const R=O.textures,X=O.width,rt=O.height;let ot=i.COLOR_BUFFER_BIT;const st=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(O),ft=R.length>1;if(ft)for(let _t=0;_t<R.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let _t=0;_t<R.length;_t++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[_t]);const kt=n.get(R[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,X,rt,0,0,X,rt,ot,i.NEAREST),l===!0&&(D.length=0,tt.length=0,D.push(i.COLOR_ATTACHMENT0+_t),O.depthBuffer&&O.resolveDepthBuffer===!1&&(D.push(st),tt.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<R.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[_t]);const kt=n.get(R[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){const R=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function yt(O){return Math.min(r.maxSamples,O.samples)}function ht(O){const R=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ht(O){const R=o.render.frame;u.get(O)!==R&&(u.set(O,R),O.update())}function At(O,R){const X=O.colorSpace,rt=O.format,ot=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||X!==Gn&&X!==ni&&(Jt.getTransfer(X)===te?(rt!==pn||ot!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),R}function bt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=w,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=L,this.setupRenderTarget=N,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=ht}function l0(i,t){function e(n,r=ni){let s;const o=Jt.getTransfer(r);if(n===kn)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return i.BYTE;if(n===Xu)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Ze)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===$u)return i.ALPHA;if(n===ju)return i.RGB;if(n===pn)return i.RGBA;if(n===qu)return i.LUMINANCE;if(n===Ku)return i.LUMINANCE_ALPHA;if(n===gr)return i.DEPTH_COMPONENT;if(n===Mr)return i.DEPTH_STENCIL;if(n===Zu)return i.RED;if(n===bl)return i.RED_INTEGER;if(n===Ju)return i.RG;if(n===Al)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===js||n===qs||n===Ks||n===Zs)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===za)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ha||n===Va)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ka||n===Ha)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Va)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===Ya||n===$a||n===ja||n===qa||n===Ka||n===Za||n===Ja||n===Qa||n===tl||n===el||n===nl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ga)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Js||n===il||n===rl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Js)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===sl||n===ol||n===al)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Js)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class c0 extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class As extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const p=e.getJointPose(S,n),h=this._getHandJoint(c,S);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const h0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Pe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ci({vertexShader:h0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new Ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends Di{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const S=new d0,p=e.getContextAttributes();let h=null,M=null;const y=[],E=[],C=new Rt;let A=null;const b=new qe;b.layers.enable(1),b.viewport=new Qt;const x=new qe;x.layers.enable(2),x.viewport=new Qt;const _=[b,x],g=new c0;g.layers.enable(1),g.layers.enable(2);let w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let lt=y[J];return lt===void 0&&(lt=new ea,y[J]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(J){let lt=y[J];return lt===void 0&&(lt=new ea,y[J]=lt),lt.getGripSpace()},this.getHand=function(J){let lt=y[J];return lt===void 0&&(lt=new ea,y[J]=lt),lt.getHandSpace()};function U(J){const lt=E.indexOf(J.inputSource);if(lt===-1)return;const xt=y[lt];xt!==void 0&&(xt.update(J.inputSource,J.frame,c||o),xt.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",k);for(let J=0;J<y.length;J++){const lt=E[J];lt!==null&&(E[J]=null,y[J].disconnect(lt))}w=null,P=null,S.reset(),t.setRenderTarget(h),m=null,f=null,d=null,r=null,M=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",F),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0){const lt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,lt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Li(m.framebufferWidth,m.framebufferHeight,{format:pn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let lt=null,xt=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=p.stencil?Mr:gr,xt=p.stencil?yr:Pi);const Q={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};d=new XRWebGLBinding(r,e),f=d.createProjectionLayer(Q),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Li(f.textureWidth,f.textureHeight,{format:pn,type:kn,depthTexture:new _h(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ut.setContext(r),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function k(J){for(let lt=0;lt<J.removed.length;lt++){const xt=J.removed[lt],mt=E.indexOf(xt);mt>=0&&(E[mt]=null,y[mt].disconnect(xt))}for(let lt=0;lt<J.added.length;lt++){const xt=J.added[lt];let mt=E.indexOf(xt);if(mt===-1){for(let L=0;L<y.length;L++)if(L>=E.length){E.push(xt),mt=L;break}else if(E[L]===null){E[L]=xt,mt=L;break}if(mt===-1)break}const Q=y[mt];Q&&Q.connect(xt)}}const B=new z,V=new z;function Y(J,lt,xt){B.setFromMatrixPosition(lt.matrixWorld),V.setFromMatrixPosition(xt.matrixWorld);const mt=B.distanceTo(V),Q=lt.projectionMatrix.elements,L=xt.projectionMatrix.elements,N=Q[14]/(Q[10]-1),H=Q[14]/(Q[10]+1),D=(Q[9]+1)/Q[5],tt=(Q[9]-1)/Q[5],it=(Q[8]-1)/Q[0],yt=(L[8]+1)/L[0],ht=N*it,Ht=N*yt,At=mt/(-it+yt),bt=At*-it;lt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(bt),J.translateZ(At),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const O=N+At,R=H+At,X=ht-bt,rt=Ht+(mt-bt),ot=D*H/R*O,st=tt*H/R*O;J.projectionMatrix.makePerspective(X,rt,ot,st,O,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function et(J,lt){lt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(lt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;S.texture!==null&&(J.near=S.depthNear,J.far=S.depthFar),g.near=x.near=b.near=J.near,g.far=x.far=b.far=J.far,(w!==g.near||P!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),w=g.near,P=g.far,b.near=w,b.far=P,x.near=w,x.far=P,b.updateProjectionMatrix(),x.updateProjectionMatrix(),J.updateProjectionMatrix());const lt=J.parent,xt=g.cameras;et(g,lt);for(let mt=0;mt<xt.length;mt++)et(xt[mt],lt);xt.length===2?Y(g,b,x):g.projectionMatrix.copy(b.projectionMatrix),nt(J,g,lt)};function nt(J,lt,xt){xt===null?J.matrix.copy(lt.matrixWorld):(J.matrix.copy(xt.matrixWorld),J.matrix.invert(),J.matrix.multiply(lt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Zr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(g)};let pt=null;function Lt(J,lt){if(u=lt.getViewerPose(c||o),v=lt,u!==null){const xt=u.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let mt=!1;xt.length!==g.cameras.length&&(g.cameras.length=0,mt=!0);for(let L=0;L<xt.length;L++){const N=xt[L];let H=null;if(m!==null)H=m.getViewport(N);else{const tt=d.getViewSubImage(f,N);H=tt.viewport,L===0&&(t.setRenderTargetTextures(M,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),t.setRenderTarget(M))}let D=_[L];D===void 0&&(D=new qe,D.layers.enable(L),D.viewport=new Qt,_[L]=D),D.matrix.fromArray(N.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(N.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(H.x,H.y,H.width,H.height),L===0&&(g.matrix.copy(D.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),mt===!0&&g.cameras.push(D)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const L=d.getDepthInformation(xt[0]);L&&L.isValid&&L.texture&&S.init(t,L,r.renderState)}}for(let xt=0;xt<y.length;xt++){const mt=E[xt],Q=y[xt];mt!==null&&Q!==void 0&&Q.update(mt,lt,c||o)}pt&&pt(J,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),v=null}const Ut=new mh;Ut.setAnimationLoop(Lt),this.setAnimationLoop=function(J){pt=J},this.dispose=function(){}}}const _i=new yn,m0=new $t;function g0(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,fh(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,M,y,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),S(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,M,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Re&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Re&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const M=t.get(h),y=M.envMap,E=M.envMapRotation;y&&(p.envMap.value=y,_i.copy(E),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),p.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(_i)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,M,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*M,p.scale.value=y*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,M){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Re&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function S(p,h){const M=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _0(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const E=y.program;n.uniformBlockBinding(M,E)}function c(M,y){let E=r[M.id];E===void 0&&(v(M),E=u(M),r[M.id]=E,M.addEventListener("dispose",p));const C=y.program;n.updateUBOMapping(M,C);const A=t.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function u(M){const y=d();M.__bindingPointIndex=y;const E=i.createBuffer(),C=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=r[M.id],E=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,b=E.length;A<b;A++){const x=Array.isArray(E[A])?E[A]:[E[A]];for(let _=0,g=x.length;_<g;_++){const w=x[_];if(m(w,A,_,C)===!0){const P=w.__offset,U=Array.isArray(w.value)?w.value:[w.value];let F=0;for(let k=0;k<U.length;k++){const B=U[k],V=S(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,P+F,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,F),F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,y,E,C){const A=M.value,b=y+"_"+E;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const x=C[b];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return C[b]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function v(M){const y=M.uniforms;let E=0;const C=16;for(let b=0,x=y.length;b<x;b++){const _=Array.isArray(y[b])?y[b]:[y[b]];for(let g=0,w=_.length;g<w;g++){const P=_[g],U=Array.isArray(P.value)?P.value:[P.value];for(let F=0,k=U.length;F<k;F++){const B=U[F],V=S(B),Y=E%C;Y!==0&&C-Y<V.boundary&&(E+=C-Y),P.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=V.storage}}}const A=E%C;return A>0&&(E+=C-A),M.__size=E,M.__cache={},this}function S(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class v0{constructor(t={}){const{canvas:e=ad(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let S=null,p=null;const h=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=li,this.toneMappingExposure=1;const y=this;let E=!1,C=0,A=0,b=null,x=-1,_=null;const g=new Qt,w=new Qt;let P=null;const U=new Wt(0);let F=0,k=e.width,B=e.height,V=1,Y=null,et=null;const nt=new Qt(0,0,k,B),pt=new Qt(0,0,k,B);let Lt=!1;const Ut=new Pl;let J=!1,lt=!1;const xt=new $t,mt=new z,Q=new Qt,L={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let N=!1;function H(){return b===null?V:1}let D=n;function tt(I,G){return e.getContext(I,G)}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${go}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",at,!1),D===null){const G="webgl2";if(D=tt(G,I),D===null)throw tt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let it,yt,ht,Ht,At,bt,O,R,X,rt,ot,st,Ct,ft,_t,kt,ct,vt,Xt,It,Mt,Nt,zt,ne;function T(){it=new wg(D),it.init(),Nt=new l0(D,it),yt=new yg(D,it,t,Nt),ht=new s0(D),Ht=new Rg(D),At=new Y_,bt=new a0(D,it,ht,At,yt,Nt,Ht),O=new Sg(y),R=new Ag(y),X=new Fd(D),zt=new vg(D,X),rt=new Tg(D,X,Ht,zt),ot=new Lg(D,rt,X,Ht),Xt=new Pg(D,yt,bt),kt=new Mg(At),st=new X_(y,O,R,it,yt,zt,kt),Ct=new g0(y,At),ft=new j_,_t=new t0(it),vt=new _g(y,O,R,ht,ot,f,l),ct=new r0(y,ot,yt),ne=new _0(D,Ht,yt,ht),It=new xg(D,it,Ht),Mt=new Cg(D,it,Ht),Ht.programs=st.programs,y.capabilities=yt,y.extensions=it,y.properties=At,y.renderLists=ft,y.shadowMap=ct,y.state=ht,y.info=Ht}T();const $=new p0(y,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const I=it.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=it.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(I){I!==void 0&&(V=I,this.setSize(k,B,!1))},this.getSize=function(I){return I.set(k,B)},this.setSize=function(I,G,q=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=I,B=G,e.width=Math.floor(I*V),e.height=Math.floor(G*V),q===!0&&(e.style.width=I+"px",e.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(k*V,B*V).floor()},this.setDrawingBufferSize=function(I,G,q){k=I,B=G,V=q,e.width=Math.floor(I*q),e.height=Math.floor(G*q),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(g)},this.getViewport=function(I){return I.copy(nt)},this.setViewport=function(I,G,q,K){I.isVector4?nt.set(I.x,I.y,I.z,I.w):nt.set(I,G,q,K),ht.viewport(g.copy(nt).multiplyScalar(V).round())},this.getScissor=function(I){return I.copy(pt)},this.setScissor=function(I,G,q,K){I.isVector4?pt.set(I.x,I.y,I.z,I.w):pt.set(I,G,q,K),ht.scissor(w.copy(pt).multiplyScalar(V).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(I){ht.setScissorTest(Lt=I)},this.setOpaqueSort=function(I){Y=I},this.setTransparentSort=function(I){et=I},this.getClearColor=function(I){return I.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(I=!0,G=!0,q=!0){let K=0;if(I){let W=!1;if(b!==null){const ut=b.texture.format;W=ut===wl||ut===Al||ut===bl}if(W){const ut=b.texture.type,gt=ut===kn||ut===Pi||ut===Kr||ut===yr||ut===Sl||ut===El,St=vt.getClearColor(),Et=vt.getClearAlpha(),Dt=St.r,Ot=St.g,Pt=St.b;gt?(m[0]=Dt,m[1]=Ot,m[2]=Pt,m[3]=Et,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Dt,v[1]=Ot,v[2]=Pt,v[3]=Et,D.clearBufferiv(D.COLOR,0,v))}else K|=D.COLOR_BUFFER_BIT}G&&(K|=D.DEPTH_BUFFER_BIT),q&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ft.dispose(),_t.dispose(),At.dispose(),O.dispose(),R.dispose(),ot.dispose(),zt.dispose(),ne.dispose(),st.dispose(),$.dispose(),$.removeEventListener("sessionstart",ue),$.removeEventListener("sessionend",Wn),ye.stop()};function j(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=Ht.autoReset,G=ct.enabled,q=ct.autoUpdate,K=ct.needsUpdate,W=ct.type;T(),Ht.autoReset=I,ct.enabled=G,ct.autoUpdate=q,ct.needsUpdate=K,ct.type=W}function at(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function wt(I){const G=I.target;G.removeEventListener("dispose",wt),Ft(G)}function Ft(I){le(I),At.remove(I)}function le(I){const G=At.get(I).programs;G!==void 0&&(G.forEach(function(q){st.releaseProgram(q)}),I.isShaderMaterial&&st.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,q,K,W,ut){G===null&&(G=L);const gt=W.isMesh&&W.matrixWorld.determinant()<0,St=qh(I,G,q,K,W);ht.setMaterial(K,gt);let Et=q.index,Dt=1;if(K.wireframe===!0){if(Et=rt.getWireframeAttribute(q),Et===void 0)return;Dt=2}const Ot=q.drawRange,Pt=q.attributes.position;let jt=Ot.start*Dt,se=(Ot.start+Ot.count)*Dt;ut!==null&&(jt=Math.max(jt,ut.start*Dt),se=Math.min(se,(ut.start+ut.count)*Dt)),Et!==null?(jt=Math.max(jt,0),se=Math.min(se,Et.count)):Pt!=null&&(jt=Math.max(jt,0),se=Math.min(se,Pt.count));const oe=se-jt;if(oe<0||oe===1/0)return;zt.setup(W,K,St,q,Et);let Be,qt=It;if(Et!==null&&(Be=X.get(Et),qt=Mt,qt.setIndex(Be)),W.isMesh)K.wireframe===!0?(ht.setLineWidth(K.wireframeLinewidth*H()),qt.setMode(D.LINES)):qt.setMode(D.TRIANGLES);else if(W.isLine){let Tt=K.linewidth;Tt===void 0&&(Tt=1),ht.setLineWidth(Tt*H()),W.isLineSegments?qt.setMode(D.LINES):W.isLineLoop?qt.setMode(D.LINE_LOOP):qt.setMode(D.LINE_STRIP)}else W.isPoints?qt.setMode(D.POINTS):W.isSprite&&qt.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)qt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))qt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Tt=W._multiDrawStarts,Me=W._multiDrawCounts,Kt=W._multiDrawCount,on=Et?X.get(Et).bytesPerElement:1,Oi=At.get(K).currentProgram.getUniforms();for(let ze=0;ze<Kt;ze++)Oi.setValue(D,"_gl_DrawID",ze),qt.render(Tt[ze]/on,Me[ze])}else if(W.isInstancedMesh)qt.renderInstances(jt,oe,W.count);else if(q.isInstancedBufferGeometry){const Tt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Me=Math.min(q.instanceCount,Tt);qt.renderInstances(jt,oe,Me)}else qt.render(jt,oe)};function pe(I,G,q){I.transparent===!0&&I.side===Ke&&I.forceSinglePass===!1?(I.side=Re,I.needsUpdate=!0,es(I,G,q),I.side=xn,I.needsUpdate=!0,es(I,G,q),I.side=Ke):es(I,G,q)}this.compile=function(I,G,q=null){q===null&&(q=I),p=_t.get(q),p.init(G),M.push(p),q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),I!==q&&I.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const K=new Set;return I.traverse(function(W){const ut=W.material;if(ut)if(Array.isArray(ut))for(let gt=0;gt<ut.length;gt++){const St=ut[gt];pe(St,q,W),K.add(St)}else pe(ut,q,W),K.add(ut)}),M.pop(),p=null,K},this.compileAsync=function(I,G,q=null){const K=this.compile(I,G,q);return new Promise(W=>{function ut(){if(K.forEach(function(gt){At.get(gt).currentProgram.isReady()&&K.delete(gt)}),K.size===0){W(I);return}setTimeout(ut,10)}it.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Yt=null;function me(I){Yt&&Yt(I)}function ue(){ye.stop()}function Wn(){ye.start()}const ye=new mh;ye.setAnimationLoop(me),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(I){Yt=I,$.setAnimationLoop(I),I===null?ye.stop():ye.start()},$.addEventListener("sessionstart",ue),$.addEventListener("sessionend",Wn),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(G),G=$.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,G,b),p=_t.get(I,M.length),p.init(G),M.push(p),xt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ut.setFromProjectionMatrix(xt),lt=this.localClippingEnabled,J=kt.init(this.clippingPlanes,lt),S=ft.get(I,h.length),S.init(),h.push(S),$.enabled===!0&&$.isPresenting===!0){const ut=y.xr.getDepthSensingMesh();ut!==null&&En(ut,G,-1/0,y.sortObjects)}En(I,G,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(Y,et),N=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,N&&vt.addToRenderList(S,I),this.info.render.frame++,J===!0&&kt.beginShadows();const q=p.state.shadowsArray;ct.render(q,I,G),J===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=S.opaque,W=S.transmissive;if(p.setupLights(),G.isArrayCamera){const ut=G.cameras;if(W.length>0)for(let gt=0,St=ut.length;gt<St;gt++){const Et=ut[gt];Cr(K,W,I,Et)}N&&vt.render(I);for(let gt=0,St=ut.length;gt<St;gt++){const Et=ut[gt];hi(S,I,Et,Et.viewport)}}else W.length>0&&Cr(K,W,I,G),N&&vt.render(I),hi(S,I,G);b!==null&&(bt.updateMultisampleRenderTarget(b),bt.updateRenderTargetMipmap(b)),I.isScene===!0&&I.onAfterRender(y,I,G),zt.resetDefaultState(),x=-1,_=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&kt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?S=h[h.length-1]:S=null};function En(I,G,q,K){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ut.intersectsSprite(I)){K&&Q.setFromMatrixPosition(I.matrixWorld).applyMatrix4(xt);const gt=ot.update(I),St=I.material;St.visible&&S.push(I,gt,St,q,Q.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ut.intersectsObject(I))){const gt=ot.update(I),St=I.material;if(K&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Q.copy(I.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Q.copy(gt.boundingSphere.center)),Q.applyMatrix4(I.matrixWorld).applyMatrix4(xt)),Array.isArray(St)){const Et=gt.groups;for(let Dt=0,Ot=Et.length;Dt<Ot;Dt++){const Pt=Et[Dt],jt=St[Pt.materialIndex];jt&&jt.visible&&S.push(I,gt,jt,q,Q.z,Pt)}}else St.visible&&S.push(I,gt,St,q,Q.z,null)}}const ut=I.children;for(let gt=0,St=ut.length;gt<St;gt++)En(ut[gt],G,q,K)}function hi(I,G,q,K){const W=I.opaque,ut=I.transmissive,gt=I.transparent;p.setupLightsView(q),J===!0&&kt.setGlobalState(y.clippingPlanes,q),K&&ht.viewport(g.copy(K)),W.length>0&&ts(W,G,q),ut.length>0&&ts(ut,G,q),gt.length>0&&ts(gt,G,q),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Cr(I,G,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Li(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?On:kn,minFilter:ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ut=p.state.transmissionRenderTarget[K.id],gt=K.viewport||g;ut.setSize(gt.z,gt.w);const St=y.getRenderTarget();y.setRenderTarget(ut),y.getClearColor(U),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),N?vt.render(q):y.clear();const Et=y.toneMapping;y.toneMapping=li;const Dt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),J===!0&&kt.setGlobalState(y.clippingPlanes,K),ts(I,q,K),bt.updateMultisampleRenderTarget(ut),bt.updateRenderTargetMipmap(ut),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Pt=0,jt=G.length;Pt<jt;Pt++){const se=G[Pt],oe=se.object,Be=se.geometry,qt=se.material,Tt=se.group;if(qt.side===Ke&&oe.layers.test(K.layers)){const Me=qt.side;qt.side=Re,qt.needsUpdate=!0,Hl(oe,q,K,Be,qt,Tt),qt.side=Me,qt.needsUpdate=!0,Ot=!0}}Ot===!0&&(bt.updateMultisampleRenderTarget(ut),bt.updateRenderTargetMipmap(ut))}y.setRenderTarget(St),y.setClearColor(U,F),Dt!==void 0&&(K.viewport=Dt),y.toneMapping=Et}function ts(I,G,q){const K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ut=I.length;W<ut;W++){const gt=I[W],St=gt.object,Et=gt.geometry,Dt=K===null?gt.material:K,Ot=gt.group;St.layers.test(q.layers)&&Hl(St,G,q,Et,Dt,Ot)}}function Hl(I,G,q,K,W,ut){I.onBeforeRender(y,G,q,K,W,ut),I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),W.transparent===!0&&W.side===Ke&&W.forceSinglePass===!1?(W.side=Re,W.needsUpdate=!0,y.renderBufferDirect(q,G,K,W,I,ut),W.side=xn,W.needsUpdate=!0,y.renderBufferDirect(q,G,K,W,I,ut),W.side=Ke):y.renderBufferDirect(q,G,K,W,I,ut),I.onAfterRender(y,G,q,K,W,ut)}function es(I,G,q){G.isScene!==!0&&(G=L);const K=At.get(I),W=p.state.lights,ut=p.state.shadowsArray,gt=W.state.version,St=st.getParameters(I,W.state,ut,G,q),Et=st.getProgramCacheKey(St);let Dt=K.programs;K.environment=I.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(I.isMeshStandardMaterial?R:O).get(I.envMap||K.environment),K.envMapRotation=K.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,Dt===void 0&&(I.addEventListener("dispose",wt),Dt=new Map,K.programs=Dt);let Ot=Dt.get(Et);if(Ot!==void 0){if(K.currentProgram===Ot&&K.lightsStateVersion===gt)return Gl(I,St),Ot}else St.uniforms=st.getUniforms(I),I.onBeforeCompile(St,y),Ot=st.acquireProgram(St,Et),Dt.set(Et,Ot),K.uniforms=St.uniforms;const Pt=K.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Pt.clippingPlanes=kt.uniform),Gl(I,St),K.needsLights=Zh(I),K.lightsStateVersion=gt,K.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.directionalShadowMap.value=W.state.directionalShadowMap,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotShadowMap.value=W.state.spotShadowMap,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMap.value=W.state.pointShadowMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Ot,K.uniformsList=null,Ot}function Vl(I){if(I.uniformsList===null){const G=I.currentProgram.getUniforms();I.uniformsList=Qs.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function Gl(I,G){const q=At.get(I);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function qh(I,G,q,K,W){G.isScene!==!0&&(G=L),bt.resetTextureUnits();const ut=G.fog,gt=K.isMeshStandardMaterial?G.environment:null,St=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Gn,Et=(K.isMeshStandardMaterial?R:O).get(K.envMap||gt),Dt=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ot=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Pt=!!q.morphAttributes.position,jt=!!q.morphAttributes.normal,se=!!q.morphAttributes.color;let oe=li;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(oe=y.toneMapping);const Be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,qt=Be!==void 0?Be.length:0,Tt=At.get(K),Me=p.state.lights;if(J===!0&&(lt===!0||I!==_)){const Ye=I===_&&K.id===x;kt.setState(K,I,Ye)}let Kt=!1;K.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Me.state.version||Tt.outputColorSpace!==St||W.isBatchedMesh&&Tt.batching===!1||!W.isBatchedMesh&&Tt.batching===!0||W.isBatchedMesh&&Tt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Tt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Tt.instancing===!1||!W.isInstancedMesh&&Tt.instancing===!0||W.isSkinnedMesh&&Tt.skinning===!1||!W.isSkinnedMesh&&Tt.skinning===!0||W.isInstancedMesh&&Tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Tt.instancingMorph===!1&&W.morphTexture!==null||Tt.envMap!==Et||K.fog===!0&&Tt.fog!==ut||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==kt.numPlanes||Tt.numIntersection!==kt.numIntersection)||Tt.vertexAlphas!==Dt||Tt.vertexTangents!==Ot||Tt.morphTargets!==Pt||Tt.morphNormals!==jt||Tt.morphColors!==se||Tt.toneMapping!==oe||Tt.morphTargetsCount!==qt)&&(Kt=!0):(Kt=!0,Tt.__version=K.version);let on=Tt.currentProgram;Kt===!0&&(on=es(K,G,W));let Oi=!1,ze=!1,To=!1;const he=on.getUniforms(),Xn=Tt.uniforms;if(ht.useProgram(on.program)&&(Oi=!0,ze=!0,To=!0),K.id!==x&&(x=K.id,ze=!0),Oi||_!==I){he.setValue(D,"projectionMatrix",I.projectionMatrix),he.setValue(D,"viewMatrix",I.matrixWorldInverse);const Ye=he.map.cameraPosition;Ye!==void 0&&Ye.setValue(D,mt.setFromMatrixPosition(I.matrixWorld)),yt.logarithmicDepthBuffer&&he.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&he.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),_!==I&&(_=I,ze=!0,To=!0)}if(W.isSkinnedMesh){he.setOptional(D,W,"bindMatrix"),he.setOptional(D,W,"bindMatrixInverse");const Ye=W.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),he.setValue(D,"boneTexture",Ye.boneTexture,bt))}W.isBatchedMesh&&(he.setOptional(D,W,"batchingTexture"),he.setValue(D,"batchingTexture",W._matricesTexture,bt),he.setOptional(D,W,"batchingIdTexture"),he.setValue(D,"batchingIdTexture",W._indirectTexture,bt),he.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&he.setValue(D,"batchingColorTexture",W._colorsTexture,bt));const Co=q.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0)&&Xt.update(W,q,on),(ze||Tt.receiveShadow!==W.receiveShadow)&&(Tt.receiveShadow=W.receiveShadow,he.setValue(D,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Xn.envMap.value=Et,Xn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(Xn.envMapIntensity.value=G.environmentIntensity),ze&&(he.setValue(D,"toneMappingExposure",y.toneMappingExposure),Tt.needsLights&&Kh(Xn,To),ut&&K.fog===!0&&Ct.refreshFogUniforms(Xn,ut),Ct.refreshMaterialUniforms(Xn,K,V,B,p.state.transmissionRenderTarget[I.id]),Qs.upload(D,Vl(Tt),Xn,bt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Qs.upload(D,Vl(Tt),Xn,bt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&he.setValue(D,"center",W.center),he.setValue(D,"modelViewMatrix",W.modelViewMatrix),he.setValue(D,"normalMatrix",W.normalMatrix),he.setValue(D,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ye=K.uniformsGroups;for(let Ro=0,Jh=Ye.length;Ro<Jh;Ro++){const Wl=Ye[Ro];ne.update(Wl,on),ne.bind(Wl,on)}}return on}function Kh(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function Zh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(I,G,q){At.get(I.texture).__webglTexture=G,At.get(I.depthTexture).__webglTexture=q;const K=At.get(I);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,G){const q=At.get(I);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,q=0){b=I,C=G,A=q;let K=!0,W=null,ut=!1,gt=!1;if(I){const Et=At.get(I);Et.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(D.FRAMEBUFFER,null),K=!1):Et.__webglFramebuffer===void 0?bt.setupRenderTarget(I):Et.__hasExternalTextures&&bt.rebindTextures(I,At.get(I.texture).__webglTexture,At.get(I.depthTexture).__webglTexture);const Dt=I.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(gt=!0);const Ot=At.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ot[G])?W=Ot[G][q]:W=Ot[G],ut=!0):I.samples>0&&bt.useMultisampledRTT(I)===!1?W=At.get(I).__webglMultisampledFramebuffer:Array.isArray(Ot)?W=Ot[q]:W=Ot,g.copy(I.viewport),w.copy(I.scissor),P=I.scissorTest}else g.copy(nt).multiplyScalar(V).floor(),w.copy(pt).multiplyScalar(V).floor(),P=Lt;if(ht.bindFramebuffer(D.FRAMEBUFFER,W)&&K&&ht.drawBuffers(I,W),ht.viewport(g),ht.scissor(w),ht.setScissorTest(P),ut){const Et=At.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,Et.__webglTexture,q)}else if(gt){const Et=At.get(I.texture),Dt=G||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,q||0,Dt)}x=-1},this.readRenderTargetPixels=function(I,G,q,K,W,ut,gt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=At.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){ht.bindFramebuffer(D.FRAMEBUFFER,St);try{const Et=I.texture,Dt=Et.format,Ot=Et.type;if(!yt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-K&&q>=0&&q<=I.height-W&&D.readPixels(G,q,K,W,Nt.convert(Dt),Nt.convert(Ot),ut)}finally{const Et=b!==null?At.get(b).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(I,G,q,K,W,ut,gt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=At.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){ht.bindFramebuffer(D.FRAMEBUFFER,St);try{const Et=I.texture,Dt=Et.format,Ot=Et.type;if(!yt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=I.width-K&&q>=0&&q<=I.height-W){const Pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.bufferData(D.PIXEL_PACK_BUFFER,ut.byteLength,D.STREAM_READ),D.readPixels(G,q,K,W,Nt.convert(Dt),Nt.convert(Ot),0),D.flush();const jt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await ld(D,jt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ut)}finally{D.deleteBuffer(Pt),D.deleteSync(jt)}return ut}}finally{const Et=b!==null?At.get(b).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(I,G=null,q=0){I.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,I=arguments[1]);const K=Math.pow(2,-q),W=Math.floor(I.image.width*K),ut=Math.floor(I.image.height*K),gt=G!==null?G.x:0,St=G!==null?G.y:0;bt.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,gt,St,W,ut),ht.unbindTexture()},this.copyTextureToTexture=function(I,G,q=null,K=null,W=0){I.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,I=arguments[1],G=arguments[2],W=arguments[3]||0,q=null);let ut,gt,St,Et,Dt,Ot;q!==null?(ut=q.max.x-q.min.x,gt=q.max.y-q.min.y,St=q.min.x,Et=q.min.y):(ut=I.image.width,gt=I.image.height,St=0,Et=0),K!==null?(Dt=K.x,Ot=K.y):(Dt=0,Ot=0);const Pt=Nt.convert(G.format),jt=Nt.convert(G.type);bt.setTexture2D(G,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);const se=D.getParameter(D.UNPACK_ROW_LENGTH),oe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Be=D.getParameter(D.UNPACK_SKIP_PIXELS),qt=D.getParameter(D.UNPACK_SKIP_ROWS),Tt=D.getParameter(D.UNPACK_SKIP_IMAGES),Me=I.isCompressedTexture?I.mipmaps[W]:I.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,St),D.pixelStorei(D.UNPACK_SKIP_ROWS,Et),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,W,Dt,Ot,ut,gt,Pt,jt,Me.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,W,Dt,Ot,Me.width,Me.height,Pt,Me.data):D.texSubImage2D(D.TEXTURE_2D,W,Dt,Ot,ut,gt,Pt,jt,Me),D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),D.pixelStorei(D.UNPACK_SKIP_ROWS,qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt),W===0&&G.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(I,G,q=null,K=null,W=0){I.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,K=arguments[1]||null,I=arguments[2],G=arguments[3],W=arguments[4]||0);let ut,gt,St,Et,Dt,Ot,Pt,jt,se;const oe=I.isCompressedTexture?I.mipmaps[W]:I.image;q!==null?(ut=q.max.x-q.min.x,gt=q.max.y-q.min.y,St=q.max.z-q.min.z,Et=q.min.x,Dt=q.min.y,Ot=q.min.z):(ut=oe.width,gt=oe.height,St=oe.depth,Et=0,Dt=0,Ot=0),K!==null?(Pt=K.x,jt=K.y,se=K.z):(Pt=0,jt=0,se=0);const Be=Nt.convert(G.format),qt=Nt.convert(G.type);let Tt;if(G.isData3DTexture)bt.setTexture3D(G,0),Tt=D.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)bt.setTexture2DArray(G,0),Tt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);const Me=D.getParameter(D.UNPACK_ROW_LENGTH),Kt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),on=D.getParameter(D.UNPACK_SKIP_PIXELS),Oi=D.getParameter(D.UNPACK_SKIP_ROWS),ze=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,oe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ot),I.isDataTexture||I.isData3DTexture?D.texSubImage3D(Tt,W,Pt,jt,se,ut,gt,St,Be,qt,oe.data):G.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,W,Pt,jt,se,ut,gt,St,Be,oe.data):D.texSubImage3D(Tt,W,Pt,jt,se,ut,gt,St,Be,qt,oe),D.pixelStorei(D.UNPACK_ROW_LENGTH,Me),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,on),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze),W===0&&G.generateMipmaps&&D.generateMipmap(Tt),ht.unbindTexture()},this.initRenderTarget=function(I){At.get(I).__webglFramebuffer===void 0&&bt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?bt.setTextureCube(I,0):I.isData3DTexture?bt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?bt.setTexture2DArray(I,0):bt.setTexture2D(I,0),ht.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,ht.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Cl?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===vo?"display-p3":"srgb"}}class x0 extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class y0 extends Pe{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Fe,u=Fe,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class M0 extends Il{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class S0 extends Ui{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}const Vc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class E0{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const b0=new E0;class Dl{constructor(t){this.manager=t!==void 0?t:b0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class A0 extends Error{constructor(t,e){super(t),this.response=e}}class w0 extends Dl{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Vc.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Rn[t]!==void 0){Rn[t].push({onLoad:e,onProgress:n,onError:r});return}Rn[t]=[],Rn[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Rn[t],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,v=m!==0;let S=0;const p=new ReadableStream({start(h){M();function M(){d.read().then(({done:y,value:E})=>{if(y)h.close();else{S+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:m});for(let A=0,b=u.length;A<b;A++){const x=u[A];x.onProgress&&x.onProgress(C)}h.enqueue(E),M()}},y=>{h.error(y)})}}});return new Response(p)}else throw new A0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Vc.add(t,c);const u=Rn[t];delete Rn[t];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Rn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Rn[t];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class T0 extends Dl{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new y0,a=new w0(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Fn,o.wrapT=c.wrapT!==void 0?c.wrapT:Fn,o.magFilter=c.magFilter!==void 0?c.magFilter:be,o.minFilter=c.minFilter!==void 0?c.minFilter:be,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ri),c.mipmapCount===1&&(o.minFilter=be),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,r),o}}class C0 extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const na=new $t,Gc=new z,Wc=new z;class R0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pl,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gc),Wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wc),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class P0 extends R0{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class L0 extends C0{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new P0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class I0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Xc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Xc(){return(typeof performance>"u"?Date:performance).now()}class Ve{constructor(t){this.value=t}clone(){return new Ve(this.value.clone===void 0?this.value:this.value.clone())}}class Yc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const $c=new z,ws=new z;class rn{constructor(t=new z,e=new z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){$c.subVectors(t,this.start),ws.subVectors(this.end,this.start);const n=ws.dot(ws);let s=ws.dot($c)/n;return e&&(s=ge(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);const jc={type:"change"},ia={type:"start"},qc={type:"end"},Ts=new yo,Kc=new fn,D0=Math.cos(70*nh.DEG2RAD);class U0 extends Di{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",_t),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_t),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(jc),n.update(),s=r.NONE},this.update=function(){const T=new z,$=new Ii().setFromUnitVectors(t.up,new z(0,1,0)),j=$.clone().invert(),Z=new z,at=new Ii,wt=new z,Ft=2*Math.PI;return function(pe=null){const Yt=n.object.position;T.copy(Yt).sub(n.target),T.applyQuaternion($),a.setFromVector3(T),n.autoRotate&&s===r.NONE&&P(g(pe)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=n.minAzimuthAngle,ue=n.maxAzimuthAngle;isFinite(me)&&isFinite(ue)&&(me<-Math.PI?me+=Ft:me>Math.PI&&(me-=Ft),ue<-Math.PI?ue+=Ft:ue>Math.PI&&(ue-=Ft),me<=ue?a.theta=Math.max(me,Math.min(ue,a.theta)):a.theta=a.theta>(me+ue)/2?Math.max(me,a.theta):Math.min(ue,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Wn=!1;if(n.zoomToCursor&&A||n.object.isOrthographicCamera)a.radius=nt(a.radius);else{const ye=a.radius;a.radius=nt(a.radius*c),Wn=ye!=a.radius}if(T.setFromSpherical(a),T.applyQuaternion(j),Yt.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&A){let ye=null;if(n.object.isPerspectiveCamera){const En=T.length();ye=nt(En*c);const hi=En-ye;n.object.position.addScaledVector(E,hi),n.object.updateMatrixWorld(),Wn=!!hi}else if(n.object.isOrthographicCamera){const En=new z(C.x,C.y,0);En.unproject(n.object);const hi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Wn=hi!==n.object.zoom;const Cr=new z(C.x,C.y,0);Cr.unproject(n.object),n.object.position.sub(Cr).add(En),n.object.updateMatrixWorld(),ye=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ye).add(n.object.position):(Ts.origin.copy(n.object.position),Ts.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ts.direction))<D0?t.lookAt(n.target):(Kc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ts.intersectPlane(Kc,n.target))))}else if(n.object.isOrthographicCamera){const ye=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),ye!==n.object.zoom&&(n.object.updateProjectionMatrix(),Wn=!0)}return c=1,A=!1,Wn||Z.distanceToSquared(n.object.position)>o||8*(1-at.dot(n.object.quaternion))>o||wt.distanceToSquared(n.target)>o?(n.dispatchEvent(jc),Z.copy(n.object.position),at.copy(n.object.quaternion),wt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",vt),n.domElement.removeEventListener("pointerdown",bt),n.domElement.removeEventListener("pointercancel",R),n.domElement.removeEventListener("wheel",ot),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",R),n.domElement.getRootNode().removeEventListener("keydown",Ct,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_t),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Yc,l=new Yc;let c=1;const u=new z,d=new Rt,f=new Rt,m=new Rt,v=new Rt,S=new Rt,p=new Rt,h=new Rt,M=new Rt,y=new Rt,E=new z,C=new Rt;let A=!1;const b=[],x={};let _=!1;function g(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function w(T){const $=Math.abs(T*.01);return Math.pow(.95,n.zoomSpeed*$)}function P(T){l.theta-=T}function U(T){l.phi-=T}const F=function(){const T=new z;return function(j,Z){T.setFromMatrixColumn(Z,0),T.multiplyScalar(-j),u.add(T)}}(),k=function(){const T=new z;return function(j,Z){n.screenSpacePanning===!0?T.setFromMatrixColumn(Z,1):(T.setFromMatrixColumn(Z,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(j),u.add(T)}}(),B=function(){const T=new z;return function(j,Z){const at=n.domElement;if(n.object.isPerspectiveCamera){const wt=n.object.position;T.copy(wt).sub(n.target);let Ft=T.length();Ft*=Math.tan(n.object.fov/2*Math.PI/180),F(2*j*Ft/at.clientHeight,n.object.matrix),k(2*Z*Ft/at.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(j*(n.object.right-n.object.left)/n.object.zoom/at.clientWidth,n.object.matrix),k(Z*(n.object.top-n.object.bottom)/n.object.zoom/at.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function et(T,$){if(!n.zoomToCursor)return;A=!0;const j=n.domElement.getBoundingClientRect(),Z=T-j.left,at=$-j.top,wt=j.width,Ft=j.height;C.x=Z/wt*2-1,C.y=-(at/Ft)*2+1,E.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function nt(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function pt(T){d.set(T.clientX,T.clientY)}function Lt(T){et(T.clientX,T.clientX),h.set(T.clientX,T.clientY)}function Ut(T){v.set(T.clientX,T.clientY)}function J(T){f.set(T.clientX,T.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const $=n.domElement;P(2*Math.PI*m.x/$.clientHeight),U(2*Math.PI*m.y/$.clientHeight),d.copy(f),n.update()}function lt(T){M.set(T.clientX,T.clientY),y.subVectors(M,h),y.y>0?V(w(y.y)):y.y<0&&Y(w(y.y)),h.copy(M),n.update()}function xt(T){S.set(T.clientX,T.clientY),p.subVectors(S,v).multiplyScalar(n.panSpeed),B(p.x,p.y),v.copy(S),n.update()}function mt(T){et(T.clientX,T.clientY),T.deltaY<0?Y(w(T.deltaY)):T.deltaY>0&&V(w(T.deltaY)),n.update()}function Q(T){let $=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),$=!0;break}$&&(T.preventDefault(),n.update())}function L(T){if(b.length===1)d.set(T.pageX,T.pageY);else{const $=zt(T),j=.5*(T.pageX+$.x),Z=.5*(T.pageY+$.y);d.set(j,Z)}}function N(T){if(b.length===1)v.set(T.pageX,T.pageY);else{const $=zt(T),j=.5*(T.pageX+$.x),Z=.5*(T.pageY+$.y);v.set(j,Z)}}function H(T){const $=zt(T),j=T.pageX-$.x,Z=T.pageY-$.y,at=Math.sqrt(j*j+Z*Z);h.set(0,at)}function D(T){n.enableZoom&&H(T),n.enablePan&&N(T)}function tt(T){n.enableZoom&&H(T),n.enableRotate&&L(T)}function it(T){if(b.length==1)f.set(T.pageX,T.pageY);else{const j=zt(T),Z=.5*(T.pageX+j.x),at=.5*(T.pageY+j.y);f.set(Z,at)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const $=n.domElement;P(2*Math.PI*m.x/$.clientHeight),U(2*Math.PI*m.y/$.clientHeight),d.copy(f)}function yt(T){if(b.length===1)S.set(T.pageX,T.pageY);else{const $=zt(T),j=.5*(T.pageX+$.x),Z=.5*(T.pageY+$.y);S.set(j,Z)}p.subVectors(S,v).multiplyScalar(n.panSpeed),B(p.x,p.y),v.copy(S)}function ht(T){const $=zt(T),j=T.pageX-$.x,Z=T.pageY-$.y,at=Math.sqrt(j*j+Z*Z);M.set(0,at),y.set(0,Math.pow(M.y/h.y,n.zoomSpeed)),V(y.y),h.copy(M);const wt=(T.pageX+$.x)*.5,Ft=(T.pageY+$.y)*.5;et(wt,Ft)}function Ht(T){n.enableZoom&&ht(T),n.enablePan&&yt(T)}function At(T){n.enableZoom&&ht(T),n.enableRotate&&it(T)}function bt(T){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",O),n.domElement.addEventListener("pointerup",R)),!Mt(T)&&(Xt(T),T.pointerType==="touch"?kt(T):X(T)))}function O(T){n.enabled!==!1&&(T.pointerType==="touch"?ct(T):rt(T))}function R(T){switch(It(T),b.length){case 0:n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",R),n.dispatchEvent(qc),s=r.NONE;break;case 1:const $=b[0],j=x[$];kt({pointerId:$,pageX:j.x,pageY:j.y});break}}function X(T){let $;switch(T.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Bi.DOLLY:if(n.enableZoom===!1)return;Lt(T),s=r.DOLLY;break;case Bi.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;Ut(T),s=r.PAN}else{if(n.enableRotate===!1)return;pt(T),s=r.ROTATE}break;case Bi.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;pt(T),s=r.ROTATE}else{if(n.enablePan===!1)return;Ut(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ia)}function rt(T){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;J(T);break;case r.DOLLY:if(n.enableZoom===!1)return;lt(T);break;case r.PAN:if(n.enablePan===!1)return;xt(T);break}}function ot(T){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(T.preventDefault(),n.dispatchEvent(ia),mt(st(T)),n.dispatchEvent(qc))}function st(T){const $=T.deltaMode,j={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch($){case 1:j.deltaY*=16;break;case 2:j.deltaY*=100;break}return T.ctrlKey&&!_&&(j.deltaY*=10),j}function Ct(T){T.key==="Control"&&(_=!0,n.domElement.getRootNode().addEventListener("keyup",ft,{passive:!0,capture:!0}))}function ft(T){T.key==="Control"&&(_=!1,n.domElement.getRootNode().removeEventListener("keyup",ft,{passive:!0,capture:!0}))}function _t(T){n.enabled===!1||n.enablePan===!1||Q(T)}function kt(T){switch(Nt(T),b.length){case 1:switch(n.touches.ONE){case zi.ROTATE:if(n.enableRotate===!1)return;L(T),s=r.TOUCH_ROTATE;break;case zi.PAN:if(n.enablePan===!1)return;N(T),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(T),s=r.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;tt(T),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ia)}function ct(T){switch(Nt(T),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;it(T),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;yt(T),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ht(T),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(T),n.update();break;default:s=r.NONE}}function vt(T){n.enabled!==!1&&T.preventDefault()}function Xt(T){b.push(T.pointerId)}function It(T){delete x[T.pointerId];for(let $=0;$<b.length;$++)if(b[$]==T.pointerId){b.splice($,1);return}}function Mt(T){for(let $=0;$<b.length;$++)if(b[$]==T.pointerId)return!0;return!1}function Nt(T){let $=x[T.pointerId];$===void 0&&($=new Rt,x[T.pointerId]=$),$.set(T.pageX,T.pageY)}function zt(T){const $=T.pointerId===b[0]?b[1]:b[0];return x[$]}n.domElement.addEventListener("contextmenu",vt),n.domElement.addEventListener("pointerdown",bt),n.domElement.addEventListener("pointercancel",R),n.domElement.addEventListener("wheel",ot,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ct,{passive:!0,capture:!0}),this.update()}}class N0 extends T0{constructor(t){super(t),this.type=On}parse(t){const o=function(x,_){switch(x){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(_||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(_||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(_||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(_||""))}},u=`
`,d=function(x,_,g){_=_||1024;let P=x.pos,U=-1,F=0,k="",B=String.fromCharCode.apply(null,new Uint16Array(x.subarray(P,P+128)));for(;0>(U=B.indexOf(u))&&F<_&&P<x.byteLength;)k+=B,F+=B.length,P+=128,B+=String.fromCharCode.apply(null,new Uint16Array(x.subarray(P,P+128)));return-1<U?(x.pos+=F+U+1,k+B.slice(0,U)):!1},f=function(x){const _=/^#\?(\S+)/,g=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let k,B;for((x.pos>=x.byteLength||!(k=d(x)))&&o(1,"no header found"),(B=k.match(_))||o(3,"bad initial token"),F.valid|=1,F.programtype=B[1],F.string+=k+`
`;k=d(x),k!==!1;){if(F.string+=k+`
`,k.charAt(0)==="#"){F.comments+=k+`
`;continue}if((B=k.match(g))&&(F.gamma=parseFloat(B[1])),(B=k.match(w))&&(F.exposure=parseFloat(B[1])),(B=k.match(P))&&(F.valid|=2,F.format=B[1]),(B=k.match(U))&&(F.valid|=4,F.height=parseInt(B[1],10),F.width=parseInt(B[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},m=function(x,_,g){const w=_;if(w<8||w>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);w!==(x[2]<<8|x[3])&&o(3,"wrong scanline width");const P=new Uint8Array(4*_*g);P.length||o(4,"unable to allocate buffer space");let U=0,F=0;const k=4*w,B=new Uint8Array(4),V=new Uint8Array(k);let Y=g;for(;Y>0&&F<x.byteLength;){F+4>x.byteLength&&o(1),B[0]=x[F++],B[1]=x[F++],B[2]=x[F++],B[3]=x[F++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=w)&&o(3,"bad rgbe scanline format");let et=0,nt;for(;et<k&&F<x.byteLength;){nt=x[F++];const Lt=nt>128;if(Lt&&(nt-=128),(nt===0||et+nt>k)&&o(3,"bad scanline data"),Lt){const Ut=x[F++];for(let J=0;J<nt;J++)V[et++]=Ut}else V.set(x.subarray(F,F+nt),et),et+=nt,F+=nt}const pt=w;for(let Lt=0;Lt<pt;Lt++){let Ut=0;P[U]=V[Lt+Ut],Ut+=w,P[U+1]=V[Lt+Ut],Ut+=w,P[U+2]=V[Lt+Ut],Ut+=w,P[U+3]=V[Lt+Ut],U+=4}Y--}return P},v=function(x,_,g,w){const P=x[_+3],U=Math.pow(2,P-128)/255;g[w+0]=x[_+0]*U,g[w+1]=x[_+1]*U,g[w+2]=x[_+2]*U,g[w+3]=1},S=function(x,_,g,w){const P=x[_+3],U=Math.pow(2,P-128)/255;g[w+0]=fs.toHalfFloat(Math.min(x[_+0]*U,65504)),g[w+1]=fs.toHalfFloat(Math.min(x[_+1]*U,65504)),g[w+2]=fs.toHalfFloat(Math.min(x[_+2]*U,65504)),g[w+3]=fs.toHalfFloat(1)},p=new Uint8Array(t);p.pos=0;const h=f(p),M=h.width,y=h.height,E=m(p.subarray(p.pos),M,y);let C,A,b;switch(this.type){case Ze:b=E.length/4;const x=new Float32Array(b*4);for(let g=0;g<b;g++)v(E,g*4,x,g*4);C=x,A=Ze;break;case On:b=E.length/4;const _=new Uint16Array(b*4);for(let g=0;g<b;g++)S(E,g*4,_,g*4);C=_,A=On;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:y,data:C,header:h.string,gamma:h.gamma,exposure:h.exposure,type:A}}setDataType(t){return this.type=t,this}load(t,e,n,r){function s(o,a){switch(o.type){case Ze:case On:o.colorSpace=Gn,o.minFilter=be,o.magFilter=be,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,a)}return super.load(t,s,n,r)}}const Eh=0,F0=1,O0=2,Zc=2,ra=1.25,Jc=1,$r=6*4+4+4,So=65535,B0=Math.pow(2,-24),sa=Symbol("SKIP_GENERATION");function z0(i){return i.index?i.index.count:i.attributes.position.count}function Tr(i){return z0(i)/3}function k0(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function H0(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=k0(e,n);i.setIndex(new Oe(r,1));for(let s=0;s<e;s++)r[s]=s}}function bh(i,t){const e=Tr(i),n=t||i.drawRange,r=n.start/3,s=(n.start+n.count)/3,o=Math.max(0,r),a=Math.min(e,s)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function Ah(i,t){if(!i.groups||!i.groups.length)return bh(i,t);const e=[],n=new Set,r=t||i.drawRange,s=r.start/3,o=(r.start+r.count)/3;for(const l of i.groups){const c=l.start/3,u=(l.start+l.count)/3;n.add(Math.max(s,c)),n.add(Math.min(o,u))}const a=Array.from(n.values()).sort((l,c)=>l-c);for(let l=0;l<a.length-1;l++){const c=a[l],u=a[l+1];e.push({offset:Math.floor(c),count:Math.floor(u-c)})}return e}function V0(i,t){const e=Tr(i),n=Ah(i,t).sort((o,a)=>o.offset-a.offset),r=n[n.length-1];r.count=Math.min(e-r.offset,r.count);let s=0;return n.forEach(({count:o})=>s+=o),e!==s}function oa(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,d=1/0,f=1/0,m=1/0,v=-1/0,S=-1/0,p=-1/0;for(let h=t*6,M=(t+e)*6;h<M;h+=6){const y=i[h+0],E=i[h+1],C=y-E,A=y+E;C<s&&(s=C),A>l&&(l=A),y<d&&(d=y),y>v&&(v=y);const b=i[h+2],x=i[h+3],_=b-x,g=b+x;_<o&&(o=_),g>c&&(c=g),b<f&&(f=b),b>S&&(S=b);const w=i[h+4],P=i[h+5],U=w-P,F=w+P;U<a&&(a=U),F>u&&(u=F),w<m&&(m=w),w>p&&(p=w)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,r[0]=d,r[1]=f,r[2]=m,r[3]=v,r[4]=S,r[5]=p}function G0(i,t=null,e=null,n=null){const r=i.attributes.position,s=i.index?i.index.array:null,o=Tr(i),a=r.normalized;let l;t===null?(l=new Float32Array(o*6),e=0,n=o):(l=t,e=e||0,n=n||o);const c=r.array,u=r.offset||0;let d=3;r.isInterleavedBufferAttribute&&(d=r.data.stride);const f=["getX","getY","getZ"];for(let m=e;m<e+n;m++){const v=m*3,S=m*6;let p=v+0,h=v+1,M=v+2;s&&(p=s[p],h=s[h],M=s[M]),a||(p=p*d+u,h=h*d+u,M=M*d+u);for(let y=0;y<3;y++){let E,C,A;a?(E=r[f[y]](p),C=r[f[y]](h),A=r[f[y]](M)):(E=c[p+y],C=c[h+y],A=c[M+y]);let b=E;C<b&&(b=C),A<b&&(b=A);let x=E;C>x&&(x=C),A>x&&(x=A);const _=(x-b)/2,g=y*2;l[S+g+0]=b+_,l[S+g+1]=_+(Math.abs(b)+_)*B0}}return l}function ae(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Qc(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function tu(i,t){t.set(i)}function eu(i,t,e){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function Cs(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Dr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const Un=32,W0=(i,t)=>i.candidate-t.candidate,Jn=new Array(Un).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Rs=new Float32Array(6);function X0(i,t,e,n,r,s){let o=-1,a=0;if(s===Eh)o=Qc(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===F0)o=Qc(i),o!==-1&&(a=Y0(e,n,r,o));else if(s===O0){const l=Dr(i);let c=ra*r;const u=n*6,d=(n+r)*6;for(let f=0;f<3;f++){const m=t[f],p=(t[f+3]-m)/Un;if(r<Un/4){const h=[...Jn];h.length=r;let M=0;for(let E=u;E<d;E+=6,M++){const C=h[M];C.candidate=e[E+2*f],C.count=0;const{bounds:A,leftCacheBounds:b,rightCacheBounds:x}=C;for(let _=0;_<3;_++)x[_]=1/0,x[_+3]=-1/0,b[_]=1/0,b[_+3]=-1/0,A[_]=1/0,A[_+3]=-1/0;Cs(E,e,A)}h.sort(W0);let y=r;for(let E=0;E<y;E++){const C=h[E];for(;E+1<y&&h[E+1].candidate===C.candidate;)h.splice(E+1,1),y--}for(let E=u;E<d;E+=6){const C=e[E+2*f];for(let A=0;A<y;A++){const b=h[A];C>=b.candidate?Cs(E,e,b.rightCacheBounds):(Cs(E,e,b.leftCacheBounds),b.count++)}}for(let E=0;E<y;E++){const C=h[E],A=C.count,b=r-C.count,x=C.leftCacheBounds,_=C.rightCacheBounds;let g=0;A!==0&&(g=Dr(x)/l);let w=0;b!==0&&(w=Dr(_)/l);const P=Jc+ra*(g*A+w*b);P<c&&(o=f,c=P,a=C.candidate)}}else{for(let y=0;y<Un;y++){const E=Jn[y];E.count=0,E.candidate=m+p+y*p;const C=E.bounds;for(let A=0;A<3;A++)C[A]=1/0,C[A+3]=-1/0}for(let y=u;y<d;y+=6){let A=~~((e[y+2*f]-m)/p);A>=Un&&(A=Un-1);const b=Jn[A];b.count++,Cs(y,e,b.bounds)}const h=Jn[Un-1];tu(h.bounds,h.rightCacheBounds);for(let y=Un-2;y>=0;y--){const E=Jn[y],C=Jn[y+1];eu(E.bounds,C.rightCacheBounds,E.rightCacheBounds)}let M=0;for(let y=0;y<Un-1;y++){const E=Jn[y],C=E.count,A=E.bounds,x=Jn[y+1].rightCacheBounds;C!==0&&(M===0?tu(A,Rs):eu(A,Rs,Rs)),M+=C;let _=0,g=0;M!==0&&(_=Dr(Rs)/l);const w=r-M;w!==0&&(g=Dr(x)/l);const P=Jc+ra*(_*M+g*w);P<c&&(o=f,c=P,a=E.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Y0(i,t,e,n){let r=0;for(let s=t,o=t+e;s<o;s++)r+=i[s*6+n*2];return r/e}class aa{constructor(){this.boundingData=new Float32Array(6)}}function $0(i,t,e,n,r,s){let o=n,a=n+r-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let d=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=d}for(let u=0;u<6;u++){let d=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=d}o++,a--}else return o}}function j0(i,t,e,n,r,s){let o=n,a=n+r-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){let u=i[o];i[o]=i[a],i[a]=u;for(let d=0;d<6;d++){let f=e[o*6+d];e[o*6+d]=e[a*6+d],e[a*6+d]=f}o++,a--}else return o}}function Ne(i,t){return t[i+15]===65535}function We(i,t){return t[i+6]}function Qe(i,t){return t[i+14]}function tn(i){return i+8}function en(i,t){return t[i+6]}function wh(i,t){return t[i+7]}let Th,Wr,to,Ch;const q0=Math.pow(2,32);function cl(i){return"count"in i?1:1+cl(i.left)+cl(i.right)}function K0(i,t,e){return Th=new Float32Array(e),Wr=new Uint32Array(e),to=new Uint16Array(e),Ch=new Uint8Array(e),ul(i,t)}function ul(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)Th[e+o]=s[o];if(r)if(t.buffer){const o=t.buffer;Ch.set(new Uint8Array(o),i);for(let a=i,l=i+o.byteLength;a<l;a+=$r){const c=a/2;Ne(c,to)||(Wr[a/4+6]+=e)}return i+o.byteLength}else{const o=t.offset,a=t.count;return Wr[e+6]=o,to[n+14]=a,to[n+15]=So,i+$r}else{const o=t.left,a=t.right,l=t.splitAxis;let c;if(c=ul(i+$r,o),c/4>q0)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Wr[e+6]=c/4,c=ul(c,a),Wr[e+7]=l,c}}function Z0(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,r=n?4:2,s=t?new SharedArrayBuffer(e*r):new ArrayBuffer(e*r),o=n?new Uint32Array(s):new Uint16Array(s);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function J0(i,t,e,n,r){const{maxDepth:s,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:u}=r,d=i._indirectBuffer,f=i.geometry,m=f.index?f.index.array:null,v=u?j0:$0,S=Tr(f),p=new Float32Array(6);let h=!1;const M=new aa;return oa(t,e,n,M.boundingData,p),E(M,e,n,p),M;function y(C){c&&c(C/S)}function E(C,A,b,x=null,_=0){if(!h&&_>=s&&(h=!0,o&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),b<=a||_>=s)return y(A+b),C.offset=A,C.count=b,C;const g=X0(C.boundingData,x,t,A,b,l);if(g.axis===-1)return y(A+b),C.offset=A,C.count=b,C;const w=v(d,m,t,A,b,g);if(w===A||w===A+b)y(A+b),C.offset=A,C.count=b;else{C.splitAxis=g.axis;const P=new aa,U=A,F=w-A;C.left=P,oa(t,U,F,P.boundingData,p),E(P,U,F,p,_+1);const k=new aa,B=w,V=b-F;C.right=k,oa(t,B,V,k.boundingData,p),E(k,B,V,p,_+1)}return C}}function Q0(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=Z0(e,t.useSharedArrayBuffer),V0(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||H0(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=G0(e),s=t.indirect?bh(e,t.range):Ah(e,t.range);i._roots=s.map(o=>{const a=J0(i,r,o.offset,o.count,t),l=cl(a),c=new n($r*l);return K0(0,a,c),c})}class Hn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const l=t[s][e];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],l=t.dot(a);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}Hn.prototype.setFromBox=function(){const i=new z;return function(e,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){i.x=r.x*l+s.x*(1-l),i.y=r.y*c+s.y*(1-c),i.z=r.z*u+s.z*(1-u);const d=e.dot(i);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}}();const tv=function(){const i=new z,t=new z,e=new z;return function(r,s,o){const a=r.start,l=i,c=s.start,u=t;e.subVectors(a,c),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const d=e.dot(u),f=u.dot(l),m=u.dot(u),v=e.dot(l),p=l.dot(l)*m-f*f;let h,M;p!==0?h=(d*f-v*m)/p:h=0,M=(d+h*f)/m,o.x=h,o.y=M}}(),Ul=function(){const i=new Rt,t=new z,e=new z;return function(r,s,o,a){tv(r,s,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){r.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=r.start:u=r.end;let d;c<0?d=s.start:d=s.end;const f=t,m=e;if(r.closestPointToPoint(d,!0,t),s.closestPointToPoint(u,!0,e),f.distanceToSquared(d)<=m.distanceToSquared(u)){o.copy(f),a.copy(d);return}else{o.copy(u),a.copy(m);return}}}}(),ev=function(){const i=new z,t=new z,e=new fn,n=new rn;return function(s,o){const{radius:a,center:l}=s,{a:c,b:u,c:d}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=d,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=u,n.end=d,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const S=o.getPlane(e);if(Math.abs(S.distanceToPoint(l))<=a){const h=S.projectPoint(l,t);if(o.containsPoint(h))return!0}return!1}}(),nv=1e-15;function la(i){return Math.abs(i)<nv}class sn extends re{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new z),this.satBounds=new Array(4).fill().map(()=>new Hn),this.points=[this.a,this.b,this.c],this.sphere=new xo,this.plane=new fn,this.needsUpdate=!0}intersectsSphere(t){return ev(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);const c=s[1],u=o[1];c.subVectors(t,e),u.setFromPoints(c,r);const d=s[2],f=o[2];d.subVectors(e,n),f.setFromPoints(d,r);const m=s[3],v=o[3];m.subVectors(n,t),v.setFromPoints(m,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}sn.prototype.closestPointToSegment=function(){const i=new z,t=new z,e=new rn;return function(r,s=null,o=null){const{start:a,end:l}=r,c=this.points;let u,d=1/0;for(let f=0;f<3;f++){const m=(f+1)%3;e.start.copy(c[f]),e.end.copy(c[m]),Ul(e,r,i,t),u=i.distanceToSquared(t),u<d&&(d=u,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<d&&(d=u,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),u=l.distanceToSquared(i),u<d&&(d=u,s&&s.copy(i),o&&o.copy(l)),Math.sqrt(d)}}();sn.prototype.intersectsTriangle=function(){const i=new sn,t=new Array(3),e=new Array(3),n=new Hn,r=new Hn,s=new z,o=new z,a=new z,l=new z,c=new z,u=new rn,d=new rn,f=new rn,m=new z;function v(S,p,h){const M=S.points;let y=0,E=-1;for(let C=0;C<3;C++){const{start:A,end:b}=u;A.copy(M[C]),b.copy(M[(C+1)%3]),u.delta(o);const x=la(p.distanceToPoint(A));if(la(p.normal.dot(o))&&x){h.copy(u),y=2;break}const _=p.intersectLine(u,m);if(!_&&x&&m.copy(A),(_||x)&&!la(m.distanceTo(b))){if(y<=1)(y===1?h.start:h.end).copy(m),x&&(E=y);else if(y>=2){(E===1?h.start:h.end).copy(m),y=2;break}if(y++,y===2&&E===-1)break}}return y}return function(p,h=null,M=!1){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(i.copy(p),i.update(),p=i);const y=this.plane,E=p.plane;if(Math.abs(y.normal.dot(E.normal))>1-1e-10){const C=this.satBounds,A=this.satAxes;e[0]=p.a,e[1]=p.b,e[2]=p.c;for(let _=0;_<4;_++){const g=C[_],w=A[_];if(n.setFromPoints(w,e),g.isSeparated(n))return!1}const b=p.satBounds,x=p.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let _=0;_<4;_++){const g=b[_],w=x[_];if(n.setFromPoints(w,t),g.isSeparated(n))return!1}for(let _=0;_<4;_++){const g=A[_];for(let w=0;w<4;w++){const P=x[w];if(s.crossVectors(g,P),n.setFromPoints(s,t),r.setFromPoints(s,e),n.isSeparated(r))return!1}}return h&&(M||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),h.start.set(0,0,0),h.end.set(0,0,0)),!0}else{const C=v(this,E,d);if(C===1&&p.containsPoint(d.end))return h&&(h.start.copy(d.end),h.end.copy(d.end)),!0;if(C!==2)return!1;const A=v(p,y,f);if(A===1&&this.containsPoint(f.end))return h&&(h.start.copy(f.end),h.end.copy(f.end)),!0;if(A!==2)return!1;if(d.delta(a),f.delta(l),a.dot(l)<0){let U=f.start;f.start=f.end,f.end=U}const b=d.start.dot(a),x=d.end.dot(a),_=f.start.dot(a),g=f.end.dot(a),w=x<_,P=b<g;return b!==g&&_!==x&&w===P?!1:(h&&(c.subVectors(d.start,f.start),c.dot(a)>0?h.start.copy(d.start):h.start.copy(f.start),c.subVectors(d.end,f.end),c.dot(a)<0?h.end.copy(d.end):h.end.copy(f.end)),!0)}}}();sn.prototype.distanceToPoint=function(){const i=new z;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();sn.prototype.distanceToTriangle=function(){const i=new z,t=new z,e=["a","b","c"],n=new rn,r=new rn;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let d=0;d<3;d++){let f;const m=e[d],v=o[m];this.closestPointToPoint(v,i),f=v.distanceToSquared(i),f<u&&(u=f,a&&a.copy(i),l&&l.copy(v));const S=this[m];o.closestPointToPoint(S,i),f=S.distanceToSquared(i),f<u&&(u=f,a&&a.copy(S),l&&l.copy(i))}for(let d=0;d<3;d++){const f=e[d],m=e[(d+1)%3];n.set(this[f],this[m]);for(let v=0;v<3;v++){const S=e[v],p=e[(v+1)%3];r.set(o[S],o[p]),Ul(n,r,i,t);const h=i.distanceToSquared(t);h<u&&(u=h,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(u)}}();class Ie{constructor(t,e,n){this.isOrientedBox=!0,this.min=new z,this.max=new z,this.matrix=new $t,this.invMatrix=new $t,this.points=new Array(8).fill().map(()=>new z),this.satAxes=new Array(3).fill().map(()=>new z),this.satBounds=new Array(3).fill().map(()=>new Hn),this.alignedSatBounds=new Array(3).fill().map(()=>new Hn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ie.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){const f=1*c|2*u|4*d,m=r[f];m.x=c?n.x:e.x,m.y=u?n.y:e.y,m.z=d?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let c=0;c<3;c++){const u=o[c],d=s[c],f=1<<c,m=r[f];u.subVectors(a,m),d.setFromPoints(u,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ie.prototype.intersectsBox=function(){const i=new Hn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=o[l],u=s[l];if(i.setFromBox(c,e),u.isSeparated(i))return!1}return!0}}();Ie.prototype.intersectsTriangle=function(){const i=new sn,t=new Array(3),e=new Hn,n=new Hn,r=new z;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){const m=a[f],v=l[f];if(e.setFromPoints(v,t),m.isSeparated(e))return!1}const c=o.satBounds,u=o.satAxes,d=this.points;for(let f=0;f<3;f++){const m=c[f],v=u[f];if(e.setFromPoints(v,d),m.isSeparated(e))return!1}for(let f=0;f<3;f++){const m=l[f];for(let v=0;v<4;v++){const S=u[v];if(r.crossVectors(m,S),e.setFromPoints(r,t),n.setFromPoints(r,d),e.isSeparated(n))return!1}}return!0}}();Ie.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Ie.prototype.distanceToPoint=function(){const i=new z;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Ie.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new rn),e=new Array(12).fill().map(()=>new rn),n=new z,r=new z;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),l&&l.copy(n),c&&c.copy(r)),0;const u=a*a,d=o.min,f=o.max,m=this.points;let v=1/0;for(let p=0;p<8;p++){const h=m[p];r.copy(h).clamp(d,f);const M=h.distanceToSquared(r);if(M<v&&(v=M,l&&l.copy(h),c&&c.copy(r),M<u))return Math.sqrt(M)}let S=0;for(let p=0;p<3;p++)for(let h=0;h<=1;h++)for(let M=0;M<=1;M++){const y=(p+1)%3,E=(p+2)%3,C=h<<y|M<<E,A=1<<p|h<<y|M<<E,b=m[C],x=m[A];t[S].set(b,x);const g=i[p],w=i[y],P=i[E],U=e[S],F=U.start,k=U.end;F[g]=d[g],F[w]=h?d[w]:f[w],F[P]=M?d[P]:f[w],k[g]=f[g],k[w]=h?d[w]:f[w],k[P]=M?d[P]:f[w],S++}for(let p=0;p<=1;p++)for(let h=0;h<=1;h++)for(let M=0;M<=1;M++){r.x=p?f.x:d.x,r.y=h?f.y:d.y,r.z=M?f.z:d.z,this.closestPointToPoint(r,n);const y=r.distanceToSquared(n);if(y<v&&(v=y,l&&l.copy(n),c&&c.copy(r),y<u))return Math.sqrt(y)}for(let p=0;p<12;p++){const h=t[p];for(let M=0;M<12;M++){const y=e[M];Ul(h,y,n,r);const E=n.distanceToSquared(r);if(E<v&&(v=E,l&&l.copy(n),c&&c.copy(r),E<u))return Math.sqrt(E)}}return Math.sqrt(v)}}();class Nl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class iv extends Nl{constructor(){super(()=>new sn)}}const nn=new iv;class rv{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ee=new rv;let si,pr;const ir=[],Ps=new Nl(()=>new Le);function sv(i,t,e,n,r,s){si=Ps.getPrimitive(),pr=Ps.getPrimitive(),ir.push(si,pr),ee.setBuffer(i._roots[t]);const o=hl(0,i.geometry,e,n,r,s);ee.clearBuffer(),Ps.releasePrimitive(si),Ps.releasePrimitive(pr),ir.pop(),ir.pop();const a=ir.length;return a>0&&(pr=ir[a-1],si=ir[a-2]),o}function hl(i,t,e,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=ee;let u=i*2;if(Ne(u,l)){const v=We(i,c),S=Qe(u,l);return ae(i,a,si),n(v,S,!1,o,s+i,si)}else{let P=function(F){const{uint16Array:k,uint32Array:B}=ee;let V=F*2;for(;!Ne(V,k);)F=tn(F),V=F*2;return We(F,B)},U=function(F){const{uint16Array:k,uint32Array:B}=ee;let V=F*2;for(;!Ne(V,k);)F=en(F,B),V=F*2;return We(F,B)+Qe(V,k)};var f=P,m=U;const v=tn(i),S=en(i,c);let p=v,h=S,M,y,E,C;if(r&&(E=si,C=pr,ae(p,a,E),ae(h,a,C),M=r(E),y=r(C),y<M)){p=S,h=v;const F=M;M=y,y=F,E=C}E||(E=si,ae(p,a,E));const A=Ne(p*2,l),b=e(E,A,M,o+1,s+p);let x;if(b===Zc){const F=P(p),B=U(p)-F;x=n(F,B,!0,o+1,s+p,E)}else x=b&&hl(p,t,e,n,r,s,o+1);if(x)return!0;C=pr,ae(h,a,C);const _=Ne(h*2,l),g=e(C,_,y,o+1,s+h);let w;if(g===Zc){const F=P(h),B=U(h)-F;w=n(F,B,!0,o+1,s+h,C)}else w=g&&hl(h,t,e,n,r,s,o+1);return!!w}}const Ur=new z,ca=new z;function ov(i,t,e={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:u=>(Ur.copy(t).clamp(u.min,u.max),Ur.distanceToSquared(t)),intersectsBounds:(u,d,f)=>f<a&&f<o,intersectsTriangle:(u,d)=>{u.closestPointToPoint(t,Ur);const f=t.distanceToSquared(Ur);return f<a&&(ca.copy(Ur),a=f,l=d),f<s}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(ca):e.point=ca.clone(),e.distance=c,e.faceIndex=l,e}const av=parseInt(go)>=169,vi=new z,xi=new z,yi=new z,Ls=new Rt,Is=new Rt,Ds=new Rt,nu=new z,iu=new z,ru=new z,Nr=new z;function lv(i,t,e,n,r,s,o,a){let l;if(s===Re?l=i.intersectTriangle(n,e,t,!0,r):l=i.intersectTriangle(t,e,n,s!==Ke,r),l===null)return null;const c=i.origin.distanceTo(r);return c<o||c>a?null:{distance:c,point:r.clone()}}function cv(i,t,e,n,r,s,o,a,l,c,u){vi.fromBufferAttribute(t,s),xi.fromBufferAttribute(t,o),yi.fromBufferAttribute(t,a);const d=lv(i,vi,xi,yi,Nr,l,c,u);if(d){const f=new z;re.getBarycoord(Nr,vi,xi,yi,f),n&&(Ls.fromBufferAttribute(n,s),Is.fromBufferAttribute(n,o),Ds.fromBufferAttribute(n,a),d.uv=re.getInterpolation(Nr,vi,xi,yi,Ls,Is,Ds,new Rt)),r&&(Ls.fromBufferAttribute(r,s),Is.fromBufferAttribute(r,o),Ds.fromBufferAttribute(r,a),d.uv1=re.getInterpolation(Nr,vi,xi,yi,Ls,Is,Ds,new Rt)),e&&(nu.fromBufferAttribute(e,s),iu.fromBufferAttribute(e,o),ru.fromBufferAttribute(e,a),d.normal=re.getInterpolation(Nr,vi,xi,yi,nu,iu,ru,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const m={a:s,b:o,c:a,normal:new z,materialIndex:0};re.getNormal(vi,xi,yi,m.normal),d.face=m,d.faceIndex=s,av&&(d.barycoord=f)}return d}function Eo(i,t,e,n,r,s,o){const a=n*3;let l=a+0,c=a+1,u=a+2;const d=i.index;i.index&&(l=d.getX(l),c=d.getX(c),u=d.getX(u));const{position:f,normal:m,uv:v,uv1:S}=i.attributes,p=cv(e,f,m,v,S,l,c,u,t,s,o);return p?(p.faceIndex=n,r&&r.push(p),p):null}function de(i,t,e,n){const r=i.a,s=i.b,o=i.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function uv(i,t,e,n,r,s,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let u=n,d=n+r;u<d;u++)Eo(l,t,e,u,s,o,a)}function hv(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,u=null;for(let d=n,f=n+r;d<f;d++){let m;m=Eo(a,t,e,d,null,s,o),m&&m.distance<c&&(u=m,c=m.distance)}return u}function fv(i,t,e,n,r,s,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,d=t+i;u<d;u++){let f;if(f=u,de(o,f*3,l,c),o.needsUpdate=!0,n(o,f,r,s))return!0}return!1}function dv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,l,c=0;const u=i._roots;for(let f=0,m=u.length;f<m;f++)s=u[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),d(0,c),c+=s.byteLength;function d(f,m,v=!1){const S=f*2;if(a[S+15]===So){const h=o[f+6],M=a[S+14];let y=1/0,E=1/0,C=1/0,A=-1/0,b=-1/0,x=-1/0;for(let _=3*h,g=3*(h+M);_<g;_++){let w=n[_];const P=r.getX(w),U=r.getY(w),F=r.getZ(w);P<y&&(y=P),P>A&&(A=P),U<E&&(E=U),U>b&&(b=U),F<C&&(C=F),F>x&&(x=F)}return l[f+0]!==y||l[f+1]!==E||l[f+2]!==C||l[f+3]!==A||l[f+4]!==b||l[f+5]!==x?(l[f+0]=y,l[f+1]=E,l[f+2]=C,l[f+3]=A,l[f+4]=b,l[f+5]=x,!0):!1}else{const h=f+8,M=o[f+6],y=h+m,E=M+m;let C=v,A=!1,b=!1;t?C||(A=t.has(y),b=t.has(E),C=!A&&!b):(A=!0,b=!0);const x=C||A,_=C||b;let g=!1;x&&(g=d(h,m,C));let w=!1;_&&(w=d(M,m,C));const P=g||w;if(P)for(let U=0;U<3;U++){const F=h+U,k=M+U,B=l[F],V=l[F+3],Y=l[k],et=l[k+3];l[f+U]=B<Y?B:Y,l[f+U+3]=V>et?V:et}return P}}}function ui(i,t,e,n,r){let s,o,a,l,c,u;const d=1/e.direction.x,f=1/e.direction.y,m=1/e.direction.z,v=e.origin.x,S=e.origin.y,p=e.origin.z;let h=t[i],M=t[i+3],y=t[i+1],E=t[i+3+1],C=t[i+2],A=t[i+3+2];return d>=0?(s=(h-v)*d,o=(M-v)*d):(s=(M-v)*d,o=(h-v)*d),f>=0?(a=(y-S)*f,l=(E-S)*f):(a=(E-S)*f,l=(y-S)*f),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),m>=0?(c=(C-p)*m,u=(A-p)*m):(c=(A-p)*m,u=(C-p)*m),s>u||c>o)?!1:((c>s||s!==s)&&(s=c),(u<o||o!==o)&&(o=u),s<=r&&o>=n)}function pv(i,t,e,n,r,s,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let u=n,d=n+r;u<d;u++){let f=c?c[u]:u;Eo(l,t,e,f,s,o,a)}}function mv(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,u=null;for(let d=n,f=n+r;d<f;d++){let m;m=Eo(a,t,e,l?l[d]:d,null,s,o),m&&m.distance<c&&(u=m,c=m.distance)}return u}function gv(i,t,e,n,r,s,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,d=t+i;u<d;u++){let f;if(f=e.resolveTriangleIndex(u),de(o,f*3,l,c),o.needsUpdate=!0,n(o,f,r,s))return!0}return!1}function _v(i,t,e,n,r,s,o){ee.setBuffer(i._roots[t]),fl(0,i,e,n,r,s,o),ee.clearBuffer()}function fl(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:c}=ee,u=i*2;if(Ne(u,l)){const f=We(i,c),m=Qe(u,l);uv(t,e,n,f,m,r,s,o)}else{const f=tn(i);ui(f,a,n,s,o)&&fl(f,t,e,n,r,s,o);const m=en(i,c);ui(m,a,n,s,o)&&fl(m,t,e,n,r,s,o)}}const vv=["x","y","z"];function xv(i,t,e,n,r,s){ee.setBuffer(i._roots[t]);const o=dl(0,i,e,n,r,s);return ee.clearBuffer(),o}function dl(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=ee;let c=i*2;if(Ne(c,a)){const d=We(i,l),f=Qe(c,a);return hv(t,e,n,d,f,r,s)}else{const d=wh(i,l),f=vv[d],v=n.direction[f]>=0;let S,p;v?(S=tn(i),p=en(i,l)):(S=en(i,l),p=tn(i));const M=ui(S,o,n,r,s)?dl(S,t,e,n,r,s):null;if(M){const C=M.point[f];if(v?C<=o[p+d]:C>=o[p+d+3])return M}const E=ui(p,o,n,r,s)?dl(p,t,e,n,r,s):null;return M&&E?M.distance<=E.distance?M:E:M||E||null}}const Us=new Le,rr=new sn,sr=new sn,Fr=new $t,su=new Ie,Ns=new Ie;function yv(i,t,e,n){ee.setBuffer(i._roots[t]);const r=pl(0,i,e,n);return ee.clearBuffer(),r}function pl(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ee;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),su.set(e.boundingBox.min,e.boundingBox.max,n),r=su),Ne(l,o)){const u=t.geometry,d=u.index,f=u.attributes.position,m=e.index,v=e.attributes.position,S=We(i,a),p=Qe(l,o);if(Fr.copy(n).invert(),e.boundsTree)return ae(i,s,Ns),Ns.matrix.copy(Fr),Ns.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:M=>Ns.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(n),M.b.applyMatrix4(n),M.c.applyMatrix4(n),M.needsUpdate=!0;for(let y=S*3,E=(p+S)*3;y<E;y+=3)if(de(sr,y,d,f),sr.needsUpdate=!0,M.intersectsTriangle(sr))return!0;return!1}});for(let h=S*3,M=(p+S)*3;h<M;h+=3){de(rr,h,d,f),rr.a.applyMatrix4(Fr),rr.b.applyMatrix4(Fr),rr.c.applyMatrix4(Fr),rr.needsUpdate=!0;for(let y=0,E=m.count;y<E;y+=3)if(de(sr,y,m,v),sr.needsUpdate=!0,rr.intersectsTriangle(sr))return!0}}else{const u=i+8,d=a[i+6];return ae(u,s,Us),!!(r.intersectsBox(Us)&&pl(u,t,e,n,r)||(ae(d,s,Us),r.intersectsBox(Us)&&pl(d,t,e,n,r)))}}const Fs=new $t,ua=new Ie,Or=new Ie,Mv=new z,Sv=new z,Ev=new z,bv=new z;function Av(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ua.set(t.boundingBox.min,t.boundingBox.max,e),ua.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,d=t.index,f=nn.getPrimitive(),m=nn.getPrimitive();let v=Mv,S=Sv,p=null,h=null;r&&(p=Ev,h=bv);let M=1/0,y=null,E=null;return Fs.copy(e).invert(),Or.matrix.copy(Fs),i.shapecast({boundsTraverseOrder:C=>ua.distanceToBox(C),intersectsBounds:(C,A,b)=>b<M&&b<o?(A&&(Or.min.copy(C.min),Or.max.copy(C.max),Or.needsUpdate=!0),!0):!1,intersectsRange:(C,A)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:x=>Or.distanceToBox(x),intersectsBounds:(x,_,g)=>g<M&&g<o,intersectsRange:(x,_)=>{for(let g=x,w=x+_;g<w;g++){de(m,3*g,d,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let P=C,U=C+A;P<U;P++){de(f,3*P,c,l),f.needsUpdate=!0;const F=f.distanceToTriangle(m,v,p);if(F<M&&(S.copy(v),h&&h.copy(p),M=F,y=P,E=g),F<s)return!0}}}});{const b=Tr(t);for(let x=0,_=b;x<_;x++){de(m,3*x,d,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let g=C,w=C+A;g<w;g++){de(f,3*g,c,l),f.needsUpdate=!0;const P=f.distanceToTriangle(m,v,p);if(P<M&&(S.copy(v),h&&h.copy(p),M=P,y=g,E=x),P<s)return!0}}}}}),nn.releasePrimitive(f),nn.releasePrimitive(m),M===1/0?null:(n.point?n.point.copy(S):n.point=S.clone(),n.distance=M,n.faceIndex=y,r&&(r.point?r.point.copy(h):r.point=h.clone(),r.point.applyMatrix4(Fs),S.applyMatrix4(Fs),r.distance=S.sub(r.point).length(),r.faceIndex=E),n)}function wv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,l,c=0;const u=i._roots;for(let f=0,m=u.length;f<m;f++)s=u[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),d(0,c),c+=s.byteLength;function d(f,m,v=!1){const S=f*2;if(a[S+15]===So){const h=o[f+6],M=a[S+14];let y=1/0,E=1/0,C=1/0,A=-1/0,b=-1/0,x=-1/0;for(let _=h,g=h+M;_<g;_++){const w=3*i.resolveTriangleIndex(_);for(let P=0;P<3;P++){let U=w+P;U=n?n[U]:U;const F=r.getX(U),k=r.getY(U),B=r.getZ(U);F<y&&(y=F),F>A&&(A=F),k<E&&(E=k),k>b&&(b=k),B<C&&(C=B),B>x&&(x=B)}}return l[f+0]!==y||l[f+1]!==E||l[f+2]!==C||l[f+3]!==A||l[f+4]!==b||l[f+5]!==x?(l[f+0]=y,l[f+1]=E,l[f+2]=C,l[f+3]=A,l[f+4]=b,l[f+5]=x,!0):!1}else{const h=f+8,M=o[f+6],y=h+m,E=M+m;let C=v,A=!1,b=!1;t?C||(A=t.has(y),b=t.has(E),C=!A&&!b):(A=!0,b=!0);const x=C||A,_=C||b;let g=!1;x&&(g=d(h,m,C));let w=!1;_&&(w=d(M,m,C));const P=g||w;if(P)for(let U=0;U<3;U++){const F=h+U,k=M+U,B=l[F],V=l[F+3],Y=l[k],et=l[k+3];l[f+U]=B<Y?B:Y,l[f+U+3]=V>et?V:et}return P}}}function Tv(i,t,e,n,r,s,o){ee.setBuffer(i._roots[t]),ml(0,i,e,n,r,s,o),ee.clearBuffer()}function ml(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:c}=ee,u=i*2;if(Ne(u,l)){const f=We(i,c),m=Qe(u,l);pv(t,e,n,f,m,r,s,o)}else{const f=tn(i);ui(f,a,n,s,o)&&ml(f,t,e,n,r,s,o);const m=en(i,c);ui(m,a,n,s,o)&&ml(m,t,e,n,r,s,o)}}const Cv=["x","y","z"];function Rv(i,t,e,n,r,s){ee.setBuffer(i._roots[t]);const o=gl(0,i,e,n,r,s);return ee.clearBuffer(),o}function gl(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=ee;let c=i*2;if(Ne(c,a)){const d=We(i,l),f=Qe(c,a);return mv(t,e,n,d,f,r,s)}else{const d=wh(i,l),f=Cv[d],v=n.direction[f]>=0;let S,p;v?(S=tn(i),p=en(i,l)):(S=en(i,l),p=tn(i));const M=ui(S,o,n,r,s)?gl(S,t,e,n,r,s):null;if(M){const C=M.point[f];if(v?C<=o[p+d]:C>=o[p+d+3])return M}const E=ui(p,o,n,r,s)?gl(p,t,e,n,r,s):null;return M&&E?M.distance<=E.distance?M:E:M||E||null}}const Os=new Le,or=new sn,ar=new sn,Br=new $t,ou=new Ie,Bs=new Ie;function Pv(i,t,e,n){ee.setBuffer(i._roots[t]);const r=_l(0,i,e,n);return ee.clearBuffer(),r}function _l(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ee;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),ou.set(e.boundingBox.min,e.boundingBox.max,n),r=ou),Ne(l,o)){const u=t.geometry,d=u.index,f=u.attributes.position,m=e.index,v=e.attributes.position,S=We(i,a),p=Qe(l,o);if(Br.copy(n).invert(),e.boundsTree)return ae(i,s,Bs),Bs.matrix.copy(Br),Bs.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:M=>Bs.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(n),M.b.applyMatrix4(n),M.c.applyMatrix4(n),M.needsUpdate=!0;for(let y=S,E=p+S;y<E;y++)if(de(ar,3*t.resolveTriangleIndex(y),d,f),ar.needsUpdate=!0,M.intersectsTriangle(ar))return!0;return!1}});for(let h=S,M=p+S;h<M;h++){const y=t.resolveTriangleIndex(h);de(or,3*y,d,f),or.a.applyMatrix4(Br),or.b.applyMatrix4(Br),or.c.applyMatrix4(Br),or.needsUpdate=!0;for(let E=0,C=m.count;E<C;E+=3)if(de(ar,E,m,v),ar.needsUpdate=!0,or.intersectsTriangle(ar))return!0}}else{const u=i+8,d=a[i+6];return ae(u,s,Os),!!(r.intersectsBox(Os)&&_l(u,t,e,n,r)||(ae(d,s,Os),r.intersectsBox(Os)&&_l(d,t,e,n,r)))}}const zs=new $t,ha=new Ie,zr=new Ie,Lv=new z,Iv=new z,Dv=new z,Uv=new z;function Nv(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ha.set(t.boundingBox.min,t.boundingBox.max,e),ha.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,d=t.index,f=nn.getPrimitive(),m=nn.getPrimitive();let v=Lv,S=Iv,p=null,h=null;r&&(p=Dv,h=Uv);let M=1/0,y=null,E=null;return zs.copy(e).invert(),zr.matrix.copy(zs),i.shapecast({boundsTraverseOrder:C=>ha.distanceToBox(C),intersectsBounds:(C,A,b)=>b<M&&b<o?(A&&(zr.min.copy(C.min),zr.max.copy(C.max),zr.needsUpdate=!0),!0):!1,intersectsRange:(C,A)=>{if(t.boundsTree){const b=t.boundsTree;return b.shapecast({boundsTraverseOrder:x=>zr.distanceToBox(x),intersectsBounds:(x,_,g)=>g<M&&g<o,intersectsRange:(x,_)=>{for(let g=x,w=x+_;g<w;g++){const P=b.resolveTriangleIndex(g);de(m,3*P,d,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let U=C,F=C+A;U<F;U++){const k=i.resolveTriangleIndex(U);de(f,3*k,c,l),f.needsUpdate=!0;const B=f.distanceToTriangle(m,v,p);if(B<M&&(S.copy(v),h&&h.copy(p),M=B,y=U,E=g),B<s)return!0}}}})}else{const b=Tr(t);for(let x=0,_=b;x<_;x++){de(m,3*x,d,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let g=C,w=C+A;g<w;g++){const P=i.resolveTriangleIndex(g);de(f,3*P,c,l),f.needsUpdate=!0;const U=f.distanceToTriangle(m,v,p);if(U<M&&(S.copy(v),h&&h.copy(p),M=U,y=g,E=x),U<s)return!0}}}}}),nn.releasePrimitive(f),nn.releasePrimitive(m),M===1/0?null:(n.point?n.point.copy(S):n.point=S.clone(),n.distance=M,n.faceIndex=y,r&&(r.point?r.point.copy(h):r.point=h.clone(),r.point.applyMatrix4(zs),S.applyMatrix4(zs),r.distance=S.sub(r.point).length(),r.faceIndex=E),n)}function Fv(){return typeof SharedArrayBuffer<"u"}const jr=new ee.constructor,ho=new ee.constructor,ei=new Nl(()=>new Le),lr=new Le,cr=new Le,fa=new Le,da=new Le;let pa=!1;function Ov(i,t,e,n){if(pa)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");pa=!0;const r=i._roots,s=t._roots;let o,a=0,l=0;const c=new $t().copy(e).invert();for(let u=0,d=r.length;u<d;u++){jr.setBuffer(r[u]),l=0;const f=ei.getPrimitive();ae(0,jr.float32Array,f),f.applyMatrix4(c);for(let m=0,v=s.length;m<v&&(ho.setBuffer(s[m]),o=hn(0,0,e,c,n,a,l,0,0,f),ho.clearBuffer(),l+=s[m].length,!o);m++);if(ei.releasePrimitive(f),jr.clearBuffer(),a+=r[u].length,o)break}return pa=!1,o}function hn(i,t,e,n,r,s=0,o=0,a=0,l=0,c=null,u=!1){let d,f;u?(d=ho,f=jr):(d=jr,f=ho);const m=d.float32Array,v=d.uint32Array,S=d.uint16Array,p=f.float32Array,h=f.uint32Array,M=f.uint16Array,y=i*2,E=t*2,C=Ne(y,S),A=Ne(E,M);let b=!1;if(A&&C)u?b=r(We(t,h),Qe(t*2,M),We(i,v),Qe(i*2,S),l,o+t,a,s+i):b=r(We(i,v),Qe(i*2,S),We(t,h),Qe(t*2,M),a,s+i,l,o+t);else if(A){const x=ei.getPrimitive();ae(t,p,x),x.applyMatrix4(e);const _=tn(i),g=en(i,v);ae(_,m,lr),ae(g,m,cr);const w=x.intersectsBox(lr),P=x.intersectsBox(cr);b=w&&hn(t,_,n,e,r,o,s,l,a+1,x,!u)||P&&hn(t,g,n,e,r,o,s,l,a+1,x,!u),ei.releasePrimitive(x)}else{const x=tn(t),_=en(t,h);ae(x,p,fa),ae(_,p,da);const g=c.intersectsBox(fa),w=c.intersectsBox(da);if(g&&w)b=hn(i,x,e,n,r,s,o,a,l+1,c,u)||hn(i,_,e,n,r,s,o,a,l+1,c,u);else if(g)if(C)b=hn(i,x,e,n,r,s,o,a,l+1,c,u);else{const P=ei.getPrimitive();P.copy(fa).applyMatrix4(e);const U=tn(i),F=en(i,v);ae(U,m,lr),ae(F,m,cr);const k=P.intersectsBox(lr),B=P.intersectsBox(cr);b=k&&hn(x,U,n,e,r,o,s,l,a+1,P,!u)||B&&hn(x,F,n,e,r,o,s,l,a+1,P,!u),ei.releasePrimitive(P)}else if(w)if(C)b=hn(i,_,e,n,r,s,o,a,l+1,c,u);else{const P=ei.getPrimitive();P.copy(da).applyMatrix4(e);const U=tn(i),F=en(i,v);ae(U,m,lr),ae(F,m,cr);const k=P.intersectsBox(lr),B=P.intersectsBox(cr);b=k&&hn(_,U,n,e,r,o,s,l,a+1,P,!u)||B&&hn(_,F,n,e,r,o,s,l,a+1,P,!u),ei.releasePrimitive(P)}}return b}const ks=new Ie,au=new Le,Bv={strategy:Eh,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Fl{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex();let a;return e.cloneBuffers?a={roots:r.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:s?s.slice():null}:a={roots:r,index:o?o.array:null,indirectBuffer:s},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=t,a=new Fl(e,{...n,[sa]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const l=e.getIndex();if(l===null){const c=new Oe(t.index,1,!1);e.setIndex(c)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...Bv,[sa]:!1},e),e.useSharedArrayBuffer&&!Fv())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[sa]||(Q0(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Le))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?wv:dv)(this,t)}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,u=s[c+15]===So;if(u){const d=r[a+6],f=s[c+14];t(l,u,new Float32Array(n,a*4,6),d,f)}else{const d=a+$r/4,f=r[a+6],m=r[a+7];t(l,u,new Float32Array(n,a*4,6),m)||(o(d,l+1),o(f,l+1))}}}raycast(t,e=xn,n=0,r=1/0){const s=this._roots,o=this.geometry,a=[],l=e.isMaterial,c=Array.isArray(e),u=o.groups,d=l?e.side:e,f=this.indirect?Tv:_v;for(let m=0,v=s.length;m<v;m++){const S=c?e[u[m].materialIndex].side:d,p=a.length;if(f(this,m,S,t,a,n,r),c){const h=u[m].materialIndex;for(let M=p,y=a.length;M<y;M++)a[M].face.materialIndex=h}}return a}raycastFirst(t,e=xn,n=0,r=1/0){const s=this._roots,o=this.geometry,a=e.isMaterial,l=Array.isArray(e);let c=null;const u=o.groups,d=a?e.side:e,f=this.indirect?Rv:xv;for(let m=0,v=s.length;m<v;m++){const S=l?e[u[m].materialIndex].side:d,p=f(this,m,S,t,n,r);p!=null&&(c==null||p.distance<c.distance)&&(c=p,l&&(p.face.materialIndex=u[m].materialIndex))}return c}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?Pv:yv;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){const e=nn.getPrimitive(),n=this.indirect?gv:fv;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const d=o;o=(f,m,v,S,p)=>d(f,m,v,S,p)?!0:n(f,m,this,a,v,S,e)}else o||(a?o=(d,f,m,v)=>n(d,f,this,a,m,v,e):o=(d,f,m)=>m);let l=!1,c=0;const u=this._roots;for(let d=0,f=u.length;d<f;d++){const m=u[d];if(l=sv(this,d,s,o,r,c),l)break;c+=m.byteLength}return nn.releasePrimitive(e),l}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=nn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?v=>{const S=this.resolveTriangleIndex(v);de(o,S*3,a,l)}:v=>{de(o,v*3,a,l)},u=nn.getPrimitive(),d=t.geometry.index,f=t.geometry.attributes.position,m=t.indirect?v=>{const S=t.resolveTriangleIndex(v);de(u,S*3,d,f)}:v=>{de(u,v*3,d,f)};if(s){const v=(S,p,h,M,y,E,C,A)=>{for(let b=h,x=h+M;b<x;b++){m(b),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let _=S,g=S+p;_<g;_++)if(c(_),o.needsUpdate=!0,s(o,u,_,b,y,E,C,A))return!0}return!1};if(r){const S=r;r=function(p,h,M,y,E,C,A,b){return S(p,h,M,y,E,C,A,b)?!0:v(p,h,M,y,E,C,A,b)}}else r=v}return Ov(this,t,e,r)}intersectsBox(t,e){return ks.set(t.min,t.max,e),ks.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ks.intersectsBox(n),intersectsTriangle:n=>ks.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?Nv:Av)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return ov(this,t,e,n,r)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{ae(0,new Float32Array(n),au),t.union(au)}),t}}const Rh=1e-6,zv=Rh*.5,Ph=Math.pow(10,-Math.log10(Rh)),kv=zv*Ph;function _n(i){return~~(i*Ph+kv)}function Hv(i){return`${_n(i.x)},${_n(i.y)}`}function lu(i){return`${_n(i.x)},${_n(i.y)},${_n(i.z)}`}function Vv(i){return`${_n(i.x)},${_n(i.y)},${_n(i.z)},${_n(i.w)}`}function Gv(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function Lh(){return typeof SharedArrayBuffer<"u"}function Wv(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function Xv(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Yv(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Xv(e,n);i.setIndex(new Oe(r,1));for(let s=0;s<e;s++)r[s]=s}}function $v(i){return i.index?i.index.count:i.attributes.position.count}function Ol(i){return $v(i)/3}const jv=1e-8,qv=new z;function Kv(i){return~~(i/3)}function Zv(i){return i%3}function cu(i,t){return i.start-t.start}function uu(i,t){return qv.subVectors(t,i.origin).dot(i.direction)}function Jv(i,t,e,n=jv){i.sort(cu),t.sort(cu);for(let a=0;a<i.length;a++){const l=i[a];for(let c=0;c<t.length;c++){const u=t[c];if(!(u.start>l.end)){if(l.end<u.start||u.end<l.start)continue;if(l.start<=u.start&&l.end>=u.end)s(u.end,l.end)||i.splice(a+1,0,{start:u.end,end:l.end,index:l.index}),l.end=u.start,u.start=0,u.end=0;else if(l.start>=u.start&&l.end<=u.end)s(l.end,u.end)||t.splice(c+1,0,{start:l.end,end:u.end,index:u.index}),u.end=l.start,l.start=0,l.end=0;else if(l.start<=u.start&&l.end<=u.end){const d=l.end;l.end=u.start,u.start=d}else if(l.start>=u.start&&l.end>=u.end){const d=u.end;u.end=l.start,l.start=d}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(l.index).push(u.index),e.get(u.index).push(l.index),o(u)&&(t.splice(c,1),c--),o(l)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let l=0;l<a.length;l++)o(a[l])&&(a.splice(l,1),l--)}function s(a,l){return Math.abs(l-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}const hu=1e-5,fu=1e-4;class Qv{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let l=0,c=e.length;l<c;l++){const u=e[l];if(o(u,t)&&o(u,n))continue;const d=a(u,t),f=a(u,n),m=Math.min(d,f);m<r&&(r=m,s=u)}return s;function o(l,c){const u=l.origin.distanceTo(c.origin)>hu;return l.direction.angleTo(c.direction)>fu||u}function a(l,c){const u=l.origin.distanceTo(c.origin),d=l.direction.angleTo(c.direction);return u/hu+d/fu}}}const ma=new z,ga=new z,Hs=new yo;function tx(i,t,e){const n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,l=Array.from(t),c=new Qv;for(let u=0,d=l.length;u<d;u++){const f=l[u],m=Kv(f),v=Zv(f);let S=3*m+v,p=3*m+(v+1)%3;r&&(S=r.getX(S),p=r.getX(p)),ma.fromBufferAttribute(s,S),ga.fromBufferAttribute(s,p),Gv(ma,ga,Hs);let h,M=c.findClosestRay(Hs);M===null&&(M=Hs.clone(),c.addRay(M)),a.has(M)||a.set(M,{forward:[],reverse:[],ray:M}),h=a.get(M);let y=uu(M,ma),E=uu(M,ga);y>E&&([y,E]=[E,y]),Hs.direction.dot(M.direction)<0?h.reverse.push({start:y,end:E,index:f}):h.forward.push({start:y,end:E,index:f})}return a.forEach(({forward:u,reverse:d},f)=>{Jv(u,d,o,e),u.length===0&&d.length===0&&a.delete(f)}),{disjointConnectivityMap:o,fragmentMap:a}}const ex=new Rt,_a=new z,nx=new Qt,va=["","",""];class ix{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?y:M,a=new Map,{attributes:l}=t,c=e?Object.keys(l):null,u=t.index,d=l.position;let f=Ol(t);const m=f;let v=0;n&&(v=t.drawRange.start,t.drawRange.count!==1/0&&(f=~~(t.drawRange.count/3)));let S=this.data;(!S||S.length<3*m)&&(S=new Int32Array(3*m)),S.fill(-1);let p=0,h=new Set;for(let E=v,C=f*3+v;E<C;E+=3){const A=E;for(let b=0;b<3;b++){let x=A+b;u&&(x=u.getX(x)),va[b]=o(x)}for(let b=0;b<3;b++){const x=(b+1)%3,_=va[b],g=va[x],w=`${g}_${_}`;if(a.has(w)){const P=A+b,U=a.get(w);S[P]=U,S[U]=P,a.delete(w),p+=2,h.delete(U)}else{const P=`${_}_${g}`,U=A+b;a.set(P,U),h.add(U)}}}if(r){const{fragmentMap:E,disjointConnectivityMap:C}=tx(t,h,s);h.clear(),E.forEach(({forward:A,reverse:b})=>{A.forEach(({index:x})=>h.add(x)),b.forEach(({index:x})=>h.add(x))}),this.unmatchedDisjointEdges=E,this.disjointConnections=C,p=f*3-h.size}this.matchedEdges=p,this.unmatchedEdges=h.size,this.data=S;function M(E){return _a.fromBufferAttribute(d,E),lu(_a)}function y(E){let C="";for(let A=0,b=c.length;A<b;A++){const x=l[c[A]];let _;switch(x.itemSize){case 1:_=_n(x.getX(E));break;case 2:_=Hv(ex.fromBufferAttribute(x,E));break;case 3:_=lu(_a.fromBufferAttribute(x,E));break;case 4:_=Vv(nx.fromBufferAttribute(x,E));break}C!==""&&(C+="|"),C+=_}return C}}}class fo extends Je{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new $t,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=Lh();if(n)for(const r in e){const s=e[r];if(s.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");s.array=Wv(s.array)}if(t.boundsTree||(Yv(t,{useSharedArrayBuffer:n}),t.boundsTree=new Fl(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:n})),t.halfEdges||(t.halfEdges=new ix(t)),!t.groupIndices){const r=Ol(t),s=new Uint16Array(r),o=t.groups;for(let a=0,l=o.length;a<l;a++){const{start:c,count:u}=o[a];for(let d=c/3,f=(c+u)/3;d<f;d++)s[d]=a}t.groupIndices=s}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const rx=1e-14,xa=new z,du=new z,pu=new z;function ii(i,t=rx){xa.subVectors(i.b,i.a),du.subVectors(i.c,i.a),pu.subVectors(i.b,i.c);const e=xa.angleTo(du),n=xa.angleTo(pu),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const ya=1e-10,kr=1e-10,sx=1e-10,Pn=new rn,ce=new rn,Ln=new z,Ma=new z,mu=new z,Vs=new fn,Sa=new sn;class ox{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new re),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class ax{constructor(){this.trianglePool=new ox,this.triangles=[],this.normal=new z,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(Ln).dot(r))>ya)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const l=n.getTriangle();l.copy(a),e.push(l)}else{t.getNormal(r);const s=n.getTriangle();s.copy(t),e.push(s)}}splitByTriangle(t){const{normal:e,triangles:n}=this;if(t.getNormal(Ma).normalize(),Math.abs(1-Math.abs(Ma.dot(e)))<sx){this.coplanarTriangleUsed=!0;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],l=r[o];Ln.subVectors(l,a).normalize(),mu.crossVectors(Ma,Ln),Vs.setFromNormalAndCoplanarPoint(mu,a),this.splitByPlane(Vs,t)}}else t.getPlane(Vs),this.splitByPlane(Vs,t)}splitByPlane(t,e){const{triangles:n,trianglePool:r}=this;Sa.copy(e),Sa.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){const a=n[s];if(!Sa.intersectsTriangle(a,Pn,!0))continue;const{a:l,b:c,c:u}=a;let d=0,f=-1,m=!1,v=[],S=[];const p=[l,c,u];for(let h=0;h<3;h++){const M=(h+1)%3;Pn.start.copy(p[h]),Pn.end.copy(p[M]);const y=t.distanceToPoint(Pn.start),E=t.distanceToPoint(Pn.end);if(Math.abs(y)<kr&&Math.abs(E)<kr){m=!0;break}if(y>0?v.push(h):S.push(h),Math.abs(y)<kr)continue;let C=!!t.intersectLine(Pn,Ln);!C&&Math.abs(E)<kr&&(Ln.copy(Pn.end),C=!0),C&&!(Ln.distanceTo(Pn.start)<ya)&&(Ln.distanceTo(Pn.end)<ya&&(f=h),d===0?ce.start.copy(Ln):ce.end.copy(Ln),d++)}if(!m&&d===2&&ce.distance()>kr)if(f!==-1){f=(f+1)%3;let h=0;h===f&&(h=(h+1)%3);let M=h+1;M===f&&(M=(M+1)%3);const y=r.getTriangle();y.a.copy(p[M]),y.b.copy(ce.end),y.c.copy(ce.start),ii(y)||n.push(y),a.a.copy(p[h]),a.b.copy(ce.start),a.c.copy(ce.end),ii(a)&&(n.splice(s,1),s--,o--)}else{const h=v.length>=2?S[0]:v[0];if(h===0){let A=ce.start;ce.start=ce.end,ce.end=A}const M=(h+1)%3,y=(h+2)%3,E=r.getTriangle(),C=r.getTriangle();p[M].distanceToSquared(ce.start)<p[y].distanceToSquared(ce.end)?(E.a.copy(p[M]),E.b.copy(ce.start),E.c.copy(ce.end),C.a.copy(p[M]),C.b.copy(p[y]),C.c.copy(ce.start)):(E.a.copy(p[y]),E.b.copy(ce.start),E.c.copy(ce.end),C.a.copy(p[M]),C.b.copy(p[y]),C.c.copy(ce.end)),a.a.copy(p[h]),a.b.copy(ce.end),a.c.copy(ce.start),ii(E)||n.push(E),ii(C)||n.push(C),ii(a)&&(n.splice(s,1),s--,o--)}else d===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function lx(i){return i=~~i,i+4-i%4}class gu{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=Lh()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(lx(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}}class cx{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:n}=this;let r=0;for(let s=0;s<e;s++){const o=n[s];r+=o[t].length}return r}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const n=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const r={};e.push(r);for(const s in n){const o=n[s],a=new gu(o.type);a.itemSize=o.itemSize,a.normalized=o.normalized,r[s]=a}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:n}=this;if(!n[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,n,r){const{groupAttributes:s}=this,a=s[0][t];if(a){if(a.type!==e)for(let l=0,c=s.length;l<c;l++){const u=s[l][t];u.setType(e),u.itemSize=n,u.normalized=r}}else for(let l=0,c=s.length;l<c;l++){const u=new gu(e);u.itemSize=n,u.normalized=r,s[l][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const n in e)e[n].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class _u{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:n,ids:r}=this;n[t]||(n[t]=[],r.push(t)),n[t].push(e)}}const ux=0,Ih=1,hx=2,fx=3,dx=4,Dh=5,Uh=6,je=new yo,vu=new $t,we=new re,In=new z,xu=new Qt,yu=new Qt,Mu=new Qt,Ea=new Qt,Gs=new Qt,Ws=new Qt,Su=new rn,ba=new z,Aa=1e-8,px=1e-15,wi=-1,Ti=1,eo=-2,no=2,qr=0,Mi=1,Bl=2,mx=1e-14;let io=null;function Eu(i){io=i}function Nh(i,t){i.getMidpoint(je.origin),i.getNormal(je.direction);const e=t.raycastFirst(je,Ke);return!!(e&&je.direction.dot(e.face.normal)>0)?wi:Ti}function gx(i,t){function e(){return Math.random()-.5}i.getNormal(ba),je.direction.copy(ba),i.getMidpoint(je.origin);const n=3;let r=0,s=1/0;for(let o=0;o<n;o++){je.direction.x+=e()*Aa,je.direction.y+=e()*Aa,je.direction.z+=e()*Aa,je.direction.multiplyScalar(-1);const a=t.raycastFirst(je,Ke);if(!!(a&&je.direction.dot(a.face.normal)>0)&&r++,a!==null&&(s=Math.min(s,a.distance)),s<=px)return a.face.normal.dot(ba)>0?no:eo;if(r/n>.5||(o-r+1)/n>.5)break}return r/n>.5?wi:Ti}function _x(i,t){const e=new _u,n=new _u;return vu.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,vu,{intersectsTriangles(r,s,o,a){if(!ii(r)&&!ii(s)){let l=r.intersectsTriangle(s,Su,!0);if(!l){const c=r.plane,u=s.plane,d=c.normal,f=u.normal;d.dot(f)===1&&Math.abs(c.constant-u.constant)<mx&&(l=!0)}if(l){let c=i.geometry.boundsTree.resolveTriangleIndex(o),u=t.geometry.boundsTree.resolveTriangleIndex(a);e.add(c,u),n.add(u,c),io&&(io.addEdge(Su),io.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function vx(i,t,e,n,r,s,o=!1){const a=e.attributes,l=e.index,c=i*3,u=l.getX(c+0),d=l.getX(c+1),f=l.getX(c+2);for(const m in s){const v=a[m],S=s[m];if(!(m in a))throw new Error(`CSG Operations: Attribute ${m} not available on geometry.`);const p=v.itemSize;m==="position"?(we.a.fromBufferAttribute(v,u).applyMatrix4(n),we.b.fromBufferAttribute(v,d).applyMatrix4(n),we.c.fromBufferAttribute(v,f).applyMatrix4(n),wa(we.a,we.b,we.c,t,3,S,o)):m==="normal"?(we.a.fromBufferAttribute(v,u).applyNormalMatrix(r),we.b.fromBufferAttribute(v,d).applyNormalMatrix(r),we.c.fromBufferAttribute(v,f).applyNormalMatrix(r),o&&(we.a.multiplyScalar(-1),we.b.multiplyScalar(-1),we.c.multiplyScalar(-1)),wa(we.a,we.b,we.c,t,3,S,o,!0)):(xu.fromBufferAttribute(v,u),yu.fromBufferAttribute(v,d),Mu.fromBufferAttribute(v,f),wa(xu,yu,Mu,t,p,S,o))}}function xx(i,t,e,n,r,s,o,a=!1){Ta(i,n,r,s,o,a),Ta(a?e:t,n,r,s,o,a),Ta(a?t:e,n,r,s,o,a)}function Fh(i,t,e=!1){switch(i){case ux:if(t===Ti||t===no&&!e)return Mi;break;case Ih:if(e){if(t===wi)return qr}else if(t===Ti||t===eo)return Mi;break;case hx:if(e){if(t===Ti||t===eo)return Mi}else if(t===wi)return qr;break;case dx:if(t===wi)return qr;if(t===Ti)return Mi;break;case fx:if(t===wi||t===no&&!e)return Mi;break;case Dh:if(!e&&(t===Ti||t===eo))return Mi;break;case Uh:if(!e&&(t===wi||t===no))return Mi;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Bl}function wa(i,t,e,n,r,s,o=!1,a=!1){const l=c=>{s.push(c.x),r>1&&s.push(c.y),r>2&&s.push(c.z),r>3&&s.push(c.w)};Ea.set(0,0,0,0).addScaledVector(i,n.a.x).addScaledVector(t,n.a.y).addScaledVector(e,n.a.z),Gs.set(0,0,0,0).addScaledVector(i,n.b.x).addScaledVector(t,n.b.y).addScaledVector(e,n.b.z),Ws.set(0,0,0,0).addScaledVector(i,n.c.x).addScaledVector(t,n.c.y).addScaledVector(e,n.c.z),a&&(Ea.normalize(),Gs.normalize(),Ws.normalize()),l(Ea),o?(l(Ws),l(Gs)):(l(Gs),l(Ws))}function Ta(i,t,e,n,r,s=!1){for(const o in r){const a=t[o],l=r[o];if(!(o in t))throw new Error(`CSG Operations: Attribute ${o} no available on geometry.`);const c=a.itemSize;o==="position"?(In.fromBufferAttribute(a,i).applyMatrix4(e),l.push(In.x,In.y,In.z)):o==="normal"?(In.fromBufferAttribute(a,i).applyNormalMatrix(n),s&&In.multiplyScalar(-1),l.push(In.x,In.y,In.z)):(l.push(a.getX(i)),c>1&&l.push(a.getY(i)),c>2&&l.push(a.getZ(i)),c>3&&l.push(a.getW(i)))}}class yx{constructor(t){this.triangle=new re().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new re().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class bu{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){const{data:s}=this;s[t]||(s[t]=new yx(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{const l=n[a].intersects;for(const c in l)r.has(c)||(r.add(c),s.push(l[c]))}};if(t!==null)o(t);else for(const a in n)o(a);return s}reset(){this.data={}}}class Mx{constructor(){this.enabled=!1,this.triangleIntersectsA=new bu,this.triangleIntersectsB=new bu,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Eu(this))}complete(){this.enabled&&Eu(null)}}const oi=new $t,po=new Vt,Si=new re,Xs=new re,Qn=new re,Ys=new re,dn=[],Ri=[];function Sx(i){for(const t of i)return t}function Ex(i,t,e,n,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:l}=_x(i,t),c=[];let u=null,d;return d=o?0:-1,Au(i,t,a,e,!1,n,r,d),wu(i,t,a,e,!1,r,d),e.findIndex(m=>m!==Uh&&m!==Dh)!==-1&&(d=o?i.geometry.groups.length||1:-1,Au(t,i,l,e,!0,n,r,d),wu(t,i,l,e,!0,r,d)),dn.length=0,Ri.length=0,{groups:c,materials:u}}function Au(i,t,e,n,r,s,o,a=0){const l=i.matrixWorld.determinant()<0;oi.copy(t.matrixWorld).invert().multiply(i.matrixWorld),po.getNormalMatrix(i.matrixWorld).multiplyScalar(l?-1:1);const c=i.geometry.groupIndices,u=i.geometry.index,d=i.geometry.attributes.position,f=t.geometry.boundsTree,m=t.geometry.index,v=t.geometry.attributes.position,S=e.ids,p=e.intersectionSet;for(let h=0,M=S.length;h<M;h++){const y=S[h],E=a===-1?0:c[y]+a,C=3*y,A=u.getX(C+0),b=u.getX(C+1),x=u.getX(C+2);Si.a.fromBufferAttribute(d,A).applyMatrix4(oi),Si.b.fromBufferAttribute(d,b).applyMatrix4(oi),Si.c.fromBufferAttribute(d,x).applyMatrix4(oi),s.reset(),s.initialize(Si);const _=p[y];for(let w=0,P=_.length;w<P;w++){const U=3*_[w],F=m.getX(U+0),k=m.getX(U+1),B=m.getX(U+2);Xs.a.fromBufferAttribute(v,F),Xs.b.fromBufferAttribute(v,k),Xs.c.fromBufferAttribute(v,B),s.splitByTriangle(Xs)}const g=s.triangles;for(let w=0,P=g.length;w<P;w++){const U=g[w],F=s.coplanarTriangleUsed?gx(U,f):Nh(U,f);dn.length=0,Ri.length=0;for(let k=0,B=n.length;k<B;k++){const V=Fh(n[k],F,r);V!==Bl&&(Ri.push(V),dn.push(o[k].getGroupAttrSet(E)))}if(dn.length!==0){Si.getBarycoord(U.a,Ys.a),Si.getBarycoord(U.b,Ys.b),Si.getBarycoord(U.c,Ys.c);for(let k=0,B=dn.length;k<B;k++){const V=dn[k],et=Ri[k]===qr;vx(y,Ys,i.geometry,i.matrixWorld,po,V,l!==et)}}}}return S.length}function wu(i,t,e,n,r,s,o=0){const a=i.matrixWorld.determinant()<0;oi.copy(t.matrixWorld).invert().multiply(i.matrixWorld),po.getNormalMatrix(i.matrixWorld).multiplyScalar(a?-1:1);const l=t.geometry.boundsTree,c=i.geometry.groupIndices,u=i.geometry.index,d=i.geometry.attributes,f=d.position,m=[],v=i.geometry.halfEdges,S=new Set,p=Ol(i.geometry);for(let h=0,M=p;h<M;h++)h in e.intersectionSet||S.add(h);for(;S.size>0;){const h=Sx(S);S.delete(h),m.push(h);const M=3*h,y=u.getX(M+0),E=u.getX(M+1),C=u.getX(M+2);Qn.a.fromBufferAttribute(f,y).applyMatrix4(oi),Qn.b.fromBufferAttribute(f,E).applyMatrix4(oi),Qn.c.fromBufferAttribute(f,C).applyMatrix4(oi);const A=Nh(Qn,l);Ri.length=0,dn.length=0;for(let b=0,x=n.length;b<x;b++){const _=Fh(n[b],A,r);_!==Bl&&(Ri.push(_),dn.push(s[b]))}for(;m.length>0;){const b=m.pop();for(let x=0;x<3;x++){const _=v.getSiblingTriangleIndex(b,x);_!==-1&&S.has(_)&&(m.push(_),S.delete(_))}if(dn.length!==0){const x=3*b,_=u.getX(x+0),g=u.getX(x+1),w=u.getX(x+2),P=o===-1?0:c[b]+o;if(Qn.a.fromBufferAttribute(f,_),Qn.b.fromBufferAttribute(f,g),Qn.c.fromBufferAttribute(f,w),!ii(Qn))for(let U=0,F=dn.length;U<F;U++){const k=Ri[U],B=dn[U].getGroupAttrSet(P),V=k===qr;xx(_,g,w,d,i.matrixWorld,po,B,V!==a)}}}}}function bx(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function Ax(i,t,e,n){e.clear();const r=i.attributes;for(let s=0,o=n.length;s<o;s++){const a=n[s],l=r[a];e.initializeArray(a,l.array.constructor,l.itemSize,l.normalized)}for(const s in e.attributes)n.includes(s)||e.delete(s);for(const s in t.attributes)n.includes(s)||(t.deleteAttribute(s),t.dispose())}function wx(i,t,e){let n=!1,r=-1;const s=i.attributes,o=t.groupAttributes[0];for(const l in o){const c=t.getTotalLength(l),u=t.getType(l),d=t.getItemSize(l),f=t.getNormalized(l);let m=s[l];(!m||m.array.length<c)&&(m=new Oe(new u(c),d,f),i.setAttribute(l,m),n=!0);let v=0;for(let S=0,p=Math.min(e.length,t.groupCount);S<p;S++){const h=e[S].index,{array:M,type:y,length:E}=t.groupAttributes[h][l],C=new y(M.buffer,0,E);m.array.set(C,v),v+=C.length}m.needsUpdate=!0,r=c/m.itemSize}if(i.index){const l=i.index.array;if(l.length<r)i.index=null,n=!0;else for(let c=0,u=l.length;c<u;c++)l[c]=c}let a=0;i.clearGroups();for(let l=0,c=Math.min(e.length,t.groupCount);l<c;l++){const{index:u,materialIndex:d}=e[l],f=t.getCount(u);f!==0&&(i.addGroup(a,f,d),a+=f)}i.setDrawRange(0,r),i.boundsTree=null,n&&i.dispose()}function Tu(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class Tx{constructor(){this.triangleSplitter=new ax,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new Mx}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,n,r=new fo){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,attributeData:a,attributes:l,useGroups:c,consolidateGroups:u,debug:d}=this;for(;a.length<r.length;)a.push(new cx);r.forEach((h,M)=>{Ax(t.geometry,h.geometry,a[M],l)}),d.init(),Ex(t,e,n,o,a,{useGroups:c}),d.complete();const f=this.getGroupRanges(t.geometry),m=Tu(f,t.material),v=this.getGroupRanges(e.geometry),S=Tu(v,e.material);v.forEach(h=>h.materialIndex+=m.length);let p=[...f,...v].map((h,M)=>({...h,index:M}));if(c){const h=[...m,...S];u&&(p=p.map(y=>{const E=h[y.materialIndex];return y.materialIndex=h.indexOf(E),y}).sort((y,E)=>y.materialIndex-E.materialIndex));const M=[];for(let y=0,E=h.length;y<E;y++){let C=!1;for(let A=0,b=p.length;A<b;A++){const x=p[A];x.materialIndex===y&&(C=!0,x.materialIndex=M.length)}C&&M.push(h[y])}r.forEach(y=>{y.material=M})}else p=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach(h=>{h.material=m[0]});return r.forEach((h,M)=>{const y=h.geometry;wx(y,a[M],p),u&&bx(y.groups)}),s?r:r[0]}evaluateHierarchy(t,e=new fo){t.updateMatrixWorld(!0);const n=(s,o)=>{const a=s.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];u.isOperationGroup?n(u,o):o(u)}},r=s=>{const o=s.children;let a=!1;for(let c=0,u=o.length;c<u;c++){const d=o[c];a=r(d)||a}const l=s.isDirty();if(l&&s.markUpdated(),a&&!s.isOperationGroup){let c;return n(s,u=>{c?c=this.evaluate(c,u,u.operation):c=this.evaluate(s,u,u.operation)}),s._cachedGeometry=c.geometry,s._cachedMaterials=c.material,!0}else return a||l};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}function bo(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function $s(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Oh={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(c,u){if(!r[c]){if(!n[c]){var d=typeof $s=="function"&&$s;if(!u&&d)return d(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}u=r[c]={exports:{}},n[c][0].call(u.exports,function(f){var m=n[c][1][f];return o(m||f)},u,u.exports,e,n,r,s)}return r[c].exports}for(var a=typeof $s=="function"&&$s,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){(function(s,o,a,l,c,u,d,f,m){var v=e("crypto");function S(A,b){b=M(A,b);var x;return(x=b.algorithm!=="passthrough"?v.createHash(b.algorithm):new C).write===void 0&&(x.write=x.update,x.end=x.update),E(b,x).dispatch(A),x.update||x.end(""),x.digest?x.digest(b.encoding==="buffer"?void 0:b.encoding):(A=x.read(),b.encoding!=="buffer"?A.toString(b.encoding):A)}(r=n.exports=S).sha1=function(A){return S(A)},r.keys=function(A){return S(A,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(A){return S(A,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(A){return S(A,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=v.getHashes?v.getHashes().slice():["sha1","md5"],h=(p.push("passthrough"),["buffer","hex","binary","base64"]);function M(A,b){var x={};if(x.algorithm=(b=b||{}).algorithm||"sha1",x.encoding=b.encoding||"hex",x.excludeValues=!!b.excludeValues,x.algorithm=x.algorithm.toLowerCase(),x.encoding=x.encoding.toLowerCase(),x.ignoreUnknown=b.ignoreUnknown===!0,x.respectType=b.respectType!==!1,x.respectFunctionNames=b.respectFunctionNames!==!1,x.respectFunctionProperties=b.respectFunctionProperties!==!1,x.unorderedArrays=b.unorderedArrays===!0,x.unorderedSets=b.unorderedSets!==!1,x.unorderedObjects=b.unorderedObjects!==!1,x.replacer=b.replacer||void 0,x.excludeKeys=b.excludeKeys||void 0,A===void 0)throw new Error("Object argument required.");for(var _=0;_<p.length;++_)p[_].toLowerCase()===x.algorithm.toLowerCase()&&(x.algorithm=p[_]);if(p.indexOf(x.algorithm)===-1)throw new Error('Algorithm "'+x.algorithm+'"  not supported. supported values: '+p.join(", "));if(h.indexOf(x.encoding)===-1&&x.algorithm!=="passthrough")throw new Error('Encoding "'+x.encoding+'"  not supported. supported values: '+h.join(", "));return x}function y(A){if(typeof A=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(A))!=null}function E(A,b,x){x=x||[];function _(g){return b.update?b.update(g,"utf8"):b.write(g,"utf8")}return{dispatch:function(g){return this["_"+((g=A.replacer?A.replacer(g):g)===null?"null":typeof g)](g)},_object:function(g){var w,P=Object.prototype.toString.call(g),U=/\[object (.*)\]/i.exec(P);if(U=(U=U?U[1]:"unknown:["+P+"]").toLowerCase(),0<=(P=x.indexOf(g)))return this.dispatch("[CIRCULAR:"+P+"]");if(x.push(g),a!==void 0&&a.isBuffer&&a.isBuffer(g))return _("buffer:"),_(g);if(U==="object"||U==="function"||U==="asyncfunction")return P=Object.keys(g),A.unorderedObjects&&(P=P.sort()),A.respectType===!1||y(g)||P.splice(0,0,"prototype","__proto__","constructor"),A.excludeKeys&&(P=P.filter(function(F){return!A.excludeKeys(F)})),_("object:"+P.length+":"),w=this,P.forEach(function(F){w.dispatch(F),_(":"),A.excludeValues||w.dispatch(g[F]),_(",")});if(!this["_"+U]){if(A.ignoreUnknown)return _("["+U+"]");throw new Error('Unknown object type "'+U+'"')}this["_"+U](g)},_array:function(g,F){F=F!==void 0?F:A.unorderedArrays!==!1;var P=this;if(_("array:"+g.length+":"),!F||g.length<=1)return g.forEach(function(k){return P.dispatch(k)});var U=[],F=g.map(function(k){var B=new C,V=x.slice();return E(A,B,V).dispatch(k),U=U.concat(V.slice(x.length)),B.read().toString()});return x=x.concat(U),F.sort(),this._array(F,!1)},_date:function(g){return _("date:"+g.toJSON())},_symbol:function(g){return _("symbol:"+g.toString())},_error:function(g){return _("error:"+g.toString())},_boolean:function(g){return _("bool:"+g.toString())},_string:function(g){_("string:"+g.length+":"),_(g.toString())},_function:function(g){_("fn:"),y(g)?this.dispatch("[native]"):this.dispatch(g.toString()),A.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(g.name)),A.respectFunctionProperties&&this._object(g)},_number:function(g){return _("number:"+g.toString())},_xml:function(g){return _("xml:"+g.toString())},_null:function(){return _("Null")},_undefined:function(){return _("Undefined")},_regexp:function(g){return _("regex:"+g.toString())},_uint8array:function(g){return _("uint8array:"),this.dispatch(Array.prototype.slice.call(g))},_uint8clampedarray:function(g){return _("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(g))},_int8array:function(g){return _("int8array:"),this.dispatch(Array.prototype.slice.call(g))},_uint16array:function(g){return _("uint16array:"),this.dispatch(Array.prototype.slice.call(g))},_int16array:function(g){return _("int16array:"),this.dispatch(Array.prototype.slice.call(g))},_uint32array:function(g){return _("uint32array:"),this.dispatch(Array.prototype.slice.call(g))},_int32array:function(g){return _("int32array:"),this.dispatch(Array.prototype.slice.call(g))},_float32array:function(g){return _("float32array:"),this.dispatch(Array.prototype.slice.call(g))},_float64array:function(g){return _("float64array:"),this.dispatch(Array.prototype.slice.call(g))},_arraybuffer:function(g){return _("arraybuffer:"),this.dispatch(new Uint8Array(g))},_url:function(g){return _("url:"+g.toString())},_map:function(g){return _("map:"),g=Array.from(g),this._array(g,A.unorderedSets!==!1)},_set:function(g){return _("set:"),g=Array.from(g),this._array(g,A.unorderedSets!==!1)},_file:function(g){return _("file:"),this.dispatch([g.name,g.size,g.type,g.lastModfied])},_blob:function(){if(A.ignoreUnknown)return _("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return _("domwindow")},_bigint:function(g){return _("bigint:"+g.toString())},_process:function(){return _("process")},_timer:function(){return _("timer")},_pipe:function(){return _("pipe")},_tcp:function(){return _("tcp")},_udp:function(){return _("udp")},_tty:function(){return _("tty")},_statwatcher:function(){return _("statwatcher")},_securecontext:function(){return _("securecontext")},_connection:function(){return _("connection")},_zlib:function(){return _("zlib")},_context:function(){return _("context")},_nodescript:function(){return _("nodescript")},_httpparser:function(){return _("httpparser")},_dataview:function(){return _("dataview")},_signal:function(){return _("signal")},_fsevent:function(){return _("fsevent")},_tlswrap:function(){return _("tlswrap")}}}function C(){return{buf:"",write:function(A){this.buf+=A},end:function(A){this.buf+=A},read:function(){return this.buf}}}r.writeToStream=function(A,b,x){return x===void 0&&(x=b,b={}),E(b=M(A,b),x).dispatch(A)}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,n,r){(function(s,o,a,l,c,u,d,f,m){(function(v){var S=typeof Uint8Array<"u"?Uint8Array:Array,p=43,h=47,M=48,y=97,E=65,C=45,A=95;function b(x){return x=x.charCodeAt(0),x===p||x===C?62:x===h||x===A?63:x<M?-1:x<M+10?x-M+26+26:x<E+26?x-E:x<y+26?x-y+26:void 0}v.toByteArray=function(x){var _,g;if(0<x.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var w=x.length,w=x.charAt(w-2)==="="?2:x.charAt(w-1)==="="?1:0,P=new S(3*x.length/4-w),U=0<w?x.length-4:x.length,F=0;function k(B){P[F++]=B}for(_=0;_<U;_+=4,0)k((16711680&(g=b(x.charAt(_))<<18|b(x.charAt(_+1))<<12|b(x.charAt(_+2))<<6|b(x.charAt(_+3))))>>16),k((65280&g)>>8),k(255&g);return w==2?k(255&(g=b(x.charAt(_))<<2|b(x.charAt(_+1))>>4)):w==1&&(k((g=b(x.charAt(_))<<10|b(x.charAt(_+1))<<4|b(x.charAt(_+2))>>2)>>8&255),k(255&g)),P},v.fromByteArray=function(x){var _,g,w,P,U=x.length%3,F="";function k(B){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(B)}for(_=0,w=x.length-U;_<w;_+=3)g=(x[_]<<16)+(x[_+1]<<8)+x[_+2],F+=k((P=g)>>18&63)+k(P>>12&63)+k(P>>6&63)+k(63&P);switch(U){case 1:F=(F+=k((g=x[x.length-1])>>2))+k(g<<4&63)+"==";break;case 2:F=(F=(F+=k((g=(x[x.length-2]<<8)+x[x.length-1])>>10))+k(g>>4&63))+k(g<<2&63)+"="}return F}})(r===void 0?this.base64js={}:r)}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(e,n,r){(function(s,o,p,l,c,u,d,f,m){var v=e("base64-js"),S=e("ieee754");function p(L,N,H){if(!(this instanceof p))return new p(L,N,H);var D,tt,it,yt,ht=typeof L;if(N==="base64"&&ht=="string")for(L=(yt=L).trim?yt.trim():yt.replace(/^\s+|\s+$/g,"");L.length%4!=0;)L+="=";if(ht=="number")D=Y(L);else if(ht=="string")D=p.byteLength(L,N);else{if(ht!="object")throw new Error("First argument needs to be a number, array or string.");D=Y(L.length)}if(p._useTypedArrays?tt=p._augment(new Uint8Array(D)):((tt=this).length=D,tt._isBuffer=!0),p._useTypedArrays&&typeof L.byteLength=="number")tt._set(L);else if(et(yt=L)||p.isBuffer(yt)||yt&&typeof yt=="object"&&typeof yt.length=="number")for(it=0;it<D;it++)p.isBuffer(L)?tt[it]=L.readUInt8(it):tt[it]=L[it];else if(ht=="string")tt.write(L,0,N);else if(ht=="number"&&!p._useTypedArrays&&!H)for(it=0;it<D;it++)tt[it]=0;return tt}function h(L,N,H,D){return p._charsWritten=Ut(function(tt){for(var it=[],yt=0;yt<tt.length;yt++)it.push(255&tt.charCodeAt(yt));return it}(N),L,H,D)}function M(L,N,H,D){return p._charsWritten=Ut(function(tt){for(var it,yt,ht=[],Ht=0;Ht<tt.length;Ht++)yt=tt.charCodeAt(Ht),it=yt>>8,yt=yt%256,ht.push(yt),ht.push(it);return ht}(N),L,H,D)}function y(L,N,H){var D="";H=Math.min(L.length,H);for(var tt=N;tt<H;tt++)D+=String.fromCharCode(L[tt]);return D}function E(L,N,H,it){it||(Q(typeof H=="boolean","missing or invalid endian"),Q(N!=null,"missing offset"),Q(N+1<L.length,"Trying to read beyond buffer length"));var tt,it=L.length;if(!(it<=N))return H?(tt=L[N],N+1<it&&(tt|=L[N+1]<<8)):(tt=L[N]<<8,N+1<it&&(tt|=L[N+1])),tt}function C(L,N,H,it){it||(Q(typeof H=="boolean","missing or invalid endian"),Q(N!=null,"missing offset"),Q(N+3<L.length,"Trying to read beyond buffer length"));var tt,it=L.length;if(!(it<=N))return H?(N+2<it&&(tt=L[N+2]<<16),N+1<it&&(tt|=L[N+1]<<8),tt|=L[N],N+3<it&&(tt+=L[N+3]<<24>>>0)):(N+1<it&&(tt=L[N+1]<<16),N+2<it&&(tt|=L[N+2]<<8),N+3<it&&(tt|=L[N+3]),tt+=L[N]<<24>>>0),tt}function A(L,N,H,D){if(D||(Q(typeof H=="boolean","missing or invalid endian"),Q(N!=null,"missing offset"),Q(N+1<L.length,"Trying to read beyond buffer length")),!(L.length<=N))return D=E(L,N,H,!0),32768&D?-1*(65535-D+1):D}function b(L,N,H,D){if(D||(Q(typeof H=="boolean","missing or invalid endian"),Q(N!=null,"missing offset"),Q(N+3<L.length,"Trying to read beyond buffer length")),!(L.length<=N))return D=C(L,N,H,!0),2147483648&D?-1*(4294967295-D+1):D}function x(L,N,H,D){return D||(Q(typeof H=="boolean","missing or invalid endian"),Q(N+3<L.length,"Trying to read beyond buffer length")),S.read(L,N,H,23,4)}function _(L,N,H,D){return D||(Q(typeof H=="boolean","missing or invalid endian"),Q(N+7<L.length,"Trying to read beyond buffer length")),S.read(L,N,H,52,8)}function g(L,N,H,D,tt){if(tt||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(H!=null,"missing offset"),Q(H+1<L.length,"trying to write beyond buffer length"),lt(N,65535)),tt=L.length,!(tt<=H))for(var it=0,yt=Math.min(tt-H,2);it<yt;it++)L[H+it]=(N&255<<8*(D?it:1-it))>>>8*(D?it:1-it)}function w(L,N,H,D,tt){if(tt||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(H!=null,"missing offset"),Q(H+3<L.length,"trying to write beyond buffer length"),lt(N,4294967295)),tt=L.length,!(tt<=H))for(var it=0,yt=Math.min(tt-H,4);it<yt;it++)L[H+it]=N>>>8*(D?it:3-it)&255}function P(L,N,H,D,tt){tt||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(H!=null,"missing offset"),Q(H+1<L.length,"Trying to write beyond buffer length"),xt(N,32767,-32768)),L.length<=H||g(L,0<=N?N:65535+N+1,H,D,tt)}function U(L,N,H,D,tt){tt||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(H!=null,"missing offset"),Q(H+3<L.length,"Trying to write beyond buffer length"),xt(N,2147483647,-2147483648)),L.length<=H||w(L,0<=N?N:4294967295+N+1,H,D,tt)}function F(L,N,H,D,tt){tt||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(H!=null,"missing offset"),Q(H+3<L.length,"Trying to write beyond buffer length"),mt(N,34028234663852886e22,-34028234663852886e22)),L.length<=H||S.write(L,N,H,D,23,4)}function k(L,N,H,D,tt){tt||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(H!=null,"missing offset"),Q(H+7<L.length,"Trying to write beyond buffer length"),mt(N,17976931348623157e292,-17976931348623157e292)),L.length<=H||S.write(L,N,H,D,52,8)}r.Buffer=p,r.SlowBuffer=p,r.INSPECT_MAX_BYTES=50,p.poolSize=8192,p._useTypedArrays=function(){try{var L=new ArrayBuffer(0),N=new Uint8Array(L);return N.foo=function(){return 42},N.foo()===42&&typeof N.subarray=="function"}catch{return!1}}(),p.isEncoding=function(L){switch(String(L).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.isBuffer=function(L){return!(L==null||!L._isBuffer)},p.byteLength=function(L,N){var H;switch(L+="",N||"utf8"){case"hex":H=L.length/2;break;case"utf8":case"utf-8":H=pt(L).length;break;case"ascii":case"binary":case"raw":H=L.length;break;case"base64":H=Lt(L).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":H=2*L.length;break;default:throw new Error("Unknown encoding")}return H},p.concat=function(L,N){if(Q(et(L),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),L.length===0)return new p(0);if(L.length===1)return L[0];if(typeof N!="number")for(tt=N=0;tt<L.length;tt++)N+=L[tt].length;for(var H=new p(N),D=0,tt=0;tt<L.length;tt++){var it=L[tt];it.copy(H,D),D+=it.length}return H},p.prototype.write=function(L,N,H,D){isFinite(N)?isFinite(H)||(D=H,H=void 0):(Ht=D,D=N,N=H,H=Ht),N=Number(N)||0;var tt,it,yt,ht,Ht=this.length-N;switch((!H||Ht<(H=Number(H)))&&(H=Ht),D=String(D||"utf8").toLowerCase()){case"hex":tt=function(At,bt,O,R){O=Number(O)||0;var X=At.length-O;(!R||X<(R=Number(R)))&&(R=X),Q((X=bt.length)%2==0,"Invalid hex string"),X/2<R&&(R=X/2);for(var rt=0;rt<R;rt++){var ot=parseInt(bt.substr(2*rt,2),16);Q(!isNaN(ot),"Invalid hex string"),At[O+rt]=ot}return p._charsWritten=2*rt,rt}(this,L,N,H);break;case"utf8":case"utf-8":it=this,yt=N,ht=H,tt=p._charsWritten=Ut(pt(L),it,yt,ht);break;case"ascii":case"binary":tt=h(this,L,N,H);break;case"base64":it=this,yt=N,ht=H,tt=p._charsWritten=Ut(Lt(L),it,yt,ht);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":tt=M(this,L,N,H);break;default:throw new Error("Unknown encoding")}return tt},p.prototype.toString=function(L,N,H){var D,tt,it,yt,ht=this;if(L=String(L||"utf8").toLowerCase(),N=Number(N)||0,(H=H!==void 0?Number(H):ht.length)===N)return"";switch(L){case"hex":D=function(Ht,At,bt){var O=Ht.length;(!At||At<0)&&(At=0),(!bt||bt<0||O<bt)&&(bt=O);for(var R="",X=At;X<bt;X++)R+=nt(Ht[X]);return R}(ht,N,H);break;case"utf8":case"utf-8":D=function(Ht,At,bt){var O="",R="";bt=Math.min(Ht.length,bt);for(var X=At;X<bt;X++)Ht[X]<=127?(O+=J(R)+String.fromCharCode(Ht[X]),R=""):R+="%"+Ht[X].toString(16);return O+J(R)}(ht,N,H);break;case"ascii":case"binary":D=y(ht,N,H);break;case"base64":tt=ht,yt=H,D=(it=N)===0&&yt===tt.length?v.fromByteArray(tt):v.fromByteArray(tt.slice(it,yt));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":D=function(Ht,At,bt){for(var O=Ht.slice(At,bt),R="",X=0;X<O.length;X+=2)R+=String.fromCharCode(O[X]+256*O[X+1]);return R}(ht,N,H);break;default:throw new Error("Unknown encoding")}return D},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},p.prototype.copy=function(L,N,H,D){if(N=N||0,(D=D||D===0?D:this.length)!==(H=H||0)&&L.length!==0&&this.length!==0){Q(H<=D,"sourceEnd < sourceStart"),Q(0<=N&&N<L.length,"targetStart out of bounds"),Q(0<=H&&H<this.length,"sourceStart out of bounds"),Q(0<=D&&D<=this.length,"sourceEnd out of bounds"),D>this.length&&(D=this.length);var tt=(D=L.length-N<D-H?L.length-N+H:D)-H;if(tt<100||!p._useTypedArrays)for(var it=0;it<tt;it++)L[it+N]=this[it+H];else L._set(this.subarray(H,H+tt),N)}},p.prototype.slice=function(L,N){var H=this.length;if(L=V(L,H,0),N=V(N,H,H),p._useTypedArrays)return p._augment(this.subarray(L,N));for(var D=N-L,tt=new p(D,void 0,!0),it=0;it<D;it++)tt[it]=this[it+L];return tt},p.prototype.get=function(L){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(L)},p.prototype.set=function(L,N){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(L,N)},p.prototype.readUInt8=function(L,N){if(N||(Q(L!=null,"missing offset"),Q(L<this.length,"Trying to read beyond buffer length")),!(L>=this.length))return this[L]},p.prototype.readUInt16LE=function(L,N){return E(this,L,!0,N)},p.prototype.readUInt16BE=function(L,N){return E(this,L,!1,N)},p.prototype.readUInt32LE=function(L,N){return C(this,L,!0,N)},p.prototype.readUInt32BE=function(L,N){return C(this,L,!1,N)},p.prototype.readInt8=function(L,N){if(N||(Q(L!=null,"missing offset"),Q(L<this.length,"Trying to read beyond buffer length")),!(L>=this.length))return 128&this[L]?-1*(255-this[L]+1):this[L]},p.prototype.readInt16LE=function(L,N){return A(this,L,!0,N)},p.prototype.readInt16BE=function(L,N){return A(this,L,!1,N)},p.prototype.readInt32LE=function(L,N){return b(this,L,!0,N)},p.prototype.readInt32BE=function(L,N){return b(this,L,!1,N)},p.prototype.readFloatLE=function(L,N){return x(this,L,!0,N)},p.prototype.readFloatBE=function(L,N){return x(this,L,!1,N)},p.prototype.readDoubleLE=function(L,N){return _(this,L,!0,N)},p.prototype.readDoubleBE=function(L,N){return _(this,L,!1,N)},p.prototype.writeUInt8=function(L,N,H){H||(Q(L!=null,"missing value"),Q(N!=null,"missing offset"),Q(N<this.length,"trying to write beyond buffer length"),lt(L,255)),N>=this.length||(this[N]=L)},p.prototype.writeUInt16LE=function(L,N,H){g(this,L,N,!0,H)},p.prototype.writeUInt16BE=function(L,N,H){g(this,L,N,!1,H)},p.prototype.writeUInt32LE=function(L,N,H){w(this,L,N,!0,H)},p.prototype.writeUInt32BE=function(L,N,H){w(this,L,N,!1,H)},p.prototype.writeInt8=function(L,N,H){H||(Q(L!=null,"missing value"),Q(N!=null,"missing offset"),Q(N<this.length,"Trying to write beyond buffer length"),xt(L,127,-128)),N>=this.length||(0<=L?this.writeUInt8(L,N,H):this.writeUInt8(255+L+1,N,H))},p.prototype.writeInt16LE=function(L,N,H){P(this,L,N,!0,H)},p.prototype.writeInt16BE=function(L,N,H){P(this,L,N,!1,H)},p.prototype.writeInt32LE=function(L,N,H){U(this,L,N,!0,H)},p.prototype.writeInt32BE=function(L,N,H){U(this,L,N,!1,H)},p.prototype.writeFloatLE=function(L,N,H){F(this,L,N,!0,H)},p.prototype.writeFloatBE=function(L,N,H){F(this,L,N,!1,H)},p.prototype.writeDoubleLE=function(L,N,H){k(this,L,N,!0,H)},p.prototype.writeDoubleBE=function(L,N,H){k(this,L,N,!1,H)},p.prototype.fill=function(L,N,H){if(N=N||0,H=H||this.length,Q(typeof(L=typeof(L=L||0)=="string"?L.charCodeAt(0):L)=="number"&&!isNaN(L),"value is not a number"),Q(N<=H,"end < start"),H!==N&&this.length!==0){Q(0<=N&&N<this.length,"start out of bounds"),Q(0<=H&&H<=this.length,"end out of bounds");for(var D=N;D<H;D++)this[D]=L}},p.prototype.inspect=function(){for(var L=[],N=this.length,H=0;H<N;H++)if(L[H]=nt(this[H]),H===r.INSPECT_MAX_BYTES){L[H+1]="...";break}return"<Buffer "+L.join(" ")+">"},p.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(p._useTypedArrays)return new p(this).buffer;for(var L=new Uint8Array(this.length),N=0,H=L.length;N<H;N+=1)L[N]=this[N];return L.buffer};var B=p.prototype;function V(L,N,H){return typeof L!="number"?H:N<=(L=~~L)?N:0<=L||0<=(L+=N)?L:0}function Y(L){return(L=~~Math.ceil(+L))<0?0:L}function et(L){return(Array.isArray||function(N){return Object.prototype.toString.call(N)==="[object Array]"})(L)}function nt(L){return L<16?"0"+L.toString(16):L.toString(16)}function pt(L){for(var N=[],H=0;H<L.length;H++){var D=L.charCodeAt(H);if(D<=127)N.push(L.charCodeAt(H));else for(var tt=H,it=(55296<=D&&D<=57343&&H++,encodeURIComponent(L.slice(tt,H+1)).substr(1).split("%")),yt=0;yt<it.length;yt++)N.push(parseInt(it[yt],16))}return N}function Lt(L){return v.toByteArray(L)}function Ut(L,N,H,D){for(var tt=0;tt<D&&!(tt+H>=N.length||tt>=L.length);tt++)N[tt+H]=L[tt];return tt}function J(L){try{return decodeURIComponent(L)}catch{return"�"}}function lt(L,N){Q(typeof L=="number","cannot write a non-number as a number"),Q(0<=L,"specified a negative value for writing an unsigned value"),Q(L<=N,"value is larger than maximum value for type"),Q(Math.floor(L)===L,"value has a fractional component")}function xt(L,N,H){Q(typeof L=="number","cannot write a non-number as a number"),Q(L<=N,"value larger than maximum allowed value"),Q(H<=L,"value smaller than minimum allowed value"),Q(Math.floor(L)===L,"value has a fractional component")}function mt(L,N,H){Q(typeof L=="number","cannot write a non-number as a number"),Q(L<=N,"value larger than maximum allowed value"),Q(H<=L,"value smaller than minimum allowed value")}function Q(L,N){if(!L)throw new Error(N||"Failed assertion")}p._augment=function(L){return L._isBuffer=!0,L._get=L.get,L._set=L.set,L.get=B.get,L.set=B.set,L.write=B.write,L.toString=B.toString,L.toLocaleString=B.toString,L.toJSON=B.toJSON,L.copy=B.copy,L.slice=B.slice,L.readUInt8=B.readUInt8,L.readUInt16LE=B.readUInt16LE,L.readUInt16BE=B.readUInt16BE,L.readUInt32LE=B.readUInt32LE,L.readUInt32BE=B.readUInt32BE,L.readInt8=B.readInt8,L.readInt16LE=B.readInt16LE,L.readInt16BE=B.readInt16BE,L.readInt32LE=B.readInt32LE,L.readInt32BE=B.readInt32BE,L.readFloatLE=B.readFloatLE,L.readFloatBE=B.readFloatBE,L.readDoubleLE=B.readDoubleLE,L.readDoubleBE=B.readDoubleBE,L.writeUInt8=B.writeUInt8,L.writeUInt16LE=B.writeUInt16LE,L.writeUInt16BE=B.writeUInt16BE,L.writeUInt32LE=B.writeUInt32LE,L.writeUInt32BE=B.writeUInt32BE,L.writeInt8=B.writeInt8,L.writeInt16LE=B.writeInt16LE,L.writeInt16BE=B.writeInt16BE,L.writeInt32LE=B.writeInt32LE,L.writeInt32BE=B.writeInt32BE,L.writeFloatLE=B.writeFloatLE,L.writeFloatBE=B.writeFloatBE,L.writeDoubleLE=B.writeDoubleLE,L.writeDoubleBE=B.writeDoubleBE,L.fill=B.fill,L.inspect=B.inspect,L.toArrayBuffer=B.toArrayBuffer,L}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,n,r){(function(s,o,v,l,c,u,d,f,m){var v=e("buffer").Buffer,S=4,p=new v(S);p.fill(0),n.exports={hash:function(h,M,y,E){for(var C=M(function(g,w){g.length%S!=0&&(P=g.length+(S-g.length%S),g=v.concat([g,p],P));for(var P,U=[],F=w?g.readInt32BE:g.readInt32LE,k=0;k<g.length;k+=S)U.push(F.call(g,k));return U}(h=v.isBuffer(h)?h:new v(h),E),8*h.length),M=E,A=new v(y),b=M?A.writeInt32BE:A.writeInt32LE,x=0;x<C.length;x++)b.call(A,C[x],4*x,!0);return A}}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(e,n,r){(function(s,o,v,l,c,u,d,f,m){var v=e("buffer").Buffer,S=e("./sha"),p=e("./sha256"),h=e("./rng"),M={sha1:S,sha256:p,md5:e("./md5")},y=64,E=new v(y);function C(g,w){var P=M[g=g||"sha1"],U=[];return P||A("algorithm:",g,"is not yet supported"),{update:function(F){return v.isBuffer(F)||(F=new v(F)),U.push(F),F.length,this},digest:function(F){var k=v.concat(U),k=w?function(B,V,Y){v.isBuffer(V)||(V=new v(V)),v.isBuffer(Y)||(Y=new v(Y)),V.length>y?V=B(V):V.length<y&&(V=v.concat([V,E],y));for(var et=new v(y),nt=new v(y),pt=0;pt<y;pt++)et[pt]=54^V[pt],nt[pt]=92^V[pt];return Y=B(v.concat([et,Y])),B(v.concat([nt,Y]))}(P,w,k):P(k);return U=null,F?k.toString(F):k}}}function A(){var g=[].slice.call(arguments).join(" ");throw new Error([g,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}E.fill(0),r.createHash=function(g){return C(g)},r.createHmac=C,r.randomBytes=function(g,w){if(!w||!w.call)return new v(h(g));try{w.call(this,void 0,new v(h(g)))}catch(P){w(P)}};var b,x=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],_=function(g){r[g]=function(){A("sorry,",g,"is not implemented yet")}};for(b in x)_(x[b])}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,n,r){(function(s,o,a,l,c,u,d,f,m){var v=e("./helpers");function S(A,b){A[b>>5]|=128<<b%32,A[14+(b+64>>>9<<4)]=b;for(var x=1732584193,_=-271733879,g=-1732584194,w=271733878,P=0;P<A.length;P+=16){var U=x,F=_,k=g,B=w,x=h(x,_,g,w,A[P+0],7,-680876936),w=h(w,x,_,g,A[P+1],12,-389564586),g=h(g,w,x,_,A[P+2],17,606105819),_=h(_,g,w,x,A[P+3],22,-1044525330);x=h(x,_,g,w,A[P+4],7,-176418897),w=h(w,x,_,g,A[P+5],12,1200080426),g=h(g,w,x,_,A[P+6],17,-1473231341),_=h(_,g,w,x,A[P+7],22,-45705983),x=h(x,_,g,w,A[P+8],7,1770035416),w=h(w,x,_,g,A[P+9],12,-1958414417),g=h(g,w,x,_,A[P+10],17,-42063),_=h(_,g,w,x,A[P+11],22,-1990404162),x=h(x,_,g,w,A[P+12],7,1804603682),w=h(w,x,_,g,A[P+13],12,-40341101),g=h(g,w,x,_,A[P+14],17,-1502002290),x=M(x,_=h(_,g,w,x,A[P+15],22,1236535329),g,w,A[P+1],5,-165796510),w=M(w,x,_,g,A[P+6],9,-1069501632),g=M(g,w,x,_,A[P+11],14,643717713),_=M(_,g,w,x,A[P+0],20,-373897302),x=M(x,_,g,w,A[P+5],5,-701558691),w=M(w,x,_,g,A[P+10],9,38016083),g=M(g,w,x,_,A[P+15],14,-660478335),_=M(_,g,w,x,A[P+4],20,-405537848),x=M(x,_,g,w,A[P+9],5,568446438),w=M(w,x,_,g,A[P+14],9,-1019803690),g=M(g,w,x,_,A[P+3],14,-187363961),_=M(_,g,w,x,A[P+8],20,1163531501),x=M(x,_,g,w,A[P+13],5,-1444681467),w=M(w,x,_,g,A[P+2],9,-51403784),g=M(g,w,x,_,A[P+7],14,1735328473),x=y(x,_=M(_,g,w,x,A[P+12],20,-1926607734),g,w,A[P+5],4,-378558),w=y(w,x,_,g,A[P+8],11,-2022574463),g=y(g,w,x,_,A[P+11],16,1839030562),_=y(_,g,w,x,A[P+14],23,-35309556),x=y(x,_,g,w,A[P+1],4,-1530992060),w=y(w,x,_,g,A[P+4],11,1272893353),g=y(g,w,x,_,A[P+7],16,-155497632),_=y(_,g,w,x,A[P+10],23,-1094730640),x=y(x,_,g,w,A[P+13],4,681279174),w=y(w,x,_,g,A[P+0],11,-358537222),g=y(g,w,x,_,A[P+3],16,-722521979),_=y(_,g,w,x,A[P+6],23,76029189),x=y(x,_,g,w,A[P+9],4,-640364487),w=y(w,x,_,g,A[P+12],11,-421815835),g=y(g,w,x,_,A[P+15],16,530742520),x=E(x,_=y(_,g,w,x,A[P+2],23,-995338651),g,w,A[P+0],6,-198630844),w=E(w,x,_,g,A[P+7],10,1126891415),g=E(g,w,x,_,A[P+14],15,-1416354905),_=E(_,g,w,x,A[P+5],21,-57434055),x=E(x,_,g,w,A[P+12],6,1700485571),w=E(w,x,_,g,A[P+3],10,-1894986606),g=E(g,w,x,_,A[P+10],15,-1051523),_=E(_,g,w,x,A[P+1],21,-2054922799),x=E(x,_,g,w,A[P+8],6,1873313359),w=E(w,x,_,g,A[P+15],10,-30611744),g=E(g,w,x,_,A[P+6],15,-1560198380),_=E(_,g,w,x,A[P+13],21,1309151649),x=E(x,_,g,w,A[P+4],6,-145523070),w=E(w,x,_,g,A[P+11],10,-1120210379),g=E(g,w,x,_,A[P+2],15,718787259),_=E(_,g,w,x,A[P+9],21,-343485551),x=C(x,U),_=C(_,F),g=C(g,k),w=C(w,B)}return Array(x,_,g,w)}function p(A,b,x,_,g,w){return C((b=C(C(b,A),C(_,w)))<<g|b>>>32-g,x)}function h(A,b,x,_,g,w,P){return p(b&x|~b&_,A,b,g,w,P)}function M(A,b,x,_,g,w,P){return p(b&_|x&~_,A,b,g,w,P)}function y(A,b,x,_,g,w,P){return p(b^x^_,A,b,g,w,P)}function E(A,b,x,_,g,w,P){return p(x^(b|~_),A,b,g,w,P)}function C(A,b){var x=(65535&A)+(65535&b);return(A>>16)+(b>>16)+(x>>16)<<16|65535&x}n.exports=function(A){return v.hash(A,S,16)}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,n,r){(function(s,o,a,l,c,u,d,f,m){n.exports=function(v){for(var S,p=new Array(v),h=0;h<v;h++)!(3&h)&&(S=4294967296*Math.random()),p[h]=S>>>((3&h)<<3)&255;return p}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(e,n,r){(function(s,o,a,l,c,u,d,f,m){var v=e("./helpers");function S(M,y){M[y>>5]|=128<<24-y%32,M[15+(y+64>>9<<4)]=y;for(var E,C,A,b=Array(80),x=1732584193,_=-271733879,g=-1732584194,w=271733878,P=-1009589776,U=0;U<M.length;U+=16){for(var F=x,k=_,B=g,V=w,Y=P,et=0;et<80;et++){b[et]=et<16?M[U+et]:h(b[et-3]^b[et-8]^b[et-14]^b[et-16],1);var nt=p(p(h(x,5),(nt=_,C=g,A=w,(E=et)<20?nt&C|~nt&A:!(E<40)&&E<60?nt&C|nt&A|C&A:nt^C^A)),p(p(P,b[et]),(E=et)<20?1518500249:E<40?1859775393:E<60?-1894007588:-899497514)),P=w,w=g,g=h(_,30),_=x,x=nt}x=p(x,F),_=p(_,k),g=p(g,B),w=p(w,V),P=p(P,Y)}return Array(x,_,g,w,P)}function p(M,y){var E=(65535&M)+(65535&y);return(M>>16)+(y>>16)+(E>>16)<<16|65535&E}function h(M,y){return M<<y|M>>>32-y}n.exports=function(M){return v.hash(M,S,20,!0)}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,n,r){(function(s,o,a,l,c,u,d,f,m){function v(y,E){var C=(65535&y)+(65535&E);return(y>>16)+(E>>16)+(C>>16)<<16|65535&C}function S(y,E){var C,A=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),b=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),x=new Array(64);y[E>>5]|=128<<24-E%32,y[15+(E+64>>9<<4)]=E;for(var _,g,w=0;w<y.length;w+=16){for(var P=b[0],U=b[1],F=b[2],k=b[3],B=b[4],V=b[5],Y=b[6],et=b[7],nt=0;nt<64;nt++)x[nt]=nt<16?y[nt+w]:v(v(v((g=x[nt-2],h(g,17)^h(g,19)^M(g,10)),x[nt-7]),(g=x[nt-15],h(g,7)^h(g,18)^M(g,3))),x[nt-16]),C=v(v(v(v(et,h(g=B,6)^h(g,11)^h(g,25)),B&V^~B&Y),A[nt]),x[nt]),_=v(h(_=P,2)^h(_,13)^h(_,22),P&U^P&F^U&F),et=Y,Y=V,V=B,B=v(k,C),k=F,F=U,U=P,P=v(C,_);b[0]=v(P,b[0]),b[1]=v(U,b[1]),b[2]=v(F,b[2]),b[3]=v(k,b[3]),b[4]=v(B,b[4]),b[5]=v(V,b[5]),b[6]=v(Y,b[6]),b[7]=v(et,b[7])}return b}var p=e("./helpers"),h=function(y,E){return y>>>E|y<<32-E},M=function(y,E){return y>>>E};n.exports=function(y){return p.hash(y,S,32,!0)}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,n,r){(function(s,o,a,l,c,u,d,f,m){r.read=function(v,S,p,h,w){var y,E,C=8*w-h-1,A=(1<<C)-1,b=A>>1,x=-7,_=p?w-1:0,g=p?-1:1,w=v[S+_];for(_+=g,y=w&(1<<-x)-1,w>>=-x,x+=C;0<x;y=256*y+v[S+_],_+=g,x-=8);for(E=y&(1<<-x)-1,y>>=-x,x+=h;0<x;E=256*E+v[S+_],_+=g,x-=8);if(y===0)y=1-b;else{if(y===A)return E?NaN:1/0*(w?-1:1);E+=Math.pow(2,h),y-=b}return(w?-1:1)*E*Math.pow(2,y-h)},r.write=function(v,S,p,h,M,P){var E,C,A=8*P-M-1,b=(1<<A)-1,x=b>>1,_=M===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=h?0:P-1,w=h?1:-1,P=S<0||S===0&&1/S<0?1:0;for(S=Math.abs(S),isNaN(S)||S===1/0?(C=isNaN(S)?1:0,E=b):(E=Math.floor(Math.log(S)/Math.LN2),S*(h=Math.pow(2,-E))<1&&(E--,h*=2),2<=(S+=1<=E+x?_/h:_*Math.pow(2,1-x))*h&&(E++,h/=2),b<=E+x?(C=0,E=b):1<=E+x?(C=(S*h-1)*Math.pow(2,M),E+=x):(C=S*Math.pow(2,x-1)*Math.pow(2,M),E=0));8<=M;v[p+g]=255&C,g+=w,C/=256,M-=8);for(E=E<<M|C,A+=M;0<A;v[p+g]=255&E,g+=w,E/=256,A-=8);v[p+g-w]|=128*P}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(e,n,r){(function(s,o,a,l,c,u,d,f,m){var v,S,p;function h(){}(s=n.exports={}).nextTick=(S=typeof window<"u"&&window.setImmediate,p=typeof window<"u"&&window.postMessage&&window.addEventListener,S?function(M){return window.setImmediate(M)}:p?(v=[],window.addEventListener("message",function(M){var y=M.source;y!==window&&y!==null||M.data!=="process-tick"||(M.stopPropagation(),0<v.length&&v.shift()())},!0),function(M){v.push(M),window.postMessage("process-tick","*")}):function(M){setTimeout(M,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=h,s.addListener=h,s.once=h,s.off=h,s.removeListener=h,s.removeAllListeners=h,s.emit=h,s.binding=function(M){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(M){throw new Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Oh);var Cx=Oh.exports;const Rx=bo(Cx);var Bh=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],Px=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],zh=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],Lx=Bh,Ix=Lx.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),vl=zh;vl=vl.slice().filter(function(i){return!/^(gl\_|texture)/.test(i)});var Dx=vl.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),Ux=Wx,Nx=Bh,Cu=Px,Fx=zh,Ox=Ix,Bx=Dx,un=999,Ru=9999,Ca=0,Ra=1,Pu=2,Lu=3,Iu=4,Hr=5,zx=6,kx=7,Hx=8,Du=9,Vx=10,Uu=11,Gx=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function Wx(i){var t=0,e=0,n=un,r,s,o=[],a=[],l=1,c=0,u=0,d=!1,f=!1,m="",v;i=i||{};var S=Fx,p=Nx;i.version==="300 es"&&(S=Bx,p=Ox);for(var h={},M={},t=0;t<S.length;t++)h[S[t]]=!0;for(var t=0;t<p.length;t++)M[p[t]]=!0;return function(V){return a=[],V!==null?E(V):C()};function y(V){V.length&&a.push({type:Gx[n],data:V,position:u,line:l,column:c})}function E(V){t=0,V.toString&&(V=V.toString()),m+=V.replace(/\r\n/g,`
`),v=m.length;for(var Y;r=m[t],t<v;){switch(Y=t,n){case Ca:t=g();break;case Ra:t=_();break;case Pu:t=x();break;case Lu:t=w();break;case Iu:t=F();break;case Uu:t=U();break;case Hr:t=k();break;case Ru:t=B();break;case Du:t=b();break;case un:t=A();break}if(Y!==t)switch(m[Y]){case`
`:c=0,++l;break;default:++c;break}}return e+=t,m=m.slice(t),a}function C(V){return o.length&&y(o.join("")),n=Vx,y("(eof)"),a}function A(){return o=o.length?[]:o,s==="/"&&r==="*"?(u=e+t-1,n=Ca,s=r,t+1):s==="/"&&r==="/"?(u=e+t-1,n=Ra,s=r,t+1):r==="#"?(n=Pu,u=e+t,t):/\s/.test(r)?(n=Du,u=e+t,t):(d=/\d/.test(r),f=/[^\w_]/.test(r),u=e+t,n=d?Iu:f?Lu:Ru,t)}function b(){return/[^\s]/g.test(r)?(y(o.join("")),n=un,t):(o.push(r),s=r,t+1)}function x(){return(r==="\r"||r===`
`)&&s!=="\\"?(y(o.join("")),n=un,t):(o.push(r),s=r,t+1)}function _(){return x()}function g(){return r==="/"&&s==="*"?(o.push(r),y(o.join("")),n=un,t+1):(o.push(r),s=r,t+1)}function w(){if(s==="."&&/\d/.test(r))return n=Hr,t;if(s==="/"&&r==="*")return n=Ca,t;if(s==="/"&&r==="/")return n=Ra,t;if(r==="."&&o.length){for(;P(o););return n=Hr,t}if(r===";"||r===")"||r==="("){if(o.length)for(;P(o););return y(r),n=un,t+1}var V=o.length===2&&r!=="=";if(/[\w_\d\s]/.test(r)||V){for(;P(o););return n=un,t}return o.push(r),s=r,t+1}function P(V){var Y=0,et,nt;do{if(et=Cu.indexOf(V.slice(0,V.length+Y).join("")),nt=Cu[et],et===-1){if(Y--+V.length>0)continue;nt=V.slice(0,1).join("")}return y(nt),u+=nt.length,o=o.slice(nt.length),o.length}while(!0)}function U(){return/[^a-fA-F0-9]/.test(r)?(y(o.join("")),n=un,t):(o.push(r),s=r,t+1)}function F(){return r==="."||/[eE]/.test(r)?(o.push(r),n=Hr,s=r,t+1):r==="x"&&o.length===1&&o[0]==="0"?(n=Uu,o.push(r),s=r,t+1):/[^\d]/.test(r)?(y(o.join("")),n=un,t):(o.push(r),s=r,t+1)}function k(){return r==="f"&&(o.push(r),s=r,t+=1),/[eE]/.test(r)||(r==="-"||r==="+")&&/[eE]/.test(s)?(o.push(r),s=r,t+1):/[^\d]/.test(r)?(y(o.join("")),n=un,t):(o.push(r),s=r,t+1)}function B(){if(/[^\d\w_]/.test(r)){var V=o.join("");return M[V]?n=Hx:h[V]?n=kx:n=zx,y(o.join("")),n=un,t}return o.push(r),s=r,t+1}}var Xx=Ux,Yx=$x;function $x(i,t){var e=Xx(t),n=[];return n=n.concat(e(i)),n=n.concat(e(null)),n}const jx=bo(Yx);var qx=Kx;function Kx(i){for(var t=[],e=0;e<i.length;e++)i[e].type!=="eof"&&t.push(i[e].data);return t.join("")}const Nu=bo(qx);var Zx=Jx;function Jx(i){var t=null,e=null,n=0,r=0,s=0,o=0,a=0,l=[],c,u,d;for(c=0,u;c<i.length;c++)if(d=i[c],d.data==="{"){if(n&&n++||(u=m(c,ti(")"),ti()),u<0)||(o=u,u=m(u,ti("("),ti(")")),u<0)||(a=u,u=m(u,Vr),u<0)||i[u].type!=="ident"||(e=i[u].data,u=m(u,Vr),u<0))continue;n=1,r=c,t=i[u].data,s=u;var f=m(u,Vr);switch(i[f]&&i[f].data){case"lowp":case"highp":case"mediump":s=f}}else if(n&&d.data==="}"){if(--n)continue;l.push({name:e,type:t,body:[r+1,c],args:[a,o+1],outer:[s,c+1]})}for(c=0;c<i.length;c++)if(d=i[c],d.data===";"){if(u=m(c,ti(")"),ti()),u<0||(o=u,u=m(u,ti("("),ti(")")),u<0)||(a=u,u=m(u,Vr),u<0)||i[u].type!=="ident"||(e=i[u].data,u=m(u,Vr),u<0)||i[u].type==="operator"||i[u].data==="return")continue;t=i[u].data,l.push({name:e,type:t,body:!1,args:[a,o+1],outer:[u,c+1]})}return l.sort(function(v,S){return v.outer[0]-S.outer[0]});function m(v,S,p){for(var h=v-1;h>=0;h--){if(S(i[h]))return h;if(p&&p(i[h]))return-1}return-1}}function ti(i){return function(t){return t.type==="operator"&&(!i||t.data===i)}}function Vr(i){return i.type!=="whitespace"}const Qx=bo(Zx);function ty(i,t){if(typeof i!="object"||i===null)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var n=e.call(i,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function kh(i){var t=ty(i,"string");return typeof t=="symbol"?t:String(t)}function Zt(i,t,e){return t=kh(t),t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function Fu(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,n)}return e}function ur(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Fu(Object(e),!0).forEach(function(n){Zt(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):Fu(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}function ey(i,t){if(i==null)return{};var e={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&(e[r]=i[r]);return e}function ny(i,t){if(i==null)return{};var e=ey(i,t),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(e[n]=i[n])}return e}function iy(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function ry(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,kh(n.key),n)}}function sy(i,t,e){return t&&ry(i.prototype,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function Hh(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function xl(i,t){return xl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},xl(i,t)}function oy(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),t&&xl(i,t)}function mo(i){return mo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},mo(i)}function ay(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ly(i,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Hh(i)}function cy(i){var t=ay();return function(){var n=mo(i),r;if(t){var s=mo(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return ly(this,r)}}var Bt={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},De,hr,uy=(De={},Zt(De,"".concat(Bt.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Bt.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),Zt(De,"".concat(Bt.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Bt.position,`;
  `)}),Zt(De,"".concat(Bt.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Bt.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),Zt(De,"".concat(Bt.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Bt.pointSize,`;
    `)}),Zt(De,"".concat(Bt.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Bt.diffuseColor,`;
  `)}),Zt(De,"".concat(Bt.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Bt.fragColor,`;
  `)}),Zt(De,"".concat(Bt.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Bt.emissive,`;
    `)}),Zt(De,"".concat(Bt.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Bt.roughness,`;
    `)}),Zt(De,"".concat(Bt.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Bt.metalness,`;
    `)}),Zt(De,"".concat(Bt.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Bt.ao,`;
    `)}),Zt(De,"".concat(Bt.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Bt.bump," - (dot(").concat(Bt.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),Zt(De,"".concat(Bt.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Bt.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Bt.depthAlpha,`;
    `)}),De),hy=(hr={},Zt(hr,"".concat(Bt.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Bt.position,`, 1.0 );
  `)}),Zt(hr,"".concat(Bt.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Bt.position,`;
  `)}),Zt(hr,"".concat(Bt.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Bt.diffuseColor,`;
  `)}),Zt(hr,"".concat(Bt.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Bt.fragColor,`;
  `)}),hr),fy=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,dy=`
    varying mat4 csm_internal_vModelViewMatrix;
`,py=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,my=`
    varying mat4 csm_internal_vModelViewMatrix;
`,gy=`
    
`,Ue,_y=(Ue={},Zt(Ue,"".concat(Bt.position),"*"),Zt(Ue,"".concat(Bt.positionRaw),"*"),Zt(Ue,"".concat(Bt.normal),"*"),Zt(Ue,"".concat(Bt.pointSize),["PointsMaterial"]),Zt(Ue,"".concat(Bt.diffuseColor),"*"),Zt(Ue,"".concat(Bt.fragColor),"*"),Zt(Ue,"".concat(Bt.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),Zt(Ue,"".concat(Bt.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),Zt(Ue,"".concat(Bt.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),Zt(Ue,"".concat(Bt.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),Zt(Ue,"".concat(Bt.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),Zt(Ue,"".concat(Bt.depthAlpha),"*"),Ue),vy=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],xy=function(t,e,n){return t.split(e).join(n)},yy=function(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},My=function(t,e){return new RegExp("\\b".concat(yy(e),"\\b")).test(t)};function Sy(i){try{new i}catch(t){if(t.message.indexOf("is not a constructor")>=0)return!1}return!0}function Ey(i,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(i,t);var n=Object.getPrototypeOf(t);Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(r){var s=typeof r[1].get=="function",o=typeof r[1].set=="function",a=typeof r[1].value=="function",l=r[0]==="constructor";return(s||o||a)&&!l}).forEach(function(r){if(typeof i[r[0]]=="function"){e||console.warn("Function ".concat(r[0]," already exists on CSM, renaming to base_").concat(r[0]));var s="base_".concat(r[0]);i[s]=r[1].value.bind(i);return}Object.defineProperty(i,r[0],r[1])})}function by(i){var t=i.toString().trim(),e=t.substring(t.indexOf("{")+1,t.lastIndexOf("}"));return e.trim().length===0}function Ou(i){return i.replace(/\s/g,"")}function Ay(i,t,e){var n=i.lastIndexOf(t);return n===-1?i:i.substring(0,n)+e+i.substring(n+t.length)}var Vh=function(i){oy(e,i);var t=cy(e);function e(n){var r,s=n.baseMaterial,o=n.fragmentShader,a=n.vertexShader,l=n.uniforms,c=n.patchMap,u=n.cacheKey,d=n.silent,f=ny(n,vy);iy(this,e);var m;if(Sy(s)?m=new s(f):(m=s,Object.assign(m,f)),m.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");r=t.call(this),Ey(Hh(r),m,d),r.__csm={patchMap:c||{},fragmentShader:o||"",vertexShader:a||"",cacheKey:u,baseMaterial:s,instanceID:nh.generateUUID(),type:m.type,isAlreadyExtended:!by(m.onBeforeCompile),cacheHash:"",silent:d},r.uniforms=ur(ur({},r.uniforms||{}),l||{});{var v=r.__csm,S=v.fragmentShader,p=v.vertexShader,h=r.uniforms;r.__csm.cacheHash=r.getCacheHash(),r.generateMaterial(S,p,h)}return r}return sy(e,[{key:"update",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=r.uniforms||this.uniforms,Object.assign(this.__csm,r);var s=this.__csm,o=s.fragmentShader,a=s.vertexShader,l=this.uniforms,c=this.getCacheHash();this.__csm.cacheHash=c,this.generateMaterial(o,a,l)}},{key:"clone",value:function(){var r={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},s=new this.constructor(r);return Object.assign(this,s),s}},{key:"getCacheHash",value:function(){var r=this.__csm,s=r.fragmentShader,o=r.vertexShader,a=this.uniforms,l=Object.values(a).reduce(function(u,d){var f=d.value;return u+JSON.stringify(f)},""),c=Ou(s)+Ou(o)+l;return c.trim().length>0?Rx(c):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(r,s,o){var a=this,l=this.parseShader(r),c=this.parseShader(s);this.uniforms=o||{},this.customProgramCacheKey=function(){return a.__csm.cacheHash};var u=function(m){try{if(l){var v=a.patchShader(l,m.fragmentShader,!0);m.fragmentShader=a.getMaterialDefine()+v}if(c){var S=a.patchShader(c,m.vertexShader);m.vertexShader=`#define IS_VERTEX;
`+S,m.vertexShader=a.getMaterialDefine()+m.vertexShader}m.uniforms=ur(ur({},m.uniforms),a.uniforms),a.uniforms=m.uniforms}catch(p){console.error(p)}};if(this.__csm.isAlreadyExtended){var d=this.onBeforeCompile;this.onBeforeCompile=function(f,m){d(f,m),u(f)}}else this.onBeforeCompile=u;this.needsUpdate=!0}},{key:"patchShader",value:function(r,s,o){var a=this,l=s,c=ur(ur({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(c).forEach(function(f){Object.keys(c[f]).forEach(function(m){var v=_y[f],S=a.__csm.type;if(f==="*"||My(r.main,f))if(!v||Array.isArray(v)&&v.includes(S)||v==="*")l=xy(l,m,c[f][m]);else throw new Error("CSM: ".concat(f," is not available in ").concat(S,". Shader cannot compile."))})}),l=l.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(o?my:dy,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(r.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(fy,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(o?gy:py,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var u=this.__csm.isAlreadyExtended,d=l.includes("// CSM_END");return u&&d?l=Ay(l,"// CSM_END",`
          // CSM_END
          `.concat(r.main,`
          // CSM_END
        `)):l=l.replace("// CSM_START",`
        // CSM_START
        `.concat(r.main,`
        // CSM_END
          `)),l=r.defines+l,l}},{key:"parseShader",value:function(r){if(r){var s=r.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),o=jx(s),a=Qx(o),l=a.map(function(d){return d.name}).indexOf("main"),c=Nu(o.slice(0,l>=0?a[l].outer[0]:void 0)),u=l>=0?this.getShaderFromIndex(o,a[l].body):"";return{defines:"",header:c,main:u}}}},{key:"getMaterialDefine",value:function(){var r=this.__csm.type;return r?"#define IS_".concat(r.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return hy;default:return uy}}},{key:"getShaderFromIndex",value:function(r,s){return Nu(r.slice(s[0],s[1]))}}]),e}(Ui);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class vn{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),vn.nextNameID=vn.nextNameID||0,this.$name.id=`lil-gui-name-${++vn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class wy extends vn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function yl(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Ty={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:yl,toHexString:yl},Jr={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Cy={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=Jr.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return Jr.toHexString(r)}},Ry={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Jr.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return Jr.toHexString(r)}},Py=[Ty,Jr,Cy,Ry];function Ly(i){return Py.find(t=>t.match(i))}class Iy extends vn{constructor(t,e,n,r){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ly(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=yl(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Pa extends vn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Dy extends vn{constructor(t,e,n,r,s,o){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+M),this.$input.value=this.getValue())},r=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},s=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let o=!1,a,l,c,u,d;const f=5,m=M=>{a=M.clientX,l=c=M.clientY,o=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",S)},v=M=>{if(o){const y=M.clientX-a,E=M.clientY-l;Math.abs(E)>f?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>f&&S()}if(!o){const y=M.clientY-c;d-=y*this._step*this._arrowKeyMultiplier(M),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}c=M.clientY},S=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",S)},p=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(h,M,y,E,C)=>(h-M)/(y-M)*(C-E)+E,e=h=>{const M=this.$slider.getBoundingClientRect();let y=t(h,M.left,M.right,this._min,this._max);this._snapClampSetValue(y)},n=h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=h=>{e(h.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),o=!1},u=h=>{h.touches.length>1||(this._hasScrollBar?(a=h.touches[0].clientX,l=h.touches[0].clientY,o=!0):c(h),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},d=h=>{if(o){const M=h.touches[0].clientX-a,y=h.touches[0].clientY-l;Math.abs(M)>Math.abs(y)?c(h):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else h.preventDefault(),e(h.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),v=400;let S;const p=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const y=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(S),S=setTimeout(m,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Uy extends vn{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Ny extends vn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Fy=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Oy(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Bu=!1;class zl{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Bu&&a&&(Oy(Fy),Bu=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(t,e,n,r,s){if(Object(n)===n)return new Uy(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Dy(this,t,e,n,r,s);case"boolean":return new wy(this,t,e);case"string":return new Ny(this,t,e);case"function":return new Pa(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Iy(this,t,e,n)}addFolder(t){const e=new zl({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Pa||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Pa)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}var Gh=`uniform float uTime;
uniform float uPositionFrequency;
uniform float uStrength;
uniform float uWarpFrequency;
uniform float uWarpStrength;

varying vec3 vPosition;
varying float vUpDot;

vec3 permute(vec3 x) { return mod(((x*44.0)+1.0)*x, 299.0); }

float simplexNoise2d(vec2 v)
{
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 299.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float getElevation(vec2 position)
{

    vec2 warpedPosition = position;
    warpedPosition += uTime * 0.2;
    warpedPosition += simplexNoise2d(warpedPosition * uPositionFrequency * uWarpFrequency) * uWarpStrength;

    float elevation = 0.0;
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency      ) / 2.0;
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency * 2.0) / 4.0;
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency * 4.0) / 8.0;

    float elevationSign = sign(elevation);
    elevation = pow(abs(elevation), 2.0) * elevationSign;
    elevation *= uStrength;

    return elevation;
}
void main()
{
    
    float shift = 0.01;
    vec3 positionA = position + vec3(shift, 0.0, 0.0);
    vec3 positionB = position + vec3(0.0, 0.0, - shift);

    
    float elevation = getElevation(csm_Position.xz);
    csm_Position.y += elevation;
    positionA.y = getElevation(positionA.xz);
    positionB.y = getElevation(positionB.xz);

    
    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);

    
    vPosition = csm_Position;
    vPosition.xz += uTime * 0.2;
    vUpDot = dot(csm_Normal, vec3(0.0, 1.0, 0.0));
}`,By=`uniform vec3 uColorWaterDeep;
uniform vec3 uColorWaterSurface;
uniform vec3 uColorSand;
uniform vec3 uColorGrass;
uniform vec3 uColorSnow;
uniform vec3 uColorRock;

varying vec3 vPosition;
varying float vUpDot;

vec3 permute(vec3 x) { return mod(((x*44.0)+1.0)*x, 299.0); }

float simplexNoise2d(vec2 v)
{
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 299.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

void main()
{
    
    vec3 color = vec3(1.0);

    
    float surfaceWaterMix = smoothstep(- 1.0, - 0.1, vPosition.y);
    color = mix(uColorWaterDeep, uColorWaterSurface, surfaceWaterMix);

    
    float sandMix = step(- 0.1, vPosition.y);
    color = mix(color, uColorSand, sandMix);

    
    float grassMix = step(- 0.06, vPosition.y);
    color = mix(color, uColorGrass, grassMix);

    
    float rockMix = vUpDot;
    rockMix = 1.0 - step(0.8, rockMix);
    rockMix *= step(- 0.06, vPosition.y);
    color = mix(color, uColorRock, rockMix);

    
    float snowThreshold = 0.45;
    snowThreshold += simplexNoise2d(vPosition.xz * 15.0) * 0.1;
    float snowMix = step(snowThreshold, vPosition.y);
    color = mix(color, uColorSnow, snowMix);

    
    csm_DiffuseColor = vec4(color, 1.0);
}`;const Mn=new zl({width:325}),ie={},Wh=document.querySelector("canvas.webgl"),zn=new x0,zy=new N0;zy.load("/spruit_sunrise.hdr",i=>{i.mapping=so,zn.background=i,zn.backgroundBlurriness=.5,zn.environment=i});const Ao=new Ar(10,10,500,500);Ao.deleteAttribute("uv");Ao.deleteAttribute("normal");Ao.rotateX(-Math.PI*.5);ie.colorWaterDeep="#002b3d";ie.colorWaterSurface="#66a8ff";ie.colorSand="#ffe894";ie.colorGrass="#85d534";ie.colorSnow="#ffffff";ie.colorRock="#bfbd8d";const Xe={uTime:new Ve(0),uPositionFrequency:new Ve(.2),uStrength:new Ve(2),uWarpFrequency:new Ve(5),uWarpStrength:new Ve(.5),uColorWaterDeep:new Ve(new Wt(ie.colorWaterDeep)),uColorWaterSurface:new Ve(new Wt(ie.colorWaterSurface)),uColorSand:new Ve(new Wt(ie.colorSand)),uColorGrass:new Ve(new Wt(ie.colorGrass)),uColorSnow:new Ve(new Wt(ie.colorSnow)),uColorRock:new Ve(new Wt(ie.colorRock))};Mn.add(Xe.uPositionFrequency,"value",0,1,.001).name("uPositionFrequency");Mn.add(Xe.uStrength,"value",0,10,.001).name("uStrength");Mn.add(Xe.uWarpFrequency,"value",0,10,.001).name("uWarpFrequency");Mn.add(Xe.uWarpStrength,"value",0,1,.001).name("uWarpStrength");Mn.addColor(ie,"colorWaterDeep").onChange(()=>Xe.uColorWaterDeep.value.set(ie.colorWaterDeep));Mn.addColor(ie,"colorWaterSurface").onChange(()=>Xe.uColorWaterSurface.value.set(ie.colorWaterSurface));Mn.addColor(ie,"colorSand").onChange(()=>Xe.uColorSand.value.set(ie.colorSand));Mn.addColor(ie,"colorGrass").onChange(()=>Xe.uColorGrass.value.set(ie.colorGrass));Mn.addColor(ie,"colorSnow").onChange(()=>Xe.uColorSnow.value.set(ie.colorSnow));Mn.addColor(ie,"colorRock").onChange(()=>Xe.uColorRock.value.set(ie.colorRock));const ky=new Vh({baseMaterial:Il,vertexShader:Gh,fragmentShader:By,uniforms:Xe,silent:!0,metalness:0,roughness:.5,color:"#85d534"}),Hy=new Vh({baseMaterial:Sh,vertexShader:Gh,uniforms:Xe,silent:!0,depthPacking:th}),wo=new Je(Ao,ky);wo.customDepthMaterial=Hy;wo.receiveShadow=!0;wo.castShadow=!0;zn.add(wo);const Xh=new fo(new Fi(11,2,11)),Yh=new fo(new Fi(10,2.1,10));Xh.material.color.set("red");Yh.material=new S0;const Vy=new Tx,Qr=Vy.evaluate(Xh,Yh,Ih);Qr.geometry.clearGroups();Qr.material=new Il({color:"#ffffff",metalness:0,roughness:.3});Qr.castShadow=!0;Qr.receiveShadow=!0;zn.add(Qr);const kl=new Je(new Ar(10,10,1,1),new M0({transmission:1,roughness:.3}));kl.rotation.x=-Math.PI*.5;kl.position.y=-.1;zn.add(kl);const Sn=new L0("#ffffff",2);Sn.position.set(6.25,3,4);Sn.castShadow=!0;Sn.shadow.mapSize.set(1024,1024);Sn.shadow.camera.near=.1;Sn.shadow.camera.far=30;Sn.shadow.camera.top=8;Sn.shadow.camera.right=8;Sn.shadow.camera.bottom=-8;Sn.shadow.camera.left=-8;zn.add(Sn);const Ge={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)};window.addEventListener("resize",()=>{Ge.width=window.innerWidth,Ge.height=window.innerHeight,Ge.pixelRatio=Math.min(window.devicePixelRatio,2),Er.aspect=Ge.width/Ge.height,Er.updateProjectionMatrix(),Vn.setSize(Ge.width,Ge.height),Vn.setPixelRatio(Ge.pixelRatio)});const Er=new qe(35,Ge.width/Ge.height,.1,100);Er.position.set(-10,6,-2);zn.add(Er);const $h=new U0(Er,Wh);$h.enableDamping=!0;const Vn=new v0({canvas:Wh,antialias:!0});Vn.shadowMap.enabled=!0;Vn.shadowMap.type=ku;Vn.toneMapping=Vu;Vn.toneMappingExposure=1;Vn.setSize(Ge.width,Ge.height);Vn.setPixelRatio(Ge.pixelRatio);const Gy=new I0,jh=()=>{const i=Gy.getElapsedTime();Xe.uTime.value=i,$h.update(),Vn.render(zn,Er),window.requestAnimationFrame(jh)};jh();
//# sourceMappingURL=index-BirrX4aQ.js.map
