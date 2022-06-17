import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const test = (func) => {
  useEffect(() => {
    const tesat = async () => {
      const test = await func(useParams().id);
    };

    tesat();
  }, []);
};

const CardDetailPage = () => {
  const { author, title, likes, comments } = DummyData.Posts[0];
  const { type, receiver, content, labels = [] } = JSON.parse(title);
  const navigator = useNavigate();
  const [input, SetInput] = useState('');
  test(getSpecificPost);
  // useEffect(() => {
  //   getSpecificPost(useParams().id).then((a) => console.log(a));
  // }, []);

  const onClick = (id) => {
    console.log('tesaat');
    console.log(navigator('/mainfeed'));
  };

  const onChangeInput = useCallback((e) => {
    console.log(e.target.value);
    SetInput(e.target.value);
  });

  const onSubmitInput = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const receivedUser = DummyData.Users[0];
  // const receivedUser = getSpecificUser(receiver).then();
  return (
    <PageTemplate>
      <CardDetail
        onClick={onClick}
        authorName={author.fullName}
        receiverName={receivedUser.fullName}
        comments={comments}
        labelItems={labels}
        PraiseReason={content}
        authorOnClick={onClick}
        onChangeInput={onChangeInput}
        onSubmitInput={onSubmitInput}
      />
    </PageTemplate>
  );
};

export default CardDetailPage;
