import React, { useState } from 'react';
import AddServices from "../../AddServices/AddServices";
import ManageOrder from '../../ManageOrder/ManageOrder';
import Services from '../../Services/Services';
const AdminDashboard = () => {
    const [control,setControl]=useState("addServices");
    return (
        <div className='admin-container'>
            <div className='dashboard'>
                <div className='admin-box'>
                    <div className='row admin-container'>
                        <div className='col-md-3'>
                            <div className='admin-area p-1'>
                                <h6>Dashboard</h6>
                                <div className='all-menu mt-5'>
                                   <li onClick={()=>setControl('addServices')}
                                   className='admin-menu p-2'>Add Services</li>
                                   <li onClick={()=>setControl('servicess')}
                                   className='admin-menu p-2'>Manage Services</li>
                                   <li onClick={()=>setControl('manageOrder')}
                                   className='admin-menu p-2'>Manage Order</li>
                                   <li onClick={()=>setControl('status')}
                                   className='admin-menu p-2'>Orders Status</li>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className='col-md-9 text-center'>
                            <h1>Render Your Components</h1>
                        {control==="servicess" && <Services></Services>}
                        {control==="manageOrder" && <ManageOrder></ManageOrder>}
                        {control==="addServices" && <AddServices></AddServices>}
                            
                            </div>
                        
                    </div>
                    
                </div>
                
            </div>
          
        </div>
    );
};

export default AdminDashboard;