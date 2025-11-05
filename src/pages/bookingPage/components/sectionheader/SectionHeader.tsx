import React from 'react';
import * as S from './SectionHeader.styles';

interface SubtitleOption {
  text: React.ReactNode;
  color?: string;
  size?: string;
  fontWeight?: string | number;
}

interface SectionHeaderProps {
  height: string;
  title: string;
  questionText?: string;
  questionLink?: string;
  subtitles?: SubtitleOption[]; // 추가 설명 여러 개 가능
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  height,
  title,
  questionText,
  questionLink,
  subtitles,
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

      {/* 여러 추가 설명 존재할 경우 */}
      {subtitles?.map((sub, idx) => (
        <S.SubTitle
          key={idx}
          $color={sub.color}
          $size={sub.size}
          $fontWeight={sub.fontWeight}
        >
          {sub.text}
        </S.SubTitle>
      ))}
    </S.HeaderTextSection>
  );
};

export default SectionHeader;
