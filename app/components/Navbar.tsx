export default function Navbar (){
    return(
        <div>
        <header>
         <nav className="flex items-center w-full bg-black h-32">
         <div className="bg-blue-800 w-96 h-10"></div>
         
         <div className="flex justify-end w-3/5 items-center">
         <div className="bg-pink-400 w-44 h-10"></div>
         <div className="bg-yellow-300 w-44 h-10"></div>
         <div className="bg-purple-400 w-44 h-10"></div>
         </div>
         </nav>
         </header>
         </div>
    );
}