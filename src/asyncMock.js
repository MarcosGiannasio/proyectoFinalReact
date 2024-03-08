const products = [
 
{
          id: "1",
          name:"Canasto de Mimbre",
          price: 14000,
          category:"living",
          img:"https://acdn.mitiendanube.com/stores/001/095/862/products/50-9e67d2a7c7cbf5c5b417056971074423-1024-1024.webp",
          stock:15,
          description:"Canasto rigido de kraft para decorar y organizar tus espacios. Podes usarlo para decorar algun mueble, biblioteca, recibidor o estante , así como también para organizar espacios y guardar libros, toallas, jueguetes, comesticos. Por su versatilidad en el diseño puede usarse en cualquier ambiente del hogar",
},

{
          id: "2",
          name:"Set Dispenser de Vidrio",
          price: 11000,
          category:"baño",
          img:"https://acdn.mitiendanube.com/stores/001/095/862/products/dispenser41-f5bcceec662e9784d516396644153130-1024-1024.webp",
          stock:11,
          description:"Dispenser con valvula cremera para rellenar",
},

{
          id: "3",
          name:"Bandeja Ceramica",
          price: 14000,
          category:"cocina",
          img:"https://acdn.mitiendanube.com/stores/001/095/862/products/copia-de-diseno-sin-titulo-461-ca38911d465212ed4716306904642989-1024-1024.webp",
          stock:25,
          description:"Las bandejas Meliquina son de cerámica, están hechas a mano de manera individual y artesanal, es por eso que podes encontrar pequeñas variaciones entre cada una.",
},
]

export const getProducts = () => {
          return new Promise((resolve) => {
                    setTimeout(() => {
                              resolve(products);
                    }, 1000);
                    
          });
};

export const getProductsByCategory = (categoryId) => {
          return new Promise((resolve) => {
                    setTimeout(() => {
                              resolve(products.filter((prod) => prod.category === categoryId));
                    }, 1000);
          });
};

export const getProductById = (productoId) => {
          return new Promise((resolve) => {
                    setTimeout(() => {
                              resolve(products.find((prod) => prod.id === productoId));
                    }, 1000);
          });
};