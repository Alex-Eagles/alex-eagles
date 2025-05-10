const { createContext, useState, useContext } = require("react");

const SplashContext = createContext({
  showSplash: () => {},
  hideSplash: () => {},
  isShown: true
});

export const SplashProvider = ({ children }) => {
  const [isShown, setIsShown] = useState(true);

  return (
    <SplashContext.Provider
      value={{
        showSplash: () => {
          setIsShown(true);
        },
        hideSplash: () => {
          setIsShown(false);
        },
        isShown
      }}
    >
      {isShown ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <span
            style={{ textAlign: "center", fontSize: "30px", color: "white" }}
          >
            This is a splash screen
          </span>
        </div>
      ) : null}
      {children}
    </SplashContext.Provider>
  );
};

export const useSplash = () => {
  const context = useContext(SplashContext);

  if (!context) {
    throw new Error("Must be in SplashProvider!");
  }

  return context;
};
