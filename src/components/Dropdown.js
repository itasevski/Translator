import React from "react";
import { useState, useEffect, useRef } from "react";

const Dropdown = ({ items, selected, onSelectedChange, label }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            // if element inside of ref is clicked, do nothing (ref contains event handler)
            // if element outside of ref is clicked, set open to false
            if(ref.current.contains(event.target)) return;
            setOpen(false);
        }

        document.body.addEventListener("click", onBodyClick, { capture: true });

        // cleanup function - triggered once component is removed from DOM
        return () => {
            document.body.removeEventListener("click", onBodyClick, { capture: true });
        }
    }, []);

    const renderedItems = items.map((item) => {
        if(item.value === selected.value) return null;

        return (
            <div key={item.label}
                 className="item"
                 onClick={() => onSelectedChange(item)}>
                {item.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown ${open ? "visible active" : ""}`}
                     onClick={() => setOpen(!open)}>
                    <i className="dropdown icon" />
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {renderedItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;