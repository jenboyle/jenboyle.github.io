import{r as m,j as e}from"./index-IS7HmF7q.js";import{G as t}from"./GroovyArticle-CAGdj5Io.js";import{G as n}from"./GroovyHeader-BoQYmyuZ.js";const c=[{title:"Kappa Seven Pedal",previewimage:"./images/pedals/pedal1_killswitch/ks.png",previewtext:"My first pedal creation - A Kill Switch pedal",pedalid:0},{title:"Aversion Pedal",previewimage:"./images/pedals/pedal2_booster/aversion.png",previewtext:"My second pedal creation - A Booster pedal",pedalid:1}],r=[{title:"Kappa Seven pedal - A Kill Switch pedal",articles:[{text:"Holes are drilled, pedal sanded and primed",images:[{image:"./images/pedals/pedal1_killswitch/drilled.png"},{image:"./images/pedals/pedal1_killswitch/sanded.png"},{image:"./images/pedals/pedal1_killswitch/primed.png"}]},{text:"Pedal components, I need to resolder a couple connections, going to do it in place",images:[{image:"./images/pedals/pedal1_killswitch/ks_soldered.png"},{image:"./images/pedals/pedal1_killswitch/ks_inside.png"}]},{text:"Pedal complete",images:[{image:"./images/pedals/pedal1_killswitch/ks_side.png"},{image:"./images/pedals/pedal1_killswitch/ks.png"}]}]},{title:"Aversion pedal - A Booster pedal",articles:[{text:"Holes drilled, then primer and base coat paint",images:[{image:"./images/pedals/pedal2_booster/pedaldrilled.png"},{image:"./images/pedals/pedal2_booster/primer.png"},{image:"./images/pedals/pedal2_booster/basecoat.png"}]},{text:"Using a stencil",images:[{image:"./images/pedals/pedal2_booster/stencil1.png"},{image:"./images/pedals/pedal2_booster/stencilpaint.png"},{image:"./images/pedals/pedal2_booster/stencil2.png"}]},{text:"Text and top coat",images:[{image:"./images/pedals/pedal2_booster/aversion.png"}]}]}],x="_boximg_12fr4_1",h="_overridebigheader_12fr4_9",_="_a_12fr4_14",s={boximg:x,overridebigheader:h,a:_};function v(){const[l,d]=m.useState(-1);function o(){d(-1)}return e.jsx(e.Fragment,{children:l!=-1?e.jsxs(e.Fragment,{children:[e.jsx(t,{customStyles:s.overridebigheader,children:r[l].title}),r[l].articles.map((a,i)=>e.jsxs(t,{children:[e.jsx(n,{children:a.text}),a.images.map((p,g)=>e.jsx("img",{className:s.boximg,src:p.image},g)),r[l].articles.length==i+1?e.jsx("div",{children:e.jsx("a",{className:s.a,onClick:o,children:"Back"})}):null]},i))]}):e.jsx(e.Fragment,{children:c.map((a,i)=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:["Pedal Creation - ",a.title]},i),e.jsx("img",{className:s.boximg,src:a.previewimage},`img${i}`),e.jsxs(t,{children:[a.previewtext,e.jsx("div",{children:e.jsx("a",{className:s.a,onClick:()=>d(a.pedalid),children:"See More"},`but${i}`)})]},`art${i}`)]}))})})}function k(){return e.jsx(v,{})}export{k as default};