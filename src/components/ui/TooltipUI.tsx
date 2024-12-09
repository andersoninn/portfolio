import { Tooltip, Button } from "@nextui-org/react";

export default function TooltipUI({ children, description }: { children: React.ReactNode, description: String }) {
    return (
        <Tooltip content={description}>
            {children}
        </Tooltip>
    );
}