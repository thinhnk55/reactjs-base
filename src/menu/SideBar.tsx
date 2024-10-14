import { useState } from "react";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

export default function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = [
    { label: "About", index: 0 },
    { label: "Projects", index: 1 },
    { label: "Education", index: 2 },
  ];

  return (
    <div className="w-[345px] h-[1024px] bg-[#6a1b9a] flex-col justify-start items-start gap-2.5 inline-flex">
      <Avatar name="Phương Thảo" />
      {menuItems.map((item) => (
        <MenuItem
          key={item.index}
          label={item.label}
          active={activeIndex === item.index}
          onClick={() => {
            setActiveIndex(item.index);
            console.log("Active: " + item.index);
          }}
        />
      ))}
    </div>
  );
}
