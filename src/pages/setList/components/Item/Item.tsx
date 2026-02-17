import * as S from './styles/Item.style';
import { SetListItem } from '../../../../types/setList/setList.type';
import ItemArrow from '../../../../assets/images/setList/itemArrow.svg';
import Wave from './Wave';
import ItemDownloadOn from '../../../../assets/images/setList/itemDownloadOn.svg';
import useNavigation from '../../../../hooks/useNavigation';

interface ItemProps {
  data: SetListItem;
  index: number;
}

const Item = ({ data }: ItemProps) => {
  const { goTo } = useNavigation();

  return (
    <S.ItemContainer>
      <S.Circle />

      <S.ItemRightContainer
        onClick={() => goTo(`/setlist/${data.performanceSongId}`)}
      >
        <S.ItemRightInnerContainer>
          <S.ItemPContainer>
            <Wave />
            <S.ItemP color="gray800">{data.title}</S.ItemP>
          </S.ItemPContainer>

          <S.ItemPContainer>
            <S.ItemDownloadImg
              src={ItemDownloadOn}
              alt="download"
              loading="eager"
              decoding="async"
              draggable={false}
            />
            <S.ItemP size="1.2rem" weight={400} color="gray600">
              {data.artist}
            </S.ItemP>
          </S.ItemPContainer>
        </S.ItemRightInnerContainer>

        <S.ItemArrowImg
          src={ItemArrow}
          alt="arrow"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </S.ItemRightContainer>
    </S.ItemContainer>
  );
};

export default Item;
