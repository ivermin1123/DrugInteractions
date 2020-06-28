using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using custom;

namespace WebAPI.ConnectSQL
{
    public class ConnectSQL 
    {
        private readonly string connectSTR = ConfigurationManager.AppSetting["ConnectionStrings:DefaultConnection"];

        public ConnectSQL(string _connectSTR)
        {
            this.connectSTR = _connectSTR;
        }

        public ConnectSQL()
        {
            
        }

        public DataSet connect(string sql)
        {
            string conString = connectSTR;
            DataSet dataSet;
            SqlDataAdapter adapter = new SqlDataAdapter();
            DataSet ds = new DataSet();
            string firstSql = null;
            firstSql = sql;
            SqlConnection connection = new SqlConnection(conString);
            try
            {
                try
                {
                    connection.Open();
                    SqlCommand command = new SqlCommand(firstSql, connection)
                    {
                        CommandTimeout = 3600000
                    };
                    adapter.SelectCommand = command;
                    adapter.Fill(ds);
                    adapter.Dispose();
                    command.Dispose();
                    connection.Close();
                    dataSet = ds;
                    return dataSet;
                }
                catch
                {
                    if ((connection.State == ConnectionState.Connecting ? true : connection.State == ConnectionState.Open))
                    {
                        connection.Close();
                    }
                }
            }
            finally
            {
                if ((connection.State == ConnectionState.Connecting ? true : connection.State == ConnectionState.Open))
                {
                    connection.Close();
                }
            }
            dataSet = ds;
            return dataSet;
        }

        public void ConnectAndExcule(string sql)
        {
            string connetionString = null;
            string firstSql = null;
            firstSql = sql;
            SqlConnection connection = new SqlConnection(connetionString);
            try
            {
                connection.Open();
                (new SqlCommand(firstSql, connection)).ExecuteNonQuery();
                connection.Close();
            }
            catch
            {
            }
        }

        public int ConnectAndExculeScala(string sql)
        {
            int num;
            int result = 0;
            string firstSql = null;
            firstSql = sql;
            SqlConnection connection = new SqlConnection(connectSTR);
            try
            {
                try
                {
                    connection.Open();
                    SqlCommand command = new SqlCommand(firstSql, connection);
                    result = (int)command.ExecuteScalar();
                    command.Dispose();
                    connection.Close();
                    num = result;
                    return num;
                }
                catch (SqlException sqlException)
                {

                }
            }
            finally
            {
                if ((connection.State == ConnectionState.Connecting ? true : connection.State == ConnectionState.Open))
                {
                    connection.Close();
                }
            }
            num = result;
            return num;
        }

        public DataSet connectWithLongTime(string sql)
        {
            DataSet dataSet;
            SqlDataAdapter adapter = new SqlDataAdapter();
            DataSet ds = new DataSet();
            string firstSql = null;
            firstSql = sql;
            SqlConnection connection = new SqlConnection(connectSTR);
            try
            {
                try
                {
                    connection.Open();
                    SqlCommand command = new SqlCommand(firstSql, connection)
                    {
                        CommandTimeout = 3600000
                    };
                    adapter.SelectCommand = command;
                    adapter.Fill(ds);
                    adapter.Dispose();
                    command.Dispose();
                    connection.Close();
                    dataSet = ds;
                    return dataSet;
                }
                catch
                {
                    if ((connection.State == ConnectionState.Connecting ? true : connection.State == ConnectionState.Open))
                    {
                        connection.Close();
                    }
                }
            }
            finally
            {
                if ((connection.State == ConnectionState.Connecting ? true : connection.State == ConnectionState.Open))
                {
                    connection.Close();
                }
            }
            dataSet = ds;
            return dataSet;
        }
    }
}
