const useSessionStorage = (key: string, type: 'get' | 'set' | 'remove') => {
  try {
    if (type === 'get') {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : '';
    } else if (type === 'set') {
      const setValue = (newValue: any) => {
        window.sessionStorage.setItem(key, JSON.stringify(newValue));
      };

      return [setValue];
    } else if (type === 'remove') {
      const deleteValue = () => {
        window.sessionStorage.removeItem(key);
      };
      return [deleteValue];
    }
  } catch (error) {
    console.log(error);
  }
};

export default useSessionStorage;
