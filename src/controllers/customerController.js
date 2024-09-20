import {getAllCustomers} from '../services/customerServices.js';

export const  getCustomer = async(req, res) => {
    try{
        const customer = await getAllCustomers();
        res.json(customer)
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao Buscar customer",
        });
    }
}