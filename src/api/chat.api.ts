import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://backend-url/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string) => {
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const createChatRoom = (houseId: number, participantId: number) => {
  return apiClient.post('/chatroom', { houseId, participantId });
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
