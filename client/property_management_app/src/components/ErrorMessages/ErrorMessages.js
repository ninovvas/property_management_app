import { Link } from "react-router-dom";
import "./ErrorMessages.Module.css"


export const ErrorMessages = () => {
    return(
        <>
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    

                    <div className="main-body">
                    <div class="mainbox">
                        <div class="err">4</div>
                        <i class="far fa-question-circle fa-spin"></i>
                        <div class="err2">4</div>
                        <div class="msg">Ooops! Page Not Found!<p>Let's go <Link to={"/"}>Home</Link> and try from there.</p>
                        </div>
                    </div>
                           
                    </div>
                </div>
            </div>
        </div>
        </div>
       </>

    );
}