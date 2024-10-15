import styled from 'styled-components';

const StyledPageContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 24px 45px 24px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 235px;
    background: #f7f9ff;
    border-radius: 0 0 20px 20px;
    z-index: -1;
  }
`;

const StyledPageContainerTitle = styled.h1`
  color: #1d1f29;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 4px;
`;

const StyledPageContainerSubtitle = styled.h2`
  color: #63687d;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 24px;
`;

export { StyledPageContainer, StyledPageContainerTitle, StyledPageContainerSubtitle };
