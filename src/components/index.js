import React from "react";
import { Container } from "reactstrap";
import getLists from "../services/lists";
import withMediaQuery from "../Utils/HOC/MediaQuery";
import Lists from "./Lists";

function Index(props) {
  const [state, setState] = React.useState({
    lists: []
  });

  React.useEffect(() => {
    getLists().then(res => {
      const { data } = res;
      //set lists using spreads
      setState({ ...state, lists: data });
    });
  }, []);

  return (
    <Container>
      <Lists {...props} lists={state.lists} />
    </Container>
  );
}

export default withMediaQuery(Index);
