import {promises as fs} from 'fs'
import config from '../config.js'

class FileCartContainer {
    constructor(ruta){
        this.ruta=`${config.filesSystem.path}/${ruta}`
    }
    async createCart(){
        try{
            const files = await fs.readFile(this.ruta,'utf-8')
            const filesToObj=JSON.parse(files)
            let cart ={
                    id:(Math.random() + 1).toString(20).substring(3),
                    timestamp:new Date().toLocaleString(),
                    products:[]}
            filesToObj.push(cart)
            await fs.writeFile(this.ruta,JSON.stringify(filesToObj))
            return cart.id}
        catch(error){
            throw new Error('error al actualizar')
        }
    }
    async deleteCart(cartId){
        try{
            const files = await fs.readFile(this.ruta,'utf-8')
            const filesToObj=JSON.parse(files)
            const arrayFiltrado = filesToObj.filter(cart => cart.id !== cartId);
            filesToObj=arrayFiltrado
            await fs.writeFile(this.ruta,JSON.stringify(filesToObj))
            return arrayFiltrado}
        catch(error){
            throw new Error('error al actualizar')
        }
    }
    async getById(cartId){
        try{
            const files = await fs.readFile(this.ruta,'utf-8')
            const filesToObj=JSON.parse(files)
            let resultCart=filesToObj.find(cart => cart.id===cartId)   
            let productsInCart=resultCart.products
            console.log(productsInCart)
                return productsInCart}
        catch(error){
            throw new Error('error al actualizar')
        }
        }
    async save(idProduct,idcart){
        try{
            const carrito = this.getById(idcart)
            const productRead =await fs.promises.readFile(`${config.filesSystem.path}/products.json`,'utf-8')
            const productToObj = JSON.parse(productRead)
            const productArray=productToObj.filter(product=>product.id !== idProduct)
            carrito.products.push(productArray)
            await fs.writeFile(this.ruta,JSON.stringify(carrito))
            }
        catch(error){
            throw new Error('error al actualizar')
        }
    }
    async deleteById(idProduct,idcart) {
        try{
            const carrito = this.getById(idcart)
            const arrayFiltrado = carrito.products.filter(products => products.id !== idProduct);
            await fs.writeFile(this.ruta,JSON.stringify(arrayFiltrado))
            return carrito=arrayFiltrado}
        catch(error){
            throw new Error('error al actualizar')
        }
    }
}

export default FileCartContainer