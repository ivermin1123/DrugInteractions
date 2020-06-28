using System;
using System.Data;
using WebAPI.ConnectSQL;
using Microsoft.Extensions.Configuration;

namespace drug.bo
{
    public class blc_drug
    {
        private readonly ConnectSQL sql = new ConnectSQL();

        public DataSet Get_ALL()
        {
            String sqlText = String.Format("exec [get_all_drug]");
            return sql.connect(sqlText);
        }             

    }
}
