import { CircleHelpIcon, EllipsisIcon, EyeOffIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

export default function Settings() {
    return (
        <Popover>
            <PopoverTrigger className="w-fit h-fit hover:bg-gray-200 rounded-md p-1 cursor-pointer">
                <EllipsisIcon className="w-4 h-4"/>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-fit h-fit p-1">
                <div className="flex flex-row items-center justify-start gap-2 hover:bg-gray-200 rounded-md py-1 px-3 cursor-pointer">
                    <EyeOffIcon className="w-4 h-4"/>
                    <span className="text-xs font-light">Hide from home</span>
                </div> 
                <div className="flex flex-row items-center justify-start gap-2 hover:bg-gray-200 rounded-md py-1 px-3 cursor-pointer">
                    <CircleHelpIcon className="w-4 h-4"/>
                    <span className="text-xs font-light">Learn more</span>
                </div>
            </PopoverContent>
        </Popover>
    )
}