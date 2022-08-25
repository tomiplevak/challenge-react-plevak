import React from "react";

import dataimg from "../images/data.png";

function Home() {
  return (
    <>
      <h1>Frontend React JR+ Challenge</h1>
      <h2>Tomás Plevak</h2>
      <h2>Statement:</h2>
      <hr />
      <p className="statement">
        Create a simple react web app where there is a header with 2 paths. Each
        route will lead to a different screen.
        <br />
        1) In the first screen/path: assemble a table with the following data.{" "}
      </p>
      <img src={dataimg} alt="data" className="dataimg" />
      <p className="statement">
        2) In the other path put together a form of 2 or 3 fields (using hooks
        to manipulate the data/status) where when tapped the submit button takes
        the entered data and put it below.
        <br />
        Upload it to a public repository GitHub and pass us the link to see the
        code and run the app.
      </p>
    </>
  );
}

export default Home;
