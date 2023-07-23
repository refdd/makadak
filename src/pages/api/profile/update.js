// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const stringParams = new URLSearchParams(req?.query).toString();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", req?.headers?.authorization);
  var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${process.env.BASE_URL}/profile?${stringParams}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const response = JSON.parse(result);
      res.status(response?.status ? response?.status : 200).json(response);
    })
    .catch((error) => console.log("error", error));
}
