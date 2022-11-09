import express from 'express'
import {Router}from 'express'
import {cartDaos as apiCart} from '../daos/daoIndex.js'

const routerCart =new Router()

routerCart.use(express.json())
routerCart.use(express.urlencoded({ extended: true }))

routerCart.post('/',async (req,res)=>{
    let carritoCreado =await JSON.stringify(apiCart.createCart())
    res.json(`carrito creado con exito, su id es : ${carritoCreado}`)
})

routerCart.delete('/:id',async (req,res)=>{
    let id = parseInt(req.params.id)
    let cartDeleted =await JSON.stringify(apiCart.deleteCart(id))
    if (cartDeleted){
        res.json(`Se elimino correctamente el carrito`)}
    else{
        res.status(404).send({ error: "Product not found" })
    }
})

routerCart.get('/:id/productos',async (req,res)=>{
    let selectedCart =await JSON.stringify(apiCart.getById(req.params.id))
    if (selectedCart){
            res.json(`Su carrito contiene los siguientes productos : ${selectedCart}`)}
    else{
        res.status(404).send({ error: "Product not found" })
    }
})

routerCart.post('/:id/productos/:id_prod',async (req,res)=>{
    let {id,id_prod} = parseInt(req.params)
    await apiCart.save(id,id_prod)
    let productSaved = JSON.stringify(id,id_prod)
    res.json(`Se agrego el producto : ${productSaved}`)
})

routerCart.delete('/:id/productos/:id_prod',async (req,res)=>{
    let {id,id_prod} = parseInt(req.params)
    let productDeleted = await JSON.stringify(apiCart.deleteById(id,id_prod))
    if (productDeleted){
        res.json(`Se elimino correctamente el producto ${productDeleted}`)}
    else{
        res.status(404).send({ error: "Product not found" })
    }
})

export default routerCart 