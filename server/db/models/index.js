const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const Order_Item = require('./order_item')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// order table has userId
User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Product, {through: Order_Item})
Product.belongsToMany(Order, {through: Order_Item})
// Order_Item.belongsTo(Order)
// Order_Item.belongsTo(Product)

// User.hasMany(Order_Item)
// Order.hasMany(Order_Item)

// A.belongsToMany(B, { through: C });
// B.belongsToMany(A, { through: C });
// A.hasMany(C);
// C.belongsTo(A);
// B.hasMany(C);
// C.belongsTo(B);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Order,
  Order_Item
}
