import loadingGif from "../assets/loading.gif";
// import loadingGif from "../assets/1494.gif";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="loading state" />
    </div>
  );
};

export default Loading;
