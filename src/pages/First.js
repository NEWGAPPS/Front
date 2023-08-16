import React, { useEffect } from "react";
import GuideMessage from "../components/first/GuideMessage";
import CardList from "../components/first/CardList";
import Loading from "../components/first/Loading";
import axios from "axios";
import { useState } from "react";
function First({ getTime }) {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      const res = await axios.get(URL);
    } catch (err) {
      alert("Error occur!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GuideMessage getTime={getTime} />
      {loading ? <Loading /> : <CardList />}
    </>
  );
}

export default First;
