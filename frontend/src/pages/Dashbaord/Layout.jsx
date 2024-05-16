import axios from "axios";
import React,{useState,useEffect} from "react";
import { Routes,Route, Link } from "react-router-dom";
import AllIncome from "./Income/AllIncome";
import AddIncome from "./Income/AddIncome";
import AddExpenses from "./Expenses/AddExpenses";
import AllExpenses from "./Expenses/AllExpenses";
import IncomeExpense from "./Income-Expense/IncomeExpense";
const Layout = () => {
  const [isAuthorized,setIsAuthorized]=useState(false);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_KEY}checkauth/checkauth`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
  })
  .then(res => {
      if(res.status) setIsAuthorized(true);
      else setIsAuthorized(false)
  })
  .catch(err => {
      setIsAuthorized(false)
  });
  },[])
  
  const dashboardList=[
    {
      name:"Add Income",
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>    
    },
    {
      name:"Income Analysis",
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
    </svg>
    
    },
    {
      name:"Add Expenses",
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>  
    },
    {
      name:"Expenses Analysis",
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
    </svg>
    
    },
    {
      name:"Ananlysis",
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
    
    }
  ]
  if(isAuthorized)
  {
    return (
      <>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
  
        <aside
          id="default-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
            <ul class="space-y-2 font-medium">
              {dashboardList?.map(item=>(
                <li>
                <Link
                 to={item.name.replace(/\s/g, "").trim().toLowerCase()}
                  class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                >
                 {item.icon}
                  <span class="ms-3">{item.name}</span>
                </Link>
              </li>
              ))}
            </ul>
          </div>
        </aside>
        <div class="p-4 sm:ml-64 mt-60">
          <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            
              <Routes>
                <Route path="addincome" element={<AddIncome/>}/>
                <Route path="addexpenses" element={<AddExpenses/>}/>
                <Route path="incomeanalysis" element={<AllIncome/>}/>
                <Route path="expensesanalysis" element={<AllExpenses/>}/>
                <Route path="ananlysis" element={<IncomeExpense/>}/>
              </Routes>
          </div>
        </div>
      </>
    );
  }
  else
  {
    return null;
  }
     
};

export default Layout;
