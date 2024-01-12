import GoUpBtn from "./GoUpBtn"
import Header from "./Header"

function AppLayout({children}) {
  return (
    <>
      <Header />
      <GoUpBtn />
      {children}
    </>
  )
}

export default AppLayout