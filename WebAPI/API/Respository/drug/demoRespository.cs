using drug.bo;
using System.Data;

namespace WebAPI.api
{
    public class demoRespository : demoIRespository
    {
        private blc_drug blc = new blc_drug();
        public DataSet Get_all()
        {
            return blc.Get_ALL();
        }
    }
}