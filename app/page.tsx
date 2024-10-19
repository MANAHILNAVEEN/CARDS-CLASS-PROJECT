export default function Home(){
    return(
        <main>

        <div className="flex w-full justify-center mt-6 space-x-4 px-10 ">
        <div className="bg-blue-800 h-32 w-4/12"></div>
        <div className="bg-blue-600 h-32 w-4/12"></div>
        <div className="bg-blue-400 h-32 w-4/12"></div>
        </div>

        {/* for 2 row */}
        <div className="flex w-full justify-center mt-6 space-x-4 px-10 ">
        <div className="bg-purple-500 h-32 w-4/12"></div>
        <div className="bg-purple-700 h-32 w-4/12"></div>
        </div>

        </main>

    );
}
