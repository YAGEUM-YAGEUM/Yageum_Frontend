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

  isClientActive(): boolean {
    return this.client.active;
  }

  connect(onConnect: () => void) {
    if (this.isClientActive()) {
      console.log('웹소켓 이미 활성화.');
      onConnect();
      return;
    }

    console.log('토큰으로 연결 시도 중:', this.token);
    this.client.onConnect = () => {
      console.log('WebSocket 연결 성공');
      onConnect();
    };

    this.client.onStompError = (frame: IFrame) => {
      console.error(`브로커에서 오류 보고: ${frame.headers.message}`);
      console.error(`추가 정보: ${frame.body}`);
    };

    this.client.activate();
  }

  subscribe(chatRoomId: string, onMessage: (message: any) => void) {
    const subscribeToRoom = () => {
      console.log(`채팅방 ${chatRoomId} 구독 시도 중, 토큰:`, this.token);
      this.subscription = this.client.subscribe(
        `/sub/chat/room/${chatRoomId}`,
        (message) => {
          console.log('수신된 메시지:', message.body);
          try {
            const parsedMessage = JSON.parse(message.body);
            onMessage(parsedMessage);
          } catch (error) {
            console.error('메시지 파싱 중 오류 발생:', error);
          }
        },
      );
    };

    if (this.client.active) {
      subscribeToRoom();
    } else {
      console.log('WebSocket 연결 중... 연결 후 구독을 시도합니다.');
      this.connect(() => {
        subscribeToRoom();
      });
    }
  }

  sendMessage(chatRoomId: string, message: any) {
    if (this.client.active) {
      console.log('메시지 전송 시도 중, 토큰:', this.token);
      const fullMessage = {
        ...message,
        token: this.token.substring(7), // "Bearer " 제거
      };
      this.client.publish({
        destination: `/pub/chat/talk/${chatRoomId}`,
        body: JSON.stringify(fullMessage),
      });
    } else {
      console.error('WebSocket이 연결되지 않았습니다.');
      this.connect(() => {
        this.sendMessage(chatRoomId, message);
      });
    }
  }

  disconnect(chatRoomId: number) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log(`Disconnecting from chat room ${chatRoomId}`);
    this.client.deactivate();
  }
}

export default WebSocketService;
