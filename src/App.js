import "./App.css";
import { useEffect, useRef, useState } from "react";
import { TweenMax, Power3 } from "gsap";

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state,setState]=useState(false);

  const handleExpand=()=>{
    TweenMax.to(circleRed,.8,{width:200, height:200,ease:Power3.easeOut})
    setState(true);
  }
  const handleShrink=()=>{
    TweenMax.to(circleRed,.8,{width:75, height:75,ease:Power3.easeOut})
    setState(false)
  }

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    // TweenMax.from(circle, 0.8, { opacity: 2, x: 40, ease: Power3.easeOut });
    // TweenMax.from(circleRed, 0.8, {
    //   opacity: 2,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.2,
    // });
    // TweenMax.from(circleBlue, 0.8, {
    //   opacity: 2,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.4,
    // });
    // TweenMax.from(circle, 0.8, { opacity: 2, x: 40, ease: Power3.easeOut });
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue],
      0.8,
      {
        opacity: 2,
        x: 40,
        ease: Power3.easeOut,
      },
      0.2
    );
  }, []);

  return (
    <div className="App" ref={(el) => (app = el)}>
      <header className="App-header">
        <div className="circle-container">
          <div ref={(el) => (circle = el)} className="circle"></div>
          <div onClick={state!==true?handleExpand:handleShrink} ref={(el) => (circleRed = el)} className="circle red"></div>
          <div ref={(el) => (circleBlue = el)} className="circle blue"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
