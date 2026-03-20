import SidebarContent from "./sidebar/SidebarContent"
import TaskContent from "./tasks/TaskContent"

function App() {
  

  return (
    <>
     <div className="d-flex bg-secondary bg-gradient">
      <div style={{width:'250px'}}>
        <SidebarContent/>
      </div>
      <div className="flex-grow-1">
        <TaskContent/>
      </div>
     </div>
    </>
  )
}

export default App
