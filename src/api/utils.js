import axios from 'axios';

const CancelToken = axios.CancelToken;

const host = process.env.API_WEB;

const cancelableGet = url => async (params?, executor?) => {
  const cancelToken = new CancelToken(c => {
    executor.cancel = c;
  });
  const response = await axios.get(host + url, {params, cancelToken});
  return response.data;
}

const get = url => async ({params}) => {
  const response = await axios.get(host + url, {params});
  return response.data;
}


const del = url => async (value?) => {
  const {data, params} = value || {};
  const response = await axios.delete(host + url, {data, params});
  return response.data;
};

const post = url => async (body?) => {
  const response = await axios.post(host + url, body);
  return response.data;
};

const postWithParams = url => async ({body, params}) => {
  const response = await axios.post(host + url, body, {params});
  return response.data;
};

const put = url => async (params?) => {
  const response = await axios.put(host + url, params);
  return response.data;
};

const patch = url => async (params?) => {
  const response = await axios.patch(host + url, params);
  return response.data;
};

export {cancelableGet, get, getById, post, postWithParams, put, putById, putByIdParams, putQueryById, deleteById, del, patch, host, cancelableGetById, deleteByIdParams};
