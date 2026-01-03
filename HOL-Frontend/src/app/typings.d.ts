export {};
declare global {
  interface Window {
    appWindow?: {
      minimize(): void;
      toggleMaximize(): void;
      close(): void;
      isMaximized(): Promise<boolean>;
      onMaximizeChanged(cb: (m: boolean) => void): void;
      isElectron: boolean;
    };
  }
}
