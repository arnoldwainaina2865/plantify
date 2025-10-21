const Loading = () => {
  return (
    <div>
      <img
        style={{
          height: "10rem",
          width: "10rem",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
        alt='loading'
        src={require("../../assets/loading.gif")}></img>
      <h4 className='h4'>Loading</h4>
    </div>
  );
};

export default Loading;
