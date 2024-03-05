const executeShare = () => new Promise<boolean>((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 2000)
})

export default executeShare;
