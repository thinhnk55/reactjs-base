// components/Header.tsx
import { FC } from "react";
import { Icon } from "@iconify/react";

interface HeaderProps {
  onToggleSidebar: () => void;
  showAvatar: boolean;
}

const Header: FC<HeaderProps> = ({ onToggleSidebar, showAvatar = true }) => {
  return (
    <div className="sticky top-0 w-full h-24 p-4 bg-primary flex justify-between items-center">
      <button
        onClick={onToggleSidebar}
        className="md:hidden focus:outline-none"
      >
        <Icon
          icon="mingcute:menu-fill"
          width="48"
          height="48"
          className="text-white"
        />
      </button>
      {showAvatar && (
        <div className="w-16 h-16 transition-opacity duration-300 ease-in-out opacity-100">
          <img
            className="rounded-full"
            src="https://i.ibb.co/x6qJyft/a1.png"
            alt="User Avatar"
          />
        </div>
      )}
      {!showAvatar && (
        <button
          onClick={onToggleSidebar}
          className="md:hidden focus:outline-none transition-opacity duration-300 ease-in-out opacity-100"
        >
          <Icon
            icon="icon-park-solid:close-one"
            width="36"
            height="36"
            className="text-white"
          />
        </button>
      )}
    </div>
  );
};

export default Header;
