(self.webpackChunkusagrada_github_io=self.webpackChunkusagrada_github_io||[]).push([[237],{1051:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>q});var a=i(3179),n=i(7294),s=i(2263),o=i(9477),r=i(1152),l=i.n(r),d=i(63),c=i.n(d);class m{constructor(t){this.canvas=t.canvas,this.area={width:window.innerWidth,height:window.innerHeight},this.startTime=(new Date).getTime(),window.addEventListener("resize",this.onResize.bind(this)),this.renderer=new o.CP7({canvas:t.canvas}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.area.width,this.area.height),this.scene=new o.xsS;const e=new o.Mig(16777215,1);this.scene.add(e),this.camera=new o.cPb(45,this.area.width/this.area.height,10,1e4),this.camera.position.set(0,-1e3,700),this.camera.lookAt(new o.Pa4(0,0,0));const i=new o._12(1e4,1e4),a=new o.jyz({vertexShader:c(),fragmentShader:l(),side:o.ehD}),n=new o.Kj0(i,a);n.position.set(0,2e3,-1e3),n.rotation.set(Math.PI/2,0,0),this.scene.add(n),this.uniforms={iTime:{value:this.startTime}},this.tris=Array(50),this.makeTri(),this.render()}makeTri(){const t=1e3,e=2*Math.PI;for(let a=0;a<100;a++){const i=Math.random(),n=10601725,s=n>>16&255,r=n>>8&255,l=255&n,d=12773883,c=d>>16&255,m=d>>8&255,h=255&d,g=Math.floor((c-s)*i+s)<<16|Math.floor((m-r)*i+r)<<8|Math.floor((h-l)*i+l),u=new o.vBJ({color:g}),p=new o.H$k(30*Math.random()),f=new o.Kj0(p,u),v=Math.random()*t*2-t,Z=Math.random()*t*2-t,b=Math.random()*t*2-t;f.position.set(v,Z,b);const w=Math.random()*e,x=Math.random()*e,k=Math.random()*e;f.rotation.set(w,x,k);const y={x:.3*Math.random(),y:.3*Math.random(),z:.3*Math.random()};this.tris[a]={obj:f,move:y}}const i=this.tris.map((t=>t.obj));this.scene.add(...i)}moveTri(){for(let t=0;t<this.tris.length;t++){const{x:e,y:i,z:a}=this.tris[t].obj.position,n=this.tris[t].move,s=e<3e3?e+n.x:-3e3,o=i<3e3?i+n.y:-3e3;this.tris[t].obj.position.set(s,o,a),this.tris[t].obj.rotateX(n.x/100),this.tris[t].obj.rotateY(n.y/100),this.tris[t].obj.rotateZ(n.z/100)}}render(){this.uniforms.iTime.value=(new Date).getTime()-this.startTime,this.moveTri(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render.bind(this))}onResize(){this.area={width:window.innerWidth,height:window.innerHeight};const t=this.area.width,e=this.area.height;this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}onChange(t){switch(t){case"left":this.scene.position.set(-4,0,0),this.camera.lookAt(this.scene.position);break;case"right":this.scene.position.set(4,0,0),this.camera.lookAt(this.scene.position)}}}var h=i(917);const g=(0,a.Z)("section",{target:"e8od6br0"})({name:"owpnwc",styles:"position:fixed;width:100vw;height:100vh;z-index:-1"}),u=()=>{const t=(0,n.useRef)(null),e=(0,n.useRef)();return(0,n.useEffect)((()=>{const i=t.current;i&&(e.current=new m({canvas:i}))}),[]),(0,h.tZ)(g,null,(0,h.tZ)("canvas",{ref:t}))};var p=i(6010);const f={frontend:[{name:"HTML / CSS",icon:"mdi mdi-language-html5"},{name:"React / Next.JS",icon:"mdi-react"},{name:"NuxtJS",icon:"mdi-nuxt"},{name:"Yew",icon:"mdi-language-rust"}],backend:[{name:"Node.JS",framework:["Express","NestJS"],icon:"mdi-nodejs"},{name:"Python",framework:["Django"],icon:"mdi-language-python"},{name:"Go",framework:["Echo","Fiber","Revel"],icon:"mdi-language-go"},{name:"Rust",framework:["Actix"],icon:"mdi-language-rust"},{name:"SQL",framework:["MySQL","PostgreSQL"],icon:"mdi-database"},{name:"NoSQL",framework:["MongoDB","Redis"],icon:"mdi-database"}],misc:[{name:"git",icon:"mdi-git"},{name:"docker",icon:"mdi-docker"},{name:"firebase",icon:"mdi-firebase"},{name:"websocket",icon:""}]};var v=i(300);const Z=()=>(0,h.tZ)("section",null,(0,h.tZ)("h3",{id:"about"},"About"),(0,h.tZ)("p",{className:"about-detail blue-glass"},"Graduate School of Information Science and Technology, The University of Tokyo",(0,h.tZ)("br",null),"Information & Communication Engineering",(0,h.tZ)("br",null),"M1 (ICE2022)")),b=()=>(0,h.tZ)("section",{id:"interests-section"},(0,h.tZ)("h3",{id:"interests"},"Interests"),(0,h.tZ)("p",{className:"about-detail blue-glass"},"Front-end / Back-end ",(0,h.tZ)("br",null),"UI Design ",(0,h.tZ)("br",null),"Game Programming ",(0,h.tZ)("br",null),"Compiler")),w=(0,a.Z)("a",{target:"e1thu4xu7"})({name:"1fgluvt",styles:"padding:10px;&:hover button span{text-decoration:underline;}"}),x=()=>(0,h.tZ)("section",{id:"contact-section"},(0,h.tZ)("h3",{id:"contact"},"Contact"),(0,h.tZ)("div",{className:"blue-glass"},(0,h.tZ)(w,{href:"https://github.com/usagrada",target:"_blank"},(0,h.tZ)(T,{className:"mdi mdi-github"}),(0,h.tZ)("span",null," GitHub ")),(0,h.tZ)(w,{href:"/docs",target:"_blank"},(0,h.tZ)(T,{className:"mdi mdi-github"}),(0,h.tZ)("span",null," Blog ")))),k=(0,a.Z)("div",{target:"e1thu4xu6"})({name:"2jza95",styles:"display:grid;grid-template-columns:50% 50%;grid-template-rows:auto auto;#frontend-article{grid-row:1/2;grid-column:1/2;}#backend-article{grid-row:1/3;grid-column:2/3;}#misc-article{grid-row:2/3;grid-column:1/2;}"}),y=(0,a.Z)("div",{target:"e1thu4xu5"})({name:"qh665n",styles:"padding-bottom:10px;.skill-name{.frameworks{padding:5px 10px;font-size:10px;}i{width:24px;margin-right:5px;}}"}),M=()=>(0,h.tZ)("section",{id:"skills-section"},(0,h.tZ)("h3",{id:"skills"},"Skills"),(0,h.tZ)(k,null,(0,h.tZ)(C,{id:"frontend-article",className:"blue-glass"},(0,h.tZ)("h4",null,"Front-end"),(0,h.tZ)(y,null,f.frontend.map((t=>(0,h.tZ)("div",{id:"skill-name",className:"skill-name",key:t.name},(0,h.tZ)(T,{className:(0,p.Z)("mdi",t.icon)}),t.name))))),(0,h.tZ)(C,{id:"backend-article",className:"blue-glass"},(0,h.tZ)("h4",null,"Back-end"),(0,h.tZ)(y,null,f.backend.map((t=>(0,h.tZ)("div",{id:"back-skill-name",className:"skill-name",key:t.name},(0,h.tZ)(T,{className:(0,p.Z)("mdi",t.icon)}),t.name,(0,h.tZ)("div",{className:"frameworks"},t.framework.join(" / "))))))),(0,h.tZ)(C,{id:"misc-article",className:"blue-glass"},(0,h.tZ)("h4",null,"Misc"),(0,h.tZ)(y,null,f.misc.map((t=>(0,h.tZ)("div",{id:"misc-skill-name",className:"skill-name",key:t.name},(0,h.tZ)(T,{className:(0,p.Z)("mdi",t.icon)}),t.name))))))),N=()=>(0,h.tZ)("section",{id:"work-section"},(0,h.tZ)("h3",{id:"works"},"Works"),(0,h.tZ)(S,{className:"blue-glass"},(0,h.tZ)(z,null,(0,h.tZ)("a",{href:"https://2021.eeic.jp/",target:"_blank",rel:"noopener noreferrer"},(0,h.tZ)("figure",{className:"work-img"},(0,h.tZ)(j,{src:"/img/eeic-mayfes.png"}),(0,h.tZ)("figcaption",{style:{color:"white"}},"\u8fd1\u672a\u6765\u4f53\u9a13 2021"))),(0,h.tZ)("div",{className:"work-description"},"\u300c\u30b2\u30fc\u30e0AI\u300d\u3084\u300c\u8b0e\u89e3\u304d\u300d\u4f01\u753b\u306e\u30b7\u30b9\u30c6\u30e0\u4f5c\u6210\u306a\u3069\u306b\u95a2\u308f\u308a\u307e\u3057\u305f")),(0,h.tZ)(z,null,(0,h.tZ)("a",{href:"https://github.com/usagrada/satysfi-formatter",target:"_blank",rel:"noopener noreferrer"},(0,h.tZ)("figure",{className:"work-img"},(0,h.tZ)(j,{src:"/img/satysfi-formatter.png"}),(0,h.tZ)("figcaption",{style:{color:"black"}},"SATySFi formatter"))),(0,h.tZ)("div",{className:"work-description"},"formatter \u306e\u5b9f\u88c5\u3092\u884c\u3044\u307e\u3057\u305f")))),S=(0,a.Z)("div",{target:"e1thu4xu4"})({name:"5kov97",styles:"display:flex;flex-wrap:wrap"}),z=(0,a.Z)(v.Z,{target:"e1thu4xu3"})({name:"rjmk75",styles:"@media screen and (min-width: 769px){width:45%;}@media screen and (max-width: 768px){width:100%;}margin:10px;pointer-events:none;.work-description{font-size:14px;}.work-img{position:relative;pointer-events:auto;&:hover img{filter:blur(3px);}figcaption{display:none;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;}&:hover figcaption{display:block;font-size:18px;color:white;}}"}),j=(0,a.Z)("img",{target:"e1thu4xu2"})({name:"14ohvsf",styles:"width:100%;height:auto;aspect-ratio:16/9;margin:0;align-items:center"}),T=(0,a.Z)("i",{target:"e1thu4xu1"})({name:"1r5gb7q",styles:"display:inline-block"}),C=(0,a.Z)("article",{target:"e1thu4xu0"})({name:"1jj7er4",styles:"padding:15px"});var P=i(5742),R=i(6261);const _=()=>(0,h.tZ)("div",{id:"sidebar",css:A},(0,h.tZ)(I,{id:"side-area"},(0,h.tZ)("nav",null,(0,h.tZ)("h1",{className:"vibes"},"usagrada's portfolio"),(0,h.tZ)(U,null,(0,h.tZ)(R.rU,{to:"about",smooth:!0,duration:200,offset:-20},(0,h.tZ)("div",null,"About")),(0,h.tZ)(R.rU,{to:"interests",smooth:!0,duration:200,offset:-20},(0,h.tZ)("div",null,"Interests")),(0,h.tZ)(R.rU,{to:"skills",smooth:!0,duration:200,offset:-20},(0,h.tZ)("div",null,"Skills")),(0,h.tZ)(R.rU,{to:"works",smooth:!0,duration:200,offset:-20},(0,h.tZ)("div",null,"Works")),(0,h.tZ)(R.rU,{to:"contact",smooth:!0,duration:200,offset:-20},(0,h.tZ)("div",null,"Contact")))))),A={name:"1r3dbb0",styles:"background:rgb(255, 239, 255, 0.6);@media screen and (max-width: 768px){h1{font-size:32px;}div{font-size:18px;}}@media screen and (max-width: 450px){h1{font-size:20px;}div{font-size:12px;}}"},I=(0,a.Z)("div",{target:"e1flbg5e1"})({name:"b18bqu",styles:"position:fixed;width:min(240px, 30%);height:100vh;top:0;z-index:1;nav{padding:0 15px;height:calc(95vh - 30px);h1{padding:15px 0;text-align:center;}@media screen and (max-width: 768px){height:80vh;padding:0 10px;}}"}),U=(0,a.Z)("div",{target:"e1flbg5e0"})({name:"qlyl5m",styles:'margin:0 20px;@media screen and (max-width: 600px){margin:0 5px;}list-style:none;text-align:center;div{font-family:"Sawarabi Mincho",sans-serif;padding:5px 0;}div:hover{text-decoration:underline;cursor:pointer;}'});function q(){const{siteConfig:t}=(0,s.Z)();return(0,h.tZ)("div",{className:"resetcss"},(0,h.tZ)(P.Z,null,(0,h.tZ)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,h.tZ)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,h.tZ)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:ital,wght@0,100;0,300;1,100;1,300&family=Sawarabi+Mincho&display=swap"})),(0,h.tZ)(u,null),(0,h.tZ)(D,null,(0,h.tZ)(_,null),(0,h.tZ)("main",null,(0,h.tZ)(Z,null),(0,h.tZ)(b,null),(0,h.tZ)(M,null),(0,h.tZ)(N,null),(0,h.tZ)(x,null),(0,h.tZ)(E,null,(0,h.tZ)("div",null,"\xa9 2021 usagrada")))))}const D=(0,a.Z)("div",{target:"e17ypm6v1"})({name:"ufe0tq",styles:"display:grid;grid-template-columns:min(240px, 30%) 1fr;div{grid-column:1/2;}main{grid-column:2/3;padding:20px;}"}),E=(0,a.Z)("footer",{target:"e17ypm6v0"})({name:"1ieexrz",styles:"text-align:center;font-size:12px;@media screen and (max-width: 768px){.colorchange{font-size:8px;}}.colorchange{cursor:pointer;}"})},1152:t=>{t.exports="varying vec3 pos;\nvarying vec2 vuv;\n\nvoid main() {\n    // float val = mod(vuv.y*1.0, 1.0);\n    float val = 1.0-vuv.y;\n    // val = (val + fract(vuv.x * 100) + fract(vuv.y * 100))/3;\n    // val = val*0.3+0.7;\n    // rgb\n    float r1 = 149.0/255.0;\n    float g1 = 191.0/255.0;\n    float b1 = 234.0/255.0;\n    float r2 = 170.0/255.0;\n    float g2 = 170.0/255.0;\n    float b2 = 1.0;\n\n    float r = r1*val + r2*(1.0-val);\n    float g = g1*val + g2*(1.0-val);\n    float b = b1*val + b2*(1.0-val);\n\n    vec4 color = vec4(r, g, b, 0.8);\n\n    gl_FragColor = color;\n}\n"},63:t=>{t.exports="varying vec3 pos;\nvarying vec2 vuv;\n\nvoid main() {\n    pos = position;\n    // uv: ShaderMaterial\u3067\u88dc\u5b8c\u3055\u308c\u308b vec2 \u578b(xy)\u306e\u5909\u6570\n    vuv = uv;\n\n    gl_Position += projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n"}}]);