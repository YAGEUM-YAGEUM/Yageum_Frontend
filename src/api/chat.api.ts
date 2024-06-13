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

export const createChatRoom = async (houseId: number, participantId: number) => {
  const requestDto: ChatRoomRequestDto = {
    houseId,
    participantId,
  };

  try {
    const response = await apiClient.post('/chatroom', requestDto);
    return response.data;
  } catch (error) {
    console.error('Failed to create chat room', error);
    throw error;
  }
};

export const getChatRooms = () => {
  return apiClient.get('/chatroom');
};

export const getChatHistory = (roomNo: number) => {
  return apiClient.get(`/chatroom/${roomNo}`);
};

export const exitChatRoom = (roomId: number, username: string) => {
  return apiClient.post(`/chat/exit/${roomId}`, null, {
    params: { username },
  });
};
