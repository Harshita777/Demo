import { useState, useEffect } from "react";
import Cards from "./Cards";
import Nav from "./Nav";

const url = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const newData = await response.json();

    setData(newData.slice(0, 6));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="header">
      <Nav />
      <Cards data={data} />
    </section>
  );
};

export default App;
