/*! For license information please see bundle.js.LICENSE.txt */
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Kp=ol`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Xp=ol`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Qp=Os("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Zp=Os((function(t){const{className:r,classes:i,pulsate:a=!1,rippleX:n,rippleY:o,rippleSize:s,in:l,onExited:c,timeout:h}=t,[p,m]=e.useState(!1),u=si(r,i.ripple,i.rippleVisible,a&&i.ripplePulsate),f={width:s,height:s,top:-s/2+o,left:-s/2+n},d=si(i.child,p&&i.childLeaving,a&&i.childPulsate);return l||p||m(!0),e.useEffect((()=>{if(!l&&null!=c){const t=setTimeout(c,h);return()=>{clearTimeout(t)}}}),[c,l,h]),(0,Ns.jsx)("span",{className:u,style:f,children:(0,Ns.jsx)("span",{className:d})})}),{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${Up.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Yp};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${Up.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${Up.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Up.childLeaving} {
    opacity: 0;
    animation-name: ${Kp};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${Up.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Xp};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
//# sourceMappingURL=bundle.js.map