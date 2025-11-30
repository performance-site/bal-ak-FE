import { useEffect, useMemo, useState } from 'react';

const EXPIRATION_MIN = 10;

// 저장하는 함수
const setInput = (key: string, value: string) => {
  const expires = Date.now() + EXPIRATION_MIN * 60 * 1000;
  sessionStorage.setItem(key, JSON.stringify({ value, expires }));
};

// 불러오는 함수
const getInput = (key: string) => {
  const item = sessionStorage.getItem(key);
  if (!item) return '';

  try {
    const { value, expires } = JSON.parse(item);
    if (Date.now() > expires) {
      sessionStorage.removeItem(key);
      return '';
    }
    return value;
  } catch {
    return '';
  }
};

const UseBookingFormtemp = () => {
  const [name, setName] = useState(() => getInput('name'));
  const [phone, setPhone] = useState(() => getInput('phone'));
  const [member, setMember] = useState(() => getInput('member'));

  const [checked, setChecked] = useState({
    info: false,
    price: false,
    confirm: false,
  });

  useEffect(() => {
    if (name) setInput('name', name);
  }, [name]);

  useEffect(() => {
    if (phone) setInput('phone', phone);
  }, [phone]);

  useEffect(() => {
    if (member) setInput('member', member);
  }, [member]);

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
    if (!checked.info) msgs.push('*공연 정보 항목을 다시 확인해 주세요.');
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

export default UseBookingFormtemp;
