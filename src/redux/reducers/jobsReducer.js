import { FETCH_LISTINGS, TOGGLE_SAVED } from "../actions/jobsAction";

const initialState = {
  listings: [],
  saved: []
}

export default function(state=initialState, action) {

  switch(action.type) {
    case FETCH_LISTINGS:
      return {
        ...state,
        listings: action.payload
      }
    
    // skipped to #36. Add items to favorites, from #30
    case TOGGLE_SAVED:
      // Add or remove jobs from saved
      const index = state.saved.findIndex(job => job.title === action.payload);

      if (index >= 0) {
        // item exist in saved
        const saved = [...state.saved];
        saved.splice(index, 1);
        return {
          ...state,
          saved
        }
      } else {
        // item does not exist in saved
        const job = state.listings.find(job => job.title === action.payload);

        return {
          ...state,
          saved: state.saved.concat(job)
        }
      }
  }
  return state;
}