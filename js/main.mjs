import axiosClinet from './api/axiosClient.js';
import postApi from './api/postApi.js';

async function main() {
  try {
    const queryParams = {
      _page: 1,
      _limit: 5,
    };
    const respone = await postApi.getAll(queryParams);
  } catch (error) {
    console.log('asdas', error);
  }
}

main();
