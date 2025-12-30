import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
}

const ImageWithSkeleton = ({
    className,
    containerClassName,
    alt,
    ...props
}: ImageWithSkeletonProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            {!isLoaded && (
                <Skeleton className="absolute inset-0 w-full h-full" />
            )}
            <img
                {...props}
                alt={alt}
                className={cn(
                    "transition-opacity duration-500",
                    isLoaded ? "opacity-100" : "opacity-0",
                    className
                )}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
};

export default ImageWithSkeleton;
