import { useState } from 'react';
import postHabitAPI from '../services/api/habit/postHabit';
import patchHabitAPI from '../services/api/habit/patchHabit';
import createHabitData from '../lib/createHabit/createHabitData';

const useHandleSubmit = (
  validateForm,
  userId,
  navigate,
  nickname,
  isEdit = false,
  habitId,
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleResponse = (response) => {
    if (response.status !== 200 && response.status !== 201) {
      setMessage('오류가 발생했습니다.');
      setMessageType('error');
      return;
    }

    const successMessage = `습관 ${
      isEdit ? '수정' : '생성'
    }이 완료되었습니다. 나의 습관 관리 페이지로 이동합니다.`;

    setMessage(successMessage);
    setMessageType('success');

    setTimeout(() => {
      navigate(`/my-habit/${nickname}`);
      navigate(0);
    }, 2000);
  };

  const handleSubmit = async (formData) => {
    const isValid = validateForm(formData);

    if (!isValid) return;

    setIsSubmitting(true);

    const habitData = createHabitData(formData, userId);

    try {
      let response;

      if (isEdit) {
        response = await patchHabitAPI(habitId, habitData);
        handleResponse(response);

        return;
      } else {
        response = await postHabitAPI(habitData);
      }

      handleResponse(response);
    } catch (error) {
      const errorMsg =
        error.response && error.response.data
          ? error.response.data.error
          : '습관 생성에 실패하였습니다.';

      setMessage(errorMsg);
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting, message, messageType };
};

export default useHandleSubmit;
