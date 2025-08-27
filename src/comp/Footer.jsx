import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            {/* Top section: logo + navigation */}
            <div className="footer-top">
                <div className="footer-logo">
                    <img src="/logo.png" alt="Rann Neeti Logo" />
                </div>

                <nav className="footer-nav">
                    <a href="#">H O M E </a>
                    <a href="#">E V E N T S </a>
                    <a href="#">G A L L E R Y </a>
                    <a href="#">R E G I S T E R</a>
                    <a href="#">OUR TEAM</a>
                    <a href="#">H E L P</a>
                </nav>
            </div>

            {/* Bottom section */}
            <div className="footer-bottom">
                <p>© All Rights Reserved Rann Neeti</p>
            </div>
        </footer>
    );
}
