import * as S from './styles/List.style';
import Item from '../Item/Item';
import { SetListItem } from '../../../../types/setList/setList.type';

interface ListProps {
  data: SetListItem[];
}

const List = ({ data }: ListProps) => {
  return (
    <S.ListContainer className="scroll">
      {data.map((item, index) => (
        <Item key={index} data={item} index={index} />
      ))}
    </S.ListContainer>
  );
};

export default List;
