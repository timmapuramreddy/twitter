import { EmojiHappyIcon, PhoneIcon, PhoneOutgoingIcon, PhotographIcon, UploadIcon } from "@heroicons/react/outline";


export default function Input() {
  return (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
            <img src = "/images/DSC_7850.JPG" alt="user-img"
            className="w-11 h-11 rounded-full cursor-pointer hover:brightness-95" />
           
            <div className="w-full divide-y divide-gray-200">
                <div className="">
                    <textarea className ="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" rows="2" placeholder="Whats Happnening?"></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-blue-500 hover:bg-sky-100"/>
                        <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-blue-500 hover:bg-sky-100"/>
                    </div>
                    <button className=" bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
                </div>
            </div>
        </div>
  )
}
