import { type Response } from "express";

export class PestoResponse {
  message: string;
  data: any;
  status: number;

  // eslint-disable-next-line
  constructor(data?: any, message?: string, status?: number) {
    this.message = message ?? "ok";
    this.data = data ?? null;
    this.status = status ?? 200;
  }
}

export function handlePestoResponse(
  pestoResponse: PestoResponse,
  res: Response
) {
  const { message, data, status } = pestoResponse;

  res.status(status);

  //@ts-expect-error
  res.pestoMessage = message;
  res.json({ message, data });
}
