using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using WebAPI.api;

namespace WebAPI.API.Controllers.drug
{
    [ApiController]
    [Route("api/[controller]")]
    public class DrugController : ControllerBase
    {
        static readonly demoIRespository obj = new demoRespository();

        [HttpGet]
        //Get api/taikhoan
        public IEnumerable<demoListUnitItem> Get()
        {
            DataSet ds = obj.Get_all();
            demoListItem item = new demoListItem();
            if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                List<demoListUnitItem> ItemList = new List<demoListUnitItem>();

                ItemList = (from DataRow row in ds.Tables[0].Rows
                            select new demoListUnitItem
                            {
                                MaThuoc = row["MaThuoc"].ToString(),
                                TenThuoc = row["TenThuoc"].ToString(),
                                NongDo = row["NongDo"].ToString(),
                                PhanLoai = row["PhanLoai"].ToString()
                            }).ToList();
                return ItemList;
            }
            return null;
        }

    }
}