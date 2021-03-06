import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
    return (
         <div style={props.sectionStyle}>
            <Header tiles={props.tiles}/>
                {props.children}
             <Footer/>
         </div>
    );
}
export default Layout;