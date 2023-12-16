const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

const namePrefix = "OyePaaji";
const description = "OyePaaji is a collection of 999 NFTs living on the Polygon blockchain. With over 50+ hand-drawn traits.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "OP",
  seller_fee_basis_points: 1000, 
  external_url: "https://himanshu-03.github.io/NFT-Forge-Website/",
  creators: [
    {
      address: "",  // Update your own wallet address
      share: 100,
    },
  ],
};

const layerConfigurations = 
[
  {
    growEditionSizeTo:100,
    layersOrder: [
      { name: "SHIRT" },
      { name: "HEAD" },
      { name: "FACE" },
      { name: "BEARD" },
      { name: "MASK" },
      { name: "SPECS" },
            ]
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1500,
  height: 1500,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  external_url: "https://himanshu-03.github.io/NFT-Forge-Website/",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC",
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
