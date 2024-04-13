

db.sales.aggregate([
  {
    $group: {
      _id: "$product",
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
      totalQuantity: { $sum: "$quantity" },
      averagePricePerUnit: { $avg: "$price" }
    }
  },
  { $sort: { totalRevenue: -1 } }
])

db.users.aggregate([
  { $unwind: "$friends" },
  {
    $lookup: {
      from: "users",
      localField: "friends",
      foreignField: "name",
      as: "friendInfo"
    }
  },
  { $unwind: "$friendInfo" },
  {
    $group: {
      _id: "$_id",
      averageAge: { $avg: "$friendInfo.age" },
      genderDistribution: { $push: "$friendInfo.gender" },
      friendCount: { $sum: 1 }
    }
  },
  { $sort: { friendCount: -1 } }
])

db.movies.aggregate([
  {
    $unwind: "$ratings"
  },
  {
    $group: {
      _id: "$genre",
      averageRating: { $avg: "$ratings.score" }
    }
  },
  { $sort: { averageRating: -1 } }
])

db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customerInfo"
    }
  },
  { $unwind: "$customerInfo" },
  {
    $group: {
      _id: "$customer_id",
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
      totalOrders: { $sum: 1 },
      customerName: { $first: "$customerInfo.name" }
    }
  },
  { $sort: { totalRevenue: -1 } }
])

db.orders.aggregate([
  {
    $match: {
      order_date: {
        $gte: ISODate("2022-01-01T00:00:00Z"),
        $lte: ISODate("2022-01-31T23:59:59Z")
      }
    }
  },
  {
    $group: {
      _id: "$customer_id",
      totalOrders: { $sum: 1 }
    }
  }
])

db.events.aggregate([
  {
    $match: {
      event_date: {
        $gte: ISODate("2022-01-01T00:00:00Z"),
        $lte: ISODate("2022-01-31T23:59:59Z")
      }
    }
  },
  {
    $group: {
      _id: { user_id: "$user_id", event_type: "$event_type" },
      eventCount: { $sum: 1 }
    }
  }
])

db.sales.aggregate([
  {
    $match: {
      sale_date: {
        $gte: ISODate("2022-01-01T00:00:00Z"),
        $lte: ISODate("2022-01-31T23:59:59Z")
      }
    }
  },
  {
    $group: {
      _id: "$product_id",
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
    }
  }
])