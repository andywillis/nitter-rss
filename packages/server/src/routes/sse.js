export default function sse(fn) {
  return function (req, res) {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-Control-Allow-Origin', 'CORS');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();
    fn(res);
  };
}
