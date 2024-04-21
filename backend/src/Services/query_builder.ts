export default async (data: {
  table: string;
  fields: string[];
  conditions: {
    id: number;
    condition: {
      field: string;
      sign: string;
      value: string | number;
    }[];
  }[];
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    var sql_query = `SELECT `;
    if (data.fields.length > 0) {
      data.fields.forEach((element, key) => {
        if (key > 0) sql_query += ` , ${element} `;
        else sql_query += ` ${element} `;
      });
    } else {
      sql_query += ` * `;
    }
    sql_query += ` FROM ${data.table} `;

    if (data.conditions.length > 0) {
      sql_query += ` WHERE `;
      data.conditions.forEach((element, key) => {
        element.condition.forEach((item, index) => {
          console.log(item)
          if (element.condition.length == 1)
            sql_query += ` ${item.field} ${item.sign} ${
              typeof item.value === "string" ? `'${item.value}'` : item.value
            } `;
          else if (element.condition.length - 1 == index)
            sql_query += ` AND ${item.field} ${item.sign}  ${
              typeof item.value === "string" ? `'${item.value}'` : item.value
            }  ) `;
          else if (index == 0)
            sql_query += `( ${item.field} ${item.sign}  ${
              typeof item.value === "string" ? `'${item.value}'` : item.value
            }  `;
          else
            sql_query += ` AND ${item.field} ${item.sign}  ${
              typeof item.value === "string" ? `'${item.value}'` : item.value
            }  `;
        });
        if (data.conditions.length - 1 !== key) {
          sql_query += ` OR `;
        }
      });
    }
    return resolve(sql_query);
  });
};
