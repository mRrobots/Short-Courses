import Action from "./utils/Action.jsx";
import Profile from "./utils/profile.png";

const Menu = () => {
    return(
        <div style = {MenuStyle}>
            <img src = {Profile} width = {100} height = {100} style = {ProfileSyle}/>
            <div style = {UserNameStyle}>Username</div>
            <div style = {AboutCourses}>
                <div style = {CourseTag}>MyCourses 12</div>
                <div style = {CourseTag}>Enrolled 8</div>
            </div>
            <Action title = 'Expose View'/>
            <Action title = 'Personality Test'/>
            <Action title = 'MyCourses'/>
            <Action title = 'Enrolled'/>
            
        </div>
    )
}

const MenuStyle = {
    width: '100%',
    display: 'flex',
    background: '#003b5c',
    alignItems: 'center',
    flexDirection: 'column'
}

const ProfileSyle = {
    margin: 15,
}

const UserNameStyle = {
    fontWeight: 'Bold',
    color: 'white'
}

const AboutCourses = {
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    justifyContent: 'center',
    borderRadius: 14,
    margin: 12,
    padding: 12,
    width: "80%",
    color: 'white'
}

const CourseTag = {
    marginLeft: 15,
    marginRight: 15

}

export default Menu;