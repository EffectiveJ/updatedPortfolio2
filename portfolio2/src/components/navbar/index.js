import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <div>
            <header id="masthead">
                <div class="row">
                    <div class="col-md-3">
                        <Link to="/portfolio">Jassae Rivera</Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="/about">About</Link>
                    </div>
                    <div class="col-md-3">
                        <nav>
                            <Link to="/contact">Contact Me</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Nav;