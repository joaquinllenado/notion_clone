import { CalendarDaysIcon, CalendarIcon } from "lucide-react";
import Settings from "./settings";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

export default function HomeCards() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-2xl gap-2">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center justify-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-gray-400"/>
                    <h1 className="text-xs text-gray-400">Upcoming Events</h1>
                </div>
                <Settings />
            </div>
            <Card className="w-full h-full p-0">
                <CardContent className="flex flex-row justify-start">
                    <div className="flex flex-col items-start justify-start px-4 py-10 gap-4 mr-0">
                        <CalendarDaysIcon className="w-6 h-6 text-gray-400"/>
                        <p className="text-xs text-gray-400">See your upcoming events and join meetings from Home.</p>
                        <p className="text-xs text-gray-400">Connect Notion Calendar</p>
                    </div>
                    <Separator orientation="vertical" className="h-full p-0 m-0"/>
                    <div className="flex flex-row items-start justify-center px-4 py-10 ml-0 gap-4 text-gray-400">
                        <div className="flex flex-col items-start justify-start gap-6">
                            <span className="text-sm ">Today <br/>Apr 28</span>
                            <span className="text-sm ">Today <br/>Apr 28</span>
                        </div>
                        
                        <div className="flex flex-col items-start justify-start gap-2">
                            <div className="flex flex-col items-start justify-center gap-6">
                                <span className="text-sm font-medium border-l-4 pl-2">My first meeti...<br/>9 AM · Office</span>
                                <span className="text-sm font-medium border-l-4 pl-2">Lunch<br/>1PM · Office</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}