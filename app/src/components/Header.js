import React from "react";

import TwitterIcon from "./TwitterIcon";

export default function Header() {
  return (
    <div className="header">
      <div>
        <span role="img" aria-label="Wave">
          👋
        </span>
        <h1>Hola at Gi</h1>
      </div>
      <div>
        <a
          href="https://twitter.com/"
          aria-label="Follow me on Twitter"
          title="Follow me on Twitter"
        >
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}
