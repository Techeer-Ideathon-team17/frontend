import React, { useState } from 'react';
import Char1 from '../assets/ChatPg/char1.svg';
import Char2 from '../assets/ChatPg/Char2.svg';

const ChatPg: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ text: string; image: string }[]>(
    [],
  );
  const [currentChar, setCurrentChar] = useState(Char1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() || currentChar === Char1) {
      const nextChar = currentChar === Char1 ? Char2 : Char1;
      const messageText = inputValue.trim() ? inputValue : ' '; // 입력값이 없으면 공백 메시지 생성
      setMessages([...messages, { text: messageText, image: nextChar }]);
      setInputValue('');
      setCurrentChar(nextChar); // 이미지 변경
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-4/5 h-3/4 bg-white flex flex-col overflow-auto">
        <div className="flex items-start">
          {/* 프로필 사진 영역 */}
          <img
            src={Char1}
            alt="프로필 사진"
            className="w-20 h-20 ml-3 mt-3 mr-6"
          />
          {/* 캐릭터 생성 정보 */}
          <div className="flex flex-col justify-end">
            <div className="bg-gray-300 rounded-lg p-3 m-2 max-w-xs">
              <p
                className="text-sm"
                style={{ lineHeight: '2rem', marginTop: '0' }}
              >
                게임을 시작하기 위해 캐릭터를 생성해봅시다. 아래 정보를 입력해
                주세요:
                <br />
                이름:
                <br />
                종족: [인간, 엘프, 야수인, 드워프 중 하나를 입력하세요]
                <br />
                클래스: [전사, 도적, 마법사, 치유사 중 하나를 입력하세요]
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          {/* 채팅 메시지 출력 */}
          {messages.map((message, index) => (
            <div className="flex items-center" key={index}>
              <div className="bg-gray-300 rounded-lg p-3 m-2 max-w-xs">
                <p className="break-all">{message.text}</p>
              </div>
              <img
                src={message.image}
                alt="프로필 사진"
                className={`w-20 h-20 mt-4 mr-6 ${message.image === Char1 ? 'ml-auto' : 'mr-auto'}`}
              />
            </div>
          ))}

          <form
            onSubmit={handleSubmit}
            className="bg-gray-200 rounded-full w-full py-2 px-4 flex items-center mt-60 mb-3"
          >
            {/* 입력창 */}
            <input
              type="text"
              placeholder="메시지를 입력하세요"
              className="w-50 outline-none bg-transparent flex-grow"
              value={inputValue}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="text-sm ml-3 px-5 py-1 bg-blue-500 text-white rounded-full"
            >
              전송
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPg;
