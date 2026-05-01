'use client';
export default function ButtonGenevision(item: { title: string; onClick: () => void, className?: string }) {
    return (
        <button className={`${item.className || 'bg-[#C81A26] hover:bg-[#A0151F] hover:cursor-pointer text-white px-6 py-6 rounded-xl text-base'}`} onClick={item.onClick}>
            {item.title}
        </button>
    );
}