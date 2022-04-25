import './App.css';
import Home from './components/home';
import Enrolled from './components/Enrolledpage';
import MyCourses from './components/MyCoursesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Course from './components/Course';
import { Grid } from '@mui/material';
import Explore from './components/Explore';
import CreateCourseAgain from './components/CreateCourseAgain';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MyPortfolio from './components/myProfile/MyPortfolio';



function App() {
    return (
        <DndProvider backend={HTML5Backend}>
        <div className= "App" >
       
        <BrowserRouter>
         
          
          <Routes>
          <Route path='/'exact element={ <Homepage/ >}/>
          <Route path='/Home'exact element={ <Explore/> }/>
           <Route path='/Enrolled' element={<Enrolled/>}/>
           <Route path='/CreateCourse' element={<CreateCourseAgain/>}/>
           <Route path='/MyCourses' element={<MyCourses/>} />
           <Route path='/MyPortfolio' element={<MyPortfolio/>} />
           <Route path='/Slides/:id' element={
                      <Grid style={{display: 'flex', flexDirection: 'row',height:'100vh'}}>
                            <Course />

                      </Grid>
              
                } />
           
           
          </Routes>
         
      
     
       </BrowserRouter>
       

        </div>
        </DndProvider>
    );
}

export default App;