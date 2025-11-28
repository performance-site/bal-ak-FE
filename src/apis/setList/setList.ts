import apiInstance from '../axios/instance';
import { PERFORMANCE_ID } from '../../config/performance';

export const getSetList = (performanceId: number = PERFORMANCE_ID) => {
  return apiInstance.get(`/api/performances/${performanceId}/setlist`);
};
