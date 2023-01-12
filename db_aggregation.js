// 1> update array element
db.users.update(
  {
    _id: ObjectId("6229b79be1e69d0b2d8c22c3"),
    "payment_cards._id": ObjectId("62500f1157dc4ae2387e90a0"),
  },
  {
    $set: {
      "payment_cards.$.holder_name": "test",
      "payment_cards.$.bank_name": "testing__",
    },
  }
);

// 2> Add array element
db.users.update(
  {
    _id: ObjectId("6229b79be1e69d0b2d8c22c3"),
  },
  {
    $push: {
      payment_cards: {
        card_no: "01234567890",
        bank_name: "testing bank",
        valid_thru: "11/01",
        holder_name: "test name",
      },
    },
  },

  { new: true }
);

// 3> upsert array Element
db.users.update(
  {
    _id: ObjectId("6229b79be1e69d0b2d8c22c3"),
    "payment_cards._id": ObjectId("62500f1157dc4ae2387e90a0"),
  },
  {
    $set: {
      "payment_cards.$.holder_name": "test",
      "payment_cards.$.bank_name": "testing__",
    },
  }
);

if (!result.nMatched) {
  db.users.update(
    {
      _id: ObjectId("6229b79be1e69d0b2d8c22c3"),
    },
    {
      $push: {
        payment_cards: {
          card_no: "01234567890",
          bank_name: "testing bank",
          valid_thru: "11/01",
          holder_name: "test name",
        },
      },
    }
  );
}

// 4> push or pull array element
doc.subdocs.push({ _id: 4815162342 }); // added
doc.subdocs.pull({ _id: 4815162342 }); // removed

// 5> remove array element
db.users.update(
  { _id: ObjectId("6229b79be1e69d0b2d8c22c3") },
  {
    $pull: {
      payment_cards: { _id: ObjectId("62500f1157dc4ae2387e90a0") },
    },
  }
);

// 6> Merge two collection
let result = await QRCode.aggregate([
  {
    $lookup: {
      from: "shops",
      localField: "shop",
      foreignField: "_id",
      as: " ",
    },
  },
  {
    $addFields: {
      shop: "$collection1._id",
      shopName: "$collection1.name",
    },
  },
  {
    $unwind: {
      path: "$shop",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $unwind: {
      path: "$shopName",
      preserveNullAndEmptyArrays: true,
    },
  },
  { $unset: ["collection1"] },
]);

// 7>
db.users.aggregate([
  {
    $match: {
      _id: ObjectId("6217493f5b8ea92ae7492806"),
      spree_items: {
        $elemMatch: {
          spree: ObjectId("625d2994bfdd9a1bf9c1cfe4"),
        },
      },
    },
  },
  {
    $set: {
      spree_items: {
        $map: {
          input: "$spree_items",
          as: "s",
          in: {
            $cond: [
              { $eq: ["$$s.spree", ObjectId("625d2994bfdd9a1bf9c1cfe4")] }, //condition
              { $mergeObjects: ["$$s", { public_speaker: true }] }, //true
              { $mergeObjects: ["$$s", { public_speaker: false }] },
            ],
          },
        },
      },
    },
  },
]);

// 8>
