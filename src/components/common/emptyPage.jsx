import React from "react";
const EmptyPage = ({match}) => {
  return <h1>
    {match.params.value}
  </h1>;
};

export default EmptyPage;
