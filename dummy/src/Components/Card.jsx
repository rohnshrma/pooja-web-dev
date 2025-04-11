function Card(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        style={{ height: "200px" }}
        src={props.url}
        alt="pizza"
      />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.price}</p>
        <button className="btn btn-dark">Order Now</button>
      </div>
    </div>
  );
}

export default Card;
