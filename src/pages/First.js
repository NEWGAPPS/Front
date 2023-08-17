import React, { useEffect } from "react";
import GuideMessage from "../components/first/GuideMessage";
import CardList from "../components/first/CardList";
import Loading from "../components/first/Loading";
import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";

axios.defaults.withCredentials = true;

function First({ getTime }) {
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const myLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      const 우찬 = await axios.get()
      const 성호 = await axios.get(
        `https://port-0-back-eu1k2llldu9vju.sel3.cloudtype.app/api/locations/?lat=${myLocation.lat}&lng=${myLocation.lng}`
      );

      const 선희 = await axios.get(
        `https://port-0-back-eu1k2llldu9vju.sel3.cloudtype.app/api/subways/?lat=${myLocation.lat}&lng=${myLocation.lng}`
      );
      
      console.log(선희.data);
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
      {loading ? <Loading /> : <CardList />}
      <Footer />
    </>
  );
}

export default First;
