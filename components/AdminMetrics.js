import { NumericFormat } from "react-number-format";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";

const AdminMetrics = ({products}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-[100px]">
      <div className="flex px-[30px] items-center justify-between h-[200px] w-[300px] shadow-lg rounded-sm">
        <div>
          {" "}
          <div className="text-xl">Total products</div>
          <div className="text-lg">{products?.length}</div>
        </div>
        <div className="bg-[#187EB4] p-2 rounded-full text-[#fff]">
          <MdOutlineProductionQuantityLimits className="text-[40px]" />
        </div>
      </div>
      <div className="flex px-[30px] items-center justify-between h-[200px] w-[300px] shadow-lg rounded-sm">
        <div>
            {" "}
            <div className="text-xl">Revenue</div>
            <div className="text-lg">
            <NumericFormat
              value={100000}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
            </div>
         
          </div>
          <div className="bg-[#187EB4] p-2 rounded-full text-[#fff]">
            <GrMoney className="text-[40px]" />
          </div>
      </div>
      <div className="flex px-[30px] items-center justify-between h-[200px] w-[300px] shadow-lg rounded-sm">
          <div>
            {" "}
            <div className="text-xl">Orders</div>
            <div className="text-lg">20</div>
          </div>
          <div className="bg-[#187EB4] p-2 rounded-full text-[#fff]">
            <FaListCheck className="text-[40px]" />
          </div>
     </div>
    </div>
  );
};

export default AdminMetrics;
