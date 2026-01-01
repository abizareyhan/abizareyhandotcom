import Image from "next/image";

interface ImagePreviewDialogProps {
    imageUrl: string;
    imageAlt: string;
}

const ImagePreviewDialog = ({ imageUrl, imageAlt }: ImagePreviewDialogProps) => {
    return (
        <div className="flex items-center justify-center p-4">
            <Image src={imageUrl} alt={imageAlt} width={1200} height={800} className="max-h-[70vh] w-auto object-contain" />
        </div>
    );
};

export default ImagePreviewDialog;
