import { useEffect, useState } from "react";
import axios from "axios";
export interface ICidade {
  nome: string;
  codigo_ibge: string;
}

export const useCidades = ( {uf}: any ) => {
  const [cidades, setCidades] = useState<ICidade[]>([]);
  const [loading, setLoading] = useState(false);
  const [cidade, setCidadae] = useState();


  useEffect(() => {
    if (!uf) return;

    setLoading(true);
    fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
      .then((response) => response.json())
      .then((data) => setCidades(data))
      .then(() => setLoading(false));
  }, [uf]);

  return {
    cidades,
    loading
  };
};
