const xml2js = require('xml2js');

exports.shippingPrice = (req, res, next) => {
    let builder = new xml2js.Builder();
    let mono = {
        RateV4Request: {
            $: {
                "USERID": "890PIGME2253"
            },
            Revision: 2,
            Package: {
                $: {
                    "ID": 0
                },
                Service: "PRIORITY",
                ZipOrigination: "00777",
                ZipDestination: "00778",
                Pounds: "0",
                Ounces: "10",
                Container: "",
                Width: "",
                Length: "",
                Height: "",
                Girth: "",
                Machinable: "TRUE",

            },

        }

    };
}