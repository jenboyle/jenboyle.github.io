import{r as l,j as e}from"./index-WzXAfZYr.js";import{S as g,a as p}from"./SongSearch-D5TqqkXM.js";import{G as f}from"./GroovyHeader--3hB1_NI.js";import"./GroovyTab-B9HxC0tB.js";import"./TransitionGroupContext-DKtPTrW9.js";import"./Portal-DNlcBYww.js";const o=[{jsonfile:"alleyez",songtype:"transcribe",songname:"All Eyez On Me - 2Pac",key:"Key C#"},{jsonfile:"brokendreams",songtype:"transcribe",songname:"Broken Dreams - Thin Lizzy",key:"Key C"},{jsonfile:"cantcme",songtype:"transcribe",songname:"Can't C Me - 2Pac",key:"Key Am"},{jsonfile:"checkyoself",songtype:"transcribe",songname:"Check Yo Self - Ice Cube",key:"Key G"},{jsonfile:"climbingupthewalls",songtype:"transcribe",songname:"Climbing Up the Walls - Radiohead",key:"Key Bm"},{jsonfile:"diamondring",songtype:"transcribe",songname:"Diamond Ring - Bon Jovi",key:"Key Am"},{jsonfile:"gangsta",songtype:"transcribe",songname:"Gangsta Luv - Snoop Dogg ft The Dream",key:"Key Am"},{jsonfile:"itwasagoodday",songtype:"transcribe",songname:"It Was A Good Day - Ice Cube",key:"Key G"},{jsonfile:"juicy",songtype:"transcribe",songname:"Juicy - Notorious BIG",key:"Key E"},{jsonfile:"justify",songtype:"transcribe",songname:"Justify My Love - Madonna",key:"Key F#"},{jsonfile:"letmeride",songtype:"transcribe",songname:"Let Me Ride - Dr Dre",key:"Key C#"},{jsonfile:"oceancruiser",songtype:"transcribe",songname:"Ocean Cruiser - DJ Maretimo",key:"Key Cm"},{jsonfile:"ohme",songtype:"transcribe",songname:"Oh Me - Nirvana",key:"Key D#m"},{jsonfile:"onlygodcan",songtype:"transcribe",songname:"Only God Can Judge Me riff - 2Pac",key:"Key F#m"},{jsonfile:"mario",songtype:"transcribe",songname:"Supermario Theme Tune - Nintendo",key:"Key Em"},{jsonfile:"sandm",songtype:"transcribe",songname:"S & M - Thin Lizzy",key:"Key G"},{jsonfile:"superstar",songtype:"transcribe",songname:"Superstar Intro - The Carpenters",key:"Key Ab#"},{jsonfile:"masterplan",songtype:"transcribe",songname:"The Masterplan Intro - Oasis",key:"Key Am"}],d="_a_9b14d_1",j="_list_9b14d_17",h="_li_9b14d_17",a={a:d,list:j,li:h};function x(){const[r,t]=l.useState(-1),[i,c]=l.useState("");let s=i.length>0?o.filter(n=>`${n.songname} ${n.key}`.toLowerCase().includes(i.toLowerCase())):o;s.length==0&&(s=o);function m(){t(-1)}return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:"My Transcriptions"}),e.jsx(g,{onClick:m,onChange:c}),r!=-1?e.jsx(p,{jsonfile:s[r].jsonfile}):e.jsx("ul",{className:a.list,children:s.map((n,y)=>e.jsxs("li",{className:a.li,children:[e.jsx("a",{className:a.a,onClick:()=>t(y),children:n.songname}),e.jsx("div",{children:n.key})]},y))})]})}export{x as default};