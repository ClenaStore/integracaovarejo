export default async function handler(req, res) {
  try {
    const login = await fetch("https://mercatto.varejofacil.com/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: process.env.VAREJO_USER,
        password: process.env.VAREJO_PASS
      })
    });

    const data = await login.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Erro no login", details: err.message });
  }
}
