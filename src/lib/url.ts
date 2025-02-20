export function generateRandomURL(length = 7) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let url = "";
  for (let i = 0; i < length; i++) {
    url += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return url;
}

export function generateSlug(text: string) {
  return text
    .toLowerCase() // Converte para minúsculas
    .normalize("NFD") // Normaliza para remover acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove os diacríticos (acentos)
    .replace(/[^a-z0-9 -]/g, "") // Remove caracteres especiais
    .trim() // Remove espaços extras no início e fim
    .replace(/\s+/g, "-") // Substitui espaços por "-"
    .replace(/-+/g, "-"); // Remove múltiplos "-"
}
