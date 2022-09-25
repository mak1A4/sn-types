declare class DiscoveryPortProbe {
  Active: boolean;
  class: string;
  classificationPriority: number;
  conditional: boolean;
  Description: string;
  discoverCIs: boolean;
  Name: string;
  scanner: string;
  script: string;
  services: any[];
  sysID: string;
  triggersProbeID: string;
  constructor(source: any);
}
export { DiscoveryPortProbe };
