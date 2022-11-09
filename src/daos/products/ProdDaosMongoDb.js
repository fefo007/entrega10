import MongoDbProdContainer from '../../containers/MongoDbProdContainer.js'

class ProdDaosMongoDb extends MongoDbProdContainer {
    constructor() {
        super('Prod',{
            name:{type:String,required:true},
            price:{type:Number,required:true},
            description:{type:string,required:true},
            code:{type:Number,required:true},
            url:{type:string,required:true},
            stock:{type:Number,required:true},
        })
    }
}

export default ProdDaosMongoDb