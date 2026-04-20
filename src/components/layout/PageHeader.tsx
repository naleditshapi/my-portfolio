interface PageHeaderProps {
    label?: string;
    title: string;
    subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
    return (
        <div className="pt-28 pb-14 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                {label && (
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">{label}</p>
                )}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
                {subtitle && (
                    <p className="text-gray-400 mt-4 text-base max-w-xl leading-relaxed">{subtitle}</p>
                )}
            </div>
        </div>
    );
}
