import {motion} from 'framer-motion';
const SectionWrapper = (Component:any, idName:string)=>
    function HOC(){
    return(
        <motion.section>
            <span className="hash-span" id={idName}>&nbsp;</span>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper