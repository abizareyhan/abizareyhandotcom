import { createContext, useContext } from "react";

export type DialogType = "about" | "blog-confirmation" | "linkedin-fonsmans" | "github" | "linkedin" | "certificate" | "image-preview";

type DialogContextType = {
    openDialog: (dialogType: DialogType, dialogData?: any) => void;
    closeDialog: () => void;
};

const DialogContext = createContext<DialogContextType>({
    openDialog: () => {},
    closeDialog: () => {},
});

export const useDialog = () => useContext(DialogContext);
export default DialogContext;
