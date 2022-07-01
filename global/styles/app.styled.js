import styled from "styled-components";
import { motion } from "framer-motion";

export const sizes = {
    xl:`(min-width:1441px)`,
    l:`(max-width:1440px)`,
    m:`(max-width:900px)`,
    s:`(max-width:600px)`,
}

export const SectionDiv = styled(motion.div)`
    padding: ${props => props.space ? `var(--padding-${props.space})` : '0'} 0;
`

export const Grid = styled.div`
    display:grid;
    grid-template-columns:${props => props.layout || '1fr'};
    gap:2rem;

    @media${sizes.m} {
        grid-template-columns:1fr;
    }
`

export const Container = styled.div`
    max-width:var(--container-main);
    width:90%;
    margin:auto;
`

export const ContainerInner = styled(Container)`
    max-width:var(--container-inner);
`

export const LinkBtn = styled(motion.a)`

`