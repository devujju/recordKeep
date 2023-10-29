import Header from "./components/header";
import Form from "./components/form";
import { useState } from "react";
import Item from "./components/items";
import ActualData from "./components/Actualdata";

export default function App() {
  const [data, setData] = useState([]);

  function addData(item) {
    setData((items) => [...items, item]);
  }

  function handleDelete(id) {
    setData((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <Form onAddItem={addData} />
      <Item />
      {data.map((data) => (
        <ActualData data={data} key={data.id} onHandleDelete={handleDelete} />
      ))}
    </div>
  );
}
