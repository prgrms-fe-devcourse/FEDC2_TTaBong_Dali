import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postComments } from '../../apis/comments';
import { deleteLike, postLike } from '../../apis/like';
import { getSpecificPost } from '../../apis/posts';
import { getSpecificUser } from '../../apis/users';
import DummyData from '../../assets/data/dummyData';
import CardDetail from '../../feature/Cards/CardDetail';
import PageTemplate from '../PageTemplate';

// authorName = '',
// receiverName = '',
// comments = [],
// img = '',
// likeCount = 0,
// PraiseReason = '',
// labelItems = [],

// like 버튼
// 포스트의 likes와 유저의 Likes를 구분해서

const likeToggle = (likes, userId) => {
  return !!likes.filter((like) => like.user === userId).length;
};

const CardDetailPage = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const commentInput = useRef('');
  const [isLoading, setLoading] = useState(true);
  const [receivedUser, setReceivedUser] = useState({});
  const [props, setProps] = useState({});

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const post = await getSpecificPost(id);
      const { author, title, likes, comments, _id } =
        post || DummyData.Posts[0];
      const { type, receiver, content, labels = [] } = JSON.parse(title);
      const isLike = likeToggle(likes, ''); // 접속한 유저의 id 값 넣기
      setProps({
        author,
        title,
        likes,
        comments,
        _id,
        type,
        receiver,
        content,
        labels,
        isLike,
      });

      setReceivedUser((await getSpecificUser(receiver)) || DummyData.Users[0]);
      setLoading(false);
    };
    getPosts();
  }, []);

  const onClickLike = async () => {
    console.log('object');
    // 먼저 접속한 유저의 jwt 토큰을 가져오고 없으면 로그인 페이지로 이동
    if (props.isLike) {
      await deleteLike('', props.id);
    } else {
      await postLike('', props.id);
    }
  };
  const onChangeInput = useCallback((e) => {
    commentInput.current = e.target.value;
  });

  const onSubmitInput = async (e) => {
    e.preventDefault();
    const test = await postComments('', props._id, commentInput.current);
    if (!test) {
      alert('로그인이 필요합니다');
      navigator('/mainfeed');
    }
  };

  return (
    <PageTemplate>
      {!isLoading && (
        <CardDetail
          authorName={props.author.fullName}
          authorId={props.author._id}
          receiverName={receivedUser.fullName}
          receiverId={receivedUser._id}
          comments={props.comments}
          labelItems={props.labels}
          PraiseReason={props.content}
          onChangeInput={onChangeInput}
          onSubmitInput={onSubmitInput}
          onClickLike={onClickLike}
        />
      )}
    </PageTemplate>
  );
};

export default CardDetailPage;
