export function getAssets(src: string) {
  return useRuntimeConfig().public.assetsEndpoint + src;
}
