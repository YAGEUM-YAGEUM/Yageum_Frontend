import { Client, StompSubscription } from '@stomp/stompjs';

class WebSocketService {
  private client: Client;

  private subscription: StompSubscription | null = null;

  private token: string;

  constructor(token: string) {
    this.token = token;
    this.client = new Client({
      brokerURL: `ws://backend-url/stomp/chat`,
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

  connect(chatRoomId: string, onMessage: (message: any) => void) {
    this.client.onConnect = () => {
      this.subscription = this.client.subscribe(
        `/sub/chat/room/${chatRoomId}`,
        (message) => {
          onMessage(JSON.parse(message.body));
        },
      );
      console.log('WebSocket connected');
    };

    // this.client.onStompError = (frame: {
    //   headers: { message: any };
    //   body: any;
    // }) => {
    //   console.error(`에러: ${frame.headers.message}`);
    //   console.error(`세부내용: ${frame.body}`);
    // };

    this.client.activate();
  }

  sendMessage(destination: string, message: any) {
    this.client.publish({
      destination,
      body: JSON.stringify(message),
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
