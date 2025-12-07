import { useEffect, useRef } from 'react';
import * as S from './styles/List.style';
import Item from '../Item/Item';
import { SetListItem } from '../../../../types/setList/setList.type';

interface ListProps {
  data: SetListItem[];
  nowPlayingOrder: number | null;
}

const List = ({ data, nowPlayingOrder }: ListProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const spacerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentItem = itemRefs.current.find(
      (el, index) => el && data[index]?.order === nowPlayingOrder,
    );
    const container = containerRef.current;

    if (currentItem && container) {
      const containerTop = container.getBoundingClientRect().top;
      const itemTop = currentItem.getBoundingClientRect().top;
      const scrollOffset = itemTop - containerTop;

      const targetScrollTop = container.scrollTop + scrollOffset;

      const maxScrollTop = container.scrollHeight - container.clientHeight;

      if (spacerRef.current) {
        spacerRef.current.style.height = 'calc(100vh - 10.5rem)';
      }

      container.scrollTo({
        top: Math.min(targetScrollTop, maxScrollTop),
        behavior: 'smooth',
      });
    }
  }, [nowPlayingOrder, data]);

  return (
    <S.ListContainer className="scroll" ref={containerRef}>
      {nowPlayingOrder === -1 && (
        <div
          ref={(el) => {
            itemRefs.current[0] = el;
          }}
        >
          <Item
            data={{
              order: 0,
              performanceSongId: 0,
              title: '공연 시작 전',
              artist: '현재는 Setlist만 확인할 수 있습니다.',
            }}
            index={0}
            nowPlayingOrder={nowPlayingOrder}
          />
        </div>
      )}

      {data.map((item, index) => (
        <div
          ref={(el) => {
            itemRefs.current[nowPlayingOrder === -1 ? index + 1 : index] = el;
          }}
          key={item.order}
        >
          <Item
            data={item}
            index={nowPlayingOrder === -1 ? index + 1 : index}
            nowPlayingOrder={nowPlayingOrder}
          />
        </div>
      ))}

      <div ref={spacerRef} style={{ height: '0px', flexShrink: 0 }} />
    </S.ListContainer>
  );
};

export default List;
