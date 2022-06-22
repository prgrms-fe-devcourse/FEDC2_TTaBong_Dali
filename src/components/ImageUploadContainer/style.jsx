import styled from '@emotion/styled';
import { getPxToRem } from '../../utils/getPxToRem';

export const ImageUploadForm = styled.form`
  width: 100%;
  height: ${getPxToRem(150)};
  background: ${({ theme }) => theme.colors.yellow[1]};
  border: 2px dashed ${({ theme }) => theme.colors.yellow[0]};
  border-radius: 11px;
  position: relative;
`;

export const FileLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ImageUploadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: relative;
`;

export const DeleteIconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const DefaultUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  position: relative;
`;

export const SpanWrapper = styled.span`
  padding: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkgray[2]};

  position: absolute;
`;

export const FileIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
