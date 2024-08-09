let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://sakiproducts.com/cdn/shop/articles/20221114103112-dark-tea-recipe-blog_800x800.jpg?v=1668422229'
    },
];


for (const product of products) {
    document.write(`
    <div>
        <h3>${product.title} Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image">
</div>
    `)
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write(`
        <div>Ім я: ${users[i].name} Вік: ${users[i].age} Cтатус: ${users[i].status}</div>
        `)
    }
}
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write(`
        <div><h3>Ім я: ${users[i].name} Вік: ${users[i].age} Cтатус: ${users[i].status}</h3></div>
        `)
    }
}

for (let i = 0; i < users.length; i++) {
    if (users[i].age >30) {
        document.write(`
        <div><h2>Ім я: ${users[i].name} Вік: ${users[i].age} Cтатус: ${users[i].status}</h2></div>
        `)
    }
}


