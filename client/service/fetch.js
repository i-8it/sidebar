const get = url => fetch(url)
  .then(response => response.json())
  .then(data => data)
  .catch(err => err);

export default get;
