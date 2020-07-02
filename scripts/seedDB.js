const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleboks"
);

const bookSeed =
{
    authors: ["Suzanne Collins"],
    description: "Could you survive on your own, in the wild, with everyone fighting against you? Twenty-four are forced to enter. Only the winner survives. In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. Each year, the districts are forced by the Capitol to send one boy and one girl between the ages of twelve and eighteen to participate in the Hunger Games, a brutal and terrifying fight to the death -- televised for all of Panem to see. Survival is second nature for sixteen-year-old Katniss Everdeen, who struggles to feed her mother and younger sister by secretly hunting and gathering beyond the fences of District 12. When Katniss steps in to take the place of her sister in the Hunger Games, she knows it may be her death sentence. If she is to survive, she must weigh survival against humanity and life against love.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });