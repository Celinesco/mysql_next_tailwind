import Navbar from "./Navbar";
import Footer from "./footer";


export default function Layout({ children }) {
  return (
    <div className="w-screen dark:bg-gray-800">
      <Navbar />
      <div className="bg-gray-100 sm:w-full p-10 lg:w-1/2 m-auto dark:bg-gray-800 h-screen">
        <div className="container mx-auto h-full py-20">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
