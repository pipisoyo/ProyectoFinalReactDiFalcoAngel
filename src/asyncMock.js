const products = [
    {
        "id": "1",
        "rubro": "caramelos",
        "nombreProducto": "Sugus",
        "precio": 20,
        "stock": 210,
        "imagen": "sugus.jpeg"
    },
    {
        "id": "2",
        "rubro": "caramelos",
        "nombreProducto": "Palito de la selva",
        "precio": 50,
        "stock": 190,
        "imagen": "palitos-de-la-selva.jpeg"
    },
    {
        "id": "3",
        "rubro": "caramelos",
        "nombreProducto": "Billiken",
        "precio": 25,
        "stock": 200,
        "imagen": "billiken.jpeg"
    },
    {
        "id": "4",
        "rubro": "Chocolates",
        "nombreProducto": "Block",
        "precio": 250,
        "stock": 10,
        "imagen": "block.jpg"
    },
    {
        "id": "5",
        "rubro": "Chocolates",
        "nombreProducto": "Milka",
        "precio": 500,
        "stock": 7,
        "imagen": "milka.jpg"
    },
    {
        "id": "6",
        "rubro": "Chocolates",
        "nombreProducto": "Toke",
        "precio": 350,
        "stock": 15,
        "imagen": "toke.jpeg"
    },
    {
        "id": "7",
        "rubro": "Electronica",
        "nombreProducto": "Cargador",
        "precio": 88,
        "stock": 120,
        "imagen": "cargador.jpg"
    },
    {
        "id": "8",
        "rubro": "Electronica",
        "nombreProducto": "Cable Usb",
        "precio": 96,
        "stock": 110,
        "imagen": "cable-usb.jpeg"
    },
    {
        "id": "9",
        "rubro": "Electronica",
        "nombreProducto": "Memoria Micro SD 32gb",
        "precio": 58,
        "stock": 20,
        "imagen": "memoria.jpg"
    },
    {
        "id": "10",
        "rubro": "Galletitas",
        "nombreProducto": "Divercion",
        "precio": 96,
        "stock": 87,
        "imagen": "divercion.jpg"
    },
    {
        "id": "11",
        "rubro":  "Galletitas",
        "nombreProducto": "Oreo",
        "precio": 88,
        "stock": 140,
        "imagen": "oreo.jpg"
    },
    {
        "id": "12",
        "rubro":  "Galletitas",
        "nombreProducto": "Don Satur",
        "precio": 13,
        "stock": 17,
        "imagen": "don-satur.jpg"
    },
    {
        "id": "13",
        "rubro":  "Lacteos",
        "nombreProducto": "Leche entera",
        "precio": 15,
        "stock": 33,
        "imagen": "leche-entera.jpg"
    },
    {
        "id": "14",
        "rubro": "Lacteos",
        "nombreProducto": "Leche descremada",
        "precio": 79,
        "stock": 2,
        "imagen": "leche-descremada.jpg"
    },
    {
        "id": "15",
        "rubro": "Lacteos",
        "nombreProducto": "Yogurt Ls Fut",
        "precio": 85,
        "stock": 19,
        "imagen": "yogur-ls-frutilla.jpg"
    },
    {
        "id": "16",
        "rubro": "Merceria",
        "nombreProducto": "Agujas Canastita",
        "precio": 100,
        "stock": 1000,
        "imagen": "agujas-canastita.jpg"
    },
    {
        "id": "17",
        "rubro": "Merceria",
        "nombreProducto": "Elastico 2mts",
        "precio": 49,
        "stock": 120,
        "imagen": "elastico.jpg"
    },
    {
        "id": "18",
        "rubro": "Merceria",
        "nombreProducto": "Hilo de coser",
        "precio": 78,
        "stock": 4,
        "imagen": "hilo-coser.jpg"
    },
    {
        "id": "19",
        "rubro": "Regaleria",
        "nombreProducto": "Caja de bombones",
        "precio": 63,
        "stock": 9,
        "imagen": "caja-de-bombones.jpg"
    },
    {
        "id": "20",
        "rubro": "Regaleria",
        "nombreProducto": "Perfume mujercitas",
        "precio": 73,
        "stock": 215,
        "imagen": "perfume-mujercitas.jpg"
    },
    {
        "id": "21",
        "rubro": "Regaleria",
        "codigoInterno": 3,
        "nombreProducto": "Vino + Caja",
        "precio": 15,
        "stock": 140,
        "imagen": "vino-caja.jpg"
    },
    {
        "id": "22",
        "rubro": "Snacks",
        "nombreProducto": "Doritos",
        "precio": 91,
        "stock": 99,
        "imagen": "doritos.jpg"
    },
    {
        "id": "23",
        "rubro": "Snacks",
        "nombreProducto": "Lay's",
        "precio": 85,
        "stock": 90,
        "imagen": "lays.jpg"
    },
    {
        "id": "24",
        "rubro": "Snacks",
        "nombreProducto": "Chettos",
        "precio": 35,
        "stock": 88,
        "imagen": "cheetos.jpg"
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 500);
            
        }else{
            reject("No hay productos")
        }
        }
    )
    }

    export const getProductsById = (prodId) => {
        return new Promise((resolve, reject) => {
            if (products.length > 0) {
                const selec = products.find(product => product.id === prodId)
                setTimeout(() => {
                    resolve(selec);
                    console.log(selec)
                }, 0);
                
            }else{
                reject("No se encuentrea el producto")
            }
            }
        )
        }
// recivo por la categoria, filtro los productos que estan dentro de esta, y los devuelvo
        export const getProductsByCategory = (category) => {
            return new Promise((resolve, reject) => {
              const productosByCategory = products.filter((product) => product.rubro === category);
              if (productosByCategory.length > 0) {
                setTimeout(() => {
                  resolve(productosByCategory);
                }, 0);
              } else {
                reject("No se encontraron productos en la categoría especificada.");
              }
            });
          };