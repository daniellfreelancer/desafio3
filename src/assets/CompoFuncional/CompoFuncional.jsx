// const ComponenteFuncional = () => {
//     return <div>
//         Otro componente
//     </div>

// };

// export default ComponenteFuncional;


function UserCard({ name, weight, due, price }) {
  return (
    <div className="card">
      <img
        src="https://images.jumpseller.com/store/serviceshop/11948453/1625773346549.png?1635772590"
        className="img-card card-img-top"
      ></img>
      <div className="card-body">
        <p>Meat: {name} </p>
        <p>weight: {weight + " Grs"}</p>
        <p>Due Date: {due}</p>
        <p>Price: {price + " $"}</p>
      </div>
    </div>
  );
}

export default UserCard;
