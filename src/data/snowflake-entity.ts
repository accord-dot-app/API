export function generateSnowflake() {
  return new Date()
    .getTime()
    .toString()
    .padEnd(18, Math.floor(Math.random() * 50000).toString())
}