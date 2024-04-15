
db.sales.aggregate([
  {
    $match: {
      date: {
        $gte: {
          $subtract: [new Date(), { $multiply: [30, 24, 60, 60, 1000] }]
        }
      }
    }
  },
  {
    $group: {
      _id: "$item",
      totalQuantity: { $sum: "$quantity" },
      totalPrice: { $sum: "$total" },
      averagePrice: { $avg: "$price" }
    }
  },
  {
    $sort: { totalQuantity: -1 }
  },
  {
    $limit: 10
  },
  {
    $project: {
      _id: 0,
      itemName: "$_id",
      totalQuantity: 1,
      averagePrice: 1,
      totalRevenue: "$totalPrice"
    }
  }
]);