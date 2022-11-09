import FirebaseCartContainer from '../../containers/FirebaseCartContainer.js'

class CartDaosFirebase extends FirebaseCartContainer {
    constructor() {
        super('carts')
    }
}

export default CartDaosFirebase