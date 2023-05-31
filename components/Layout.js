

export default function Layout({children}) {
  return (
    <>
    
    <div className="bg-color-gray-100 h-screen p-10">
    <div>Navbar</div>
     <div className="container mx-auto h-full">{children}</div>
    </div>

    </>
  )
}
