import { FC, useState } from "react";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";

const SideBar: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = [
    { link: "/about", label: "About", index: 0 },
    { link: "/project", label: "Project", index: 1 },
    { link: "/education", label: "Education", index: 2 },
  ];
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="w-48 h-screen bg-primary flex-col justify-start items-start gap-2.5 inline-flex">
      <Avatar name="Phương Thảo" />
      {menuItems.map((item) => (
        <MenuItem
          key={item.index}
          label={item.label}
          active={activeIndex === item.index}
          onClick={() => {
            setActiveIndex(item.index);
            handleNavigation(item.link);
          }}
        />
      ))}
    </div>
  );
};

export default SideBar;
