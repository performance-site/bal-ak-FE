import apiInstance from '../axios/instance';
import { PERFORMANCE_ID } from '../../config/performance';

const getPerformData = async (t: number) => {
  const res = await apiInstance.get(`/performances/${PERFORMANCE_ID}`, {
    params: { t },
  });
  return res;
};

export default getPerformData;
