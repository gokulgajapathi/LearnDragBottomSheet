export interface BottomSheetProps {
    activeHeight: number;
    children: React.ReactNode;
    backgroundColor?: string;
    backdropColor?: string;
}

export interface BottomSheetHandle {
    opensheet: () => void;
    closesheet: () => void;
}