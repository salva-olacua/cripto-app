import { useState } from "react";
import Input from "../input/Input";
import Table from "../table/Table";
import "./Quotes.css";

const Quotes = ({ coins }) => {
  const [search, setSearch] = useState("");

  return (
    <section className="Quotes">
      <div className="container">
        <Input onChange={(e) => setSearch(e.target.value)} />
        <Table coins={coins} search={search} />
      </div>
    </section>
  );
};

export default Quotes;
