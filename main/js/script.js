
function Func() { 
    fetch("db/productos.json") 
        .then((res) => { 
        return res.json(); 
    }) 
    .then((data) => console.log(data)); 
}