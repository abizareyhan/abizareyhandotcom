interface ConfirmationDialogProps {
    url: string;
    onClose: () => void;
}

const ConfirmationDialog = ({ url, onClose }: ConfirmationDialogProps) => {
    return (
        <div className="flex w-full flex-col p-4">
            <p className="text-sm text-white/70">This link is taking you to the following website</p>
            <div className="mt-2 flex w-full flex-col rounded border border-white/10">
                <div className="divide-y divide-zinc-700 p-2 text-xs">
                    <span className="max-w-full flex-wrap break-words text-start text-white">{url}</span>
                </div>
            </div>
            <div className="mt-6 flex w-full justify-end space-x-2">
                <button
                    className="shadow-apple relative rounded-[5px] bg-[#007AFF] px-[7px] py-[3px] text-xs text-white"
                    onClick={() => {
                        onClose();
                        window.open(url, "_blank");
                    }}
                >
                    <span className="rounded-[5px]bg-gradient-to-b absolute inset-0 from-white to-transparent opacity-[.17]"></span>
                    Open Link
                </button>
                <button
                    className="shadow-apple relative rounded-[5px] bg-white px-[7px] py-[3px] text-xs text-black"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ConfirmationDialog;
