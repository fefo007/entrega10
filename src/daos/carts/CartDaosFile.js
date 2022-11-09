import FileCartContainer from '../../containers/FileCartContainer.js'

class CartDaosFile extends FileCartContainer {
    constructor() {
        super('carts.json')
    }
}

export default CartDaosFile