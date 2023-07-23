// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  myHeaders.append("Authorization", req.headers.authorization);

  var raw = JSON.stringify(req?.body);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/wallet-withdraw/store`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const response = JSON.parse(result);
      return res
        .status(response?.status ? response?.status : 200)
        .json(response?.payload ? response?.payload : response);
    })

    .catch((error) => console.log("error", error));
}
