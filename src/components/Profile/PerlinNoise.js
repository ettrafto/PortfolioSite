// PerlinNoise.js
const grad3 = [
    [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
    [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
    [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]
  ];
  
  const p = [];
  for (let i = 0; i < 256; i++) {
    p[i] = Math.floor(Math.random() * 256);
  }
  
  const perm = [];
  for (let i = 0; i < 512; i++) {
    perm[i] = p[i & 255];
  }
  
  const dot = (g, x, y) => g[0] * x + g[1] * y;
  
  const mix = (a, b, t) => (1 - t) * a + t * b;
  
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  
  const noise = (x, y) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
  
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
  
    const topRight = [xf - 1.0, yf - 1.0];
    const topLeft = [xf, yf - 1.0];
    const bottomRight = [xf - 1.0, yf];
    const bottomLeft = [xf, yf];
  
    const valueTopRight = perm[X + 1 + perm[Y + 1]] % 12;
    const valueTopLeft = perm[X + perm[Y + 1]] % 12;
    const valueBottomRight = perm[X + 1 + perm[Y]] % 12;
    const valueBottomLeft = perm[X + perm[Y]] % 12;
  
    const dotTopRight = dot(grad3[valueTopRight], topRight[0], topRight[1]);
    const dotTopLeft = dot(grad3[valueTopLeft], topLeft[0], topLeft[1]);
    const dotBottomRight = dot(grad3[valueBottomRight], bottomRight[0], bottomRight[1]);
    const dotBottomLeft = dot(grad3[valueBottomLeft], bottomLeft[0], bottomLeft[1]);
  
    const u = fade(xf);
    const v = fade(yf);
  
    return mix(mix(dotBottomLeft, dotBottomRight, u), mix(dotTopLeft, dotTopRight, u), v);
  };
  
  export default noise;
  