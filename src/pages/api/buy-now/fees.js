export default function handler(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", req?.headers?.authorization);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };
  const stringParams = new URLSearchParams(req?.query).toString();
  
  fetch(
    `${process.env.BASE_URL}/auction-vehicles/buy-now/fees?${stringParams}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const response = JSON.parse(result);
      res.status(response?.status ? response?.status : 200).json(response);
    })
    .catch((error) => console.log("error", error));
}
