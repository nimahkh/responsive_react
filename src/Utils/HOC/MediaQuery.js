import React from "react";
import { useMediaQuery } from "react-responsive";

function withMediaQuery(Component) {
  function WrappedComponent(props) {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });

    return <Component desktop={!isTabletOrMobile} {...props} />;
  }

  return WrappedComponent;
}

export default withMediaQuery;
