import { useState } from 'react';
export default function useModal(initialValue: boolean) {
  const [isShowModal, setIsShowModal] = useState(initialValue);

  function handleModalClick(e: React.MouseEvent) {
    setIsShowModal(!isShowModal);
  }

  return { isShowModal, handleModalClick };
}
