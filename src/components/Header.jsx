import React from 'react'

function Header() {
    return (
        <div className=' h-12 flex justify-between items-center bg-slate-500 '>
            <div className=''>
                <h1>logo</h1>
            </div>
            <div className="fle">
                <ul>
                    <li className='text-gray-950'>Home</li>
                    <li>About</li>
                    <li>OUR Advantage </li>
                    <li>Product</li>
                    <li>sustainability</li>
                    <li>certificate</li>
                    <li>contact us</li>
                </ul>
            </div>
        </div>
    )
}

export default Header