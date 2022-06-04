//? comp
export default function MenuButton({ setIsActive, isActive }) {
    function openHandler() {
        setIsActive((e) => !e);
    }
    return (
        <div id="nav-icon1" onClick={openHandler} className={isActive ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
