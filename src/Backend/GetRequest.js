const GetRequest = async (url) => {
    const res = await fetch(url, {
      method: "GET",
    });
    const d = res.json();
    return d;
  };
  
  export default GetRequest;