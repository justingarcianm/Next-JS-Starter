import { SectionDiv } from "../../global/styles/app.styled";

export const sectionVariant = {
    out: {
        y:'100px',
        opacity:0
    },
    in: {
        y:0,
        opacity:1
    },
    transition: {
        duration:1
    }
}

const Section = ({children, space}) => {
    return <SectionDiv 
    initial='out'
    whileInView='in'
    transition='transition'
    variants={sectionVariant}
    space={space}
    >
        {children}
    </SectionDiv>
}

export default Section