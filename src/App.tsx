import styles from './App.module.css'
import { CreateText } from './components/CreateTask'
import { Header } from './components/Header'
// import { Task } from './components/Task'
import './global.css'

function App() {
 
  return (
   <>
   <Header/>
   <div className={styles.content}>
   <CreateText/>
   {/* <Task/> */}
   </div>
   </>
  )
}

export default App
