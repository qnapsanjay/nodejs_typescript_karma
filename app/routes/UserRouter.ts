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
            return res.json({info: 'error during find Users', error: err});
        };
        return res.json({info: 'Users found successfully', data: Users});
    });
  }

  /**
   * POST Create user
   */
  public save(req: Request, res: Response, next: NextFunction){
    let user = new User(req.body);
    user.save((err, Users) => {
        if (err) {
            return res.json({info: 'error during find Users', error: err});
        };
        return res.json({info: 'Users found successfully', data: Users});
    });
  }
  
  /**
   * GET Find user by ID
   */
  public findOne(req: Request, res: Response, next: NextFunction){
    User.findOne({_id: req.params.id}).exec((err, Users) => {
        if (err) {
            return res.json({info: 'error during find Users', error: err});
        };
        return res.json({info: 'Users found successfully', data: Users});
    });
  }
  
  /**
   * DELETE Delete user by ID
   */
  public deleteOne(req: Request, res: Response, next: NextFunction){
    User.remove({_id: req.params.id}).exec((err, Users) => {
        if (err) {
            return res.json({info: 'error during find Users', error: err});
        };
        return res.json({info: 'Users found successfully', data: Users});
    });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.post('/', this.save);
    this.router.get('/:id', this.findOne);
    this.router.delete('/:id', this.deleteOne);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const userRoutes = new UserRouter();
userRoutes.init();

export default userRoutes.router;