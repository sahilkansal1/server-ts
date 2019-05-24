import { Request, Response } from "express";
import { db } from "./dbconnection";
export class Controller {
  deleteUser = (req: Request, res: Response) => {
    db.query(`DELETE FROM crudapp.users WHERE id=${req.params.id}`);
  };
  editUser = (req: Request, res: Response) => {
    db.query(
      `UPDATE crudapp.users SET first_name = '${
        req.body.first_name
      }', middle_name = '${req.body.middle_name}', last_name = '${
        req.body.last_name
      }', address='${req.body.address}', email='${req.body.email}', roles='${
        req.body.roles
      }',customer='${req.body.customer}' WHERE id = ${req.params.id}`,
      (error: string, results: any) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results);
      }
    );
    //res.json(usersData[req.params.id]);
  };
  addUser = (req: Request, res: Response) => {
    db.query(
      `INSERT INTO crudapp.users (first_name, middle_name, last_name, address, phone_no, email, roles,customer) VALUES (
      '${req.body.first_name}',' ${req.body.middle_name} ','${
        req.body.last_name
      }',
      '${req.body.address}',
      '${req.body.phone_no}','${req.body.email}','${req.body.roles}','${
        req.body.customer
      }')`,
      (error: string, results: any) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results);
      }
    );
  };
  getUsers = (req: Request, res: Response) => {
    db.query(
      "select crudapp.users.id,crudapp.users.first_name,crudapp.users.middle_name,crudapp.users.last_name,crudapp.users.address,crudapp.users.email,crudapp.users.phone_no, crudapp.roles.roles, crudapp.customer.customer_name from crudapp.users inner join crudapp.roles on crudapp.roles.id = crudapp.users.roles inner join crudapp.customer on crudapp.customer.id=crudapp.users.customer ORDER BY crudapp.users.id",
      (error:string, results: any) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  };
  getUser = (req: Request, res: Response) => {
    db.query(
      `select crudapp.users.id,crudapp.users.first_name,crudapp.users.middle_name,crudapp.users.last_name,crudapp.users.address,crudapp.users.email,crudapp.users.phone_no, crudapp.roles.roles, crudapp.customer.customer_name from crudapp.users inner join crudapp.roles on crudapp.roles.id = crudapp.users.roles inner join crudapp.customer on crudapp.customer.id=crudapp.users.customer where crudapp.users.id=${
        req.params.id
      }`,
      (error: string, results: any) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  };
}
