import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";


export default function Feed() {
    const posts =[
        {
            id: "1",
            name: "Mohan Reddy",
            username: "timmapuramreddy",
            userimage: "/images/DSC_7850.JPG",
            image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
            text: "Wow Nce Photo!!!",
            timestamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Mohan Reddy",
            username: "timmapuramreddy",
            userimage: "/images/DSC_7850.JPG",
            image: "https://images.unsplash.com/photo-1563759553854-95ea771b8932?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
            text: "Wow Nce Photo!!!",
            timestamp: "8 hours ago"
        }
    ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 border-b bg-white border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input />
        { posts.map((post, index)=>(
            <Post key={post.id} post={post} />
        ))}
    </div>
  )
}
