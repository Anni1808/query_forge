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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (requestData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const API_KEY = "cd0c402e6669392ea85fad8dbf343a3f92f114d473e7286744040bb89987170e";
        const API_ENDPOINT = "https://www.text2sql.ai/api/sql/generate";
        function text_to_sql(prompt, sql_type) {
            return __awaiter(this, void 0, void 0, function* () {
                //   const headers = {
                //     Authorization: `Bearer ${API_KEY}`,
                //     "Content-Type": "application/json",
                //   };
                const data = {
                    prompt: prompt,
                    type: sql_type,
                    schema: "Employee (id, name, department_id); Department (id, name, address); Salary_Payments (id, employee_id, amount: int, date: navchar);",
                };
                try {
                    // const response: AxiosResponse = await axios.post(API_ENDPOINT, data, {
                    //   headers: {
                    //     Authorization: `Bearer ${API_KEY}`,
                    //   },
                    // });
                    // if (response.status === 200) {
                    //   response.data.output = ` ${response.data.output}`;
                    //   console.log(response.data)
                    //   response.data.output.replace(/\n/g, " ");
                    //   console.log(response.data)
                    //   return response.data;
                    // } else {
                    //   console.error(`Error: ${response.status}`);
                    //   return null;
                    // }
                    return {
                        'query': 'SELECT * FROM users where name = devam'
                    };
                }
                catch (error) {
                    console.error(`Error: ${error.message}`);
                    return null;
                }
            });
        }
        // Example usage
        const prompt = requestData.prompt;
        const sql_type = requestData.sql_type;
        const result = yield text_to_sql(prompt, sql_type);
        return result;
    }
    catch (e) {
        console.log("error main mindsql", e);
        return new Object();
    }
});
