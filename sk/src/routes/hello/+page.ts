import type { PageLoad } from "./$types";
import { client } from '$lib/pocketbase';

export const load: PageLoad = async function({ fetch }) {
  const response = await client.send("/api/hello", {}).catch((reason) => { return { error: reason.message }; });
  //const response = await fetch("/api/hello");
  return response;
};
