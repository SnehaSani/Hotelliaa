const GetRequestwithData = async (url, data) => {
  const res = await fetch(url, {
    method: "GET",
    body: JSON.stringify(data),
  });
  console.log(res)
  const retdata = res.json();
  return retdata;
};

export default GetRequestwithData;
