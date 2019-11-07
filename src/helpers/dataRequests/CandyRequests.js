import axios from 'axios';

const baseUrl = 'https://localhost:44337/api';

const getAllCandy = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/candy`)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err));
});

export default getAllCandy;
