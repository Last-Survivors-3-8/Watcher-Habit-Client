const NicknameInput = ({ nickName, onChange }) => {
  return (
    <div className='w-96 h-20 bg-gray-bg rounded-xl flex items-center font-semibold'>
      <input
        value={nickName}
        onChange={onChange}
        placeholder='사용할 닉네임을 입력하세요(10자 제한)'
        maxLength={10}
        className='w-full h-full mx-auto text-center bg-transparent outline-none text-lg placeholder:text-neutral-500 '
      />
    </div>
  );
};

export default NicknameInput;
