import { useState } from "react";
import Select from "react-select";
import { useCidades } from "../hooks/useCidades";

export const SelectCidade = ({ onChange, uf }: any) => {
  const { cidades, loading: loadingCidades } = useCidades({
    uf
  });
  const [selectedCity, setSelectedCity] = useState("");


  const cidadeOptions = cidades.map((cidade) => ({
    value: cidade.codigo_ibge,
    label: cidade.nome
  }));

  const selectedOptionCity = cidadeOptions.find(
    (e) => e.value === selectedCity
  );

  const handleCityUpdate = (event: any) => {
    setSelectedCity(event.value);
    console.log("event value city", event.value);
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
