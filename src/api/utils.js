import axios from 'axios';

const host = window.location.host;

let controller = new AbortController();

const cancelableGet = url => async ({params}) => {
  controller.abort();
  controller = new AbortController();
  const response = await axios.get(url, {params, signal: controller.signal});
  return response.data;
}

const get = url => async ({params}) => {
  const response = await axios.get(url, {params});
  return response.data;
}


const del = url => async ({params}) => {
  const response = await axios.delete(url, {params});
  return response.data;
};

const post = url => async ({body, params}) => {
  const response = await axios.post(url, body, {params});
  return response.data;
};

const put = url => async ({body, param}) => {
  const response = await axios.put(url, body, {params});
  return response.data;
};

const patch = url => async ({body, param}) => {
  const response = await axios.patch(url, body, {params});
  return response.data;
};

export {cancelableGet, get, post, put, del, patch, host};
