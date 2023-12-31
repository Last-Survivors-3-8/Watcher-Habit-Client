import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserIdFromToken from '../../utils/getUserIdFromToken';
import useClickOutside from '../../hooks/useClickOutside';
import postGroupAPI from '../../services/api/group/postGroup';

const CreateGroupModal = ({ onClose, refetchGroups }) => {
  const modalContentRef = useRef();
  const [groupName, setGroupName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleClose = () => {
    document.body.style.overflow = '';
    onClose();
  };

  useClickOutside(modalContentRef, handleClose);

  const onChangeHandler = (e) => {
    setGroupName(e.target.value);
  };

  const onClickHandler = async (e) => {
    try {
      const requestBody = {
        groupName,
        creatorId: getUserIdFromToken(),
      };

      const response = await postGroupAPI(requestBody);

      const newGroupId = response.data.newGroup._id;

      refetchGroups();

      onClose();
      navigate(`/group/${newGroupId}`);
    } catch (error) {
      let message = '알 수 없는 오류입니다.';

      if (error.response) {
        if (error.response.status === 400 && error.response.data?.errors) {
          message = '그룹 이름은 2자 이상이여야 합니다.';
        } else {
          message = error.response.data.error || message;
        }
      }

      setErrorMsg(message);
      console.error('CreateGroupModal error:', error);
    }
  };

  return (
    <div className='fixed inset-0 w-full flex items-center justify-center z-30 bg-black bg-opacity-50'>
      <div
        className='bg-dark-blue-bg border border-customGreen rounded p-5 w-8000 text-white rounded-xl'
        ref={modalContentRef}
      >
        <p className='text-center font-extrabold'>그룹 생성하기</p>
        <input
          className='w-full h-12 bg-gray-bg text-center text-black rounded-lg mt-4'
          type='text'
          placeholder='생성할 그룹명을 입력하세요(15자 제한)'
          onChange={onChangeHandler}
          value={groupName}
          minLength={2}
          maxLength={15}
          required
        />
        {errorMsg && (
          <p className='text-center text-red-500 mt-4'>{errorMsg}</p>
        )}
        <div className='flex justify-center mt-4'>
          <button
            onClick={onClickHandler}
            className='bg-green-500 text-white rounded-xl p-2 w-40 mx-7 font-extrabold hover:bg-green-600'
          >
            생성
          </button>
          <button
            onClick={handleClose}
            className='bg-dark-blue text-green-txt border border-customGreen rounded-xl p-2 w-40 mx-7 font-extrabold hover:border-red-500'
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
