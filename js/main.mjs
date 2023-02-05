import axiosClinet from './api/axiosClient';

async function main() {
  const respone = await axiosClinet.get('/posts');
  console.log(respone);
}

main();
