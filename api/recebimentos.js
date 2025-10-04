export default async function handler(req, res) {
  try {
    const { authorization } = req.headers;

    const response = await fetch(
      "https://mercatto.varejofacil.com/api/v1/pdv/recebimentos?start=0&count=20",
      {
        method: "GET",
        headers: {
          "Authorization": authorization,
          "Accept": "application/json"
        }
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Erro ao buscar recebimentos", details: err.message });
  }
}
