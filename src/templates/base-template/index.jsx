import Header from "../../components/header";
import Footer from "../../components/footer";

const BaseTemplate = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default BaseTemplate