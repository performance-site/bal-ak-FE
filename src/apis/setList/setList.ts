import apiInstance from '../axios/instance';
import { PERFORMANCE_ID } from '../../config/performance';

export const getSetList = async (performanceId: number = PERFORMANCE_ID) => {
  const res = await apiInstance.get(`/performances/${performanceId}/setlist`);
  return res;
};
