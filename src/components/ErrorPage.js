import Lottie from "react-lottie";
import animationData from "../lottie/Error.json";
import { useRouteError } from "react-router";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <Lottie options={defaultOptions} height={300} width={300} />
      <h1>{err.statusText}</h1>
      <div className="trivia-container">
        <div className="trivia-title">
          Did you know that French Fries aren't actually French ?{" "}
        </div>
        <div className="trivia-text">
          Despite its name, the French fry is not French. The origins of the
          French fry have been traced back to Belgium, where historians claim
          potatoes were being fried in the late-1600s. <br /> According to local
          Belgian lore, poor villagers living in Meuse Valley often ate small
          fried fish they caught in the river.
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
