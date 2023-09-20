import React from 'react';
import Tooltip from '../utils/Tooltip';

const GroupForm = ({ sharedGroup, setSharedGroup, groupOptions, isEdit }) => {
  const tooltipText = (
    <>
      <div className='mb-2'>
        <span className='text-black'>그룹 선택이란?</span>
      </div>
      <div className='mb-2'>
        <span className='text-red-500'>
          그룹은 생성할 때 선택한 그룹 설정(또는 비공개 설정)을 이후 수정할 수
          없으므로 신중하게 선택하시기 바랍니다.
        </span>
      </div>
      <div className='mb-2'>
        <span className='text-blue-500'>그룹 미선택 시</span>
        <div>
          비공개 처리 되며, 나의 습관 관리 페이지에서 본인만 확인 가능한 습관이
          생성됩니다.
        </div>
      </div>
      <div>
        <span className='text-blue-500'>그룹 선택 시</span>
        <div>
          해당 그룹 페이지에 공유 되며, 나의 습관 관리 페이지에서도 확인 가능한
          습관이 생성됩니다.
        </div>
      </div>
    </>
  );

  const handleSharedGroupChange = (e) => {
    setSharedGroup(e.target.value);
  };

  return (
    <div>
      <label className='relative'>
        그룹 선택
        <span className='ml-2 inline-block group cursor-pointer'>
          <span className='text-red-500'> (생성 후 수정 불가) </span>
          <span className='bg-gray-200 rounded-full pr-2 pl-2'>?</span>
          <Tooltip text={tooltipText} />
        </span>
      </label>

      <div className='mb-4'>
        <select
          className={`w-full p-2 border rounded ${
            isEdit ? 'bg-gray-200 cursor-not-allowed' : ''
          }`}
          value={sharedGroup || ''}
          onChange={handleSharedGroupChange}
          disabled={isEdit}
        >
          <option value=''>
            초대된 그룹만 선택 가능합니다(미선택 시 비공개 처리됩니다)
          </option>
          {groupOptions.map((group) => (
            <option key={group.groupId} value={group.groupId}>
              {group.groupName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GroupForm;
