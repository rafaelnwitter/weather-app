import { useState } from "react";
import Select from "react-select";
import { useCidades } from "../hooks/useCidades";

export const SelectCidade = ({uf}: any, { onChange }: any) => {
  const { cidades, loading: loadingCidades } = useCidades({
    uf
  });
  const [selectedCity, setCity] = useState<string | null>(null);


  const cidadeOptions = cidades.map((cidade) => ({
    value: cidade.codigo_ibge,
    label: cidade.nome
  }));

  const selectedOptionCity = cidadeOptions.find(
    (e) => e.value === selectedCity
  );

  const handleCityUpdate = (event: any) => {
    setCity(event.value);
    console.log(event.label);
    const selectedCity = cidades.find((e) => e.codigo_ibge === event.value)?.nome;
    console.log("slec", selectedCity)

    onChange(selectedCity);
  };

  return (
    <Select
      isLoading={loadingCidades}
      loadingMessage={() => "Estamos carregando as cidades, aguarde ..."}
      isDisabled={loadingCidades || cidadeOptions.length === 0}
      placeholder="Selecione uma cidade"
      options={cidadeOptions}
      value={selectedOptionCity}
      onChange={handleCityUpdate}
    />
  );
};
