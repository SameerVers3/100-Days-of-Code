import React, { useState } from "react";

export default function DropDownItem(props){

    const [open, setOpen] = useState(true);

    return (
        <div href="#" className="menu-item"
            onHover={() => setOpen(e => !e)}
        >
            {props.children}
        </div>
    )
}