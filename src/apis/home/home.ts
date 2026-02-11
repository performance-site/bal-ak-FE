import apiInstance from '../axios/instance';
import { PERFORMANCE_ID } from '../../config/performance';

const getPerformData = async () => {
    const res = await apiInstance.get(`/performances/${PERFORMANCE_ID}`);
    return res;
};

export default getPerformData;
