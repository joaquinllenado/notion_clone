import HomeCards from "@/components/home/home-cards";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <h1 className="text-2xl font-medium pt-10">Good afternoon, Chat</h1>
      <HomeCards />
    </div>
  );
}