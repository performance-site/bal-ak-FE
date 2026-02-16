import * as S from './styles/SectionTitle.style';

interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle = ({ title, subTitle }: SectionTitleProps) => {
  return (
    <>
      <S.SectionInfo>
        <S.SectionTitle>{title}</S.SectionTitle>
        <S.SectionSubtitle>{subTitle}</S.SectionSubtitle>
      </S.SectionInfo>
    </>
  );
};

export default SectionTitle;
