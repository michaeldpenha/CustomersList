import { Request, Response, Router } from 'express';
import RefData from '../models/refData';

export class RefDataRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes = () => {
        this.router.get('/', this.fetchRefData);
    }

    /**
     * fetchRefData
     */
    public fetchRefData = (req: Request, res: Response) => {
        /**
         * For now as it is a static json we are just sendig the static json for now
         */
        const data = RefData;
        res.status(200).json({message : 'Successfully fetched ref Data !!' ,  data });
    }
}

const refDataRouter = new RefDataRouter();
refDataRouter.routes();
export default refDataRouter.router;