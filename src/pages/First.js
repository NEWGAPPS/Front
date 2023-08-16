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
      const res = await axios.get(URL);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
