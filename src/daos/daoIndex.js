let cartDaos
let prodDaos

switch (process.env.PERSIS){
    case 'json':
        const {default:ProdDaosFile}=await import('./products/ProdDaosFile.js')
        const {default:CartDaosFile}=await import('./carts/CartDaosFile.js')
        prodDaos=new ProdDaosFile()
        cartDaos=new CartDaosFile()
        break;
    case 'firebase':
        const {default:ProdDaosFirebase}=await import('./products/ProdDaosFirebase.js')
        const {default:CartDaosFirebase}=await import('./carts/CartDaosFirebase.js')
        prodDaos=new ProdDaosFirebase()
        cartDaos=new CartDaosFirebase()
        break;
    case 'mongodb':
        const {default:ProdDaosMongoDb}=await import('./products/ProdDaosMongoDb.js')
        const {default:CartDaosMongoDb}=await import('./carts/CartDaosMongoDb.js')
        prodDaos=new ProdDaosMongoDb()
        cartDaos=new CartDaosMongoDb()
        break;
    default:
        const {default:ProdDaosMemory}=await import('./products/ProdDaosMemory.js')
        const {default:CartDaosMemory}=await import('./carts/CartDaosMemory.js')
        prodDaos=new ProdDaosMemory()
        cartDaos=new CartDaosMemory()
        break;
}

export {prodDaos,cartDaos}