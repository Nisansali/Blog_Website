import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <dic className="page-not">
            <h2>
                Page Not Found
            </h2>
            <Link to="/"> Back to Home Page</Link>
        </dic>
      );
}
 
export default PageNotFound;