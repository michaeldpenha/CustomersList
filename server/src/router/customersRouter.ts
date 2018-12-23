import { Request, Response, Router } from 'express';
import CustomersData from '../models/customers';

export class CustomersRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    /**
     * routes
     */
    public routes = () => {
        this.router.get('/', this.fetchCustomers);
        this.router.post('/', this.addCustomer);
        this.router.put('/',this.updateCustomer);
        this.router.delete('/:id',this.deleteCustomer);
        this.router.get('/:id',this.fetchCustomerInfo)
    }
    /**
     * fetchCustomers
     */
    public fetchCustomers = (req: Request, res: Response) => {
        /**
         * For now as it is a static json we are just sendig the static json for now
         */
        const data = CustomersData;
        res.status(200).json({message : 'Successfully fetched Customers !!' ,  data });
    }
    /**
     * addCustomer
     */
    public addCustomer = (req: Request, res: Response): void => {
        /**
         * Logic to add Items
         */
    }
    /**
     * updateCustomer
     */
    public updateCustomer = (req : Request, res : Response) : void => {
        /**
         * Logic to update items
         */
    }
    /**
     * deleteCustomer
     */
    public deleteCustomer = (req : Request , res : Response) =>  {
        /**
         * Logic to delete item
         */
    }
    /**
     * fetchCustomerInfo
     */
    public fetchCustomerInfo = (req : Request , res : Response) => {
        /**
         * To fetch particular record
         */
    }
}
const customerRouter = new CustomersRouter();
customerRouter.routes();
export default customerRouter.router;