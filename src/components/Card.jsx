const Card = (props) => {
  console.log(props)

  return (
    <div className="rounded p-5 bg-gray-400 m-5">
      <p className="text-red-600">Name: {props.name}</p>
      <small className="font-bold">Email: {props.email} </small>
    </div>
  );
};
export default Card;
