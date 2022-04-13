import CourseList from "./CourseList";
import EnrolledAppBar from "./EnrolledAppBar";
import {useLocation } from 'react-router-dom'




function Enrolled(){
    const {state} = useLocation();

    return(
        
        <>
        <EnrolledAppBar title={"Enrolled"} user={state.user}/>
        
        <CourseList user={state.user}/> 

        </>
    )
    
}
export default Enrolled;



// return(
    //     <div fluid>
            
    //         <Row className="my-0">
    //             <Col  lg="2" className="my-0 py-0 px-0" border="primary" >
    //              <CourseNav />
    //             </Col>
    //             <Col  lg md="auto" className='my-0 py-0 px-0'>
    //             <Row fluid className="justify-content-center  my-0" style={{ background: '#003B5C',color:"white",weight:'100vh',margin:'0px' }}>
    //             {/* <h3 className="d-flex justify-content-center"  style={{ background: '#003B5C',color:"white",weight:'100vh',margin:'0px' }}>
    //                 Enrolled
    //             </h3> */}
                
    //            </Row>
    //            <Row  fluid className="justify-content-center  my-0">
    //                <Col>
    //                <EnrolledAppBar/>
    //                <CourseList/>
    //                </Col>
    //            </Row>
              
    //             </Col>
    //         </Row>
    //     </div>

  
    // );