let appExport: any;

try {
  const mod = await import('../server/index.js');
  appExport = mod.default || mod;
} catch {
  try {
    const mod = await import('../dist-server/server/index.js');
    appExport = mod.default || mod;
  } catch {
    const mod = await import('../server/index.ts');
    appExport = mod.default || mod;
  }
}

export default appExport;
