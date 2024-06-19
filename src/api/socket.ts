import { Client, StompSubscription, IFrame } from '@stomp/stompjs';

class WebSocketService {
  private client: Client;

  private subscription: StompSubscription | null = null;

  private token: string;

  constructor(token: string) {
    this.token = token;
    this.client = new Client({
      brokerURL: `ws://localhost:8080/stomp/chat`,
      connectHeaders: {
        Authorization: `Bearer ${this.token}`,
      },
      debug: (str: any) => {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
  }

  connect(onConnect: () => void) {
    console.log('토큰으로 연결 시도 중:', this.token); // 추가 로그
    this.client.onConnect = () => {
      console.log('WebSocket 연결 성공');
      onConnect();
    };

    this.client.onStompError = (frame: IFrame) => {
      console.error(`브로커에서 오류: ${frame.headers.message}`);
      console.error(`추가 정보: ${frame.body}`);
    };

    this.client.activate();
  }

  subscribe(chatRoomId: string, onMessage: (message: any) => void) {
    console.log('채팅방 구독 시도 중, 토큰:', this.token); // 추가 로그
    this.subscription = this.client.subscribe(
      `/sub/chat/room/${chatRoomId}`,
      (message) => {
        onMessage(JSON.parse(message.body));
      },
      { Authorization: `Bearer ${this.token}` },
    );
  }

  sendMessage(destination: string, message: any) {
    console.log('메시지 전송 시도 중, 토큰:', this.token); // 추가 로그
    this.client.publish({
      destination,
      body: JSON.stringify(message),
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  disconnect() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.client.deactivate();
  }
}

export default WebSocketService;
