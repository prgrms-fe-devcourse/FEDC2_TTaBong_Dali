import { Link } from 'react-router-dom';
import Image from '../../components/Image';
import notFound from '../../assets/images/notfound.png';
import * as S from './style';

const NotFoundPage = () => {
  return (
    <S.NotFoundPageWrapper>
      <Image src={notFound} />
      <S.NotFoundMessage>404 NOT FOUND :(</S.NotFoundMessage>
      <Link to="/">
        <S.Nav>메인화면으로 가기</S.Nav>
      </Link>
    </S.NotFoundPageWrapper>
  );
};

export default NotFoundPage;
