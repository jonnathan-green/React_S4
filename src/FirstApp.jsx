import PropTypes  from "prop-types";

export const FirstApp = ( { title, subTitle}) =>{
    return (
        <>
        <em>{subTitle}</em>

        <h1>{title}</h1>
        
        </>
    )
}

FirstApp.propTypes ={

    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}