import {
  ListFlavors,
  ListImages,
  ListKeyPairs,
  ListNetworks,
  ListSegurityGroups,
} from "../services/apiFetchData";

import React from "react";

export const useFethData = () => {
  const [data, setData] = React.useState({
    images: [],
    networks: [],
    segurityGroups: [],
    keyPairs: [],
    flavors: [],
  });

  const ApiListAllOptions = async () => {
    const { data: images } = await ListImages();
    const { data: networks } = await ListNetworks();
    const { data: segurityGroups } = await ListSegurityGroups();
    const { data: keyPairs } = await ListKeyPairs();
    const { data: flavors } = await ListFlavors();

    setData((prevState) => ({
      ...prevState,
      images: images,
      networks: networks,
      segurityGroups: segurityGroups,
      keyPairs: keyPairs,
      flavors: flavors,
    }));
  };

  React.useEffect(() => {
    ApiListAllOptions();
  }, []);

  return { data };
};
