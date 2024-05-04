import { Link } from "react-router-dom";

function Detail() {
  return (
    <div>
      <div>Detail</div>
      <Link to="/write">write</Link>
      <Link to="/detail">detail</Link>
      <Link to="/calendar">calendar</Link>
      <Link to="/">home</Link>
    </div>
  );
}

export default Detail;
