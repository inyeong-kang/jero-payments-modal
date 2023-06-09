import styled from 'styled-components';

export const _Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

export const _Container = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 25rem;

  padding: 3.2rem 1.6rem;
  border-radius: 0.8rem 0.8rem 0rem 0rem;
  background: #fdfdfd;

  display: flex;
  justify-content: center;

  transition: height 0.5s ease-out;
  .open {
  }
`;
