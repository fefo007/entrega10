import MongoDbCartContainer from '../../containers/MongoDbCartContainer.js'

class CartDaosMongoDb extends MongoDbCartContainer {
    constructor() {
        super('carts',{
            id:{type:number,required:true},
            timestamp:{trype:number},
            products:{type:[],required:true}
        })
    }
}

export default CartDaosMongoDb