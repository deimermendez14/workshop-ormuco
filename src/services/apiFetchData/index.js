import axios from "axios";

export const ListImages = async () => {
  return await axios.get("http://localhost:5000/api/glance/images");
};

export const ListNetworks = async () => {
  return await axios.get("http://localhost:5000/api/neutron/networks");
};

export const ListSegurityGroups = async () => {
  return await axios.get("http://localhost:5000/api/neutron/seguritys_groups");
};

export const ListKeyPairs = async () => {
  return await axios.get("http://localhost:5000/api/nova/keypairs");
};

export const ListFlavors = async () => {
  return await axios.get("http://localhost:5000/api/nova/flavors");
};

export const CreateInstance = async (values) => {
  const { name, image, flavor, network, keyPair, segurityGroup } = values;
  const server = {
    name: name,
    imageRef: image.id,
    flavorRef: flavor.id,
    network: [{ uuid: network.id }],
    key_name: keyPair.label,
    segurity_groups: [{ name: segurityGroup.label }],
  };

  const { data } = await axios.post(
    "http://localhost:5000/api/nova/create-instace",
    {
      server,
    }
  );
};
