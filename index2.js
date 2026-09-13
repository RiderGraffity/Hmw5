const Users = {
    Egor: {
        Orders: [],
    },

    Oleg: {
        Orders: [],
    },

    Vanya: {
        Orders: [],
    },

    Dima: {
        Orders: [],
    },

    Sasha: {
        Orders: [],
    },
};


const Items = [
    { name: "Apple", price: 10 },
    { name: "Juice", price: 10 },
    { name: "Cucamber", price: 10 },
    { name: "Limonad", price: 10 }
];


async function GetUser(Name) {
    return Users[Name];
}


async function GetOrder(User) {

    const order = {
        id: Math.floor(Math.random() * 1000),
        items: Items
    };

    order.total = order.items.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    User.Orders.push(order);

    return order;
}


async function GetDiscount(Order) {

    const discountPercent = 10;

    const discount = Order.total * discountPercent / 100;

    const totalWithDiscount = Order.total - discount;

    return {
        orderId: Order.id,
        discountPercent: discountPercent,
        discount: discount,
        total: totalWithDiscount
    };
}


async function main() {

    const User = await GetUser("Egor");

    const Order = await GetOrder(User);

    const Discount = await GetDiscount(Order);

    console.log("User:", User);
    console.log("Order:", Order);


    console.log("Sum of order:", `$${Order.total.toFixed(2)}`);
    console.log("Discount:", `$${Discount.discount.toFixed(2)}`);
    console.log("Result:", `$${Discount.total.toFixed(2)}`);
}


main();