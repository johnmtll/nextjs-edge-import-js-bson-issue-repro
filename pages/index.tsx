import { ObjectId } from 'bson'; 

export const runtime = "edge"

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return new ObjectId().toHexString();
}
