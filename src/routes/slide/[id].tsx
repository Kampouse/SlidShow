import { useNavigate, useParams,useLocation } from "solid-start";
import { Navigate,  } from "solid-start";
import type {JSX } from "solid-js";
import { set } from "zod";
import slided from "../slide";
import { Outlet } from "solid-start";
  

type nav =   ReturnType<typeof useNavigate>
type location = ReturnType<typeof useLocation>


export const getCurrentSlide = (navi: nav,loc:location ) => {

//get the current slide from the location
const currentSlide = loc.pathname.split("/")[2]
 
 return currentSlide

}
const getFirstSlide = (allSlide: Array<string>) => {
    return allSlide.find((key) => {
        const reg_test = new RegExp(`\\/${1}_`).test(key)
        if (reg_test) {
            return key
        }
    })
} 


export const NextSlide = (navi: nav,loc:location, slide?:string ) => {
    const currentSlide = getCurrentSlide(navi,loc)
    const nextSlide = parseInt(currentSlide) + 1
    navi("/slide/" + slide) 

}


export const Layout = (props: { children: JSX.Element }) => {
    return (
        <div>
               
            <h1>Layout</h1>
            <Outlet />
            {props.children}
        </div>
    );
}


export const NextSlideString = (navi: nav, loc: location,inverse?:boolean ) => {



    const currentSlide = getCurrentSlide(navi,loc)
    // get next  slide in the directory 
    const nextSlide = parseInt(currentSlide) +  (inverse ? -1 : 1)
    //get all files in the directory
    const allSlides = import.meta.glob("./*.tsx", {eager: true})
     // get all keys from the glob
    const allSlidesKeys = Object.keys(allSlides)
    return allSlidesKeys.find((key) => {
        // find the key that matches the next slide
         // take the number followed by an underscore and compare it to the next slide
       const  reg_test =  new RegExp(`\\/${nextSlide}_`).test(key)
        if (reg_test) {
            return key
        }

    })?. split("/")[1].split(".")[0]  ||  getFirstSlide(allSlidesKeys)?.split("/")[1].split(".")[0] 







} 



export const GetNextSlideButton = () => {
    const loc = useLocation();
    const nav = useNavigate();
    const currentSlide = getCurrentSlide(nav,loc)
     // take the number  in the key and compare it to the next slide
        // if the next slide is greater than the number in the key then return the key
         
    return  <button onClick={() =>  NextSlide(nav,loc,currentSlide ) }> what ever </button>
}






const Slide = () => {
    const nav = useNavigate();
    const loc = useLocation();
    getCurrentSlide(nav,loc)
 //    getCurrentSlide(nav)
      

    return (
        <div>
                this is a slide 

            <GetNextSlideButton />
        </div>
    );
};

export default Slide;
