// import axios from 'axios';
// import Proptypes from 'prop-types';

// // 특정 유저를 팔로우합니다.
// export const postFollow = async (JWTtoken, userId) => {
//   try {
//     const follow = await axios.post(`/follow/create`, {
//       headers: {
//         Authorization: `bearer ${JWTtoken}`,
//       },
//       userId,
//     });

//     if (follow.statusText === 'OK') {
//       return follow;
//     }
//   } catch (e) {
//     console.error(e);
//   }
//   return null;
// };

// postFollow.propTypes = {
//   JWTtoken: Proptypes.string.isRequired,
//   userId: Proptypes.string.isRequired,
// };

// // 특정 유저를 언팔합니다.
// export const deleteFollow = async (JWTtoken, id) => {
//   try {
//     const follow = await axios.delete(`/follow/delete`, {
//       headers: {
//         Authorization: `bearer ${JWTtoken}`,
//       },
//       id,
//     });

//     if (follow.statusText === 'OK') {
//       return follow;
//     }
//   } catch (e) {
//     console.error(e);
//   }
//   return null;
// };

// deleteFollow.propTypes = {
//   JWTtoken: Proptypes.string.isRequired,
//   id: Proptypes.string.isRequired,
// };
