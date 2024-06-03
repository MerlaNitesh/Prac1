let products=[
    {name:"laptop",price:700},
    {name:"phone",price:5000},
    {name:"tablet",price:800}
]
let sorted=products.sort((a,b)=>a.price-b.price)
sorted.forEach(product=>console.log(`name: ${product.name},price: ${product.price}`))