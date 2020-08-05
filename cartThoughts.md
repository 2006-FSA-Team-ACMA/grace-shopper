## What does the cart look like?

* Back and forth

* considerations:

  * do we want the cart to write to the db?
  * logged in users versus guests?

* Where is the `cart` in terms of your database?
  * All the incomplete orders: Orders where the status is incomplete

- How do you check if someone is logged in or not?

  * Backend: `if (req.user)`
  * Frontend: `if (state.user.id)`
  * `!!` --> ! gives you the opposite truthiness of your value
    * I want the ACTUAL truthiness of my value

- `if (variableName === 'undefined')`
- `if (variableName === undefined)`

* Users who are logged in

  * userId associated with this cart
  * any device should show the updated cart
    * persist across my local machine, through logging in from incognito mode, through my phone
  * **It must be stored in the database.**
  * upon logging in or signing up --> some followup, where if a user is created, they should somehow also have a cart in the DB.

* Guest Users

  * Users don't need/should not have persistence across devices
  * 2 different browsers - not even across browsers on the same machine.
  * local state --> limitation of local state?
    * hard to pass around
    * on refresh.
    * local state doesn't do quite what we want because it will fail when we refresh.
  * **cookie -> document.cookie**
  * **session store/ express sessions**
    * you don't need to be logged in to have a session
    * `req.session.cart = {}` <-- server side.
  * window.localStorage --> **localStorage**
    * upon refresh, localstorage persists
    * closing the browser, local storage persists
    * exists indefinitely on your machine until you choose to get rid of it.
      * `{ productId: quantity }, []`

* Guest user checks out

  * Should be able to push their order items from whatever storage into the database with no userId

* What happens if a guest signs up or logs in with an existing cart?
