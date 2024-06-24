/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import styled from 'styled-components';
import NextButton from '@/components/register/nextButton';
import Spacer from '@/components/common/Spacer';
import StepButton from '@/components/register/stepButton';
import HLine from '@/components/register/hLine';
import FormTitle from '@/components/register/formTitle';
import CurrentStep from '@/components/register/currentStep';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 45px;
  margin: 30px;
`;

const AdditionalInfoContainer = styled.div`
  margin-top: 30px;
  background-color: #f5f5f5;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 20px 40px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;
  width: 100%;
`;

const InfoTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const InfoHelp = styled.div`
  font-size: 15px;
  color: #848484;
  text-align: center;
  margin-bottom: 20px;
`;

const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #d9d9d9;
  border-radius: 10px;
  width: 100%;
  height: 200px;
  text-align: center;
  cursor: pointer;
  padding: 20px;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadMessage = styled.div`
  font-size: 16px;
  color: #848484;
`;

const FileButton = styled.button`
  background-color: #0500ff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  width: 100%;
`;

const TextAreaInput = styled.textarea`
  background-color: transparent;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  resize: none;
  font-size: 14px;
`;

const CharacterCount = styled.div`
  font-size: 12px;
  color: #848484;
  text-align: right;
  margin-top: 5px;
`;

function ThirdStep({ next }: { next: () => void }) {
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 40) {
      setTitle(e.target.value);
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (e.target.value.length <= 1000) {
      setDescription(e.target.value);
    }
  };

  return (
    <Container>
      <Title>매물등록</Title>
      <CurrentStep step={3} />
      <AdditionalInfoContainer>
        <Spacer size={50} />
        <InfoTitle>상세 정보</InfoTitle>
        <Spacer size={30} />
        <InfoHelp>추가 정보 및 시설 정보를 입력해주세요</InfoHelp>

        <Step>
          <FormRow>
            <StepButton num={1} />
            <div style={{ marginLeft: '10px' }}>
              사진을 업로드 해 주세요 (최소 3장 이상)
            </div>
          </FormRow>
          <FormRow>
            <FileUploadContainer>
              <FileInput
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload">
                <UploadMessage>
                  파일 선택 또는 파일을 이 곳에 드래그해주세요
                </UploadMessage>
                <FileButton>파일 선택</FileButton>
              </label>
              <UploadMessage>선택된 파일: {files.length}개</UploadMessage>
            </FileUploadContainer>
          </FormRow>
          <HLine />
        </Step>

        <Step>
          <FormRow>
            <StepButton num={2} />
            <div style={{ marginLeft: '10px' }}>상세 설명을 입력해주세요</div>
          </FormRow>
          <FormRow>
            <FormTitle title="제목" />
            <TextAreaContainer>
              <TextAreaInput
                placeholder="리스트에 노출되는 문구입니다. 40자 이내로 작성해주세요"
                value={title}
                onChange={handleTitleChange}
              />
              <CharacterCount>{title.length} / 40</CharacterCount>
            </TextAreaContainer>
          </FormRow>
          <FormRow>
            <FormTitle title="상세설명" />
            <TextAreaContainer>
              <TextAreaInput
                placeholder="매물 상세페이지에 노출되는 문구입니다. 1000자 이내로 작성해주세요"
                value={description}
                onChange={handleDescriptionChange}
              />
              <CharacterCount>{description.length} / 1000</CharacterCount>
            </TextAreaContainer>
          </FormRow>
        </Step>

        <Spacer size={20} />
        <NextButton onClick={next} />
        <Spacer size={80} />
      </AdditionalInfoContainer>
    </Container>
  );
}

export default ThirdStep;
