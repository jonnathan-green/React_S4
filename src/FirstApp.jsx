
import  PropTypes  from "prop-types";

export const FirstApp = ({ title, subTitle}) =>{
    return (
        <>

        <em> { title }</em>

        <h2> { subTitle }</h2>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}