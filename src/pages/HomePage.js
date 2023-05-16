import React from "react";
import LayoutComp from "../Components/Layout/layoutComp";
import { useAuth } from '../Context/Auth'

const HomePage = () => {
  const [auth, setAuth] = useAuth()
  return (
    <>
      <LayoutComp title={"Omamori Shop - Home"}>
        <h1>HomePage</h1>
        <pre>{ JSON.stringify(auth, null, 4) }</pre>
      </LayoutComp>
    </>
  );
};

export default HomePage;
