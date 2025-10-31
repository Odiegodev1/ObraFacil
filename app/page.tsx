"use client";

import { useState } from "react";

type ItemOrcamento = {
  quantidade: number;
  descricao: string;
  medida: string;
};

export default function OrcamentoApp() {
  const [orcamento, setOrcamento] = useState("");
  const [resultado, setResultado] = useState<ItemOrcamento[]>([]);
  const [loading, setLoading] = useState(false);

  const processarOrcamento = async () => {
    if (!orcamento.trim()) return;

    setLoading(true);
    setResultado([]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ textoOrcamento: orcamento }),
      });

      const data = await res.json();
      setResultado(data.items || []);
    } catch (err) {
      console.error(err);
      setResultado([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Organizador de Orçamento</h1>

      <textarea
        className="w-full max-w-lg h-36 p-2 border rounded mb-2 resize-none"
        placeholder="Cole o orçamento bruto aqui..."
        value={orcamento}
        onChange={(e) => setOrcamento(e.target.value)}
      />

      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
        onClick={processarOrcamento}
        disabled={loading}
      >
        {loading ? "Processando..." : "Organizar Orçamento"}
      </button>

      {resultado.length > 0 && (
        <div className="w-full max-w-lg p-4 border rounded bg-white">
          <h2 className="font-bold mb-2">Orçamento Organizado (JSON):</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Quantidade</th>
                <th className="text-left p-2">Descrição</th>
                <th className="text-left p-2">Medida</th>
              </tr>
            </thead>
            <tbody>
              {resultado.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{item.quantidade}</td>
                  <td className="p-2">{item.descricao}</td>
                  <td className="p-2">{item.medida}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
