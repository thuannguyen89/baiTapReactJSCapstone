import { Movie } from "./duck/type";
import { Link } from "react-router-dom";

type Props = {
  movie: Movie;
};

export default function MovieComponent(props: Props) {
  const { movie } = props;
  return (
    <div className="col-md-3">
      <div className="card" style={{width: 250}}>
        <img className="card-img-top" src={movie.hinhAnh} style={{height: 300}} alt="" />
        <div className="card-body">
          <h4 className="card-title" style={{height: 80}}>{movie.tenPhim}</h4>
          <Link to={`/detail/${movie.maPhim}`} className="btn btn-success">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}