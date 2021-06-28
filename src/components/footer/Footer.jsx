import React from "react";
import "./Footer.css";
export function Footer() {
  return (
    <div className="ft">
      <div className="text">
        © Copyright 2021 Tung Hoang. All rights reserved.
      </div>
      <div className="icons">
        <a
          className="fb"
          target="_blank"
          href="https://www.facebook.com/tung.hoangxuan.75054"
        >
          {" "}
          <img src="https://i.imgur.com/DNuJ4IB.png" />
        </a>
        <a
          className="ins"
          target="_blank"
          href="https://www.instagram.com/p1zarita/"ư
        >
          {" "}
          <img src="https://i.imgur.com/Fi5NFCj.png" />
        </a>
      </div>
    </div>
  );
}
