using System;
using System.Collections.Generic;

namespace WebAPI.api
{
    public class demoFilter
    {
        public String ListId { get; set; }
        public Int32 Id { get; set; }
        public Int64 uId { get; set; }
        public Int32 Page { get; set; }
        public Int32 PageSize { get; set; }
        public String SortOption { get; set; }
        public String SortType { get; set; }
        public String SearchText { get; set; }
    }

    public class demoListItem
    {
        public IList<demoListUnitItem> ListItem { get; set; }
        public Int64 TotalItem { get; set; }
    }

    public class demoListUnitItem
    {
        public string MaThuoc { get; set; }
        public string TenThuoc { get; set; }
        public string PhanLoai { get; set; }
        public string NongDo { get; set; }
    }


    public class demoDetailItem
    {
        public Int64 Id { get; set; }
        public String name { get; set; }
        public String phone { get; set; }
        public Boolean deleted { get; set; }
        public Int64 uId { get; set; }
        public String ChildItemString { get; set; }
        public IList<demoDetailChildItem> ListChildItem { get; set; }


    }

    public class demoDetailChildItem
    {
        public Int64 Id { get; set; }
        public Int64 demo_id { get; set; }
        public String name { get; set; }
        public String phone { get; set; }
        public Boolean deleted { get; set; }
        public Int64 uId { get; set; }

    }

}