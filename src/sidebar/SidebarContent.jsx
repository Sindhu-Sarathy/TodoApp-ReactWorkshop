import React, { useState } from 'react';

const SidebarContent = () => {

 const Navlinks=[
    { id: 1, name: "Dashboard", href: "#", icons: "bi-grid" },
    { id: 2, name: "Users", href: "#" ,icons: "bi-people" },
    { id: 3, name: "Tasks", href: "#",icons: "bi-list-check" },
    { id: 4, name: "Settings", href: "#",icons: "bi-gear" },
 ];

const[user,setUser]=useState({
    name:"Sindhuja Parthasarathy"
});

    return (
        <div className='d-flex flex-column flex-shrink-0 p-5 bg-dark bg-gradient' style={{height:'100vh'}}>
            <i className="bi bi-columns-gap text-white" style={{ fontSize: "32px" }}></i>
            
            <ul className='nav nav-pills flex-column mb-auto mt-5'>
                  {
                Navlinks.map((link) => (
                <li className="nav-item">
                    <a className="nav-link link-dark text-white" href={link.href} key={link.id}>
                        <i className={`bi ${link.icons} me-3`} ></i>
                    {link.name}
                    </a>
                </li>
                ))
                }
            </ul>
            
            <hr className='text-white'></hr>
         
         <div className='text-white'>
            <p>{user.name}</p>
            <i class="bi bi-box-arrow-right"></i> Logout
            </div>
            
        </div>
    );
};

export default SidebarContent;