export default function handler(req, res) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: req?.body,
      redirect: "follow",
    };
  
    fetch(
      `${process.env.BASE_URL}/auction-vehicles/sale/seller/accept-offer`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const response = JSON.parse(result);
        res.status(200).json(response);
      })

      
      .catch((error) => console.log("error", error));
  }
  