import React, { useEffect } from "react";
import GuideMessage from "../components/first/GuideMessage";
import CardList from "../components/first/CardList";
import Loading from "../components/first/Loading";
import axios from "axios";
import { useState } from "react";
import Footer from "../components/first/Footer";
function First({ getTime }) {
  const result_data = [
    {
      station_num: "3호선",
      station_list: ["수서", "가락시장", "경찰병원", "오금"],
      trains: [
        {
          line_num: "3호선",
          direction: "1",
          express: "0",
          arrival_message: "2",
          cur_station: "오금",
          endstation: "오금",
          msg_time: "2023-08-17 17:39:23",
          train_num: "3253",
        },
      ],
    },
    {
      station_num: "8호선",
      station_list: ["석촌", "송파", "가락시장", "문정"],
      trains: [
        {
          line_num: "8호선",
          direction: "0",
          express: "1",
          arrival_message: "3",
          cur_station: "가락시장",
          endstation: "암사",
          msg_time: "2023-08-17 17:39:30",
          train_num: "8190",
        },
        {
          line_num: "8호선",
          direction: "1",
          express: "0",
          arrival_message: "3",
          cur_station: "가락시장",
          endstation: "모란",
          msg_time: "2023-08-17 17:39:34",
          train_num: "818",
        },
      ],
    },
    {
      station_num: "8호선",
      station_list: ["석촌", "송파", "가락시장", "문정"],
      trains: [
        {
          line_num: "8호선",
          direction: "0",
          express: "1",
          arrival_message: "3",
          cur_station: "가락시장",
          endstation: "암사",
          msg_time: "2023-08-17 17:39:30",
          train_num: "8190",
        },
        {
          line_num: "8호선",
          direction: "1",
          express: "0",
          arrival_message: "3",
          cur_station: "가락시장",
          endstation: "모란",
          msg_time: "2023-08-17 17:39:34",
          train_num: "818",
        },
      ],
    },
  ];

  const [loading, setLoading] = useState(true);
  axios.defaults.withCredentials = true;

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
      const URL = `https://port-0-back-eu1k2llldu9vju.sel3.cloudtype.app/api/locations?lat=${location.lat}&lng=${location.lng}`;
      await axios.get(URL);

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
      {loading ? <Loading /> : <CardList data={result_data} />}
      <Footer />
    </>
  );
}

export default First;
