export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") return;
  if (onCancel && typeof onCancel !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

// 사용자가 무언가를 하기 전에 창을 띄워서 물어본다.