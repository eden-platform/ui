let id = 0
function generateId() {
  return ++id
}

export function useId() {
  return 'eden-ui-' + generateId()
}
