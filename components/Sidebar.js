import Image from 'next/image'
import React from 'react'
import SidebarMenuItem from '../components/SidebarMenuItem'
import {DotsHorizontalIcon, HomeIcon} from '@heroicons/react/solid'
import { HashtagIcon, BellIcon, InboxIcon, BookmarkAltIcon, ClipboardIcon, UserIcon, DotsCircleHorizontalIcon } from '@heroicons/react/outline'

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl-items-start fixed h-full">
        {/* Twitter Logo section */}
        <div className="hoverEffect p-1 hover:bg-blue-100 xl:px-1">
            <Image width="50" height="50" src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.png">
            </Image>
        </div>
        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
        <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
        <SidebarMenuItem text="bookmarks" Icon={BookmarkAltIcon}/>
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
        <SidebarMenuItem text="Profile" Icon={UserIcon}/>
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
        </div>
        {/* Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg">Tweet</button>
        {/* Mini Profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start">
            <img className="h-12 w-12 rounded-full xl:mr-2" 
             src = "https://www.shareicon.net/data/256x256/2015/09/08/98071_man_512x512.png"
             alt="user-img"></img>
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">Mohan Reddy</h4>
                <p className="text-gray-500">@mohanreddy</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8  hidden xl:inline" />
        </div>
    </div>
  )
}
