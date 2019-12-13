import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

function Index(props) {
  const { desktop, lists } = props;

  return desktop ? <Desktop lists={lists} /> : <Mobile lists={lists} />;
}

export default Index;
