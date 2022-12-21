export default function getInitAndEnd(url) {
  const urlOptions = url.split("?")[1];
  const [offsetOptions, limitOptions] = urlOptions.split("&");
  const offset = +offsetOptions.split("=")[1];
  const limit = +limitOptions.split("=")[1];
  return [offset + 1, limit + offset];
}
