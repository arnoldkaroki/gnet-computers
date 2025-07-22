import React, { useState } from 'react';
import '../../css/admin.css';
import { Link } from 'react-router';


const Admin = () => {
    const [isNavVisible, setNavVisible] = useState(true); 

    const toggleNav = () => {
        setNavVisible(!isNavVisible); 
    };

    return (
        <>
        <body>
       <section id='menu' >
        <div className='logo'>
            <image src='?' alt=''></image>
            <h2>GNET</h2>
        </div>

        <div className='items'>
<li>
  <a href='/admin'>
    <i className='fas fa-chart-pie'></i> Dashboard
  </a>
</li>
<li>
  <a href='/admin/products'>
    <i className='fab fa-uikit'></i> Products
  </a>
</li>
<li>
  <a href='/admin/category'>
    <i className='fas fa-th-large'></i> Categories
  </a>
</li>
<li>
  <a href='/admin/orders'>
    <i className='fas fa-edit'></i> Orders
  </a>
</li>
<li>
  <a href='/admin/users'>
    <i className='fas fa-users'></i> Users
  </a>
</li>
<li>
  <a href='/admin/settings'>
    <i className='fas fa-cog'></i> Settings
  </a>
</li>
<li>
  <a href='/admin/Statistics'>
    <i className='fas fa-chart-line'></i> Analytics
  </a>
</li>


        </div>
       </section>
       <section id='interface'>
        <div className='navigation'>
            <div className='n1'>
                <div>
                    <i id='menu-btn' className='fas fa-bars'></i>
                </div>
                <div className='search'>
                <i className='far fa-search'></i>
                <input type='text'placeholder='Search'></input>
                </div>
            </div>
        </div>
        
        <div className='profile'>
            <i className='far fa-bell'></i>
            <image src='?' alt=''></image>
        </div>

        <h3 className='i-name'>
            Dashboard
        </h3>

        <div className='values'>
        <div className='val-box'>
            <i className='fas fa-users'></i>
            <div>
                <h3>47</h3>
                <span>New Users</span>
            </div>
        </div>

        <div className='val-box'>
            <i className='fas fa-shopping-cart'></i>
            <div>
                <h3>2,457</h3>
                <span>Total Orders</span>
            </div>
        </div>
        
        <div className='val-box'>
            <i className='fas fa-acorn'></i>
            <div>
                <h3>2,000</h3>
                <span>Products Sold</span>
            </div>
        </div>
        <div className='val-box'>
            <i className='fas fa-dollar-sign'></i>
            <div>
                <h3>Ksh.70,000</h3>
                <span>This Month</span>
            </div>
        </div>
        <div className='board' >
            <table width='100%'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Title</td>
                        <td>Status</td>
                        <td>Role</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='people'>
                            <image scr='?' alt=''></image>
                            <div className='people-de'>
                                <h5>John Doe</h5>
                                <p>john@example.com</p>
                            </div>
                        </td>

                        <td className='people-des'>
                            <h5>Software Engineering</h5>
                            <p>Web Dev</p>
                        </td>
                        
                        <td className='active'><p>Active</p></td>

                        <td className='role'>
                            <p>Owner</p>
                        </td>

                        <td className='edit'><a href='#'>Edit</a></td>
                    </tr>
                                        <tr>
                        <td className='people'>
                            <image scr='?' alt=''></image>
                            <div className='people-de'>
                                <h5>John Doe</h5>
                                <p>john@example.com</p>
                            </div>
                        </td>

                        <td className='people-des'>
                            <h5>Software Engineering</h5>
                            <p>Web Dev</p>
                        </td>
                        
                        <td className='active'><p>Active</p></td>

                        <td className='role'>
                            <p>Owner</p>
                        </td>

                        <td className='edit'><a href='#'>Edit</a></td>
                    </tr>
                                        <tr>
                        <td className='people'>
                            <image scr='?' alt=''></image>
                            <div className='people-de'>
                                <h5>John Doe</h5>
                                <p>john@example.com</p>
                            </div>
                        </td>

                        <td className='people-des'>
                            <h5>Software Engineering</h5>
                            <p>Web Dev</p>
                        </td>
                        
                        <td className='active'><p>Active</p></td>

                        <td className='role'>
                            <p>Owner</p>
                        </td>

                        <td className='edit'><a href='#'>Edit</a></td>
                    </tr>
                                        <tr>
                        <td className='people'>
                            <image scr='?' alt=''></image>
                            <div className='people-de'>
                                <h5>John Doe</h5>
                                <p>john@example.com</p>
                            </div>
                        </td>

                        <td className='people-des'>
                            <h5>Software Engineering</h5>
                            <p>Web Dev</p>
                        </td>
                        
                        <td className='active'><p>Active</p></td>

                        <td className='role'>
                            <p>Owner</p>
                        </td>

                        <td className='edit'><a href='#'>Edit</a></td>
                    </tr>
                                        <tr>
                        <td className='people'>
                            <image scr='?' alt=''></image>
                            <div className='people-de'>
                                <h5>John Doe</h5>
                                <p>john@example.com</p>
                            </div>
                        </td>

                        <td className='people-des'>
                            <h5>Software Engineering</h5>
                            <p>Web Dev</p>
                        </td>
                        
                        <td className='active'><p>Active</p></td>

                        <td className='role'>
                            <p>Owner</p>
                        </td>

                        <td className='edit'><a href='#'>Edit</a></td>
                    </tr>
                                        <tr>
                        <td className='people'>
                            <image scr='?' alt=''></image>
                            <div className='people-de'>
                                <h5>John Doe</h5>
                                <p>john@example.com</p>
                            </div>
                        </td>

                        <td className='people-des'>
                            <h5>Software Engineering</h5>
                            <p>Web Dev</p>
                        </td>
                        
                        <td className='active'><p>Active</p></td>

                        <td className='role'>
                            <p>Owner</p>
                        </td>

                        <td className='edit'><a href='#'>Edit</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
       </section>
       </body>
        </>
    );
};

export default Admin;