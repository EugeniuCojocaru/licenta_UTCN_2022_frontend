import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/styles";
import theme from "./common/style/theme";
import RouterContainer from "./components/Router/RouterContainer";
import { getToken } from "./common";
import { getUserId, isTokenValid } from "./common/utils/tokenHelper";
import { getUserById } from "./data-access/service";
import {
  resetAuth,
  resetSections,
  setIsFatchingData,
  updateUserData,
  useAppDispatch,
  userIsLoggedIn,
} from "./data-access/store";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async (userId: string) => {
      const response = await getUserById(userId);
      console.log(response);
      dispatch(updateUserData(response?.data));
    };
    const clearRedux = () => {
      dispatch(resetAuth);
      dispatch(resetSections);
    };
    const token = getToken();
    if (isTokenValid(token)) {
      dispatch(setIsFatchingData(true));
      token && fetchData(getUserId(token));
      dispatch(userIsLoggedIn());
    } else {
      clearRedux();
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <RouterContainer />
    </ThemeProvider>
  );
}

export default App;
