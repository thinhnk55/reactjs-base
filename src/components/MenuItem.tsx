interface MenuItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const MenuItem = ({ label, active, onClick }: MenuItemProps) => {
  return (
    <div
      className={`w-full h-[43px] px-6 py-3 justify-start items-center inline-flex ${
        active ? "bg-secondary" : "bg-primary"
      }  hover:bg-secondary transition-colors duration-200 cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`text-center ${
          active ? "text-primary" : "text-white"
        } text-large font-semibold font-['Inter']`}
      >
        {label}
      </div>
    </div>
  );
};
export default MenuItem;
