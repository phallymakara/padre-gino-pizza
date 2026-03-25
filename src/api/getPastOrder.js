export default async function getPastOrder(order) {
  const response = await fetch(`/api/past-order/${order}`);
  const responseJson = await response.json();
  return responseJson;
}
