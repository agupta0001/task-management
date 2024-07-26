import { PestoResponse } from "../utils/response";

export async function getTodos() {
  console.log("Get Todos");
  return new PestoResponse([]);
}
