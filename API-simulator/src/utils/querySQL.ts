import mssql from "mssql";
import { databaseConnect } from "../database";

interface QuerySQLProps {
  attributes?: string;
  entity: string;
  extra?: string;
  condition?: string;
  log?: boolean;
}

const querySQL = async ({
  attributes,
  entity,
  condition,
  extra,
  log,
}: QuerySQLProps) => {
  try {
    await databaseConnect();

    const sql = `
      SELECT
        ${attributes ? attributes : "*"}
      FROM ${entity}
      ${extra ? extra : ""}
      ${condition ? condition : ""}
    `;

    if (log) console.log("querySQL log: ", sql);

    const result = await mssql.query(sql);

    return result.recordset;
  } catch (error) {
    console.log("querySQL error: ", error);
    throw error;
  }
};

export { querySQL };
