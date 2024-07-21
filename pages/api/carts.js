import { CartService } from '@/api';

export default async function handler(req, res) {
  const id = req.body.id;
  console.debug(`서버 API (API 라우트) 호출 ... id:${id}`);
  const { data } = await CartService.remove(id);
  res.status(200).send(data);
}
