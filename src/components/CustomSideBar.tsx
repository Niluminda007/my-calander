import backgroundImage from "../assets/bg_jellyFish.jpg";
const CustomSideBar = () => {
  return (
    <div
      className="w-[50%]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}></div>
  );
};

export default CustomSideBar;
