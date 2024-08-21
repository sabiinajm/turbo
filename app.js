const card = document.getElementById('card')
const cars = [
    {
        "id": 1,
        "make": "Hyundai",
        "img": "img/car1.jpg",
        "features": '2024, 1.8L, 0 km',
        "price": 20000
    },
    {
        "id": 2,
        "make": "Mercedes",
        "img": "img/car2.jpg",
        "features": '2020, 1.5L, 0 km',
        "price": 35000
    },
    {
        "id": 3,
        "make": "Volkswagen",
        "img": "img/car1.jpg",
        "features": '2022, 1.8L, 0 km',
        "price": 27000
    },
    {
        "id": 4,
        "make": "Jeep",
        "img": "img/car2.jpg",
        "features": '2024, 1.8L, 0 km',
        "price": 40000
    },
    {
        "id": 5,
        "make": "Toyota",
        "img": "img/car1.jpg",
        "features": '2024, 1.8L, 0 km',
        "price": 24000
    },
    {
        "id": 5,
        "make": "Toyota",
        "img": "img/car2.jpg",
        "features": '2024, 1.8L, 0 km',
        "price": 24000
    }
]
cars.forEach(car => {
    card.innerHTML += `
        <div class=" border border-gray-200 rounded-lg overflow-hidden shadow-lg mb-4">
            <div class="img-car">
                <img src="${car.img}" class="h-48 w-full object-cover" alt="${car.make}">
            </div>
            <div class="info pb-2 pl-2">
                <h2 class="font-bold text-lg">${car.price}$</h2>
                <p>${car.make}</p>
                <p>${car.features}</p>
                <p class="text-gray-400">Bakı, bugün 18:26</p>
            </div>
        </div>`;
});