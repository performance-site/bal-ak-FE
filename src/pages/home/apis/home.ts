import apiInstance from '../../../apis/axios/instance';

const homeFetchData = async () => {
  try {
    const res = await apiInstance.get(`/api/performances/1`);
    // console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

export default homeFetchData;
