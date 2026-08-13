const Card = (props) => {
  console.log(props)

  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <small>Email: {props.email} </small>
    </div>
  );
};
export default Card;
