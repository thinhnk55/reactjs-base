interface MenuItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function MenuItem({ label, active, onClick }: MenuItemProps) {
  return (
    <div
      className={`w-[345px] h-[43px] px-6 py-3 justify-start items-center inline-flex ${
        active ? "bg-[#ff6f00]" : "bg-[#6A1B9A]"
      }  hover:bg-[#ff6f00] transition-colors duration-200 cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`text-center ${
          active ? "text-#6A1B9A" : "text-white"
        } text-large font-semibold font-['Inter']`}
      >
        {label}
      </div>
    </div>
  );
}
