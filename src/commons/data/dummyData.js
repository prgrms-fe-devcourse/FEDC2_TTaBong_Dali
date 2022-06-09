import Constants from '../constants';

const user1 = {
  coverImage: '', // 커버 이미지
  image: '', // 프로필 이미지
  role: '',
  isOnline: true,
  //   posts: [post1], // Post[]
  //   likes: [like1], // Like[]
  //   comments: [comment1], // String[]
  followers: [],
  following: [],
  notifications: [],
  //   messages: [message1, message2], // Message[]
  _id: '62a18f01d1b81239d875d1ea',
  fullName: 'devbuzz142',
  email: 'devbuzz142@gmail.com',
  createdAt: '2022-06-09T06:16:42.090Z',
  updatedAt: '2022-06-09T06:47:42.868Z',
};

const user2 = {
  coverImage: '', // 커버 이미지
  image: '', // 프로필 이미지
  role: '',
  isOnline: true,
  posts: [], // Post[]
  likes: [], // Like[]
  comments: [], // String[]
  followers: [],
  following: [],
  notifications: [],
  //   messages: [message1, message2], // Message[]
  _id: '62a18f7cd1b81239d875d1f0',
  fullName: 'toast',
  email: 'toast@github.com',
  createdAt: '2022-06-09T06:11:13.272Z',
  updatedAt: '2022-06-09T06:47:42.870Z',
};

const user3 = {
  coverImage: '', // 커버 이미지
  image: '', // 프로필 이미지
  role: '',
  isOnline: true,
  //   posts: [post2], // Post[]
  likes: [], // Like[]
  comments: [], // String[]
  followers: [],
  following: [],
  notifications: [],
  //   messages: [], // Message[]
  _id: '62a1904ad1b81239d875d1f7',
  fullName: 'owell',
  email: 'owell@github.com',
  createdAt: '2022-06-09T06:13:16.007Z',
  updatedAt: '2022-06-09T06:45:09.809Z',
};

// const message1 = {
//   _id: '62a18f01d1b81239d875d1ea', // uuid
//   message: {
//     type: Constants.TTaBong, // 'mesg' || 'TTaBong' || BigTTaBong'
//     content: '',
//   },
//   sender: user1,
//   receiver: user2,
//   seen: false,
//   createdAt: '2022-06-09T06:16:42.090Z',
//   updatedAt: '2022-06-09T06:47:42.868Z',
// };

// const message2 = {
//   _id: '', // uuid
//   message: {
//     type: Constants.BigTTaBong, // 'mesg' || 'TTaBong' || BigTTaBong'
//     content: '',
//   },
//   sender: user1,
//   receiver: user2,
//   seen: false,
//   createdAt: '',
//   updatedAt: '',
// };

const comment1 = {
  _id: '62f18f1231b8abcdd875241b',
  comment: String,
  author: user1,
  //   post: post1, // 포스트 id
  createdAt: '2022-06-09T06:50:16.007Z',
  updatedAt: '2022-06-09T06:55:16.007Z',
};

const like1 = {
  _id: '62a18f01dccc12312375241b',
  user: '62a18f01d1b81239d875d1ea', // 사용자 id
  post: '62a18f01d1b81239d875241b', // 포스트 id
  createdAt: '2022-06-09T06:40:16.007Z',
  updatedAt: '2022-06-09T06:41:16.007Z',
};

const post1 = {
  likes: [like1], // Like[],
  comments: [comment1], // Comment[],
  _id: '62a18f01d1b81239d875241b',
  image: '', // Optional<String>,
  imagePublicId: '', // Optional<String>,
  title: {
    type: Constants.BigTTaBong, // TTaBong | BigTTaBong
    TTabongedId: user2._id,
    labels: [Constants.LabelGood, Constants.LabelThanks],
    content: 'oHHHHHHH',
  },

  channel: [],
  author: user1,
  createdAt: '2022-06-09T06:13:16.007Z',
  updatedAt: '2022-06-09T06:45:09.809Z',
};

const post2 = {
  likes: [], // Like[],
  comments: [], // Comment[],
  _id: '62a18f0ee1e81ff9df75f41f',
  image: '', //  have to Image link ,
  imagePublicId: '', // Optional<String>,
  title: {
    type: Constants.BigTTaBong, // TTaBong | BigTTaBong
    TTabongedId: user1._id,
    labels: [Constants.LabelGood],
    content: 'this GOOOD',
  },

  channel: [],
  author: user3,
  createdAt: '2022-06-09T06:13:18.007Z',
  updatedAt: '2022-06-09T06:45:09.809Z',
};

const conversation1 = [
  {
    _id: ['62a18f01d1b81239d875d1ea', '62a18f7cd1b81239d875d1f0'],
    message: `{type:${Constants.TTaBong}, content:'oHHHHHHH'}`,
    createdAt: '2022-06-09T06:13:16.007Z',
    sender: user1,
    receiver: user2,
    seen: false,
  },
  {
    _id: ['62a18f01d1b81239d875d1ea', '62a1904ad1b81239d875d1f7'],
    message: `{type:${Constants.BigTTaBong}, content:'this GOOOD'}`,
    createdAt: '2022-06-09T06:13:18.007Z',
    sender: user3,
    receiver: user1,
    seen: false,
  },
];

const dummyData = {
  Users: [user1, user2, user3],
  Conversation: [...conversation1],
  Posts: [post1, post2],
};

export default dummyData;
