const getLivePreviewHostByRegion = (region: string) => {
  switch (region) {
    case "US":
      return "rest-preview.contentstack.com";
    case "EU":
      return "eu-rest-preview.contentstack.com";
    case "AZURE_NA":
      return "azure-na-rest-preview.contentstack.com";
    case "AZURE_EU":
      return "azure-eu-rest-preview.contentstack.com";
    default:
      return "rest-preview.contentstack.com";
  }
};

const getHostByRegion = (region: string) => {
  switch (region) {
    case "US":
      return "app.contentstack.com";
    case "EU":
      return "eu-app.contentstack.com";
    case "AZURE_NA":
      return "azure-na-app.contentstack.com";
    case "AZURE_EU":
      return "azure-eu-app.contentstack.com";
    case "GCP_NA":
      return "gcp-na-api.contentstack.com";
    default:
      return "app.contentstack.com";
  }
};

export { getLivePreviewHostByRegion, getHostByRegion };

