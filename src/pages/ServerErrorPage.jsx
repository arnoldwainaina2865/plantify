const ServerErrorPage = () => {
  return (
    <div className='server-error-page'>
      <img src={require("../assets/error.gif")} alt='404-page-not-found'></img>
      <h1 className='h4 center-text' style={{ color: "var(--primary)" }}>
        Something Went Wrong on the Server!
      </h1>
    </div>
  );
};

export default ServerErrorPage;
