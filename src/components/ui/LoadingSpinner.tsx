import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-10 h-10 text-accent animate-spin" />
                <p className="text-muted-foreground font-display font-medium text-sm animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
