//? required
import { useState } from "react";

//? comp
export default function MenuButton() {
    const [active, setActive] = useState(false);
    function openHandler() {
        setActive(!active);
    }
    return (
        <div id="nav-icon1" onClick={openHandler} className={active ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
