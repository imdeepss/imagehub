import React from 'react'

const ImageSkeleton = () => {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 animate-pulse">
            <div className="grid gap-4 animate-pulse">
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
            </div>
            <div className="grid gap-4 animate-pulse">
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
            </div>
            <div className="grid gap-4 animate-pulse">
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
            </div>
            <div className="grid gap-4 animate-pulse">
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
                <div>
                    <div className="h-auto max-w-full rounded-lg bg-gray-300" />
                </div>
            </div>
        </div>

    )
}

export default ImageSkeleton