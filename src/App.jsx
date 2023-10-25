import { useEffect, useState } from "react"
import Header from "./components/Header"
import ListView from "./pages/ListView"
import MapView from "./pages/MapView"
import { useDispatch } from "react-redux"
import { getFlights } from "./redux/actions/flightAction"
import Detail from "./components/Detail"

function App() {
  const [whichView, setwhichView] = useState(true)
  const [showDetail,setShowDetail]=useState(false)
  const [detailId,setDetailId]=useState(null)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getFlights())
  },[])

  const openModal=(id)=>{

    setDetailId(id);
    setShowDetail(true)

  }



  return (
    <>
      <Header />
      <div className="view-buttons">
        <button className={whichView ? 'active' :""}  onClick={() => setwhichView(true)}>Map View</button>
        <button className={!whichView ? 'active' :""}  onClick={() => setwhichView(false)}>List View</button>
      </div>
      {/* Ternary operator could have been used here, but I wrote it this way so that the pages can be seen clearly. */}
      {whichView && <MapView 
      openModal={openModal}/>}
      {!whichView && <ListView
      openModal={openModal} />}

        {showDetail && <Detail 
        detailId={detailId}
        closeModal={()=>setShowDetail(false)}/>}
        <p style={{textAlign:"center"}}>Mustafa Ilker TEKIR</p>
   </>
   
  )
}

export default App
