import { useState } from 'react';

const JoinedGroupsButton = ({ isHovered }) => {
  const [showGroupList, setShowGroupLis] = useState(false);

  const handleGroupsButtonClick = () => {
    setShowGroupLis(!showGroupList);
  };

  return (
    <>
      <div
        className={`flex w-full items-center hover:font-bold ${
          showGroupList
            ? 'text-customGreen font-bold'
            : 'text-customGray hover:text-customDarkGray'
        } ${isHovered && 'justify-between'}`}
        style={{ cursor: 'pointer' }}
        onClick={handleGroupsButtonClick}
      >
        <div
          className={`${isHovered ? 'flex items-center justify-center' : ''}`}
        >
          <svg className='w-8 h-8 fill-current' viewBox='0 0 30 30' fill='none'>
            <path d='M11.2512 12.5C14.0126 12.5 16.2512 10.2614 16.2512 7.5C16.2512 4.73858 14.0126 2.5 11.2512 2.5C8.4898 2.5 6.25122 4.73858 6.25122 7.5C6.25122 10.2614 8.4898 12.5 11.2512 12.5Z' />
            <path d='M11.2512 26.2512C16.0837 26.2512 20.0012 24.0126 20.0012 21.2512C20.0012 18.4898 16.0837 16.2512 11.2512 16.2512C6.41873 16.2512 2.50122 18.4898 2.50122 21.2512C2.50122 24.0126 6.41873 26.2512 11.2512 26.2512Z' />
            <path d='M26.2495 21.2506C26.2495 23.3216 23.7052 25.0005 20.5985 25.0005C21.5138 24.0001 22.1432 22.7444 22.1432 21.2522C22.1432 19.7585 21.5123 18.5016 20.5953 17.5006C23.7019 17.5006 26.2495 19.1795 26.2495 21.2506Z' />
            <path d='M22.4995 7.50085C22.4995 9.57193 20.8206 11.2509 18.7495 11.2509C18.2979 11.2509 17.865 11.171 17.464 11.0247C18.0554 9.98459 18.3931 8.78147 18.3931 7.49947C18.3931 6.2184 18.0559 5.01612 17.4652 3.97653C17.8659 3.83052 18.2984 3.75085 18.7495 3.75085C20.8206 3.75085 22.4995 5.42979 22.4995 7.50085Z' />
          </svg>
          {isHovered && <span className='ml-2'>가입된 그룹</span>}
        </div>
        {isHovered &&
          (showGroupList ? (
            <svg
              className='w-7 h-7 fill-current mr-6'
              viewBox='0 0 30 30'
              fill='none'
            >
              <path d='M15.463 19.7939L23.5001 11.5058C24.0016 10.9887 23.6976 10 23.0371 10H6.96288C6.30236 10 5.99836 10.9887 6.49988 11.5058L14.537 19.7939C14.8034 20.0686 15.1966 20.0686 15.463 19.7939Z' />
            </svg>
          ) : (
            <svg
              className='w-7 h-7 fill-current mr-6'
              viewBox='0 0 30 30'
              fill='none'
            >
              <path d='M15.463 10.2061L23.5001 18.4941C24.0016 19.0114 23.6976 20 23.0371 20H6.96288C6.30236 20 5.99836 19.0114 6.49988 18.4941L14.537 10.2061C14.8034 9.93131 15.1966 9.93131 15.463 10.2061Z' />
            </svg>
          ))}
      </div>

      {showGroupList && isHovered && <div>여기는 새로 보여줄 div 내용</div>}
    </>
  );
};

export default JoinedGroupsButton;
