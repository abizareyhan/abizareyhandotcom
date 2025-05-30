export const runtime = "edge";

export default function NotFound() {
    return (
        <>
            <div className="w-full space-y-4 overflow-y-auto p-4">
                <div className="flex h-full items-center justify-center text-white/40">Sorry, the page you are looking for does not exist.</div>
            </div>
        </>
    );
}
