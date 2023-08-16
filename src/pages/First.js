import React from "react";
import GuideMessage from "../components/first/GuideMessage";
import CardList from "../components/first/CardList";

function First({ getTime }) {
  return (
    <>
      <GuideMessage getTime={getTime} />
      <CardList />
    </>
  );
}

export default First;
