import { useCallback, useState } from 'react';
import * as S from './style';
import Icon from '../Icon';
import Image from '../Image';

const ImageUploadContainer = ({ setImageSrc, iconName, ...style }) => {
  const [imgSrc, setImgSrc] = useState('');

  // img받으면 이미지 미리보기 및 상위 컴포넌트로 img파일 보내기
  const handleImage = useCallback((img) => {
    setImageSrc(img);

    const reader = new FileReader();
    if (img) {
      reader.readAsDataURL(img);
    }
    reader.onloadend = () => {
      const resultImage = reader.result;
      setImgSrc(resultImage);
    };
  }, []);

  // Input에 클릭시 이미지 추가
  const onChangeInput = useCallback((event) => {
    const img = event.target.files[0];
    handleImage(img);
  }, []);

  // 이미지 삭제 버튼 누르면 ImageSrc 리셋
  const onDeleteImg = useCallback((event) => {
    event.preventDefault();
    setImgSrc('');
    setImageSrc('');
  }, []);

  // 이미지 드래그 앤 드랍
  const handleFileDrop = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    const { files } = event.dataTransfer;
    const img = files[0];
    handleImage(img);
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  return (
    <S.ImageUploadForm
      {...style}
      onDrop={handleFileDrop}
      onDragOver={onDragOver}
    >
      <S.FileLabel htmlFor="fileInput">
        {/* 이미지 파일이 있을 때 이미지와 삭제 버튼 */}
        {imgSrc ? (
          <S.ImageUploadBox>
            <Image
              src={imgSrc}
              mode="contain"
              alt="따봉 사유 이미지"
              height={100}
            />
            <S.DeleteIconWrapper onClick={(event) => onDeleteImg(event)}>
              <Icon name="deleteLine" size={10} />
            </S.DeleteIconWrapper>
          </S.ImageUploadBox>
        ) : (
          // 이미지 파일이 없을 때 기본 상태
          <S.DefaultUploadContainer>
            <S.SpanWrapper>사진업로드</S.SpanWrapper>
            <S.FileIconWrapper>
              <Icon name={iconName || 'fileLine'} />
            </S.FileIconWrapper>
          </S.DefaultUploadContainer>
        )}
      </S.FileLabel>
      <S.FileInput
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={(event) => onChangeInput(event)}
      />
    </S.ImageUploadForm>
  );
};

export default ImageUploadContainer;
