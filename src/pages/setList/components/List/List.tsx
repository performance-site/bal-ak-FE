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
        spacerRef.current.style.height = 'calc(100vh - 11.5rem)';
      }

      container.scrollTo({
        top: Math.min(targetScrollTop, maxScrollTop),
        behavior: 'smooth',
      });
    }
  }, [nowPlayingOrder, data]);

  return (
    <S.ListContainer className="scroll" ref={containerRef}>
      {data.map((item, index) => (
        <div
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          key={item.order}
        >
          <Item data={item} index={index} nowPlayingOrder={nowPlayingOrder} />
        </div>
      ))}

      <div ref={spacerRef} style={{ height: '0px', flexShrink: 0 }} />
    </S.ListContainer>
  );
};

export default List;
