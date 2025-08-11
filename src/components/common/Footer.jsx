import React from "react";
import '@/styles/components/_footer.scss'

const Footer = () =>{
    return(
    <>
     <div className="page-footer">
        <footer>
            <div className="copyright">
                Copyright © 2025 test
            </div>
            <div className="menu"> 
                <nav aria-label="SNS">
                    <ul>
                        <li>
                            <a href="https://instagram.com/yourbrand" target="_blank" rel="noopener noreferrer">
                            <svg
                  aria-hidden="true"
                  focusable="false"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
                    fill="none"
                    stroke="currentColor"
                  />
                  <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
                <span className="sr-only">Instagram(새 창)</span>
                </a>
                        </li>
                        <li> github </li>
                    </ul>
                </nav>
            </div>
        </footer>
    </div>
    </>);
}

export default Footer;