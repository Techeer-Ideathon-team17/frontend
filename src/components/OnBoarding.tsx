import React from 'react';
import diceImage from '../dice.png';

const BookPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="bg-white w-4/5 h-3/4 p-6 rounded-lg shadow-lg relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="h-3/4 w-px bg-gray-300 mx-auto shadow"></div> {/* 세로 선 */}
                </div>
                <div className="flex justify-between h-full">
                    <div className="w-1/2 h-full flex justify-center items-center">
                        {/* 왼쪽 페이지 */}
                        <div className="p-4 text-center">
                            {/* 'Dice Tales' 텍스트 추가 */}
                            <h1 className="text-[130px] text-yellow-500 font-bold" style={{ width: '95%' }}>Dice Tales</h1>
                            {/* 책의 내용이나 다른 컴포넌트 */}
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex flex-col justify-center items-center">
                        {/* 오른쪽 페이지 */}
                        <div className="p-4">
                            {/* 책의 내용이나 다른 컴포넌트 */}
                            <img src={diceImage} alt="Dice" className="size-96" />
                        </div>
                        <div className="p-4 mt-auto relative">
                            {/* Start 버튼 */}
                            <button className="bg-yellow-500 text-5xl text-white font-bold py-3 px-10 rounded relative z-10">
                                Start
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPage;
