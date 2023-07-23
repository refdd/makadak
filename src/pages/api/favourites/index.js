export default function handler(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", req.headers.authorization);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  fetch(
    `${process.env.API_BASE_URL}/favourites?isActive=1`,
    requestOptions,
  )
    .then((response) => {
      res.status(response.status)
      return response.text()
    })
    .then((result, err) => {
      res.send(result)
    })
    .catch((error) => console.log("error", error));
}
