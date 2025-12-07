import useBookingForm from '../../hooks/useBookingForm';
import ScrollCheck from '../scrollCheck/ScrollCheck';
import * as S from './InfoSection.style';

type InfoSectionProps = {
  form: ReturnType<typeof useBookingForm>;
  performanceData: any;
  preSaleFee: string;
  onSiteFee: string;
};

const InfoSection: React.FC<InfoSectionProps> = ({
  form,
  performanceData,
  preSaleFee,
  onSiteFee,
}) => {
  const { checked, toggleCheck } = form;

  const homeData = performanceData;
  const posterUrl = homeData?.posterUrls?.[0];

  return (
    <S.InfoContainer>
      <S.ShowInfoContainer>
        <S.Poster src={posterUrl} />

        <S.TextBox>
          <S.ShowTitle>
            <S.TitleText>{homeData?.title}</S.TitleText>
            <S.InfoText>{homeData?.dateTime}</S.InfoText>
          </S.ShowTitle>

          <S.DetailInfo>
            <S.PriceText>
              <S.BasicPrice>
                현장예매: {Number(onSiteFee).toLocaleString()}원
              </S.BasicPrice>
              <S.BookingPrice>
                사전예매: {Number(preSaleFee).toLocaleString()}원
              </S.BookingPrice>
            </S.PriceText>

            <S.InfoText>
              위치: {homeData?.venue?.replace('(', '\n(')}
            </S.InfoText>
          </S.DetailInfo>
        </S.TextBox>
      </S.ShowInfoContainer>
      <ScrollCheck
        to="info"
        text="확인했습니다."
        checked={checked.info}
        onChange={() => toggleCheck('info')}
      />
    </S.InfoContainer>
  );
};

export default InfoSection;
