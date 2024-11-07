import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    name: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, name }) => {
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // 클라이언트에서만 실행되므로 useEffect에서 DOM 조작
        const root = document.getElementById('modal-root');
        if (!root) {
            const newModalRoot = document.createElement('div');
            newModalRoot.setAttribute('id', 'modal-root');
            document.body.appendChild(newModalRoot);
            setModalRoot(newModalRoot);
        } else {
            setModalRoot(root);
        }

        return () => {
            if (root && !document.getElementById('modal-root')) {
                document.body.removeChild(root);
            }
        };
    }, []);

    if (!isOpen || !modalRoot) return null;

    return ReactDOM.createPortal(
        <Overlay>
            <ModalContainer>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {children}
                <NameText>{name}</NameText>
            </ModalContainer>
        </Overlay>,
        modalRoot
    );
};

export default Modal;

// 스타일 정의
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;


const NameText = styled.div`
    display: flex;
    justify-content: end;
    font-size: 24px;
    font-family:PilseungGothic;
`
const ModalContainer = styled.div`
  background-color: #fff;
  padding: 5vw;
  border-radius: 8px;
  max-width: 50vw;
  width: 90vw;
  
  position: relative;
  line-height: 2.5; /* 텍스트 줄 간의 간격을 1.5배로 설정 */
  font-family:Pretendard-Regular;
  @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
    overflow-y: scroll;
    height: 80vh;
    width: 80vw;
    max-width: 80vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
