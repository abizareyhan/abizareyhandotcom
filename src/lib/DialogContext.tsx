import { createContext, useContext } from "react";

export type DialogType = "about" | "blog-confirmation" | "linkedin-fonsmans" | "github" | "linkedin" | "certificate" | "image-preview";

export interface ImagePreviewData {
    url: string;
    alt: string;
}

export interface ConfirmationData {
    url: string;
}

export type DialogData = ImagePreviewData | ConfirmationData | null;

type DialogContextType = {
    openDialog: (dialogType: DialogType, dialogData?: DialogData) => void;
    closeDialog: () => void;
};

const DialogContext = createContext<DialogContextType>({
    openDialog: () => {},
    closeDialog: () => {},
});

export const useDialog = () => useContext(DialogContext);
export default DialogContext;

