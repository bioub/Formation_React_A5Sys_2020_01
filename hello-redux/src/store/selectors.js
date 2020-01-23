export function selectCount(state, id) {
  return state.counters[id];
}

export function selectSelectedPrenom(state) {
  return state.selectedPrenom;
}