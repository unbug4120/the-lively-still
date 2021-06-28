import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export function Midprops(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { backgroundurl1, text, size, x, y, textcolor } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundurl1})`,
        height: "600px",
        backgroundSize: size,
        backgroundPositionX: x ,
        backgroundPositiony: y ,
      }}
    >
      <div style={{ textAlign: "center", marginTop: "280px", color: textcolor }}>{text}</div>
    </div>
  );
}
