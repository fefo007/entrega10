import admin from 'firebase-admin'
import config from '../config.js'

admin.initializeApp({
    credential:admin.credential.cert(config.firebase)
})

const db = admin.firestore()

class FirebaseProdContainer {
    constructor(collectionName){
        this.collection=db.collection(collectionName)
    }
    async getAll(){
        try {
            const files = []
            const snapshot= await this.collection.get()
            snapshot.forEach(doc=>{
                files.push({id: doc.id,...doc.data()})
            })
            return files
        }
        catch(err){
            console.log('no se pudo cargar el archivo')
        }
    }
    async getById(idProduct){
        try{
            let files = await this.getAll()
            let resultProduct=files.find(product=>product.id===Number(idProduct))
            return resultProduct
        }
        catch(err){
            console.log('no se pudo cargar el archivo')
        }
    }
    async save(product){
        try{
            const itemSave= await this.collection.add(product)
            return {...itemSave,id:itemSave.id}}
        catch (error){
            console.log('error de escritura')
        }
    }
    async  updateById(newProduct){
        try{
            const updateProd=await this.collection.doc(newProduct.id).set(newProduct)
            return updateProd}
        catch(error){
            throw new Error('error al actualizar')
        }
    }
    async deleteById(idProduct) {
        try{
            const deleteProd=await this.collection.doc(idProduct).delete()
            return deleteProd}
        catch(error){
            throw new Error('error al actualizar')
        }
    }
}

export default FirebaseProdContainer