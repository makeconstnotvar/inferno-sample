import axios from 'axios';

const host = process.env.API_WEB;

let controller = new AbortController();

const cancelableGet = url => async ({params}) => {
  controller.abort();
  controller = new AbortController();
  const response = await axios.get(host + url, {params, signal: controller.signal});
  return response.data;
}

const get = url => async ({params}) => {
  const response = await axios.get(host + url, {params});
  return response.data;
}


const del = url => async ({params}) => {
  const response = await axios.delete(host + url, {params});
  return response.data;
};

const post = url => async ({body, params}) => {
  const response = await axios.post(host + url, body, {params});
  return response.data;
};

const put = url => async ({body, param}) => {
  const response = await axios.put(host + url, body, {params});
  return response.data;
};

const patch = url => async ({body, param}) => {
  const response = await axios.patch(host + url, body, {params});
  return response.data;
};

export {cancelableGet, get, post, put, del, patch, host};
