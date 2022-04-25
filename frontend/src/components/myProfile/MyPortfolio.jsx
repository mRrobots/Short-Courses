import Menu from './Menu.jsx';
import Display from './Display.jsx';

const MyPortfolio = () =>{

    return(
        <div style = {MyPortfolioStyle}>
            <div className='pin' style = {LeftPanelStyle} >
                <Menu/>
            </div>
            <div style = {RightPanelStyle}>
                <Display/>
            </div>
        </div>
    )
}

const MyPortfolioStyle = {
    display: 'flex',
    flexDirection: 'row', 
    background: 'gray', 
    height: '100vh'

}

const LeftPanelStyle = {
    //flex: 1,
    display: 'flex',
    background: 'gray',
    height: '100vh',
    //position: 'fixed'
}

const RightPanelStyle = {
    //flex: 3,
    height: '100vh',
    background: 'white',
    overflowY: 'scroll'
}
export default MyPortfolio;