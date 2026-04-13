type ContentContextValue = {
  content: {
    general: { name: string };
    [key: string]: any;
  };
  updateSection: (section: string, data: any) => void;
  resetContent: () => void;
};

declare module "./ContentContext" {
  import type { ReactNode } from "react";

  export type { ContentContextValue };

  export function ContentProvider(props: { children: ReactNode }): ReactNode;
  export function useContent(): ContentContextValue;
}

declare module "../ContentContext" {
  import type { ReactNode } from "react";

  export type { ContentContextValue };

  export function ContentProvider(props: { children: ReactNode }): ReactNode;
  export function useContent(): ContentContextValue;
}

declare module "./hooks/useContent" {
  export type { ContentContextValue } from "./ContentContext";

  export function useContent(): ContentContextValue;
}

declare module "../hooks/useContent" {
  export type { ContentContextValue } from "../ContentContext";

  export function useContent(): ContentContextValue;
}

declare module "./Admin" {
  import type { ComponentType } from "react";

  const Admin: ComponentType<{ onClose: () => void }>;
  export default Admin;
}

declare module "./pages/*" {
  import type { ComponentType } from "react";

  const Page: ComponentType<any>;
  export default Page;
}
