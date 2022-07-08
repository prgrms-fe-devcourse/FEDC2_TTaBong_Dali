import { useCallback, useState } from 'react';
import * as S from './style';
import Icon from '../Icon';
import Image from '../Image';

const ImageUploadContainer = ({ setImageSrc, iconName, ...style }) => {
  const [imgSrc, setImgSrc] = useState('');

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

  // Input 추가하면 ImageSrc 추가
  const onChangeInput = (event) => {
    const img = event.target.files[0];
    handleImage(img);
  };

  // 이미지 삭제 버튼 누르면 ImageSrc 리셋
  const onDeleteImg = (event) => {
    event.preventDefault();
    setImgSrc('');
    setImageSrc('');
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { files } = event.dataTransfer;
    const changedFile = files[0];
    handleImage(changedFile);
  };

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
