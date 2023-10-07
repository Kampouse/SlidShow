

import { useNavigate, useParams,  useLocation } from "solid-start";
import  { getCurrentSlide,NextSlide } from "./[id]";
import { GetNextSlideButton } from "./[id]";

export default function Page1() {
//const nav = useNavigate();
const loc = useLocation();
const nav = useNavigate();
const currentSlide = getCurrentSlide(nav,loc)

    return (<div>   
        <h1>
         am a page 1
        </h1>
     <GetNextSlideButton />    
        

</div>);


}