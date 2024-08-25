import axios from 'axios';

interface ChatRoomRequestDto {
  houseId: number;
  participantId: number;
}

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string) => {
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const createChatRoom = async (
  houseId: number,
  participantId: number,
) => {
  const requestDto: ChatRoomRequestDto = {
    houseId,
    participantId,
  };

  try {
    const response = await apiClient.post('/chatroom', requestDto);
    return response.data;
  } catch (error) {
    error('Failed to create chat room', error);
    throw error;
  }
};

export const getChatRooms = async () => {
  const response = await apiClient.get('/chatrooms');
  return response;
};

export const getChatHistory = async (roomNo: number) => {
  const response = await apiClient.get(`/chatroom/${roomNo}`);
  return response;
};

export const exitChatRoom = async (roomId: number, username: string) => {
  const response = await apiClient.post(`/chat/exit/${roomId}`, null, {
    params: { username },
  });
  return response;
};
