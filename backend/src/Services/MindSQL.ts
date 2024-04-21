import axios, { AxiosResponse } from "axios";
import { json } from "express";

export default async (requestData: any) => {
  try {
    const API_KEY: string =
      "cd0c402e6669392ea85fad8dbf343a3f92f114d473e7286744040bb89987170e";
    const API_ENDPOINT: string = "https://www.text2sql.ai/api/sql/generate";

    async function text_to_sql(prompt: string, sql_type: string): Promise<any> {
      //   const headers = {
      //     Authorization: `Bearer ${API_KEY}`,
      //     "Content-Type": "application/json",
      //   };

      const data = {
        prompt: prompt,
        type: sql_type,
        schema:
          "Employee (id, name, department_id); Department (id, name, address); Salary_Payments (id, employee_id, amount: int, date: navchar);",
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
          'query':'SELECT * FROM users where name = devam'
        }
      } catch (error: any) {
        console.error(`Error: ${error.message}`);
        return null;
      }
    }

    // Example usage
    const prompt: string = requestData.prompt;
    const sql_type: string = requestData.sql_type;
    const result = await text_to_sql(prompt, sql_type);
    return result;
  } catch (e) {
    console.log("error main mindsql", e);
    return new Object();
  }
};
