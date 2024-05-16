import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Table from "../../../utils/Table";
import LineGraph from "../../../components/Graph/LineGraph";

const IncomeExpense = () => {
  const [incomeExpenseData, setIncomeExpenseData] = useState();
  const [isShowGraph,setIsShowGraph]=useState(true)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}incomeexpense`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        toast.success(res?.data.message, { position: "top-right" });
        setIncomeExpenseData(res?.data);
      })
      .catch((err) => {
        toast.error(err.data.message, { position: "top-right" });
      });
  }, []);
  console.log(incomeExpenseData);
  return (
    <>
    <div class="flex justify-end mt-6">
        <button onClick={()=>setIsShowGraph(!isShowGraph)} class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
        {isShowGraph?"Graph":"Tabular"}
        </button>
      </div>

    {isShowGraph?<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
      <div>
        <h2 class="text-lg font-semibold text-gray-700 capitalize text-center">
          Income
        </h2>
        <Table data={incomeExpenseData?.incomes} />
      </div>
      <div>
        <h2 class="text-lg font-semibold text-gray-700 capitalize text-center">
          Expenses
        </h2>
        <Table data={incomeExpenseData?.expenses} />
      </div>
      <ToastContainer />
    </div>:<LineGraph incomeData={incomeExpenseData?.incomes} expenseData={incomeExpenseData.expenses}/>}
    </>
  );
};

export default IncomeExpense;
