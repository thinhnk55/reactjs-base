interface AvatarProps {
  name: string;
}

export default function Avatar({ name }: AvatarProps) {
  return (
    <div className="w-[345px] h-[223px] py-6 flex-col justify-center items-center gap-1.5 inline-flex">
      <img
        className="w-[150px] h-[150px] rounded-full"
        src="https://i.ibb.co/x6qJyft/a1.png"
      />
      <div className="text-center text-white text-base font-normal font-['Inter']">
        {name}
      </div>
    </div>
  );
}
