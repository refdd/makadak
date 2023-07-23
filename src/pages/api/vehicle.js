export default function handler(req, res) {

    var myHeaders = new Headers();
    myHeaders.append("N-Meta", "web;local");
    myHeaders.append("X-Localization", "en");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", req?.headers?.authorization);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${process.env.BASE_URL}/vehicle-makes?onlyActive=1&sortBy=mostPopular`, requestOptions)
        .then(response => response.text())
        .then(result => res.status(200).json({ data: result }))
        .catch(error => console.log('error', error));

}

res.status(200).json({ data: "" });
