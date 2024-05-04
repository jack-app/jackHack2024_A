import { Link } from "react-router-dom";

function Write() {
  return (
    <div>
      <div>Write</div>
      <Link to="/write">write</Link>
      <Link to="/detail">detail</Link>
      <Link to="/calendar">calendar</Link>
      <Link to="/">home</Link>
    </div>
  );
}

export default Write;
