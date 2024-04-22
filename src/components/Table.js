import AllButoon from "./buttonField/Button"
const Table =() =>{
    return(
        <div className="table">
        <div className="table-heading p-5">
        <div className="title ">
        <h2>Application Status</h2>
        </div>
      <div className="application-btn ">
      <div>
      <AllButoon styles={"app-btn-1 text-white text-base text-justify"} icon={<span className="app-count rounded-lg bg-white p-2 text-lime-900 font-medium ">67</span>} type= {"submit"} btnText ={<span className="ml-2">Total Applications</span>}/>
      </div>
     <div>
     <AllButoon  styles={"app-btn text-base text-wrap text-justify"}icon={<span className="app-count rounded-lg bg-slate-200 p-2 text-lime-900 font-medium">13</span>}  type= {"submit"} btnText ={<span className="ml-2">Under Progress</span>}/>
     </div> 
     <div>
     <AllButoon styles={"app-btn text-base text-justify"} icon={<span className="app-count rounded-lg bg-slate-200 p-2 text-lime-900 font-medium">2</span>} type= {"submit"} btnText ={<span className="ml-2">Disbursed Applications</span>}/>
     </div> 
     <div>
     <AllButoon styles={"app-btn text-base text-justify"} icon={<span className="app-count rounded-lg bg-slate-200 p-2 text-lime-900 font-medium">44</span>} type= {"submit"} btnText ={<span className="ml-2">Rejected Applications</span>}/>
     </div> 
    
      </div>
        </div>
        <div className="table-body">
          <div className="t-title p-5">
          <h3 className="text-lg">Showing 10 records out of 67</h3>
          <p>Last 3 months modified data</p>
          </div>
          <table>
          <thead>
              <tr>
                  <th>Lead Details</th>
                  <th>Application Details</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Stage</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>
                  <tr className="text-orange-500">
                  LEA-36948411
                  </tr>
                  <tr>
                    <div className="box">
                    <div className="fill-color-1 bg-green-900"></div>
                    <p className="ml-2">Renewable ZT</p>
                    </div>
                  </tr>
                  <tr>
                    <div className="box">
                    <div className="fill-color-1 bg-orange-500"></div>
                    <p className="ml-2">Term Loan</p>
                    </div>
                  </tr>
                  <tr>
                    <div className="box">
                    <div className="fill-color-1 bg-violet-950"></div>
                    <p className="ml-2">Renew</p>
                    </div>
                  </tr>
                  </td>
                  <td>
                  <p>App ID: LAI-122360192</p>
                  <p>Mobile: 9887159350</p>
                  <p> Email: arjunsharma434@gmail.com</p>
                  </td>
                  <td>
                  <p>Created: 29/03/2024 </p>
                  <p>Modified: 29/03/2024</p>
                  </td>
                  <td>
                  <p>Status: Application in Progress </p>
                  <p>Sub Status: Not Started</p>
                  </td>
                  <td>
                  <p>Stage: Pre-Terms Stage</p>
                  <p>Sub Stage: CIBIL Pending</p>
                  </td>
                  <td>
                  <button><i class="fa-solid fa-check"></i></button>
                  <button><i class="fa-solid fa-download"></i></button>
                  <button><i class="fa-solid fa-xmark"></i></button>
                  </td>
              </tr>
              <tr>
                  <td>
                  <tr className="text-orange-500">
                  LEA-36948411
                  </tr>
                  <tr>
                    <div className="box">
                    <div className="fill-color-1 bg-green-900"></div>
                    <p className="ml-2">Renewable ZT</p>
                    </div>
                  </tr>
                  <tr>
                    <div className="box">
                    <div className="fill-color-1 bg-orange-500"></div>
                    <p className="ml-2">Term Loan</p>
                    </div>
                  </tr>
                  <tr>
                    <div className="box">
                    <div className="fill-color-1 bg-violet-950"></div>
                    <p className="ml-2">Renew</p>
                    </div>
                  </tr>
                  </td>
                  <td>
                  <p>App ID: LAI-122360192</p>
                  <p>Mobile: 9887159350</p>
                  <p> Email: arjunsharma434@gmail.com</p>
                  </td>
                  <td>
                  <p>Created: 29/03/2024 </p>
                  <p>Modified: 29/03/2024</p>
                  </td>
                  <td>
                  <p>Status: Application in Progress </p>
                  <p>Sub Status: Not Started</p>
                  </td>
                  <td>
                  <p>Stage: Pre-Terms Stage</p>
                  <p>Sub Stage: CIBIL Pending</p>
                  </td>
                  <td>
                  <button><i class="fa-solid fa-check"></i></button>
                  <button><i class="fa-solid fa-download"></i></button>
                  <button><i class="fa-solid fa-xmark"></i></button>
                  </td>
              </tr>
              <tr>
                  <td>
                  <tr className="text-orange-500">
                  LEA-36948411
                  </tr>
                  <tr>
                    <div className="box">
                    <div className="fill-color-1 bg-green-900"></div>
                    <p className="ml-2">Renewable ZT</p>
                    </div>
                  </tr>
                  <tr>
                    <div className="box">
                    <div className="fill-color-1 bg-orange-500"></div>
                    <p className="ml-2">Term Loan</p>
                    </div>
                  </tr>
                  <tr>
                    <div className="box">
                    <div className="fill-color-1 bg-violet-950"></div>
                    <p className="ml-2">Renew</p>
                    </div>
                  </tr>
                  </td>
                  <td>
                  <p>App ID: LAI-122360192</p>
                  <p>Mobile: 9887159350</p>
                  <p> Email: arjunsharma434@gmail.com</p>
                  </td>
                  <td>
                  <p>Created: 29/03/2024 </p>
                  <p>Modified: 29/03/2024</p>
                  </td>
                  <td>
                  <p>Status: Application in Progress </p>
                  <p>Sub Status: Not Started</p>
                  </td>
                  <td>
                  <p>Stage: Pre-Terms Stage</p>
                  <p>Sub Stage: CIBIL Pending</p>
                  </td>
                  <td>
                  <button><i class="fa-solid fa-check"></i></button>
                  <button><i class="fa-solid fa-download"></i></button>
                  <button><i class="fa-solid fa-xmark"></i></button>
                  </td>
              </tr>
             
          </tbody>
      </table>
        </div>
        </div>
     
    )
}

export default Table ;