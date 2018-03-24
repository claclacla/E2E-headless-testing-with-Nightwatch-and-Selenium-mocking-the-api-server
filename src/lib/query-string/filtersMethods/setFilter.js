export default function setFilter(name, value) {
  return function(filters) {
    return {
      ...filters,
      [name]: value
    }
  }
}