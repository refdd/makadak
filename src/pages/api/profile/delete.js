// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", req?.headers?.authorization);
  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${process.env.BASE_URL}/profile/`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const response = JSON.parse(result);
      res.status(response?.status ? response?.status : 200).json(response);
    })
    .catch((error) => console.log("error", error));
}
