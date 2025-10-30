import { useEffect, useRef } from 'react';
import * as S from './styles/list.style';
import Item from '../Item/Item';
import { SetListItem } from '../../../../types/setList/setList.type';

interface ListProps {
  data: SetListItem[];
  currentOrder: number;
}

const List = ({ data, currentOrder }: ListProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const spacerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentItem = itemRefs.current.find(
      (el, index) => data[index]?.order === currentOrder,
    );
    const container = containerRef.current;

    if (currentItem && container) {
      const containerTop = container.getBoundingClientRect().top;
      const itemTop = currentItem.getBoundingClientRect().top;
      const scrollOffset = itemTop - containerTop;

      const targetScrollTop = container.scrollTop + scrollOffset;

      const maxScrollTop = container.scrollHeight - container.clientHeight;

      if (spacerRef.current) {
        spacerRef.current.style.height = 'calc(100vh - 19.5rem)';
      }

      container.scrollTo({
        top: Math.min(targetScrollTop, maxScrollTop),
        behavior: 'smooth',
      });
    }
  }, [currentOrder, data]);

  return (
    <S.ListContainer ref={containerRef}>
      {data.map((item, index) => (
        <div
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          key={item.order}
        >
          <Item data={item} index={index} currentOrder={currentOrder} />
        </div>
      ))}

      <div ref={spacerRef} style={{ height: '0px', flexShrink: 0 }} />
    </S.ListContainer>
  );
};

export default List;
