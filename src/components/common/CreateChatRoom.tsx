import React, { useState } from 'react';
import { createChatRoom } from '@/api/chat.api';

function CreateChatRoom({ onCreate }: { onCreate: () => void }) {
  const [houseId, setHouseId] = useState<number>(0);
  const [participantId, setParticipantId] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await createChatRoom(houseId, participantId);
      console.log(response.data); // API 응답 데이터 출력
      setMessage('채팅방 생성되었습니다.');
      onCreate(); // 새로운 채팅방 생성 후 목록 갱신
    } catch (error) {
      setMessage('Error creating chat room.');
    }
  };

  return (
    <div>
      <h2>Create Chat Room</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>House ID:</p>
          <input
            type="number"
            value={houseId}
            onChange={(e) => setHouseId(Number(e.target.value))}
          />
        </div>
        <div>
          <p>Participant ID:</p>
          <input
            type="number"
            value={participantId}
            onChange={(e) => setParticipantId(Number(e.target.value))}
          />
        </div>
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateChatRoom;
