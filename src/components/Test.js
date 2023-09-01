import React, { useEffect } from "react";
import Loder from "./Loder";
import { useSelector } from "react-redux";
import { loder ,selectLoder} from "../features/LoderSlice";

const Test = () => {
  // const dispatch = useDispatch();
  const b = useSelector(selectLoder)
  console.log(b)

  // useEffect(() => {
  //   dispatch(
  //     loder({
  //       loder: false,
  //     })
  //   );
  // }, []);
  //   console.log(loder);
  return (
    <>
      {b ? <Loder /> : ""}
      {/* <Loder/> */}
    </>
  );
};

export default Test;
