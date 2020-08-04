const {db} = require('./server/db')
const User = require('./server/db/models/user')
const Product = require('./server/db/models/product')

const users = [
  {
    firstName: 'John',
    lastName: 'Wang',
    email: 'johnwang@noodle.com'
  },
  {
    firstName: 'Philip',
    lastName: 'Lim',
    email: 'plim@noodle.com'
  },
  {
    firstName: 'Vera',
    lastName: 'Wang',
    email: 'vw@noodle.com'
  },
  {
    firstName: 'Marcus',
    lastName: 'Johnson',
    email: 'mjohnson@noodle.com'
  },
  {
    firstName: 'Jennifer',
    lastName: 'Smith',
    email: 'js@noodle.com'
  },
  {
    firstName: 'Linda',
    lastName: 'Fillmore',
    email: 'lfillmore@noodle.com'
  },
  {
    firstName: 'Natalie',
    lastName: 'Garbanzo',
    email: 'ngarbanz@noodle.com'
  }
]

const products = [
  {
    name: 'Indomie Mi Goreng',
    price: 1,
    description:
      "Indomie Mi Goreng is an instant noodles product line made under the Indomie brand by the Indofood company, the world's largest instant noodle manufacturer, located in Indonesia. Mi Goreng is Indonesian for 'fried noodle'. Indomie Mi Goreng is simply abbreviated as Indomie goreng by most Indonesians. Indomie Goreng is a type of instant noodle served without soup and is stirred well with soysauce, oil, and seasoning. This instant noodle derived its inspiration from traditional Indonesian dish called mi goreng, a variant of fried noodle common in Indonesia. Many street vendors sell it and traditional mi goreng is considered as common food by the people. This product has gained a cult following in Indonesia and in various other countries, such as Nigeria and Australia.",
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91iG5S-XqdL._SX569_PIbundle-30,TopRight,0,0_SX569SY439SH20_.jpg',
    spiceRating: 2
  },
  {
    name: 'Shin Ramyun',
    price: 1.5,
    description:
      "At the first taste of Shin Ramyun's signature broth, there is no question how Shin Ramyun has become the most recognized ramyun in the world. With Shin Ramyun, you will enjoy a piping hot meal of aromatic spices, fresh vegetables, and wonderfully chewy noodles in the convenience of 4 minutes. Drop in an egg, chop up some vegetables, or throw in some sliced meat. There really is no limit how you can make Shin Ramyun into your favorite home cooked meal. We already made it great, be creative and try to make it even better! Nongshim is a Korean food company that produces instant noodles and snacks, which has led the Korean food industry since their establishment in September 1965. Since 1994, Nongshim America, Inc. Has successfully brought their exciting tastes of Korea to north America. In the new millennium, they continue to expand into a market-leading global company, dedicated to the improved health and lifestyles of their customers. Nongshim is dedicated to bringing you high quality products, packed with delicious and unique flavors.",
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81MYTNAsmQL._SX679_.jpg',
    spiceRating: 3
  },
  {
    name: 'Sapporo Ichiban Original',
    price: 2,
    description:
      'The Sapporo Ichiban Original soup is a combination of soy sauce and chicken broth that is infused with the aroma of sweet vegetables, garlic and a hint of ginger. The soup married with the bouncy texture of our noodles balances out to make one very satiating meal.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/916cFHczeIL._SX522_PIbundle-24,TopRight,0,0_SX522SY456SH20_.jpg',
    spiceRating: 1
  },
  {
    name: 'Lucky Me! Instant Pancit Canton',
    price: 1,
    description:
      'Pancit, or Filipino birthday noodles are similar to chowmein. They are thicker and chewier than typical instant noodles. This version, the Lucky Me pancit canton chili & citrus is a classic favorite. The noodles are the perfect consistency and the buttery chili & citrus flavor packs a little heat and a lot of yummy flavor.',

    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51EYbxG%2BKbL.jpg',
    spiceRating: 1
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})
    await Promise.all(
      users.map(user => {
        return User.create(user)
      })
    )
    await Promise.all(
      products.map(product => {
        return Product.create(product)
      })
    )
  } catch (err) {
    console.log(err)
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
      db.close()
    })
}