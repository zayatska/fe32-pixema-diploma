import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./Redux/store";
import { setTheme } from "./Redux/Reducers/themeReducer";
import themeSelectors from "./Redux/Selectors/themeSelectors";

import Router from "./Pages/Router";
import "./App.css";

import { Theme } from "./Constants/@types";
import { useThemeContext } from "./Context/Theme";
import ThemeProvider from "./Context/Theme/ThemeProvider";

function App() {
  
  const dispatch = useDispatch();
  const theme = useSelector(themeSelectors.getTheme);

  const onChangeTheme = (value: Theme) => {
    dispatch(setTheme(value));
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
    </div>
  );
}

const AppWithStore = () => {
  return (
      <Provider store={store}>
          <App />
      </Provider>
  );
};

export default AppWithStore;