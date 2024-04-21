"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_builder_1 = __importDefault(require("../Services/query_builder"));
const MindSQL_1 = __importDefault(require("../Services/MindSQL"));
const Connection_1 = __importDefault(require("../connection/Connection"));
class QueryController {
    static generateQuery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
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
                const sql_query = yield (0, query_builder_1.default)(data);
                console.log(sql_query);
                const connection = yield Connection_1.default.getConnection();
                // let [dbData,field] = await connection.execute(sql_query);
                // console.log(dbData)
                res.json({
                    query: sql_query,
                });
            }
            catch (e) {
                console.log(e);
                res.status(500).json({
                    status: 500,
                    message: "Invalid fields sent",
                });
            }
        });
    }
    static generateMindQuery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const sql_query = yield (0, MindSQL_1.default)(data);
                console.log(sql_query);
                res.json(sql_query);
            }
            catch (e) {
                res.status(500).json({
                    status: 500,
                    message: "Invalid fields sent",
                });
            }
        });
    }
}
exports.default = QueryController;
