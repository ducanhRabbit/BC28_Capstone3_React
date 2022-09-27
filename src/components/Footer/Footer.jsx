import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {


  return (
    <footer>
      <div className="footer_bg">
      <div className="container">
        <div className="footer_content py-3">
          <div className="row">
            <div className="col-4 col-item">
              <h4>
                GET HELP
              </h4>
              <ul className="tags_list">
                <li className="tag">
                  <Link>
                    Home
                  </Link>
                </li>
                <li className="tag">
                  <Link>
                    Nike
                  </Link>
                </li>
                <li className="tag">
                  <Link>
                    Addidas
                  </Link>
                </li>
                <li className="tag">
                  <Link>
                    Home
                  </Link>
                </li>
              </ul>

            </div>
            <div className="col-4 col-item">
              <h4>
                SUPPORT
              </h4>
              <ul className="tags_list">
                <li className="tag">
                  <Link>
                    About
                  </Link>
                </li>
                <li className="tag">
                  <Link>
                    Contact
                  </Link>
                </li>
                <li className="tag">
                  <Link>
                    Help
                  </Link>
                </li>
                <li className="tag">
                  <Link>
                    Phone
                  </Link>
                </li>
              </ul>

            </div>
            <div className="col-4 col-item">
              <h4>
                REGISTER
              </h4>
              <ul className="tags_list">
                <li className="tag">
                  <Link>
                    Register
                  </Link>
                </li>
                <li className="tag">
                  <Link>
                    Login
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="copyright">
        <div className="content d-flex justify-content-center align-items-center">
        <i className="far fa-copyright"></i>
        <span>
          2022 Cybersoft All Rights Reversed | Design Theme by Trương Tấn Khải
        </span>
        </div>
      </div>
    </footer>
  );
}
