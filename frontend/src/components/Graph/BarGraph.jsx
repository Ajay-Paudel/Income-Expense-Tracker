import React,{useState} from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import PieGraph from "./PieGraph";


const BarGraph = ({ data }) => {
  const [isPieGraphActive,setIsPieGraphActive]=useState(false)
  const categories = data.map((entry) => entry.category);
  const amounts = data.map((entry) => entry.amount);

  return (
    <>
      <div class="flex justify-end mt-6">
        <button
          onClick={()=>setIsPieGraphActive(!isPieGraphActive)}
          class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          {isPieGraphActive?"Line Graph":"Bra Graph"}
        </button>
      </div>

      <div className="justify-center">
        {isPieGraphActive?<PieGraph data={data}/>
        :
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: categories, // Use category names as x-axis labels
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: amounts, // Use amounts as the data for the bars
            },
          ]}
          width={1000}
          height={300}
        />
      }
      </div>
    </>
  );
};

export default BarGraph;
