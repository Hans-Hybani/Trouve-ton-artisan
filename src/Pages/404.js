import React from "react";
import erreurs404 from "../Assets/erreurs404.png";
import '../Pages-Style/404.scss'

function Error404(params) {
        return(
                <div className="ErrorPage">
                        <img src={erreurs404} alt="Logo du site" />
                        <p className="error">404</p>
                </div>
        )
}

export default Error404;