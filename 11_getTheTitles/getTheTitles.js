const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (array) {
  const titles = array.map(function (object) {
    return object["title"];
  });
  return titles;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
