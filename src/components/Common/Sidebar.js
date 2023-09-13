import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import MyHabitPageButton from './MyHabitPageButton';
import CreateGroupButton from './CreateGroupButton';
import JoinedGroupsButton from './JoinedGroupsButton';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`h-screen sticky top-0 bg-[#2D3C4A] shadow-md transition-all ${
        isHovered ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex flex-col ${
          isHovered ? 'items-end pr-6' : 'items-center'
        }`}
      >
        <HamburgerButton isHovered={isHovered} />
      </div>
      <div
        className={`flex flex-col space-y-14 ${
          isHovered ? 'items-start w-64 pl-6' : 'items-center'
        } transition-all`}
      >
        <MyHabitPageButton isHovered={isHovered} />
        <CreateGroupButton isHovered={isHovered} />
        <JoinedGroupsButton isHovered={isHovered} />
      </div>
    </div>
  );
};
export default Sidebar;
