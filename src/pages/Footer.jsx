import { Link } from 'react-router-dom';
import "../style/style.css";

import cupcake from "../assets/categories/cupcake.PNG";

function Footer() {
    return (
        <div className ="footer">
            <div className = "footer-inner">
                <div className="footer-text"><p><strong>Read MLH's Code of Conduct</strong> <a href="http://mlh.io/code-of-conduct" target="_blank">here</a></p></div>
                <div className="footer-img"><img src={cupcake} alt="" aria-hidden/></div>
            </div>
        </div>
    );
}

export default Footer;