import "./list.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable1 from "../../components/datatable/Datatable1"


const List2 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable1/>


      
        
      </div>

    </div>
  )
}

export default List2