var DOMParser = require('dom-parser');

loadProducts => {
    let URLJson = "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json"
    let URLXml = "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml"
    let templateProducto = "";

    let requestJson = async (miUrlJson) => {
        try {
            let responseJson = await fetch(miUrlJson);
            let resultJson = await response.json();

            resultJson.forEach(element => {
                let {name, price, src, type} = element;

                templateProducto += `  <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
                <div class="card card-blog card-plain">
                  <div class="card-header p-0 mt-n4 mx-3">
                    <a class="d-block shadow-xl border-radius-xl">
                      <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                    </a>
                  </div>
                  <div class="card-body p-3">
                    <p class="mb-0 text-sm">${type}</p>
                    <a href="javascript:;">
                      <h5>
                        ${name}
                      </h5>
                    </a>
                    <p class="mb-4 text-sm">
                      <b>Price: </b> $ ${price}
                    </p>
                  </div>
                </div>
              </div>`
                });
        } catch (error) {
                console.log(error);
        }
    }

    let requestXml = async (miUrlXml) => {
        try {
            let responseXml = await fetch(miUrlXml);
            let resultXml = await response.text();
            let xml = (new DOMParser()).parseFromString(result, 'application/xml');
            let arrproducto = xml.getElementsByTagName("product");


            arrxml.forEach(element => {
                let src = element[0]

                templateProducto += `  <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
                <div class="card card-blog card-plain">
                  <div class="card-header p-0 mt-n4 mx-3">
                    <a class="d-block shadow-xl border-radius-xl">
                      <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                    </a>
                  </div>
                  <div class="card-body p-3">
                    <p class="mb-0 text-sm">${type}</p>
                    <a href="javascript:;">
                      <h5>
                        ${name}
                      </h5>
                    </a>
                    <p class="mb-4 text-sm">
                      <b>Price: </b> $ ${price}
                    </p>
                  </div>
                </div>
              </div>`
                });
        } catch (error) {
            console.log(error);
        }
    }
}