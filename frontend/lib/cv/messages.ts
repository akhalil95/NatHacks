export type BackendMessage = {
  type: string;
  payload?: unknown;
};

export type MediapipeFrameResult = {
  landmarks?: unknown[];
  timestamp?: number;
};

export type CVWorkerResponse = {
  type: string;
  payload?: unknown;
};

export type OverlayMessage = {
  type: string;
  data?: unknown;
};