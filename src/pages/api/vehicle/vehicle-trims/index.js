export default function handler(req, res) {
  if (req?.params?.id) {
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    }

    fetch(
      `${process.env.API_BASE_URL}/vehicle-trims/${req.params.id}`,
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => {
        const response = JSON.parse(result)

        res.status(200).json(response)
      })
      .catch((error) => console.log('error', error))
  } else {
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    }

    fetch(`${process.env.API_BASE_URL}/vehicle-trims`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const response = JSON.parse(result)
        res.status(200).json(response)
      })
      .catch((error) => console.log('error', error))
  }
}
