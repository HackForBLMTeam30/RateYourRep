import axios from 'axios';

const GOT_ALL_LEGISLATOR_RATINGS = 'GOT_ALL_LEGISLATOR_RATINGS';

export const gotAllLegislatorRatings = (legislatorRatings) => ({
  type: GOT_ALL_LEGISLATOR_RATINGS,
  legislatorRatings,
});

export const getAllLegislatorRatings = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/rating/legislator/${id}`);
      dispatch(gotAllLegislatorRatings(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function (legislatorRatings = [], action) {
  switch (action.type) {
    case GOT_ALL_LEGISLATOR_RATINGS:
      return action.legislatorRatings;
    default:
      return legislatorRatings;
  }
}
