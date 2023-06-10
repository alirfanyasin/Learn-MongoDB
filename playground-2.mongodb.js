const mydb = "inventory";
use(mydb);

// Menampilkan semua data hanya dengan 2 field
// db.buku.find(
//   {},
//   {
//     _id: 0,
//     title: 1,
//   }
// );

db.buku.find(
  {},
  {
    _id: 0,
    title: 1,
    categories: 1,
  }
);
