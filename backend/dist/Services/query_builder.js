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
exports.default = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        var sql_query = `SELECT `;
        if (data.fields.length > 0) {
            data.fields.forEach((element, key) => {
                if (key > 0)
                    sql_query += ` , ${element} `;
                else
                    sql_query += ` ${element} `;
            });
        }
        else {
            sql_query += ` * `;
        }
        sql_query += ` FROM ${data.table} `;
        if (data.conditions.length > 0) {
            sql_query += ` WHERE `;
            data.conditions.forEach((element, key) => {
                element.condition.forEach((item, index) => {
                    console.log(item);
                    if (element.condition.length == 1)
                        sql_query += ` ${item.field} ${item.sign} ${typeof item.value === "string" ? `'${item.value}'` : item.value} `;
                    else if (element.condition.length - 1 == index)
                        sql_query += ` AND ${item.field} ${item.sign}  ${typeof item.value === "string" ? `'${item.value}'` : item.value}  ) `;
                    else if (index == 0)
                        sql_query += `( ${item.field} ${item.sign}  ${typeof item.value === "string" ? `'${item.value}'` : item.value}  `;
                    else
                        sql_query += ` AND ${item.field} ${item.sign}  ${typeof item.value === "string" ? `'${item.value}'` : item.value}  `;
                });
                if (data.conditions.length - 1 !== key) {
                    sql_query += ` OR `;
                }
            });
        }
        return resolve(sql_query);
    });
});
