import Header from "../../components/Header";
import Footer from "../../components/Footer";
import mainTemplateCss from './styles.module.css'

const MainTemplate = ({children}) => {
    return (
        <div className={mainTemplateCss.div}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainTemplate