import React from "react";
import { useRouteError } from "react-router-dom";
function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h2>
        Oops!<br></br>
        {err.status} {err.statusText}
      </h2>
    </>
  );
}

export default Error;
