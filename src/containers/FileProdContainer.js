import {promises as fs} from 'fs'
import config from '../config.js'

class FileProdContainer {
    constructor(ruta){
        this.ruta=`${config.filesSystem.path}/${ruta}`
    }
    async getAll(){
        try {
            const files = await fs.readFile(this.ruta,'utf-8')
            return JSON.parse(files)
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
            let files = await this.getAll()
            let idProduc=files.length > 0 ? files.length+1 : 1
            product.id=idProduc
            files.push(product)
            await fs.writeFile(this.ruta,JSON.stringify(files))
            return files}
        catch (error){
            console.log('error de escritura')
        }
    }
    async  updateById(idProduc,newProduct){
        try{
            let files = await this.getAll()
            newProduct.id=idProduc
            files.splice(idProduc-1,1,newProduct)
            await fs.writeFile(this.ruta,JSON.stringify(files))
            return this.getById(idProduc)}
        catch(error){
            throw new Error('error al actualizar')
        }
    }
    async deleteById(idProduct) {
        try{
        let files = await this.getAll()
        const arrayFiltrado = files.filter(products => products.id !== idProduct);
        await fs.writeFile(this.ruta,JSON.stringify(arrayFiltrado))
        return files=arrayFiltrado}
        catch(error){
            throw new Error('error al actualizar')
        }
    }
}

export default FileProdContainer