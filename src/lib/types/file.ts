export interface File {
    id: string;
    name: string;
    iconPath: string;
    folder: string[];
    metadata?: {
        description?: string;
        startDate?: Date;
        endDate?: Date;
        thumbnail?: string;
        tags?: string[];
    };
    actions?: {
        title: string;
        enabled: boolean;
        onClick: () => void;
    }[];
}
