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
      setLoading(true);
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      await axios.post(URL, location);
      // Fetch data from the server
        
      const response = await axios.get(URL);
      const data = response.data;

      // Update loading state
      setLoading(false);

      // Do something with the fetched data
      console.log(data);
    } catch (err) {
      console.log(`${err}`);
      setLoading(false); // Make sure to handle the loading state in case of an error
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
