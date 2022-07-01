import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";

export default function Post({post}) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* User Image */}
        <img src={post.userimage} alt="user-mg"
            className="w-11 h-11 rounded-full cursor-pointer hover:brightness-95 mr-3" />
        {/* Right Side Div */}
        <div className="">
            {/* header Div */}
            <div className="flex items-center justify-between">
                {/* user info div */}
                <div className="flex items-center space-x-1 whitespace-nowrap">
                <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                <span className="text-sm sm:text-[15px]">@{post.username} - </span>
                <span className=" text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
                </div>
                {/* dot horizon icon */}
                <DotsHorizontalIcon className="h-10 w-11 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-500"/>
            </div>
            {/* post div */}
            <div className="">
                <p className=" text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
                {/* post Image */}
                <img className=" rounded-2xl mr-2" src={post.image} alt="post-img" />
            </div>
            {/* icons */}
            <div className="flex items-center justify-between text-gray-500 p-2">
                <ChatIcon className="h-9 w-9 hoverEffect hover:text-sky-500 hover:bg-blue-100 p-2" />
                <TrashIcon className="h-9 w-9 hoverEffect hover:text-red-500 hover:bg-red-100 p-2" />
                <HeartIcon className="h-9 w-9 hoverEffect hover:text-red-500 hover:bg-red-100 p-2" />
                <ShareIcon className="h-9 w-9 hoverEffect hover:text-sky-500 hover:bg-blue-100 p-2" />
                <ChartBarIcon className="h-9 w-9 hoverEffect hover:text-sky-500 hover:bg-blue-100 p-2" />
            </div>
            
        </div>
    </div>
  )
}
