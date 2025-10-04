export default async function handler(req, res) {
  try {
    const { authorization } = req.headers;
    const { dataInicial, dataFinal } = req.query;

    // 🔹 Monta a URL com filtros
    let url = "https://mercatto.varejofacil.com/api/v1/pdv/recebimentos?start=0&count=20";
    if (dataInicial) url += `&dataInicial=${dataInicial}`;
    if (dataFinal) url += `&dataFinal=${dataFinal}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": authorization,
        "Accept": "application/json"
      }
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Erro ao buscar recebimentos", details: err.message });
  }
}
