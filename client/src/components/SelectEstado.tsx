import { useState } from "react";
import Select from "react-select";
import { useEstados } from "../hooks/useEstados";

export const SelectEstado = ({ onChange }: any) => {
  const { estados } = useEstados();
  const [selectedEstado, setSelectedEstado] = useState<number | null>(null);
  const oi = estados.filter((estado) => estado.regiao.nome === "Centro-Oeste")
  const estadoOptions = oi.map((estado) => ({
    value: estado.id,
    label: estado.nome
  }));

  const selectedOptionEstado = estadoOptions.find(
    (e) => e.value === selectedEstado
  );

  const handleEstadoUpdate = (event: any) => {
    setSelectedEstado(event.value);
    console.log("event value estado", event.value);
    const selectedUf = estados.find((e) => e.id === event.value)?.sigla;
    console.log("event string estado", selectedUf);
    onChange(selectedUf);
  };

  return (
    <Select
      placeholder="Selecione um estado"
      options={estadoOptions}
      value={selectedOptionEstado}
      onChange={handleEstadoUpdate}
    />
  );
};
