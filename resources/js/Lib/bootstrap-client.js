export default async function loadBootstrap() {
  if (typeof window !== 'undefined') {
    await import('bootstrap'); // loads bootstrap.esm.js
  }
}
