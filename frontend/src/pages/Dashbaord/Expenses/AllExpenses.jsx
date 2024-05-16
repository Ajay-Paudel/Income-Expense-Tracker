import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import BarGraph from "../../../components/Graph/BarGraph";

const AllExpenses = () => {
  const [allExpenses, setAllExpenses] = useState();
  const [isShowGraph, setIsShowGraph] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}expenses/getallexpenses`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data,"ressssssssss");
        toast.success(res.data.message, { position: "top-right" });
        setAllExpenses(res.data.expenses);
      })
      .catch((err) => {
        toast.error(err.data.message, { position: "top-right" });
      });
  }, []);
  return (
    <>
      <div class="flex justify-end mt-6">
        <button
          onClick={() => setIsShowGraph(!isShowGraph)}
          class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          {isShowGraph?"Graph":"Tabular"}
        </button>
      </div>
      {isShowGraph ? (
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {allExpenses?.map((expense) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {expense?.name}
                  </th>
                  <td class="px-6 py-4">{expense.category}</td>
                  <td class="px-6 py-4">{expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <BarGraph data={allExpenses} />
      )}
      <ToastContainer />
    </>
  );
};

export default AllExpenses;
