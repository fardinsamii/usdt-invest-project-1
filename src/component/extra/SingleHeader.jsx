import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SingleHeader = ( { backPage } ) => {
    return (
        <div>
            <header className="header text-white text-center py-2">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center">
                <Link to={backPage} className="back-arrow-single">
                    <FontAwesomeIcon icon={faChevronLeft} className="back-arrow" />
                </Link>
                
                </div>
            </div>
            </header>
        </div>
    );
};

export default SingleHeader;