import { ObjectId } from 'bson';

export const runtime = 'edge';

export default function Poc() {
  return <pre>{new ObjectId().toHexString()}</pre>;
}
