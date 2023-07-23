export default function handler(req, res) {
  const email = req.query.email;

  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  fetch(`${process.env.BASE_URL}/reset-password?email=${email}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const response = JSON.parse(result);
      res.status(200).json(response);
    })
    .catch((error) => console.log("error", error));
}
