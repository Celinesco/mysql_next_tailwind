import Navbar from "./Navbar";


export default function Layout({children}) {
  return (
    <>
      <Navbar />
    <div className="bg-color-gray-100 sm:w-full p-10 lg:w-1/2 m-auto ">
    
     <div className="container">{children}</div>
    </div>

    </>
  )
}
