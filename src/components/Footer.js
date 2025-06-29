import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            {/* FIX 1: Wrap the text inside the anchor tag */}
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <span className="text-muted">
                © 2024 <i>GoFood</i>, Inc
              </span>
            </a>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              {/* FIX 2: Add aria-label for accessibility for the first social media link */}
              <a className="text-muted" href="/" aria-label="Facebook Profile">
                <svg className="bi" width="24" height="24">
                  {/* You'll need to point this to an actual SVG symbol, e.g., href="#facebook-icon" */}
                  <use></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              {/* FIX 3: Add aria-label for accessibility for the second social media link */}
              <a className="text-muted" href="/" aria-label="Twitter Profile">
                <svg className="bi" width="24" height="24">
                  {/* You'll need to point this to an actual SVG symbol, e.g., href="#twitter-icon" */}
                  <use></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              {/* FIX 4: Add aria-label for accessibility for the third social media link */}
              <a className="text-muted" href="/" aria-label="Instagram Profile">
                <svg className="bi" width="24" height="24">
                  {/* You'll need to point this to an actual SVG symbol, e.g., href="#instagram-icon" */}
                  <use></use>
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
