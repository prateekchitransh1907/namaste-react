import Lottie from "react-lottie";
import animationData from "./../lottie/NoInternet.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const NoInternet = () => {
  return (
    <div className="no-internet-container">
      <Lottie
        options={defaultOptions}
        style={{ width: 300, height: 300, marginTop: 33 }}
      />
      <h2 className="no-internet-message">
        Looks like you are offline ! Please check your connection and retry.{" "}
      </h2>
    </div>
  );
};
export default NoInternet;
