export const FETCH_LISTINGS = 'FETCH_LISTINGS';
export const TOGGLE_SAVED = 'TOGGLE_SAVED';

// continue from #31. Making Http requests
export const fetchListings = () => {
  return {
    type: FETCH_LISTINGS,
    payload: {id: 1, title: 'Software Engineer', desc: 'Lorem ipsum'}
  }
}

// skipped to #36. Add items to favorites, from #30
export const toggleSaved = title => {
  return {
    type: TOGGLE_SAVED,
    payload: title
  }
}
