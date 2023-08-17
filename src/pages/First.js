import React, { useEffect, useState } from "react";
import GuideMessage from "../components/first/GuideMessage";
import CardList from "../components/first/CardList";
import Loading from "../components/first/Loading";
import axios from "axios";
import Footer from "../components/first/Footer";

function First({ getTime }) {
  const [resultData, setResultData] = useState([]);
  const [loading, setLoading] = useState(true);
  axios.defaults.withCredentials = true;

  const fetchData = async () => {
    try {
      setLoading(true);

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const location = {
        lat: 37.49,
        lng: 127.12272,
      };
      const URL = `https://port-0-back-eu1k2llldu9vju.sel3.cloudtype.app/api/subways/37.470133/127.038486`;
      const response = await axios.get(URL);
      setResultData(response.data);

      // Fetch data from the server
      // Update loading state
      setLoading(false);

      // Do something with the fetched data
    } catch (err) {
      console.log(`${err}`);
      setLoading(false);
      // Make sure to handle the loading state in case of an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GuideMessage getTime={getTime} />
      {loading ? <Loading /> : <CardList data={resultData} />}
      <Footer />
    </>
  );
}

export default First;
