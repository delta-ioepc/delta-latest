import { Context } from "./Context";
import PropTypes from "prop-types";
import { gallery } from "../assets/data/gallery";

const Provider = ({ children }) => {
  return (
    <>
      <Context.Provider value={{ gallery }}>{children}</Context.Provider>
    </>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
