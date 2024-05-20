import "./list.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable1 from "../../components/datatable/Datatable1"
import Payment from "../../components/payment/Payment"


const List3 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
     
        <Payment/>


      
        
      </div>

    </div>
  )
}

export default List3