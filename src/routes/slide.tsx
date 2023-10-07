import { Outlet,useNavigate,useLocation } from "solid-start";
import { createEffect, onCleanup } from "solid-js";
import { NextSlide,NextSlideString } from "./slide/[id]";
export default function slided() {
    const loc = useLocation();
    const nav = useNavigate();
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
            NextSlide(nav,loc, NextSlideString(nav,loc,false))
        } else if (event.key === "ArrowLeft") {
            NextSlide(nav,loc, NextSlideString(nav,loc,true))
        }
    };

    createEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        onCleanup(() => {
            window.removeEventListener("keydown", handleKeyDown);
        });
    });
    return (<div class="bg-red-500 h-screen">
        <h1> this is a layout page </h1>
            <Outlet />
    </div>);

}