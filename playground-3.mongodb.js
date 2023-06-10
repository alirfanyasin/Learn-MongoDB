const mydb = "inventory";
use(mydb);

// Less then $lt(lebih kecil)
// $gt(lebih besar)
// =======================================================
// Less then equal ($lte)
// db.barang.find({ price: { $lte: 799 } }, { name: 1, price: 1 });
// =======================================================
// Operator GT dan GTE
// db.barang.find({ price: { $gt: 699 } }, { name: 1, price: 1 });
// db.barang.find({ price: { $gte: 699 } }, { name: 1, price: 1 });
// =======================================================
// Kecuali ($ne)
// db.barang.find({ price: { $ne: 899 } }, { name: 1, price: 1 });
// =======================================================
// Mengambil beberapa data ($in)
// db.barang.find({ price: { $in: [699, 799] } }, { name: 1, price: 1 });
// =======================================================
// Tidak mengambil beberapa angka ($nin)
// db.barang.find({ price: { $nin: [699, 799] } }, { name: 1, price: 1 });

// AND ===================================================
// ketika berdua bernilai true baru di mbil
// db.barang.find({$and: [
//   {price: 799},
//   {color: {$in: ["white", "black"]}}
// ]})

// OR =====================================================
// ketika salah satu bernilai true
// Mengambil data yang memenuhi yaitu price: 699 dan price: 899
// db.barang.find(
//   {
//     $or: [{ price: 699 }, { price: 899 }],
//   },
//   {
//     name: 1,
//     price: 1,
//   }
// );

// db.barang.find({
//   $or: [{ price: { $lt: 699 } }, { price: { $gt: 799 } }],
// });

// NOT ==================================================
// mengambil data terkecuali
// db.barang.find({ price: { $not: { $in: [699, 899] } } }, { name: 1, price: 1 });

// NOR =================================================
// Not Or (Tidak atau kecuali) atau tidak masuk kategori
// db.barang.find(
//   {
//     $nor: [{ price: 699 }, { color: "black" }],
//   },
//   { name: 1, color: 1 }
// );

// NIN =================================================
// db.barang.find({
//   $and: [{ price: { $nin: [899] } }, { color: { $nin: ["gold"] } }],
// });

// EXISTS ==================================================
// mengecek field apakah ada atau tidak
// db.barang.find({ price: { $exists: false } });

// $type ====================================================
// db.barang.find({ price: { $type: "string" } });
// db.barang.find({ price: { $type: "string", "number" } });
// db.barang.find({ color: { $type: 4 } }, { name: 1, price: 1 });

// $size ===================================================
// menampilkan jumlah data array yang sesuai dengan document
// db.barang.find({ color: { $size: 2 } });

// ALL =====================================================
// menampilkan data sesuai dg document yang ada di array
// db.barang.find({ color: { $all: ["black"] } });

// $elemMatch => datanya harus array ========================
// db.barang.find({
//   color: { $elemMatch: { $in: ["purple"] } },
// });

// $elematch ========================================
// db.barang.find({
//   color: {$elemMatch: {$in : ["purple"]}}
// })

// SORT =============================================
// $sort => digunakan untuk pengurutan secara ASC atau DESC
// db.barang
//   .find(
//     {
//       price: { $exists: 1 },
//     },
//     {
//       name: 1,
//       price: 1,
//     }
//   )
//   .sort({
//     _id: 1, // ASC
//     // _id: -1, // DESC
//   });

// LIMIT ==============================================
// db.barang
//   .find(
//     {},
//     {
//       name: 1,
//       price: 1,
//     }
//   )
//   .limit(2); // mengambil 2 limit data

// UPDATE ONE ==========================================
// db.barang.updateOne(
//   {
//     _id: 1, // mecari data id yang akan di update
//   },
//   {
//     $set: { price: 100, name: "Samsung", spec: { ram: 5, display: 15.6 } }, // data apa saja yang ingin di update
//   }
// );
// db.barang.find({ _id: 1 });

// UPDATE MANY =======================================
// db.barang.updateMany(
//   {
//     price: 899, // mencari data yang punya price yang sama
//   },
//   {
//     $set: { spec: { ram: 32, screen: 15.6, cpu: 3.66 } }, // mengubah data secara banyak
//   }
// );
// db.barang.find({ price: 899 });

// UPDATE INC -> increment ============================
// Price awal = 100
// Price inc = 50
// Jadi 100 + 50
// db.barang.updateOne(
//   { _id: 1 },
//   {
//     $inc: { price: 50 },
//   }
// );
// db.barang.find({ _id: 1 });

// UPDATE DENC -> decrement ===========================
// Price awal = 150
// Price inc = 50
// Jadi 150 - 50
// db.barang.updateOne(
//   { _id: 1 },
//   {
//     $inc: { price: -50 },
//   }
// );
// db.barang.find({ _id: 1 });

// UPDATE MIN ==========================================
/* 
  Operator $min digunakan untuk membandingkan value dan
  mengambil yang paling kecil
*/
// db.barang.updateOne(
//   {
//     _id: 5,
//   },
//   {
//     $min: {
//       price: 599, // tidak melakukan update karena 599 lebih besar data sebelumnya
//     },
//   }
// );
// db.barang.find({ _id: 5 });

// UPDATE MAX ===========================================
/* 
  Operator $min digunakan untuk membandingkan value dan
  mengambil yang paling besar
*/
// db.barang.updateOne(
//   {
//     _id: 1,
//   },
//   {
//     $max: { price: 200 }, // melakukan update karena 200 lebih besar dari data sebelumnya
//   }
// );
// db.barang.find({ _id: 1 });

// UPDATE $mul ===========================================
// Fungsi ini digunakan untuk perkalian bidang
// Mengalikan ke price
// db.barang.updateOne(
//   {
//     _id: 5,
//   },
//   {
//     $mul: { price: 1.1 },
//   }
// );

// Mengalikan ke array storage index 0
// db.barang.updateOne(
//   { _id: 1 },
//   {
//     $mul: { "storage.0": 2, "storage.1": 2, "storage.2": 2 },
//   }
// );
// db.barang.find({ _id: 1 });

// UPDATE UNSET ===========================================
// Unset digunakan untuk menghapus satu atau lebih budang

// db.barang.updateOne(
//   { _id: 1 },
//   {
//     $unset: { price: "" }, // menghapus field price
//   }
// );
// db.barang.find({ _id: 1 });

// UPDATE RENAME ==========================================
// Operator $rename digunakan untuk merename field
// db.barang.updateMany(
//   {},
//   {
//     $rename: { price: "harga" }, // field price di ubah ke nama ke harga
//   }
// );
// db.barang.find();

// UPSERT ==============================================
// Update dan Insert
// - update jika document di temukan
// - insert jika document tidak di temukan

// db.barang.updateMany(
//   { _id: 7 },
//   { $set: { price: 999, name: "Nokia" } },
//   { upsert: true }
// );
// db.barang.find({ _id: 7 });

// DELETE ONE =============================================
// Operator $deleteOne digunakan untuk menghapus satu document
// db.barang.deleteOne({ _id: 7 }); // menghapus data id: 7
// db.barang.find();
