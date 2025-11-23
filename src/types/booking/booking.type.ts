export interface BookingLinkResponse {
  isSuccess: boolean;
  code: string;
  httpStatus: number;
  message: string;
  data: {
    openChatUrl: string;
  };
  timeStamp: string;
}
