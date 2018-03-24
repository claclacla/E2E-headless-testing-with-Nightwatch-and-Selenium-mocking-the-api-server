export default function addToFilter(name, value) {
  return function(filters) {
    return {
      ...filters,
      [name]: (filters[name] + value) 
    }
  }
}