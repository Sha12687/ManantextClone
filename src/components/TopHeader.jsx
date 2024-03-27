import React from 'react'

function TopHeader() {
    return (
        <div className='flex bg-green-400 space-x-6 items-center px-4 '>
            <span id="et-info-phone" className='space-x-2'>+91-9779454899</span>

            <a href="mailto:mktg@manantex.com"><span id="et-info-email">mktg@manantex.com</span></a>

        </div>
    )
}

export default TopHeader