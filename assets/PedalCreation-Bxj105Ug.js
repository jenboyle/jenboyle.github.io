import{r as m,j as e}from"./index-e7XMBBy1.js";import{G as l}from"./GroovyArticle-CFVztABq.js";import{G as o}from"./GroovyHeader-Bk9Urk9c.js";const c=[{title:"Kappa Seven Pedal",previewimage:"./images/pedals/pedal1_killswitch/ks.png",previewtext:"My first pedal creation - A Kill Switch pedal",pedalid:0},{title:"Aversion Pedal",previewimage:"./images/pedals/pedal2_booster/aversion.png",previewtext:"My second pedal creation - A Booster pedal",pedalid:1}],d=[{title:"Kappa Seven pedal - A Kill Switch pedal",articles:[{text:"Holes are drilled, pedal sanded and primed",images:[{image:"./images/pedals/pedal1_killswitch/drilled.png"},{image:"./images/pedals/pedal1_killswitch/sanded.png"},{image:"./images/pedals/pedal1_killswitch/primed.png"}]},{text:"Pedal components, I need to resolder a couple connections, going to do it in place",images:[{image:"./images/pedals/pedal1_killswitch/ks_soldered.png"},{image:"./images/pedals/pedal1_killswitch/ks_inside.png"}]},{text:"Pedal complete",images:[{image:"./images/pedals/pedal1_killswitch/ks_side.png"},{image:"./images/pedals/pedal1_killswitch/ks.png"}]}]},{title:"Aversion pedal - A Booster pedal",articles:[{text:"Holes drilled, then primer and base coat paint",images:[{image:"./images/pedals/pedal2_booster/pedaldrilled.png"},{image:"./images/pedals/pedal2_booster/primer.png"},{image:"./images/pedals/pedal2_booster/basecoat.png"}]},{text:"Using a stencil",images:[{image:"./images/pedals/pedal2_booster/stencil1.png"},{image:"./images/pedals/pedal2_booster/stencilpaint.png"},{image:"./images/pedals/pedal2_booster/stencil2.png"}]},{text:"Text and top coat",images:[{image:"./images/pedals/pedal2_booster/aversion.png"}]},{text:"Aligning Components",images:[{image:"./images/pedals/pedal2_booster/pcb1.png"},{image:"./images/pedals/pedal2_booster/pcb2.png"}]},{text:"Soldering and adding board wires",images:[{image:"./images/pedals/pedal2_booster/pcb3.png"},{image:"./images/pedals/pedal2_booster/pcb4.png"}]},{text:"Arranging the inside",images:[{image:"./images/pedals/pedal2_booster/inside1.png"},{image:"./images/pedals/pedal2_booster/inside2.png"}],description:"Something is not right, pedal is dead💀. I tested the LED and resoldered some loose components but I might need to start again from scratch! Looks like I mixed up the direction of the components 🤦‍♀️"}]}],x="_boximg_muxxx_1",h="_overridebigheader_muxxx_9",_="_a_muxxx_14",b="_description_muxxx_25",s={boximg:x,overridebigheader:h,a:_,description:b};function v(){const[t,n]=m.useState(-1);function r(){n(-1)}return e.jsx(e.Fragment,{children:t!=-1?e.jsxs(e.Fragment,{children:[e.jsx(l,{customStyles:s.overridebigheader,children:d[t].title}),d[t].articles.map((i,a)=>e.jsxs(l,{children:[e.jsx(o,{children:i.text},a),i.images.map((p,g)=>e.jsx("img",{className:s.boximg,src:p.image},g)),i.description?e.jsx("div",{className:s.description,children:i.description}):null,d[t].articles.length==a+1?e.jsx("div",{children:e.jsx("a",{className:s.a,onClick:r,children:"Back"})}):null]},a))]}):e.jsx(e.Fragment,{children:c.map((i,a)=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Pedal Creation - ",i.title]},a),e.jsx("img",{className:s.boximg,src:i.previewimage},`img${a}`),e.jsxs(l,{children:[i.previewtext,e.jsx("div",{children:e.jsx("a",{className:s.a,onClick:()=>n(i.pedalid),children:"See More"},`but${a}`)})]},`art${a}`)]}))})})}function w(){return e.jsx(v,{})}export{w as default};