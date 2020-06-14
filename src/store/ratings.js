import axios from 'axios';

const GOT_RATINGS = 'GOT_RATINGS';

export const gotAllRatings = (rating) => ({
  type: GOT_RATINGS,
  rating,
});

export const getAllRatings = (ratingsObj) => {
  const { legislatorId } = ratingsObj;
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/rating/${legislatorId}`,
        ratingsObj
      );
      dispatch(gotAllRatings(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function (rating = [], action) {
  switch (action.type) {
    case GOT_RATINGS:
      return action.rating;
    default:
      return rating;
  }
}
