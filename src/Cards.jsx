/* eslint-disable react/prop-types */

const Cards = (props) => {
  const { data } = props;
  return (
    <div className="card1">
      {data.map((element) => {
        return (
          <div className="card" key="id">
            <div className="title">
              <h4>{element.title}</h4>
            </div>

            <div className="body">
              <p>{element.body}</p>
              <p>Mon,21 Dec 2020 14:57 GMT</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
