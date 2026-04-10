declare module "./ContentContext" {
  import type { ReactNode } from "react";

  export type ContentContextValue = {
    content: any;
    updateSection: (section: string, data: any) => void;
    resetContent: () => void;
  };

  export function ContentProvider(props: { children: ReactNode }): ReactNode;
  export function useContent(): ContentContextValue;
}

declare module "../ContentContext" {
  import type { ReactNode } from "react";

  export type ContentContextValue = {
    content: any;
    updateSection: (section: string, data: any) => void;
    resetContent: () => void;
  };

  export function ContentProvider(props: { children: ReactNode }): ReactNode;
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
