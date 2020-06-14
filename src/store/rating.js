import axios from 'axios';

const GOT_RATING = 'GOT_RATING';

export const gotRating = (rating) => ({
  type: GOT_RATING,
  rating,
});

export const getRating = (legislatorId, ratingType) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/api/rating/${ratingType}/${legislatorId}`
      );
      dispatch(gotRating(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function (rating = 0, action) {
  switch (action.type) {
    case GOT_RATING:
      return action.rating;
    default:
      return rating;
  }
}
