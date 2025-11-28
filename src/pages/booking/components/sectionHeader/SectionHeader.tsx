import React from 'react';
import * as S from './SectionHeader.style';
import useNavigation from '../../../../hooks/useNavigation';

interface SectionHeaderProps {
  title: string;
  questionText?: string;
  questionLink?: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  questionText,
  questionLink,
  subtitle,
}) => {
  const { goTo } = useNavigation();

  return (
    <S.HeaderTextSection>
      <S.HeaderTopText>
        <S.Title>{title}</S.Title>

        {questionText && questionLink ? (
          <S.QuestionText onClick={() => goTo(questionLink)}>
            {questionText}
          </S.QuestionText>
        ) : (
          questionText && <S.QuestionText>{questionText}</S.QuestionText>
        )}
      </S.HeaderTopText>

      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.HeaderTextSection>
  );
};

export default SectionHeader;
