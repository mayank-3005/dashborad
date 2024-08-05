import React from 'react';
import user from '../assets/images/images.jpeg';


const Table = () => {
  const data = [
    {
      id: 1,
      customer: 'Turkey',
      orderNo: '15467895',
      amount: '$124.00',
      status: 'Pending'
    },
    {
      id: 2,
      customer: 'Turkey',
      orderNo: '15467896',
      amount: '$150.00',
      status: 'Pending'
    },
    {
      id: 3,
      customer: 'Turkey',
      orderNo: '15467897',
      amount: '$200.00',
      status: 'Pending'
    },
    {
      id: 4,
      customer: 'Turkey',
      orderNo: '15467897',
      amount: '$200.00',
      status: 'Pending'
    },
 
    {
      id: 5,
      customer: 'Turkey',
      orderNo: '15467897',
      amount: '$200.00',
      status: 'Pending'
    },
 
    {
      id: 6,
      customer: 'Turkey',
      orderNo: '15467897',
      amount: '$200.00',
      status: 'Pending'
    },
 
    
  ];

  return (
    <div className="table-view bg-slate-800">
      <div className="revenue-heading-content">
        <div className="revenue-title">
          <h3 className="font-bold text-xl text-white">Recent Orders</h3>
        </div>
      </div>
      <div className="table-body">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>
                  <div className='countery-container'>
                    <div>
                      <img src={user} alt='user' height={30} width={30} className='rounded-xl'></img>
                    </div>
                    <div>
                      <h3 className='font-medium'>{row.customer}</h3>
                    </div>
                  </div>
                </td>
                <td>
                  <h3 className='font-medium'>{row.orderNo}</h3>
                </td>
                <td>
                  <h3 className='font-medium'>{row.amount}</h3>
                </td>
                <td className='font-medium text-cyan-400'><h3>{row.status}</h3></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
