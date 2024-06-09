import { Client, StompSubscription, IFrame } from '@stomp/stompjs';

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

  connect(onConnect: () => void) {
    this.client.onConnect = () => {
      console.log('WebSocket connected');
      onConnect();
    };

    this.client.onStompError = (frame: IFrame) => {
      console.error(`Broker reported error: ${frame.headers.message}`);
      console.error(`Additional details: ${frame.body}`);
    };

    this.client.activate();
  }

  subscribe(chatRoomId: string, onMessage: (message: any) => void) {
    this.subscription = this.client.subscribe(
      `/sub/chat/room/${chatRoomId}`,
      (message) => {
        onMessage(JSON.parse(message.body));
      },
    );
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
