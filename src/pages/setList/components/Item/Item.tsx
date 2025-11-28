import * as S from './styles/Item.style';
import { SetListItem } from '../../../../types/setList/setList.type';
import ItemArrow from '../../../../assets/images/setList/itemArrow.svg';
import Wave from './Wave';
import ItemDownloadOn from '../../../../assets/images/setList/itemDownloadOn.svg';
import ItemDownloadOff from '../../../../assets/images/setList/itemDownloadOff.svg';
import useNavigation from '../../../../hooks/useNavigation';

interface ItemProps {
  data: SetListItem;
  index: number;
  nowPlayingOrder: number;
}

const Item = ({ data, index, nowPlayingOrder }: ItemProps) => {
  const isCurrent = data.order == nowPlayingOrder;
  const isBeforeShow = nowPlayingOrder === -1 && index === 0;
  const { goTo } = useNavigation();

  return (
    <S.ItemContainer>
      <S.Circle isFirst={isCurrent} />

      <S.ItemRightContainer
        onClick={() =>
          goTo(isBeforeShow ? '/' : `/setlist/${data.performanceSongId}`)
        }
      >
        <S.ItemRightInnerContainer>
          <S.ItemPContainer>
            {isCurrent && <Wave />}
            <S.ItemP
              color={!isCurrent ? 'setListItemTitleBackground' : undefined}
            >
              {isBeforeShow ? '공연 시작 전' : data.title}
            </S.ItemP>
          </S.ItemPContainer>

          <S.ItemPContainer>
            <S.ItemDownloadImg
              src={isCurrent ? ItemDownloadOn : ItemDownloadOff}
              alt="download"
              loading="eager"
              decoding="async"
              draggable={false}
            />
            <S.ItemP
              size="1.2rem"
              weight={400}
              color="setListItemDownloadBackground"
            >
              {isBeforeShow
                ? '현재는 Setlist만 확인할 수 있습니다.'
                : data.artist}
            </S.ItemP>
          </S.ItemPContainer>
        </S.ItemRightInnerContainer>

        <S.ItemArrowImg
          src={ItemArrow}
          isWhite={!isCurrent}
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
