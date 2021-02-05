import * as fs from 'fs/promises';
import * as path from 'path';

export async function readFile(req, webRoot) {
  let requestPath = req.url;
  if (requestPath === '/') requestPath = '/index.html';
  const filePath = path.join(webRoot, requestPath);

  console.log('request on path', filePath);

  return fs.readFile(filePath, 'utf-8');
}
