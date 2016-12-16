import {Router, Request, Response, NextFunction} from 'express';
import * as User from '../schema/User'
export class UserRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    User.find((err, Users) => {
        if (err) {
            res.json({info: 'error during find Users', error: err});
        };
        res.json({info: 'Users found successfully', data: Users});
    });
  }
  
  
  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const userRoutes = new UserRouter();
userRoutes.init();

export default userRoutes.router;