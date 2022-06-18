import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postComments } from '../../apis/comments';
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

// 먼저 비동기로 값을 가져 오고 그다음 값을 넣기

const CardDetailPage = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const commentInput = useRef('');
  const [isLoading, setLoading] = useState(true);
  const [receivedUser, setReceivedUser] = useState({});

  const [props, setProps] = useState({
    // author,
    // title,
    // likes,
    // comments,
    // _id,
    // type,
    // receiver,
    // content,
    // labels,
  });

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const data2 = await getSpecificPost(id);
      const { author, title, likes, comments, _id } = data2;
      const { type, receiver, content, labels = [] } = JSON.parse(title);
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
      });
      setReceivedUser(await getSpecificUser(receiver));
      setLoading(false);
    };

    getPosts();
  }, []);

  const onClick = (id) => {
    console.log(navigator('/mainfeed'));
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

  // const receivedUser = getSpecificUser(receiver).then();
  return (
    <PageTemplate>
      {console.log(isLoading)}
      {!isLoading && (
        <CardDetail
          onClick={onClick}
          authorName={props.author.fullName}
          receiverName={receivedUser.fullName}
          comments={props.comments}
          labelItems={props.labels}
          PraiseReason={props.content}
          authorOnClick={onClick}
          onChangeInput={onChangeInput}
          onSubmitInput={onSubmitInput}
        />
      )}
    </PageTemplate>
  );
};

export default CardDetailPage;
