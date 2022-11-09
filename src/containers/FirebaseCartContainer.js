import admin from 'firebase-admin'
import config from '../config.js'

admin.initializeApp({
    credential:admin.credential.cert(config.firebase)
})

const db = admin.firestore()

class FirebaseCartContainer {
    constructor(collectionName){
        this.collection=db.collection(collectionName)
    }
    async createCart(){
        try{
            let cart ={
                    id:(Math.random() + 1).toString(20).substring(3),
                    timestamp:new Date().toLocaleString(),
                    products:[]}
            const itemSave= await this.collection.add(cart)
            return itemSave.id}
        catch(error){
            throw new Error('error al actualizar')
        }
    }
    async deleteCart(cartId){
        try{
            const deleteProd=await this.collection.doc(cartId).delete()
            return deleteProd}
        catch(error){
            throw new Error('error al actualizar')
        }
    }
    async getById(cartId){
        try{
            const cart=await this.collection.doc(cartId).get()
                return cart}
        catch(error){
            throw new Error('error al actualizar')
        }
        }
    async save(idProduct,idcart){
        try{
            const carrito =await this.getById(idcart)
            const prod=await db.collection('products').doc(idProduct).get()
            const saveInCart=carrito.products.push(prod)
            const save = await this.collection.add(saveInCart)
            return save
            }
        catch(error){
            throw new Error('error al actualizar')
        }
    }
    async deleteById(idProduct,idcart) {
        try{
            const carrito = this.getById(idcart)
            const arrayFiltrado = carrito.products.filter(products => products.id !== idProduct);
            carrito=arrayFiltrado
            const deleted = await this.collection.set(carrito)
            return deleted}
        catch(error){
            throw new Error('error al actualizar')
        }
    }
}

export default FirebaseCartContainer