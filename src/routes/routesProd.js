import express from 'express'
import {Router} from 'express'
// import adminMiddleware from '../middlewares/admin.js'
import {prodDaos as apiProd} from '../daos/daoIndex.js'

const routerProducts=new Router()

routerProducts.use(express.json())
routerProducts.use(express.urlencoded({ extended: true }))

routerProducts.get('/:id?',async (req, res) => {
    let selectedProduct =await JSON.stringify(apiProd.getById(req.params.id))
    if (selectedProduct){
            res.json(`Su producto es : ${selectedProduct}`)}
    else{
        let completeList=JSON.stringify(apiProd.getAll())
        res.json(`La lista de producto es : ${completeList}`)
    }
});

routerProducts.post('/',async (req, res) => {
    await apiProd.save(req.body)
    let productSaved = JSON.stringify(req.body)
    res.json(`Se agrego el producto : ${productSaved}`)
});

routerProducts.put('/:id',async (req,res)=>{
    let id = parseInt(req.params.id)
    let newProd = req.body
    await apiProd.updateById(id,newProd)
    let productUpdated = JSON.stringify(req.body)
    res.json(`Se actualizo correctamente.....la nueva informacion es: ${productUpdated}`)
})

routerProducts.delete('/:id',async(req,res)=>{
    let id = parseInt(req.params.id)
    let productDeleted =await JSON.stringify(apiProd.deleteById(id))
    if (productDeleted){
        res.json(`Se elimino correctamente el producto con id : ${id}`)}
    else{
        res.status(404).send({ error: "Product not found" })
    }
})

export default routerProducts
