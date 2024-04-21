import { Request, Response } from "express";
import queryBuilder from "../Services/query_builder";
import MindSQL from "../Services/MindSQL";
import pool from "../connection/Connection";

export default class QueryController {
  static async generateQuery(req: Request, res: Response) {
    try {
      const data = req.body
      //   const data = {
      //     table: "",
      //     fields: [""],
      //     conditions: [
      //       {
      //         id:"",
      //         condition: [
      //           {
      //             field: "",
      //             sign: "",
      //             value: "", 
      //           },
      //         ],
      //       },
      //     ],
      //   };
      // const data = {
      //   table: "users",
      //   fields: ["name", "age", "address"],
      //   conditions: [
      //     {
      //       id: 1,
      //       condition: [
      //         {
      //           field: "name",
      //           sign: "=",
      //           value: "devam",
      //         },
      //         {
      //           field: "age",
      //           sign: "<",
      //           value: "25",
      //         },
      //       ],
      //     },
      //     {
      //       id: 2,
      //       condition: [
      //         {
      //           field: "name",
      //           sign: "=",
      //           value: "prashant",
      //         },
      //         {
      //           field: "age",
      //           sign: ">",
      //           value: "18",
      //         },
      //       ],
      //     },
      //   ],
      // };

      const sql_query:string = await queryBuilder(data)
      console.log(sql_query)
      const connection = await pool.getConnection();

      // let [dbData,field] = await connection.execute(sql_query);
      // console.log(dbData)
      res.json({
        query: sql_query,
            })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        status: 500,
        message: "Invalid fields sent",
      });
    }
  }
  static async generateMindQuery(req: Request, res: Response) {
    try {
      const data = req.body

      const sql_query = await MindSQL(data)
      console.log(sql_query)
      res.json(sql_query)
    } catch (e) {
      res.status(500).json({
        status: 500,
        message: "Invalid fields sent",
      });
    }
  }
}
