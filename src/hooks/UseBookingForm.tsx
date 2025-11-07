import { useMemo, useState } from 'react';

const UseBookingForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [member, setMember] = useState('');

  const [checked, setChecked] = useState({
    info: false,
    price: false,
    confirm: false,
  });

  // 위의 세 타입 중 하나만 받도록 설정
  const toggleCheck = (key: keyof typeof checked) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isNameValid = name.trim().length > 0;
  const isPhoneValid = /^010-\d{3,4}-\d{4}$/.test(phone);
  const isMemberValid = Number(member) > 0;
  const isAllChecked = Object.values(checked).every(Boolean);

  const isAllValid =
    isNameValid && isPhoneValid && isMemberValid && isAllChecked;

  const errorMsgs = useMemo(() => {
    const msgs: string[] = [];
    if (!isNameValid || !isPhoneValid || !isMemberValid)
      msgs.push('*예매 정보 입력 항목을 다시 확인해 주세요.');
    if (!checked.price)
      msgs.push('*가격 안내 및 입금 항목을 다시 확인해 주세요.');
    if (!checked.confirm)
      msgs.push('*최종 확인 및 제출 항목을 다시 확인해 주세요.');
    return msgs;
  }, [isNameValid, isPhoneValid, isMemberValid, checked]);

  return {
    name,
    phone,
    member,
    checked,
    isAllValid,
    errorMsgs,
    setName,
    setPhone,
    setMember,
    toggleCheck,
  };
};

export default UseBookingForm;
