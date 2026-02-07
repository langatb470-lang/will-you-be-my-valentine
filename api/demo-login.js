export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Demo logging only (no credentials)
  const logEntry = {
    event: req.body.event,
    demo: true,
    time: new Date().toISOString()
  };

  console.log("DEMO LOGIN EVENT:", logEntry);

  return res.status(200).json({
    status: "ok",
    message: "Demo login recorded"
  });
}
