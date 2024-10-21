interface AvatarProps {
  name: string;
}

const Avatar = ({ name }: AvatarProps) => {
  return (
    <div className="w-36 px-6 py-6 text-center">
      <img className="rounded-full" src="https://i.ibb.co/x6qJyft/a1.png" />
      <div className="text-white text-sm font-normal font-['Inter'] ">
        {name}
      </div>
    </div>
  );
};
export default Avatar;
