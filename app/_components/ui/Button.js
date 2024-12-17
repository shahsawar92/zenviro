"use client"
import { Briefcase } from 'lucide-react';
import clsx from 'clsx'

export function GradientButton({ variant = "default", children, className, ...props }) {
    return (
        <button
            className={clsx(
                "group relative flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-white transition-all hover:scale-105 hover:shadow-lg",
                "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
                "before:absolute before:inset-0 before:rounded-full before:bg-black/10 before:opacity-0 before:transition-opacity hover:before:opacity-100",
                className
            )}
            {...props}
        >
            {variant === "work" && <Briefcase className="h-4 w-4" />}
            {variant === "zenviro" && (
                <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
                </svg>
            )}
            <span className="font-medium">{children}</span>
        </button>
    )
}

