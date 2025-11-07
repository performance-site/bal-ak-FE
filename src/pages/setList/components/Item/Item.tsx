import * as S from './styles/Item.style';
import { SetListItem } from '../../../../types/setList/setList.type';
import ItemArrow from '../../../../assets/images/setList/ItemArrow.svg';
import Wave from './Wave';
import ItemDownloadOn from '../../../../assets/images/setList/itemDownloadOn.svg';
import ItemDownloadOff from '../../../../assets/images/setList/itemDownloadOff.svg';
import useNavigation from '../../../../hooks/useNavigation';

interface ItemProps {
  data: SetListItem;
  index: number;
  currentOrder: number;
}

const Item = ({ data, currentOrder }: ItemProps) => {
  const isCurrent = data.order === currentOrder;
  const { goTo } = useNavigation();

  return (
    <S.ItemContainer>
      <S.Circle isFirst={isCurrent} />

      <S.ItemRightContainer
        onClick={() => goTo(data.order === 0 ? '/' : `/setlist/${data.order}`)}
      >
        <S.ItemRightInnerContainer>
          <S.ItemPContainer>
            {isCurrent && <Wave />}
            <S.ItemP
              color={!isCurrent ? 'setListItemTitleBackground' : undefined}
            >
              {data.title}
            </S.ItemP>
          </S.ItemPContainer>

          <S.ItemPContainer>
            <S.ItemDownloadImg
              src={isCurrent ? ItemDownloadOn : ItemDownloadOff}
              alt="download"
            />
            <S.ItemP
              size="1.2rem"
              weight={400}
              color="setListItemDownloadBackground"
            >
              {data.artist}
            </S.ItemP>
          </S.ItemPContainer>
        </S.ItemRightInnerContainer>

        <S.ItemArrowImg src={ItemArrow} isWhite={!isCurrent} alt="arrow" />
      </S.ItemRightContainer>
    </S.ItemContainer>
  );
};

export default Item;
