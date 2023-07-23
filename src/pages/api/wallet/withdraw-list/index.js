// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `${process.env.BASE_URL}/user/wallet-withdraw?state=pending&objectsToInclude=featureTags`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const response = JSON.parse(result);
      return res.status(200).json(response);
    })
    .catch((error) => console.log("error", error));
}
