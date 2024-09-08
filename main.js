let divData = document.getElementById("divData");

function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products",{method: "GET"});
    promesa.then( (response) => {  //Aqui se hace la solicitud de la peticion
        response.json().then(       //ME regresa una promesa
            (data)=>{
                console.log(data);
                createCards(data);
            }).catch((error)=>console.log("Problema con el json", error));
        }).catch((err)=> console.log("Existio un problema con la solicitud", err));
    }//getData

function createCards(products){
    console.log(products.length);
    console.log(products[0].name);
    //crear una Card por cada producto con los datos esenciales
    //de preferencia foreach: name, description, image, price
}//getData
getData();


function createCards(products){
    console.log(products.length);
    products.forEach(p => {
        divData.insertAdjacentHTML("beforeend", `
            <div class="card" style="width: 18rem;">
            <img src="${p.image}" "class card-img-top"
            style="object-fit: contain;width 100%; height: 250px;"
                                            alt="${p.description}">

                <div class="card-body">
                  <h5 class="card-title">${p.name}</h5>
                  <p class="card-text">${p.brand}</p>
                  <p class="card-text">${p.description.slice(0,20)}</p>
                  <p class="card-text">${p.rating}<i class="bi bi-star-fill style="></p>
                  <a href="#" class="btn btn-primary" style= "align-self: flex-end;">Go somewhere</a>
                </div>
            </div>
        `);
    });
}
                                              



