import { createProduct, getAllProducts, getProductById } from '../services/productService.js';

export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products)
    }
    catch (error) {
        res.status(500).json({
            error: "Erro Ao Buscar Produtos",
        });
    }
};

export const createProductController = async(req, res) => {
    try{
        const newProduct = await createProduct(req.body);
        res.status(201).json(newProduct)
    }
    catch(error) {
        res.status(500).json({error: "Erro Ao Criar Produtos"});
    }
};

export const getProduct = async(req,res) => {
    try{
        const product = await getProductById(req.params.id)
        if(product){
            res.json(product);
        }else{
            res.status(500).json({error:"Produto Não Encontrado"})
        }
    }
    catch(error){
        res.status(500).json({error:"Erro Ao Buscar Produto"})
    }
}