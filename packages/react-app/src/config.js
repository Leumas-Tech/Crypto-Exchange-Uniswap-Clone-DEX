import { Goerli } from "@usedapp/core";


export const ROUTER_ADDRESS = "ROUTER_ADDRESS";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "CHAIN_ID",
  },
};