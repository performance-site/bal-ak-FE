import React from 'react';
import * as S from './SectionHeader.styles';

interface SectionHeaderProps {
  height: string;
  title: string;
  questionText?: string;
  questionLink?: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  height,
  title,
  questionText,
  questionLink,
  subtitle,
}) => {
  return (
    <S.HeaderTextSection $height={height}>
      <S.HeaderTopText>
        <S.Title>{title}</S.Title>

        {questionText && questionLink ? (
          <S.QuestionText
            as="a"
            href={questionLink}
            target="_blank"
            rel="noopener noreferrer"
          >
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
