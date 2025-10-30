import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer'); // ✅ 새 탭에서 열기
    } else {
      navigate(path);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return { goTo, goBack };
};

export default useNavigation;
